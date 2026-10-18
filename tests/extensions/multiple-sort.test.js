/**
 * Tests for the multiple-sort extension column title escaping.
 *
 * Covers the escape behavior required after storing raw titles for #8484:
 * the sort modal dropdown must escape column titles when
 * `escape` + `escapeTitle` are enabled, including titles updated
 * through `updateColumnTitle`.
 */
import { afterEach, describe, expect, it, vi } from 'vitest'

async function loadMultipleSort () {
  if (!globalThis.$) {
    const { default: jq } = await import('jquery')

    globalThis.$ = jq
    globalThis.jQuery = jq
  }
  await import('../../src/bootstrap-table.js')
  await import('../../src/extensions/multiple-sort/bootstrap-table-multiple-sort.js')

  const $ = globalThis.jQuery || globalThis.$

  expect($?.BootstrapTable).toBeTruthy()

  return { $ }
}

describe('multiple-sort column title escaping (#8484)', () => {
  afterEach(() => {
    document.body.innerHTML = ''
    vi.restoreAllMocks()
  })

  it('escapes updated titles in the sort level dropdown options', async () => {
    const { $ } = await loadMultipleSort()

    document.body.innerHTML = '<table id="ms-test"></table>'
    const $table = $('#ms-test').bootstrapTable({
      showMultiSort: true,
      escape: true,
      escapeTitle: true,
      columns: [{ field: 'a', title: 'A', sortable: true }],
      data: [{ a: 'x' }]
    })

    try {
      const instance = $table.data('bootstrap.table')

      instance.updateColumnTitle({ field: 'a', title: 'S <b>&</b> S' })
      instance.addLevel(1)

      const $option = instance.$sortModal.find('.multi-sort-name').last()
        .find('option').first()

      expect($option.text()).toBe('S <b>&</b> S')
      expect($option.html()).toBe('S &lt;b&gt;&amp;&lt;/b&gt; S')
    } finally {
      if ($table.data('bootstrap.table')) {
        $table.bootstrapTable('destroy')
      }
    }
  })

  it('keeps HTML titles in the sort level dropdown when escapeTitle is disabled', async () => {
    const { $ } = await loadMultipleSort()

    document.body.innerHTML = '<table id="ms-test"></table>'
    const $table = $('#ms-test').bootstrapTable({
      showMultiSort: true,
      escape: true,
      escapeTitle: false,
      columns: [{ field: 'a', title: '<b>A</b>', sortable: true }],
      data: [{ a: 'x' }]
    })

    try {
      const instance = $table.data('bootstrap.table')

      instance.addLevel(1)

      const $option = instance.$sortModal.find('.multi-sort-name').last()
        .find('option').first()
      const optionEl = $option[0]

      expect(optionEl.querySelector('b')).not.toBeNull()
    } finally {
      if ($table.data('bootstrap.table')) {
        $table.bootstrapTable('destroy')
      }
    }
  })
})
