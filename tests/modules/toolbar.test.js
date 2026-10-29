/**
 * Tests for the toolbar `columns` dropdown labels.
 *
 * Covers the escape behavior introduced for #8484:
 * the show-columns dropdown must apply the same
 * `escape` + `escapeTitle` logic as the header title,
 * while `switchableLabel` stays as user-defined HTML.
 */
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest"
import HeaderModule from "@/modules/header.js"
import ToolbarModule from "@/modules/toolbar.js"

// Self-referencing chainable jQuery stub
function makeChainable() {
  const c = {}

  for (const m of [
    "find",
    "off",
    "on",
    "prop",
    "appendTo",
    "append",
    "addClass",
    "css",
    "show",
    "hide",
    "each",
    "data",
    "val",
    "is",
    "click",
  ]) {
    c[m] = vi.fn(() => c)
  }
  c.length = 0
  return c
}

const columnsFixture = [
  { field: "id", title: "<span>ID</span>", visible: true, switchable: true },
  {
    field: "name",
    title: "Name",
    visible: true,
    switchable: true,
    switchableLabel: "<b>Custom</b>",
  },
]

function createToolbarContext({ escape, escapeTitle } = {}) {
  const appended = []
  const $keepOpen = makeChainable()

  const $toolbar = makeChainable()

  $toolbar.find = vi.fn((selector) => {
    if (selector === ".bs-bars") {
      return { children: () => ({ length: 0 }) }
    }
    return $keepOpen
  })
  $toolbar.html = vi.fn()
  $toolbar.append = vi.fn((arg) => {
    appended.push(arg)
  })

  const ctx = {
    options: {
      buttonsAlign: "right",
      toolbarAlign: "left",
      searchAlign: "right",
      iconSize: "",
      iconsPrefix: "bi",
      icons: {},
      buttonsAttributeTitle: "title",
      buttonsOrder: [
        "paginationSwitch",
        "refresh",
        "toggle",
        "fullscreen",
        "columns",
      ],
      showButtonIcons: false,
      showButtonText: false,
      showPaginationSwitch: false,
      showRefresh: false,
      showToggle: false,
      showFullscreen: false,
      showColumns: true,
      showColumnsSearch: false,
      showColumnsToggleAll: false,
      cardView: false,
      pagination: false,
      escape,
      escapeTitle,
      minimumCountColumns: 1,
      search: false,
      searchSelector: undefined,
      searchTimeOut: 500,
      searchOnEnterKey: false,
      formatPaginationSwitch: () => "pagination",
      formatPaginationSwitchUp: () => "up",
      formatPaginationSwitchDown: () => "down",
      formatRefresh: () => "refresh",
      formatToggleOn: () => "on",
      formatToggleOff: () => "off",
      formatFullscreen: () => "fullscreen",
      formatColumns: () => "columns",
      formatColumnsToggleAll: () => "all",
      formatSearch: () => "search",
      formatClearSearch: () => "clear",
    },
    columns: columnsFixture.map((column) => ({ ...column })),
    isSelectionColumn: () => false,
    getVisibleColumns: () => [],
    constants: {
      classes: {
        buttonsGroup: "btn-group",
        buttonsDropdown: "dropdown-menu",
        pull: "float-end",
        input: "form-control",
        inputPrefix: "form-control-",
      },
      buttonsClass: "btn btn-secondary",
      dataToggle: "data-bs-toggle",
      html: {
        icon: '<i class="%s %s"></i>',
        toolbarDropdown: ['<div class="dropdown-menu">', "</div>"],
        toolbarDropdownItem: "<li>%s</li>",
        toolbarDropdownSeparator: '<li class="dropdown-separator"></li>',
        dropdownCaret: '<span class="caret"></span>',
        searchButton: "<button>%s%s%s</button>",
        searchClearButton: "<button>%s%s%s</button>",
        inputGroup: '<div class="input-group">%s%s</div>',
      },
    },
    buttons: {},
    showToolbar: false,
    showSearchClearButton: false,
    $toolbar,
    togglePagination: vi.fn(),
    refresh: vi.fn(),
    toggleView: vi.fn(),
    toggleFullscreen: vi.fn(),
    trigger: vi.fn(),
    _toggleColumns: vi.fn(),
    _toggleAllColumns: vi.fn(),
  }

  return { ctx, appended }
}

describe("ToolbarModule columns dropdown labels (#8484)", () => {
  let original$

  beforeEach(() => {
    // @ts-expect-error - testing purposes
    original$ = global.$
    global.$ = vi.fn(() => makeChainable())
  })

  afterEach(() => {
    global.$ = original$
    vi.restoreAllMocks()
  })

  function renderDropdown(options) {
    const { ctx, appended } = createToolbarContext(options)

    Object.assign(ctx, ToolbarModule)

    ctx.initToolbar()
    expect(appended).toHaveLength(1)

    return appended[0]
  }

  it("escapes HTML titles when escape and escapeTitle are enabled", () => {
    const html = renderDropdown({ escape: true, escapeTitle: true })

    expect(html).toContain("<span>&lt;span&gt;ID&lt;/span&gt;</span>")
    expect(html).not.toContain("<span><span>ID</span></span>")
    expect(html).toContain('data-field="id"')
    expect(html).toContain('data-field="name"')
  })

  it("keeps HTML titles when escape is disabled", () => {
    const html = renderDropdown({ escape: false, escapeTitle: true })

    expect(html).toContain("<span><span>ID</span></span>")
    expect(html).not.toContain("&lt;span&gt;ID&lt;/span&gt;")
  })

  it("keeps HTML titles when escapeTitle is disabled", () => {
    const html = renderDropdown({ escape: true, escapeTitle: false })

    expect(html).toContain("<span><span>ID</span></span>")
    expect(html).not.toContain("&lt;span&gt;ID&lt;/span&gt;")
  })

  it("never escapes switchableLabel even with escape enabled", () => {
    const html = renderDropdown({ escape: true, escapeTitle: true })

    expect(html).toContain("<span><b>Custom</b></span>")
    expect(html).not.toContain("&lt;b&gt;Custom&lt;/b&gt;")
  })

  it("does not double-escape an updated title after a toolbar rebuild", () => {
    const { ctx, appended } = createToolbarContext({
      escape: true,
      escapeTitle: true,
    })

    Object.assign(ctx, ToolbarModule, HeaderModule)

    // Stub the header DOM update path: `$header.find('th[data-field]').each(cb)`
    // runs `cb` once, and `$(el)` resolves the matching `th` for the `id` field.
    const innerEl = { html: vi.fn() }
    const $header = makeChainable()

    $header.find = vi.fn(() => ({ each: (cb) => cb(0, {}) }))
    ctx.$header = $header
    ctx.fieldsColumnsIndex = { id: 0 }
    ctx.resetView = vi.fn()
    global.$ = vi.fn((arg) => {
      if (arg === innerEl) {
        return { html: innerEl.html }
      }
      const c = makeChainable()

      c.data = vi.fn(() => "id")
      c.find = vi.fn(() => [innerEl])
      return c
    })

    ctx.updateColumnTitle({ field: "id", title: "A & B" })

    // The stored title stays raw ...
    expect(ctx.columns[0].title).toBe("A & B")
    // ... while the header cell is escaped at the rendering boundary
    expect(innerEl.html).toHaveBeenCalledWith("A &amp; B")

    // Rebuilding the toolbar (e.g. via updateFormatText) escapes the label exactly once
    appended.length = 0
    ctx.initToolbar()
    expect(appended[0]).toContain("A &amp; B")
    expect(appended[0]).not.toContain("&amp;amp;")
  })
})
