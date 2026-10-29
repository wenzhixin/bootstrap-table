import { afterEach, describe, expect, it, vi } from "vitest"

async function loadFilterControlPrototype() {
  if (!globalThis.$) {
    const { default: jq } = await import("jquery")

    globalThis.$ = jq
    globalThis.jQuery = jq
  }
  await import("../../src/bootstrap-table.js")
  await import("../../src/extensions/filter-control/bootstrap-table-filter-control.js")

  const $ = globalThis.jQuery || globalThis.$

  expect($?.BootstrapTable).toBeTruthy()

  return {
    $,
    BootstrapTable: $.BootstrapTable,
  }
}

describe("filter-control issue #8246", () => {
  describe("runtime regression guards", () => {
    it("triggerSearch() only attaches isInitial event data when requested", async () => {
      const { $ } = await loadFilterControlPrototype()

      document.body.innerHTML = '<table id="ts-test"></table>'
      const $table = $("#ts-test")

      $table.bootstrapTable({
        filterControl: true,
        searchTimeOut: 0,
        columns: [{ field: "a", title: "A", filterControl: "input" }],
        data: [{ a: "x" }],
      })

      const triggerSpy = vi.spyOn($.fn, "trigger")

      try {
        // triggerSearch(true) — every keyup/change must carry { isInitial: true }
        triggerSpy.mockClear()
        $table.bootstrapTable("triggerSearch", true)

        const initialEvents = triggerSpy.mock.calls.filter(
          (c) => c[0] === "keyup" || c[0] === "change",
        )

        expect(initialEvents.length).toBeGreaterThan(0)
        initialEvents.forEach((call) => {
          expect(call).toHaveLength(2)
          expect(call[1]).toEqual({ keyCode: 13, isInitial: true })
        })

        // triggerSearch() (no args) — carries keyCode 13 so the search runs
        // under searchOnEnterKey, but without the isInitial flag.
        triggerSpy.mockClear()
        $table.bootstrapTable("triggerSearch")

        const userEvents = triggerSpy.mock.calls.filter(
          (c) => c[0] === "keyup" || c[0] === "change",
        )

        expect(userEvents.length).toBeGreaterThan(0)
        userEvents.forEach((call) => {
          expect(call).toHaveLength(2)
          expect(call[1]).toEqual({ keyCode: 13 })
        })

        // Let the deferred onColumnSearch callbacks drain before destroy so
        // no pending timer fires against a destroyed instance.
        await new Promise((resolve) => setTimeout(resolve, 20))
      } finally {
        triggerSpy.mockRestore()
        if ($table.data("bootstrap.table")) {
          $table.bootstrapTable("destroy")
        }
        document.body.innerHTML = ""
      }
    })

    it("only the initial onColumnSearch call carries isInitial: true; user input does not", async () => {
      const { $, BootstrapTable } = await loadFilterControlPrototype()
      const onColumnSearchSpy = vi.spyOn(
        BootstrapTable.prototype,
        "onColumnSearch",
      )

      document.body.innerHTML = '<table id="issue-8246-table"></table>'
      const $table = $("#issue-8246-table")

      try {
        $table.bootstrapTable({
          search: true,
          filterControl: true,
          searchTimeOut: 0,
          columns: [{ field: "name", title: "Name", filterControl: "input" }],
          data: [{ name: "alpha" }, { name: "beta" }],
        })

        // Let the deferred onColumnSearch calls fired by the initial
        // triggerSearch(true) drain.
        await new Promise((resolve) => setTimeout(resolve, 20))

        const initialCalls = onColumnSearchSpy.mock.calls.slice()
        const initialWithFlag = initialCalls.filter(
          (c) => c[0]?.isInitial === true,
        )

        expect(initialWithFlag.length).toBeGreaterThan(0)

        // Now simulate a user keystroke and assert no subsequent
        // onColumnSearch is flagged as initial.
        onColumnSearchSpy.mockClear()
        const $input = $table
          .closest(".bootstrap-table")
          .find("thead input")
          .first()

        expect($input.length).toBe(1)

        $input.val("alp")
        $input.trigger("keyup")

        await new Promise((resolve) => setTimeout(resolve, 20))

        const userCalls = onColumnSearchSpy.mock.calls.slice()

        expect(userCalls.length).toBeGreaterThan(0)
        userCalls.forEach((call) => {
          expect(call[0]?.isInitial).not.toBe(true)
        })
      } finally {
        onColumnSearchSpy.mockRestore()
        if ($table.data("bootstrap.table")) {
          $table.bootstrapTable("destroy")
        }
        document.body.innerHTML = ""
      }
    })

    it("sticky-header onColumnSearch override forwards isInitial (#8354 review)", async () => {
      await loadFilterControlPrototype()

      // Capture the filter-control prototype before sticky-header wraps it
      // with another subclass, then load sticky-header on top of the chain.
      const filterControlProto = globalThis.$.BootstrapTable.prototype

      await import("../../src/extensions/sticky-header/bootstrap-table-sticky-header.js")

      const onColumnSearchSpy = vi.spyOn(filterControlProto, "onColumnSearch")

      document.body.innerHTML = '<table id="sticky-combined"></table>'
      const $table = $("#sticky-combined")

      try {
        $table.bootstrapTable({
          filterControl: true,
          stickyHeader: true,
          searchTimeOut: 0,
          columns: [{ field: "name", title: "Name", filterControl: "input" }],
          data: [{ name: "alpha" }, { name: "beta" }],
        })

        await new Promise((resolve) => setTimeout(resolve, 20))

        // The sticky-header override must pass the event data through to
        // the filter-control implementation instead of dropping isInitial,
        // otherwise the cookie-restored pageNumber is reset again (#8246).
        const forwarded = onColumnSearchSpy.mock.calls.filter(
          (c) => c[0]?.isInitial === true,
        )

        expect(forwarded.length).toBeGreaterThan(0)
      } finally {
        onColumnSearchSpy.mockRestore()
        if ($table.data("bootstrap.table")) {
          $table.bootstrapTable("destroy")
        }
        document.body.innerHTML = ""
      }
    })
  })

  describe("isInitialRender truth table", () => {
    const computeIsInitialRender = (initialized, isInitial) =>
      !initialized || isInitial === true

    it("treats pre-initialization as initial render", () => {
      expect(computeIsInitialRender(false, false)).toBe(true)
      expect(computeIsInitialRender(false, undefined)).toBe(true)
    })

    it("treats the post-init triggerSearch(true) deferred call as initial render (the #8246 fix)", () => {
      expect(computeIsInitialRender(true, true)).toBe(true)
    })

    it("treats user-initiated searches as not initial", () => {
      expect(computeIsInitialRender(true, false)).toBe(false)
      expect(computeIsInitialRender(true, undefined)).toBe(false)
    })

    it("only treats explicit isInitial === true as initial (defensive)", () => {
      expect(computeIsInitialRender(true, "yes")).toBe(false)
      expect(computeIsInitialRender(true, 1)).toBe(false)
    })
  })

  describe("onColumnSearch effect simulation", () => {
    function simulateOnColumnSearch(state) {
      const ctx = {
        _initialized: state._initialized,
        _filterControlValuesLoaded: state._filterControlValuesLoaded ?? false,
        options: {
          cookie: state.cookie,
          pageNumber: state.pageNumber,
        },
        onSearch: vi.fn(),
      }

      const isInitialRender = !ctx._initialized || state.isInitial === true

      if (!ctx.options.cookie) {
        if (!isInitialRender) {
          ctx.options.pageNumber = 1
        }
      } else {
        ctx._filterControlValuesLoaded = true
      }

      ctx.onSearch(
        { currentTarget: null, firedByInitSearchText: isInitialRender },
        false,
      )
      return ctx
    }

    it("issue #8246: cookie-restored pageNumber survives the deferred initial-render call", () => {
      const ctx = simulateOnColumnSearch({
        _initialized: true,
        isInitial: true,
        cookie: true,
        pageNumber: 5,
      })

      expect(ctx.options.pageNumber).toBe(5)
      expect(ctx._filterControlValuesLoaded).toBe(true)
      expect(ctx.onSearch).toHaveBeenCalledWith(
        expect.objectContaining({ firedByInitSearchText: true }),
        false,
      )
    })

    it("user-initiated cookie+filter search does NOT reset pageNumber inside filter-control, but signals core onSearch to reset", () => {
      const ctx = simulateOnColumnSearch({
        _initialized: true,
        isInitial: false,
        cookie: true,
        pageNumber: 5,
      })

      expect(ctx.options.pageNumber).toBe(5)
      expect(ctx._filterControlValuesLoaded).toBe(true)
      expect(ctx.onSearch).toHaveBeenCalledWith(
        expect.objectContaining({ firedByInitSearchText: false }),
        false,
      )
    })

    it("non-cookie user search resets pageNumber to 1", () => {
      const ctx = simulateOnColumnSearch({
        _initialized: true,
        isInitial: false,
        cookie: false,
        pageNumber: 5,
      })

      expect(ctx.options.pageNumber).toBe(1)
      expect(ctx.onSearch).toHaveBeenCalledWith(
        expect.objectContaining({ firedByInitSearchText: false }),
        false,
      )
    })

    it("non-cookie initial render does not reset pageNumber", () => {
      const ctx = simulateOnColumnSearch({
        _initialized: false,
        isInitial: false,
        cookie: false,
        pageNumber: 5,
      })

      expect(ctx.options.pageNumber).toBe(5)
      expect(ctx.onSearch).toHaveBeenCalledWith(
        expect.objectContaining({ firedByInitSearchText: true }),
        false,
      )
    })
  })

  describe("cookie pageNumber persistence (the full reload-vs-filter chain)", () => {
    function simulateOnColumnSearchToCookie(state) {
      const setCookie = vi.fn()
      const ctx = {
        _initialized: state._initialized,
        _filterControlValuesLoaded: false,
        searchText: "",
        options: {
          cookie: true,
          pageNumber: state.pageNumber,
          search: false,
        },
      }

      // -- filter-control.onColumnSearch (the cookie branch) --
      const isInitialRender = !ctx._initialized || state.isInitial === true

      if (!ctx.options.cookie) {
        if (!isInitialRender) {
          ctx.options.pageNumber = 1
        }
      } else {
        ctx._filterControlValuesLoaded = true
      }

      // -- core.onSearch — the actual gate that historically resets pageNumber --
      const firedByInitSearchText = isInitialRender

      if (!firedByInitSearchText) {
        ctx.options.pageNumber = 1
      }

      // -- cookie.onSearch override saves whatever options.pageNumber is now --
      setCookie("bs.table.pageNumber", ctx.options.pageNumber)

      return { ctx, setCookie }
    }

    it("reload on page 2 keeps the cookie at 2 (issue #8246)", () => {
      const { ctx, setCookie } = simulateOnColumnSearchToCookie({
        _initialized: true,
        isInitial: true,
        pageNumber: 2,
      })

      expect(ctx.options.pageNumber).toBe(2)
      expect(setCookie).toHaveBeenCalledWith("bs.table.pageNumber", 2)
      expect(setCookie).not.toHaveBeenCalledWith("bs.table.pageNumber", 1)
    })

    it("user filter on page 2 saves 1 to the cookie (expected behaviour)", () => {
      const { ctx, setCookie } = simulateOnColumnSearchToCookie({
        _initialized: true,
        isInitial: false,
        pageNumber: 2,
      })

      expect(ctx.options.pageNumber).toBe(1)
      expect(setCookie).toHaveBeenCalledWith("bs.table.pageNumber", 1)
    })

    it("reload on page 5 keeps the cookie at 5 (no off-by-one or hardcoded page)", () => {
      const { ctx, setCookie } = simulateOnColumnSearchToCookie({
        _initialized: true,
        isInitial: true,
        pageNumber: 5,
      })

      expect(ctx.options.pageNumber).toBe(5)
      expect(setCookie).toHaveBeenCalledWith("bs.table.pageNumber", 5)
    })

    it("reload on page 1 keeps the cookie at 1 (idempotent on first page)", () => {
      const { ctx, setCookie } = simulateOnColumnSearchToCookie({
        _initialized: true,
        isInitial: true,
        pageNumber: 1,
      })

      expect(ctx.options.pageNumber).toBe(1)
      expect(setCookie).toHaveBeenCalledWith("bs.table.pageNumber", 1)
    })

    it("two consecutive reloads each preserve their pageNumber (#8246 second-F5 regression)", () => {
      // First reload from cookie = 2
      const first = simulateOnColumnSearchToCookie({
        _initialized: true,
        isInitial: true,
        pageNumber: 2,
      })

      expect(first.ctx.options.pageNumber).toBe(2)
      expect(first.setCookie).toHaveBeenLastCalledWith("bs.table.pageNumber", 2)

      // Second reload reads what the first reload saved
      const cookieAfterFirst = first.setCookie.mock.calls.at(-1)[1]
      const second = simulateOnColumnSearchToCookie({
        _initialized: true,
        isInitial: true,
        pageNumber: cookieAfterFirst,
      })

      expect(second.ctx.options.pageNumber).toBe(2)
      expect(second.setCookie).toHaveBeenLastCalledWith(
        "bs.table.pageNumber",
        2,
      )
    })
  })

  describe("cookie + filter-control integration (real extension chain)", () => {
    // Loads the cookie extension on top of filter-control, building the
    // cookie -> filter-control -> core prototype chain, so the deferred
    // onColumnSearch runs through the real Cookie.onSearch override that
    // persists bs.table.pageNumber.
    async function loadCookieOnTopOfFilterControl() {
      const { $ } = await loadFilterControlPrototype()

      await import("../../src/extensions/cookie/bootstrap-table-cookie.js")

      return $
    }

    function readRawCookie(cookieIdTable, cookieName) {
      const value = `; ${document.cookie}`
      const parts = value.split(`; ${cookieIdTable}.${cookieName}=`)

      return parts.length === 2
        ? decodeURIComponent(parts.pop().split(";").shift())
        : null
    }

    function clearRawCookie(cookieIdTable, cookieName) {
      // Clear both the scoped cookie the extension writes and any leftover
      // preset carrying path=/.
      document.cookie = `${cookieIdTable}.${cookieName}=; expires=Thu, 01 Jan 1970 00:00:00 GMT`
      document.cookie = `${cookieIdTable}.${cookieName}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/`
    }

    async function initCookieFilterControlTable($, cookieIdTable) {
      document.body.innerHTML = `<table id="${cookieIdTable}-table"></table>`
      const $table = $(`#${cookieIdTable}-table`)

      $table.bootstrapTable({
        cookie: true,
        cookieIdTable,
        filterControl: true,
        pagination: true,
        pageSize: 5,
        searchTimeOut: 0,
        columns: [{ field: "name", title: "Name", filterControl: "input" }],
        data: Array.from({ length: 10 }, (_, i) => ({ name: `row-${i + 1}` })),
      })

      // Let the deferred initial triggerSearch(true) -> onColumnSearch ->
      // Cookie.onSearch chain drain.
      await new Promise((resolve) => setTimeout(resolve, 50))

      return $table
    }

    afterEach(() => {
      for (const cookieIdTable of [
        "it8246-reload",
        "it8246-user",
        "it8246-race",
      ]) {
        clearRawCookie(cookieIdTable, "bs.table.pageNumber")
        clearRawCookie(cookieIdTable, "bs.table.filterControl")
      }
      document.body.innerHTML = ""
    })

    it("issue #8246: reload on cookie-restored page 2 keeps the page and persists 2", async () => {
      const $ = await loadCookieOnTopOfFilterControl()

      // Simulate a reload while the user is on page 2: the cookie storage
      // already holds pageNumber = 2 before the table initializes. No path
      // attribute, matching what the extension itself writes.
      document.cookie = "it8246-reload.bs.table.pageNumber=2"

      const $table = await initCookieFilterControlTable($, "it8246-reload")

      const options = $table.bootstrapTable("getOptions")

      // The deferred initial filter search must not reset the page...
      expect(options.pageNumber).toBe(2)
      // ...and must not persist a reset page number back to the cookie.
      expect(readRawCookie("it8246-reload", "bs.table.pageNumber")).toBe("2")
      expect($table.bootstrapTable("getCookies").pageNumber).toBe("2")

      $table.bootstrapTable("destroy")
    })

    it("a user filter search on page 2 resets to page 1 and persists 1 (expected behaviour)", async () => {
      const $ = await loadCookieOnTopOfFilterControl()

      document.cookie = "it8246-user.bs.table.pageNumber=2"

      const $table = await initCookieFilterControlTable($, "it8246-user")

      expect($table.bootstrapTable("getOptions").pageNumber).toBe(2)

      // Simulate a user typing a filter after the initial render.
      const $input = $table
        .closest(".bootstrap-table")
        .find("thead input")
        .first()

      expect($input.length).toBe(1)

      $input.val("row-1")
      $input.trigger("keyup")

      await new Promise((resolve) => setTimeout(resolve, 50))

      const options = $table.bootstrapTable("getOptions")

      // A user-initiated search still resets to the first page...
      expect(options.pageNumber).toBe(1)
      // ...and the reset is persisted to the cookie storage.
      expect(readRawCookie("it8246-user", "bs.table.pageNumber")).toBe("1")

      $table.bootstrapTable("destroy")
    })

    it("saved filter cookies are restored when searchTimeOut < 250ms (race guard)", async () => {
      const $ = await loadCookieOnTopOfFilterControl()

      // Simulate a reload with a saved column filter while searchTimeOut
      // (0ms) makes the deferred initial onColumnSearch run before the
      // cookie extension's 250ms initCookieFilters restore timer.
      document.cookie = `it8246-race.bs.table.filterControl=${encodeURIComponent(JSON.stringify([{ field: "name", text: "row-9" }]))}`

      const $table = await initCookieFilterControlTable($, "it8246-race")

      // Wait past the 250ms initCookieFilters timer.
      await new Promise((resolve) => setTimeout(resolve, 350))

      const $input = $table
        .closest(".bootstrap-table")
        .find("thead input")
        .first()

      // The saved filter must be restored into the control...
      expect($input.val()).toBe("row-9")
      // ...and applied to the data (only row-9 of row-1..row-10 matches).
      expect($table.find("tbody tr").length).toBe(1)

      $table.bootstrapTable("destroy")
    })
  })
})
