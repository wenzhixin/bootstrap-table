import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import * as framework from '@/utils/framework.js'
import DOMHelper from '@/helpers/dom.js'

describe('getIconsPrefix', () => {
  it('should return correct prefix for each theme', () => {
    expect(framework.getIconsPrefix('bootstrap3')).toBe('glyphicon')
    expect(framework.getIconsPrefix('bootstrap4')).toBe('fa')
    expect(framework.getIconsPrefix('bootstrap5')).toBe('bi')
    expect(framework.getIconsPrefix('bootstrap-table')).toBe('icon')
    expect(framework.getIconsPrefix('materialize')).toBe('material-icons')
    // bulma, foundation, semantic all return 'fa'
    expect(framework.getIconsPrefix('bulma')).toBe('fa')
    expect(framework.getIconsPrefix('foundation')).toBe('fa')
    expect(framework.getIconsPrefix('semantic')).toBe('fa')
  })

  it('should return default fa for unknown theme', () => {
    expect(framework.getIconsPrefix('unknown')).toBe('fa')
    expect(framework.getIconsPrefix('')).toBe('fa')
  })
})

describe('getIcons', () => {
  const icons = {
    fa: { search: 'fa-search', refresh: 'fa-refresh' },
    bi: { search: 'bi-search', refresh: 'bi-refresh' },
    glyphicon: { search: 'glyphicon-search', refresh: 'glyphicon-refresh' }
  }

  it('should return icons for known prefix', () => {
    expect(framework.getIcons(icons, 'fa')).toEqual({ search: 'fa-search', refresh: 'fa-refresh' })
    expect(framework.getIcons(icons, 'bi')).toEqual({ search: 'bi-search', refresh: 'bi-refresh' })
    expect(framework.getIcons(icons, 'glyphicon')).toEqual({ search: 'glyphicon-search', refresh: 'glyphicon-refresh' })
  })

  it('should return empty object for unknown prefix', () => {
    expect(framework.getIcons(icons, 'unknown')).toEqual({})
    expect(framework.getIcons(icons, '')).toEqual({})
  })
})

describe('assignIcons', () => {
  it('should assign icon values to all prefixes', () => {
    const icons = {
      fa: {},
      bi: {},
      glyphicon: {}
    }
    const values = {
      fa: 'fa-new-icon',
      bi: 'bi-new-icon',
      glyphicon: 'glyphicon-new-icon'
    }

    framework.assignIcons(icons, 'newIcon', values)

    expect(icons.fa.newIcon).toBe('fa-new-icon')
    expect(icons.bi.newIcon).toBe('bi-new-icon')
    expect(icons.glyphicon.newIcon).toBe('glyphicon-new-icon')
  })

  it('should work with existing icons', () => {
    const icons = {
      fa: { existing: 'fa-existing' },
      bi: { existing: 'bi-existing' }
    }
    const values = {
      fa: 'fa-new',
      bi: 'bi-new'
    }

    framework.assignIcons(icons, 'newIcon', values)

    expect(icons.fa.existing).toBe('fa-existing')
    expect(icons.fa.newIcon).toBe('fa-new')
    expect(icons.bi.existing).toBe('bi-existing')
    expect(icons.bi.newIcon).toBe('bi-new')
  })
})

describe('getBootstrapVersion', () => {
  let originalWindow
  let original$

  beforeEach(() => {
    // Save original globals
    originalWindow = global.window
    original$ = global.$

    // Reset globals
    // @ts-expect-error - testing purposes
    delete global.window
    // @ts-expect-error - testing purposes
    delete global.$
  })

  afterEach(() => {
    // Restore original globals
    global.window = originalWindow
    // @ts-expect-error - testing purposes
    global.$ = original$
  })

  it('should return 5 by default', () => {
    expect(framework.getBootstrapVersion()).toBe(5)
  })

  it('should return version from window.bootstrap.Tooltip.VERSION', () => {
    // @ts-expect-error - testing purposes
    global.window = {
      bootstrap: {
        Tooltip: { VERSION: '5.3.0' }
      }
    }

    expect(framework.getBootstrapVersion()).toBe(5)
  })

  it('should return version from jQuery when available', () => {
    // @ts-expect-error - testing purposes
    global.window = {}
    // @ts-expect-error - testing purposes
    global.$ = {
      fn: {
        bootstrapTable: { theme: 'bootstrap5' },
        dropdown: {
          Constructor: { VERSION: '4.6.0' }
        }
      }
    }

    expect(framework.getBootstrapVersion()).toBe(4)
  })

  it('should return undefined for non-Bootstrap themes', () => {
    const nonBootstrapThemes = ['bulma', 'semantic']

    for (const theme of nonBootstrapThemes) {
      // @ts-expect-error - testing purposes
      global.$ = {
        fn: {
          bootstrapTable: { theme }
        }
      }

      expect(framework.getBootstrapVersion()).toBeUndefined()
    }
  })

  it('should prioritize window.bootstrap over jQuery', () => {
    // @ts-expect-error - testing purposes
    global.window = {
      bootstrap: {
        Tooltip: { VERSION: '5.2.0' }
      }
    }
    // @ts-expect-error - testing purposes
    global.$ = {
      fn: {
        bootstrapTable: { theme: 'bootstrap5' },
        dropdown: {
          Constructor: { VERSION: '4.0.0' }
        }
      }
    }

    expect(framework.getBootstrapVersion()).toBe(5)
  })
})

describe('getSearchInput', () => {
  describe('when searchSelector is set', () => {
    beforeEach(() => {
      // Mock DOMHelper.$ to return a mock element
      DOMHelper.$ = vi.fn().mockReturnValue({
        0: { tagName: 'INPUT', type: 'search' }
      })
    })

    afterEach(() => {
      vi.restoreAllMocks()
    })

    it('should return element from searchSelector when it is a string', () => {
      const that = {
        options: {
          searchSelector: '#custom-search'
        }
      }

      const result = framework.getSearchInput(that)

      expect(DOMHelper.$).toHaveBeenCalledWith('#custom-search')
      expect(result).toBeDefined()
    })

    it('should return null when searchSelector is not a string', () => {
      const that = {
        options: {
          searchSelector: null
        }
      }

      const result = framework.getSearchInput(that)

      expect(result).toBeNull()
    })
  })

  describe('when finding in toolbar', () => {
    beforeEach(() => {
      // Create a mock toolbar with search input
      const mockToolbar = document.createElement('div')

      mockToolbar.className = 'toolbar'

      const searchInput = document.createElement('input')

      searchInput.type = 'search'
      searchInput.className = 'form-control'
      mockToolbar.appendChild(searchInput)

      // Mock DOMHelper.find
      DOMHelper.find = vi.fn().mockReturnValue([searchInput])
      DOMHelper.$ = vi.fn().mockReturnValue([mockToolbar])
    })

    afterEach(() => {
      vi.restoreAllMocks()
    })

    it('should return search input from toolbar', () => {
      const that = {
        options: {},
        $toolbar: [document.createElement('div')]
      }

      const result = framework.getSearchInput(that)

      expect(DOMHelper.find).toHaveBeenCalledWith(expect.any(Element), '.search input')
      expect(result).toBeDefined()
      expect(result.type).toBe('search')
    })

    it('should return null when toolbar has no search input', () => {
      const that = {
        options: {},
        $toolbar: [document.createElement('div')]
      }

      // Mock DOMHelper.find to return empty array
      DOMHelper.find = vi.fn().mockReturnValue([])

      const result = framework.getSearchInput(that)

      expect(result).toBeNull()
    })

    it('should return first search input when multiple exist', () => {
      const that = {
        options: {},
        $toolbar: [document.createElement('div')]
      }

      const result = framework.getSearchInput(that)

      expect(result).toBeDefined()
      // Should return the first one found
      expect(DOMHelper.find).toHaveBeenCalledWith(expect.any(Element), '.search input')
    })
  })

  describe('edge cases', () => {
    it('should return null when options.searchSelector is not set and no toolbar', () => {
      const that = { options: {} }

      expect(framework.getSearchInput(that)).toBeNull()
    })

    it('should return null when toolbar is null', () => {
      const that = {
        options: {},
        $toolbar: null
      }

      expect(framework.getSearchInput(that)).toBeNull()
    })

    it('should handle empty $toolbar array', () => {
      const that = {
        options: {},
        $toolbar: []
      }

      const result = framework.getSearchInput(that)

      expect(result).toBeNull()
    })
  })
})
