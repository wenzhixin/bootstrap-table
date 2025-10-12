class ThemeSwitcher {
  constructor () {
    this.themeConfig = null
    this.currentTheme = 'light'
    this.init()
  }

  init () {
    const themeSwitcher = document.getElementById('theme-switcher')

    if (themeSwitcher) {
      this.themeConfig = JSON.parse(themeSwitcher.dataset.themeConfig || '{}')
    }

    this.currentTheme = this.getStoredTheme() || this.getSystemTheme()

    this.applyTheme(this.currentTheme)
    this.renderThemeMenu()
    this.bindEvents()
  }

  getStoredTheme () {
    return localStorage.getItem('bootstrap-theme')
  }

  getSystemTheme () {
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  }

  applyTheme (theme) {
    let actualTheme = theme

    if (theme === 'auto') {
      actualTheme = this.getSystemTheme()
    }

    document.documentElement.setAttribute('data-bs-theme', actualTheme)

    this.updateThemeIcon(theme)

    localStorage.setItem('bootstrap-theme', theme)

    this.currentTheme = theme
  }

  updateThemeIcon (theme) {
    const themeIcon = document.getElementById('theme-icon')

    if (themeIcon && this.themeConfig?.themes) {
      const themeData = this.themeConfig.themes.find(t => t.name === theme)
      const iconClass = themeData?.icon || 'bi-sun-fill'

      themeIcon.innerHTML = `<i class="bi ${iconClass}"></i>
        <span class="d-lg-none ms-2" id="bd-theme-text">Toggle theme</span>`
    }
  }

  renderThemeMenu () {
    const themeMenu = document.getElementById('theme-menu')

    if (!themeMenu || !this.themeConfig?.themes) return

    themeMenu.innerHTML = this.themeConfig.themes.map(theme => `
      <li>
        <a
          class="dropdown-item ${theme.name === this.currentTheme ? 'active' : ''}"
          href="#"
          data-theme="${theme.name}"
        >
          <i class="bi ${theme.icon}"></i> ${theme.label}
        </a>
      </li>
    `).join('')
  }

  bindEvents () {
    document.addEventListener('click', e => {
      const target = e.target
      const themeElement = target?.closest('[data-theme]')

      if (themeElement) {
        e.preventDefault()
        const theme = themeElement.dataset.theme

        if (theme) {
          this.applyTheme(theme)
          this.renderThemeMenu()
        }
      }
    })

    // Listen to system theme change
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
      const storedTheme = this.getStoredTheme()

      // If there is no stored theme preference or the current theme is auto, respond to system theme change
      if (!storedTheme || storedTheme === 'auto') {
        const newTheme = e.matches ? 'dark' : 'light'

        // If the current theme is auto, update the actually applied theme
        if (storedTheme === 'auto') {
          document.documentElement.setAttribute('data-bs-theme', newTheme)
        } else {
          this.applyTheme(newTheme)
          this.renderThemeMenu()
        }
      }
    })
  }
}

function updateSidenav () {
  const sidenav = document.querySelector('.bd-sidebar')
  const sidenavActiveLink = document.querySelector('.bd-links-nav .active')

  if (!sidenav || !sidenavActiveLink) {
    return
  }

  const sidenavHeight = sidenav.clientHeight
  const sidenavActiveLinkTop = sidenavActiveLink.offsetTop
  const sidenavActiveLinkHeight = sidenavActiveLink.clientHeight
  const viewportTop = sidenavActiveLinkTop
  const viewportBottom = viewportTop - sidenavHeight + sidenavActiveLinkHeight

  if (sidenav.scrollTop > viewportTop || sidenav.scrollTop < viewportBottom) {
    sidenav.scrollTop = viewportTop - sidenavHeight / 2 + sidenavActiveLinkHeight / 2
  }
}

function initTOC () {
  const tocToggles = document.querySelectorAll('.bd-toc-toggle')

  tocToggles.forEach(toggle => {
    toggle.addEventListener('click', function () {
      const targetId = this.getAttribute('data-bs-target')
      const target = document.querySelector(targetId)
      const icon = this.querySelector('.bi-chevron-expand')

      if (target && icon) {
        if (target.classList.contains('show')) {
          icon.classList.remove('bi-chevron-up')
          icon.classList.add('bi-chevron-expand')
        } else {
          icon.classList.remove('bi-chevron-expand')
          icon.classList.add('bi-chevron-up')
        }
      }
    })
  })
}

function generateTOC () {
  const headings = document.querySelectorAll('.bd-content h2, .bd-content h3')
  const tocList = document.querySelector('.toc-list')

  if (!tocList || headings.length === 0) return

  const tocItems = Array.from(headings).map(heading => {
    const level = parseInt(heading.tagName.charAt(1))
    const text = heading.textContent || ''
    const id = heading.id || text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')

    if (!heading.id) {
      heading.id = id
    }

    return { level, text, id }
  })

  let tocHTML = ''
  let currentH2 = null

  tocItems.forEach(item => {
    if (item.level === 2) {
      if (currentH2 && currentH2.hasH3) {
        tocHTML += '</ul></li>'
      }

      tocHTML += `<li><a href="#${item.id}">${item.text}</a>`
      currentH2 = { id: item.id, hasH3: false }
    } else if (item.level === 3 && currentH2) {
      if (!currentH2.hasH3) {
        tocHTML += '<ul>'
        currentH2.hasH3 = true
      }

      tocHTML += `<li><a href="#${item.id}">${item.text}</a></li>`
    }
  })

  if (currentH2 && currentH2.hasH3) {
    tocHTML += '</ul></li>'
  }

  tocList.innerHTML = tocHTML
}

function initHighlight () {
  if (typeof window.Prism !== 'undefined') {
    window.Prism.highlightAll()
  }
}

function initDocSearch () {
  window.docsearch({
    container: '.bd-search',
    appId: window.ALGOLIA_CONFIG.appId,
    apiKey: window.ALGOLIA_CONFIG.apiKey,
    indexName: window.ALGOLIA_CONFIG.indexName,
    transformItems: items => items.map(item => {
      // Replace the production domain with the current origin
      if (item.url && item.url.startsWith('https://bootstrap-table.com')) {
        item.url = item.url.replace('https://bootstrap-table.com', window.location.origin)
      }
      return item
    })
  })
}

function init () {
  new ThemeSwitcher()
  updateSidenav()
  generateTOC()
  initTOC()
  initHighlight()
  initDocSearch()
}

document.addEventListener('DOMContentLoaded', () => {
  init()
})

if (document.readyState !== 'loading') {
  init()
}
