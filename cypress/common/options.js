module.exports = (theme = '') => {
  const baseUrl = require('./utils')(theme, 'options')

  // Load menu configuration defensively, since the config file may not exist
  // in local checkouts (it is generated/populated in CI).
  let menus = []
  let configLoaded = false

  try {
    const configModule = require('../html/assets/js/config')

    menus = configModule.menus
    configLoaded = true
  } catch (err) {
    // If the config module itself is missing, fall back to running all tests unconditionally.
    // For any other kind of error (e.g. syntax/runtime errors inside the config module),
    // rethrow so CI does not silently pass with a broken config.
    const isModuleNotFound =
      err &&
      err.code === 'MODULE_NOT_FOUND' &&
      typeof err.message === 'string' &&
      err.message.includes('../html/assets/js/config')

    if (isModuleNotFound) {
      // If the config is unavailable, fall back to running all tests unconditionally.
      // This allows local development without the full CI setup.

      console.warn(
        'Options tests: ../html/assets/js/config not found; running all tests unconditionally.'
      )
    } else {
      throw err
    }
  }

  const optionsMenu = Array.isArray(menus) ?
    menus.find(it => it && it.title === 'Options') :
    null
  const list = optionsMenu && Array.isArray(optionsMenu.children) ?
    optionsMenu.children :
    []

  // Helper function to create a test that checks the theme condition
  const testIf = (label, fn) => {
    // If config is not loaded, run all tests unconditionally
    if (!configLoaded) {
      it(`Test ${label}`, fn)
      return
    }

    const item = list.find(it => it.label === label)

    // If config is loaded but item is missing, fail explicitly
    if (!item) {
      const missingTitle = `Test ${label} (config missing)`

      it(missingTitle, () => {
        throw new Error(`Menu config entry for label "${label}" not found in "Options" menu.`)
      })
      return
    }

    const shouldTest = !item.show || item.show.includes(theme)
    const title = `Test ${label}`

    if (shouldTest) {
      it(title, fn)
    } else {
      it.skip(title, fn)
    }
  }

  describe('Options Test', () => {
    testIf('AJAX', () => {
      cy.visit(`${baseUrl}table-ajax.html`)
        .get('.fixed-table-pagination >.pagination-detail').should('have.length', 1)
        .get('.fixed-table-pagination > .pagination').should('have.length', 1)
        .get('span.pagination-info').should('contain', '800')
    })

    testIf('AJAX Options', () => {
      cy.visit(`${baseUrl}ajax-options.html`)
        .intercept('GET', '**/json/data1.json').as('ajax')
        .wait('@ajax')
        .should(({ request }) => {
          expect(request.headers).to.have.property('custom-auth-token')
            .and.eq('custom-auth-token')
        })
    })

    testIf('Basic Columns', () => {
      cy.visit(`${baseUrl}basic-columns.html`)
        .get('.fixed-table-toolbar .columns').should('exist')
    })

    testIf('Buttons Custom', () => {
      const stub = cy.stub()

      cy.on('window:alert', stub)

      cy.visit(`${baseUrl}buttons.html`)
        .get('.fixed-table-toolbar .columns').should('exist')
        .get('.fixed-table-toolbar button[name="btnUsersAdd"]').should('exist')
        .get('.fixed-table-toolbar button[name="btnAdd"]').should('exist')
        .get('.fixed-table-toolbar button[name="btnDom"]').should('exist')
        .get('.fixed-table-toolbar button[name="btnDom"]').click()
        .wrap(stub).should('have.been.calledWith', 'DOM Button clicked!')
    })

    testIf('Buttons Align', () => {
      cy.visit(`${baseUrl}buttons-align.html`)
        .get('.fixed-table-toolbar .columns.columns-left').should('exist')
    })

    testIf('Buttons Attribute Title', () => {
      cy.visit(`${baseUrl}buttons-attribute-title.html`)
        .get('.fixed-table-toolbar .columns button[data-hint]').should('exist')
    })

    testIf('Buttons Class', () => {
      cy.visit(`${baseUrl}buttons-class.html`)
        .get('.fixed-table-toolbar .columns button.btn-primary').should('exist')
    })

    testIf('Buttons Order', () => {
      cy.visit(`${baseUrl}buttons-order.html`)

      cy.get('#sortable li')
        .then($lis => {
          const sortableItems = $lis.map((_, el) => el.getAttribute('data-value')).get()

          return sortableItems
        })
        .then(sortableItems => {
          cy.get('.fixed-table-toolbar .columns button[name]').then($buttons => {
            const buttonNames = $buttons.map((_, el) => el.getAttribute('name')).get()

            // Add 'columns' to represent the columns toggle button, which is part of
            // the sortable list but is not included in the collected button name attributes.
            buttonNames.push('columns')

            expect(buttonNames).to.deep.equal(sortableItems)
          })
        })
    })

    testIf('Buttons Prefix', () => {
      cy.visit(`${baseUrl}buttons-prefix.html`)
        .get('.fixed-table-toolbar .columns button.btn-sm').should('exist')
    })

    testIf('Buttons Toolbar', () => {
      cy.visit(`${baseUrl}buttons-toolbar.html`)
        .get('.buttons-toolbar .columns').should('exist')
    })

    testIf('Card View', () => {
      cy.visit(`${baseUrl}card-view.html`)
        .get('.fixed-table-body .card-views').should('exist')
        .get('.fixed-table-body .card-view').should('have.length.greaterThan', 0)
    })

    testIf('Checkbox Header', () => {
      cy.visit(`${baseUrl}checkbox-header.html`)
        .get('.fixed-table-header thead .bs-checkbox input[type="checkbox"]').should('not.exist')
        .get('.fixed-table-body tbody .bs-checkbox input[type="checkbox"]').should('exist')
    })

    testIf('Classes', () => {
      cy.visit(`${baseUrl}table-classes.html`)
        .get('table.table.table-bordered.table-hover.table-striped').should('exist')
    })

    testIf('Click To Select', () => {
      cy.visit(`${baseUrl}click-to-select.html`)
        .get('tr[data-index="0"]').click()
        .get('input[type="checkbox"][data-index="0"]').should('be.checked')
    })
  })
}
