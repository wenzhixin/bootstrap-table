const BLOCK_ROWS = 50
const CLUSTER_BLOCKS = 4

class VirtualScroll {

  constructor (options) {
    this.rows = options.rows
    this.scrollEl = options.scrollEl
    this.contentEl = options.contentEl
    this.callback = options.callback
    this.itemHeight = options.itemHeight

    this.cache = {}
    this.scrollTop = this.scrollEl.scrollTop

    this.initDOM(this.rows, options.fixedScroll)

    this.scrollEl.scrollTop = this.scrollTop
    this.lastCluster = 0

    const onScroll = () => {
      if (this.lastCluster !== (this.lastCluster = this.getNum())) {
        this.initDOM(this.rows)
        this.callback()
      }
    }

    this.scrollEl.addEventListener('scroll', onScroll, false)
    this.destroy = () => {
      this.contentEl.innerHtml = ''
      this.scrollEl.removeEventListener('scroll', onScroll, false)
    }
  }

  initDOM (rows, fixedScroll) {
    if (typeof this.clusterHeight === 'undefined') {
      this.cache.scrollTop = this.scrollEl.scrollTop
      this.cache.data = this.contentEl.innerHTML = rows[0] + rows[0] + rows[0]
      this.getRowsHeight(rows)
    }

    const data = this.initData(rows, this.getNum(fixedScroll))
    const thisRows = data.rows.join('')
    const dataChanged = this.checkChanges('data', thisRows)
    const topOffsetChanged = this.checkChanges('top', data.topOffset)
    const bottomOffsetChanged = this.checkChanges('bottom', data.bottomOffset)
    const html = []

    if (dataChanged && topOffsetChanged) {
      if (data.topOffset) {
        html.push(this.getExtra('top', data.topOffset))
      }
      html.push(thisRows)
      if (data.bottomOffset) {
        html.push(this.getExtra('bottom', data.bottomOffset))
      }
      this.contentEl.innerHTML = html.join('')

      if (fixedScroll) {
        this.contentEl.scrollTop = this.cache.scrollTop
      }
    } else if (bottomOffsetChanged) {
      this.contentEl.lastChild.style.height = `${data.bottomOffset}px`
    }
  }

  getRowsHeight () {
    if (typeof this.itemHeight === 'undefined') {
      const nodes = this.contentEl.children
      const node = nodes[Math.floor(nodes.length / 2)]
      this.itemHeight = node.offsetHeight
    }
    this.blockHeight = this.itemHeight * BLOCK_ROWS
    this.clusterRows = BLOCK_ROWS * CLUSTER_BLOCKS
    this.clusterHeight = this.blockHeight * CLUSTER_BLOCKS
  }

  getNum (fixedScroll) {
    this.scrollTop = fixedScroll ? this.cache.scrollTop : this.scrollEl.scrollTop
    return Math.floor(this.scrollTop / (this.clusterHeight - this.blockHeight)) || 0
  }

  initData (rows, num) {
    if (rows.length < BLOCK_ROWS) {
      return {
        topOffset: 0,
        bottomOffset: 0,
        rowsAbove: 0,
        rows
      }
    }
    const start = Math.max((this.clusterRows - BLOCK_ROWS) * num, 0)
    const end = start + this.clusterRows
    const topOffset = Math.max(start * this.itemHeight, 0)
    const bottomOffset = Math.max((rows.length - end) * this.itemHeight, 0)
    const thisRows = []
    let rowsAbove = start
    if (topOffset < 1) {
      rowsAbove++
    }
    for (let i = start; i < end; i++) {
      rows[i] && thisRows.push(rows[i])
    }
    return {
      topOffset,
      bottomOffset,
      rowsAbove,
      rows: thisRows
    }
  }

  checkChanges (type, value) {
    const changed = value !== this.cache[type]
    this.cache[type] = value
    return changed
  }

  getExtra (className, height) {
    const tag = document.createElement('tr')
    tag.className = `virtual-scroll-${className}`
    if (height) {
      tag.style.height = `${height}px`
    }
    return tag.outerHTML
  }
}

export default VirtualScroll
