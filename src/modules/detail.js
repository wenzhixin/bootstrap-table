import Utils from '../utils/index.js'

export default {
  toggleDetailView (index, _columnDetailFormatter) {
    const $tr = this.$body.find(Utils.sprintf('> tr[data-index="%s"]', index))

    if ($tr.next().is('tr.detail-view')) {
      this.collapseRow(index)
    } else {
      this.expandRow(index, _columnDetailFormatter)
    }

    this.resetView()
  },

  expandRow (index, _columnDetailFormatter) {
    const row = this.data[index]
    const $tr = this.$body.find(Utils.sprintf('> tr[data-index="%s"][data-has-detail-view]', index))

    if (this.options.detailViewIcon) {
      $tr.find('a.detail-icon').html(Utils.sprintf(this.constants.html.icon, this.options.iconsPrefix, this.options.icons.detailClose))
    }

    if ($tr.next().is('tr.detail-view')) {
      return
    }

    $tr.after(Utils.sprintf('<tr class="detail-view"><td colspan="%s"></td></tr>', $tr.children('td').length))

    const $element = $tr.next().find('td')

    const detailFormatter = _columnDetailFormatter || this.options.detailFormatter
    const content = Utils.calculateObjectValue(this.options, detailFormatter, [index, row, $element], '')

    if ($element.length === 1) {
      $element.append(content)
    }

    this.trigger('expand-row', index, row, $element)
  },

  expandRowByUniqueId (uniqueId) {
    const row = this.getRowByUniqueId(uniqueId)

    if (!row) {
      return
    }

    this.expandRow(this.data.indexOf(row))
  },

  collapseRow (index) {
    const row = this.data[index]
    const $tr = this.$body.find(Utils.sprintf('> tr[data-index="%s"][data-has-detail-view]', index))

    if (!$tr.next().is('tr.detail-view')) {
      return
    }

    if (this.options.detailViewIcon) {
      $tr.find('a.detail-icon').html(Utils.sprintf(this.constants.html.icon, this.options.iconsPrefix, this.options.icons.detailOpen))
    }

    this.trigger('collapse-row', index, row, $tr.next())
    $tr.next().remove()
  },

  collapseRowByUniqueId (uniqueId) {
    const row = this.getRowByUniqueId(uniqueId)

    if (!row) {
      return
    }

    this.collapseRow(this.data.indexOf(row))
  },

  expandAllRows () {
    const trs = this.$body.find('> tr[data-index][data-has-detail-view]')

    for (let i = 0; i < trs.length; i++) {
      this.expandRow($(trs[i]).data('index'))
    }
  },

  collapseAllRows () {
    const trs = this.$body.find('> tr[data-index][data-has-detail-view]')

    for (let i = 0; i < trs.length; i++) {
      this.collapseRow($(trs[i]).data('index'))
    }
  }
}
