/**
 * @author doug-the-guy
 * @update zhixin wen <wenzhixin2010@gmail.com>
 *
 * Bootstrap Table Pipeline
 * -----------------------
 *
 * This plugin enables client side data caching for server side requests which will
 * eliminate the need to issue a new request every page change. This will allow
 * for a performance balance for a large data set between returning all data at once
 * (client side paging) and a new server side request (server side paging).
 *
 * There are two new options:
 *  - usePipeline: enables this feature
 *  - pipelineSize: the size of each cache window
 *
 * The size of the pipeline must be evenly divisible by the current page size. This is
 * assured by rounding up to the nearest evenly divisible value. For example, if
 * the pipeline size is 4990 and the current page size is 25, then pipeline size will
 * be dynamically set to 5000.
 *
 * The cache windows are computed based on the pipeline size and the total number of rows
 * returned by the server side query. For example, with pipeline size 500 and total rows
 * 1300, the cache windows will be:
 *
 *  [{'lower': 0, 'upper': 499}, {'lower': 500, 'upper': 999}, {'lower': 1000, 'upper': 1499}]
 *
 * Using the limit (i.e. the pipelineSize) and offset parameters, the server side request
 * **MUST** return only the data in the requested cache window **AND** the total number of rows.
 * To wit, the server side code must use the offset and limit parameters to prepare the response
 * data.
 *
 * On a page change, the new offset is checked if it is within the current cache window. If so,
 * the requested page data is returned from the cached data set. Otherwise, a new server side
 * request will be issued for the new cache window.
 *
 * The current cached data is only invalidated on these events:
 *  * sorting
 *  * searching
 *  * page size change
 *  * page change moves into a new cache window
 *
 * There are two new events:
 *  - cached-data-hit.bs.table: issued when cached data is used on a page change
 *  - cached-data-reset.bs.table: issued when the cached data is invalidated and a
 *      new server side request is issued
 *
 **/

const Utils = $.fn.bootstrapTable.utils

Object.assign($.fn.bootstrapTable.defaults, {
  usePipeline: false,
  pipelineSize: 1000,
  // eslint-disable-next-line no-unused-vars
  onCachedDataHit (data) {
    return false
  },
  // eslint-disable-next-line no-unused-vars
  onCachedDataReset (data) {
    return false
  }
})

Object.assign($.fn.bootstrapTable.events, {
  'cached-data-hit.bs.table': 'onCachedDataHit',
  'cached-data-reset.bs.table': 'onCachedDataReset'
})

$.BootstrapTable = class extends $.BootstrapTable {
  // needs to be called before initServer
  init (...args) {
    if (this.options.usePipeline) {
      this.initPipeline()
    }
    super.init(...args)
  }

  initPipeline () {
    this.cacheRequestJSON = {}
    this.cacheWindows = []
    this.currWindow = 0
    this.resetCache = true
  }

  // force a cache reset on search
  onSearch (...args) {
    if (this.options.usePipeline) {
      this.resetCache = true
    }
    super.onSearch(...args)
  }

  // force a cache reset on sort
  onSort (...args) {
    if (this.options.usePipeline) {
      this.resetCache = true
    }
    super.onSort(...args)
  }

  // rebuild cache window on page size change
  onPageListChange (event) {
    const target = $(event.currentTarget)
    const newPageSize = parseInt(target.text(), 10)

    this.options.pipelineSize = this.calculatePipelineSize(this.options.pipelineSize, newPageSize)
    this.resetCache = true
    super.onPageListChange(event)
  }

  // calculate pipeline size by rounding up to
  // the nearest value evenly divisible by the pageSize
  calculatePipelineSize (pipelineSize, pageSize) {
    if (pageSize === 0) {
      return 0
    }
    return Math.ceil(pipelineSize / pageSize) * pageSize
  }

  // set cache windows based on the total number of rows returned
  // by server side request and the pipelineSize
  setCacheWindows () {
    this.cacheWindows = []

    for (let i = 0; i <= this.options.totalRows / this.options.pipelineSize; i++) {
      const lower = i * this.options.pipelineSize

      this.cacheWindows[i] = { lower, upper: lower + this.options.pipelineSize - 1 }
    }
  }

  // set the current cache window index, based on where the current offset falls
  setCurrWindow (offset) {
    this.currWindow = 0

    for (let i = 0; i < this.cacheWindows.length; i++) {
      if (this.cacheWindows[i].lower <= offset && offset <= this.cacheWindows[i].upper) {
        this.currWindow = i
        break
      }
    }
  }

  // draw rows from the cache using offset and limit
  drawFromCache (offset, limit) {
    const res = Utils.extend(true, {}, this.cacheRequestJSON)
    const drawStart = offset - this.cacheWindows[this.currWindow].lower
    const drawEnd = drawStart + limit

    res.rows = res.rows.slice(drawStart, drawEnd)
    return res
  }

  /*
   * determine if requested data is in cache (on paging) or if
   * a new ajax request needs to be issued (sorting, searching, paging
   * moving outside of cached data, page size change)
   * initial version of this extension will entirely override base initServer
   */
  initServer (silent, query, url) {
    if (!this.options.usePipeline) {
      return super.initServer(silent, query, url)
    }

    let useAjax = true
    const params = {}

    if (
      this.options.queryParamsType === 'limit' &&
      this.options.pagination &&
      this.options.sidePagination === 'server'
    ) {
      // same as parent initServer: params.offset
      params.offset = this.options.pageSize === this.options.formatAllRows() ?
        0 : this.options.pageSize * (this.options.pageNumber - 1)
      params.limit = this.options.pageSize

      // if cacheWindows is empty, this is the initial request
      if (!this.cacheWindows.length) {
        useAjax = true
        params.drawOffset = params.offset
        // cache exists: determine if the page request is entirely within the current cached window
      } else {
        const w = this.cacheWindows[this.currWindow]

        // case 1: reset cache but stay within current window (e.g. column sort)
        // case 2: move outside of the current window (e.g. search or paging)
        //  since each cache window is aligned with the current page size
        //  checking if params.offset is outside the current window is sufficient.
        //  need to re-query for preceding or succeeding cache window
        //  also handle case
        if (this.resetCache || (params.offset < w.lower || params.offset > w.upper)) {
          useAjax = true
          this.setCurrWindow(params.offset)
          // store the relative offset for drawing the page data afterwards
          params.drawOffset = params.offset
          // now set params.offset to the lower bound of the new cache window
          // the server will return that whole cache window
          params.offset = this.cacheWindows[this.currWindow].lower
          // within current cache window
        } else {
          useAjax = false
        }
      }
    }

    // force an ajax call - this is on search, sort or page size change
    if (this.resetCache) {
      useAjax = true
      this.resetCache = false
    }

    if (useAjax) {
      // in this scenario limit is used on the server to get the cache window
      // and drawLimit is used to get the page data afterwards
      params.drawLimit = params.limit
      params.limit = this.options.pipelineSize
    }

    // cached results can be used
    if (!useAjax) {
      const res = this.drawFromCache(params.offset, params.limit)

      this.load(res)
      this.trigger('load-success', res)
      this.trigger('cached-data-hit', res)
      return
    }

    if (!this.pipelineResponseHandler) {
      this.pipelineResponseHandler = this.options.responseHandler

      this.options.responseHandler = (_res, jqXHR) => {
        let res = Utils.calculateObjectValue(this.options, this.pipelineResponseHandler, [_res, jqXHR], _res)

        // store entire request in cache
        this.cacheRequestJSON = Utils.extend(true, {}, res)
        // this gets set in load() also but needs to be set before
        // setting cacheWindows
        this.options.totalRows = res[this.options.totalField]
        // if this is a search, potentially less results will be returned
        // so cache windows need to be rebuilt. Otherwise it
        // will come out the same
        this.setCacheWindows()
        // just load data for the page
        res = this.drawFromCache(params.drawOffset, params.drawLimit)
        this.trigger('cached-data-reset', res)
        return res
      }
    }

    return super.initServer(silent, { ...query, ...params }, url)
  }

  destroy (...args) {
    this.options.responseHandler = this.pipelineResponseHandler
    this.pipelineResponseHandler = null

    super.destroy(...args)
  }
}
