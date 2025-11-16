import Utils from '../utils/index.js'

export default {
  initSearchText () {
    if (this.options.search) {
      this.searchText = ''
      if (this.options.searchText !== '') {
        const $search = Utils.getSearchInput(this)

        $search.val(this.options.searchText)
        this.onSearch({ currentTarget: $search, firedByInitSearchText: true })
      }
    }
  },

  initSearch () {
    this.filterOptions = this.filterOptions || this.options.filterOptions
    if (this.options.sidePagination !== 'server') {
      if (this.options.customSearch) {
        this.data = Utils.calculateObjectValue(this.options, this.options.customSearch,
          [this.options.data, this.searchText, this.filterColumns])

        if (this.options.sortReset) {
          this.unsortedData = [...this.data]
        }

        this.initSort()
        return
      }

      const rawSearchText = this.searchText && (this.fromHtml ? Utils.escapeHTML(this.searchText) : this.searchText)
      let searchText = rawSearchText ? rawSearchText.toLowerCase() : ''
      const f = Utils.isEmptyObject(this.filterColumns) ? null : this.filterColumns

      if (this.options.searchAccentNeutralise) {
        searchText = Utils.normalizeAccent(searchText)
      }

      // Check filter
      if (typeof this.filterOptions.filterAlgorithm === 'function') {
        this.data = this.options.data.filter(item => this.filterOptions.filterAlgorithm.apply(null, [item, f]))
      } else if (typeof this.filterOptions.filterAlgorithm === 'string') {
        this.data = f ? this.options.data.filter(item => {
          const filterAlgorithm = this.filterOptions.filterAlgorithm

          if (filterAlgorithm === 'and') {
            for (const key in f) {
              if (
                Array.isArray(f[key]) &&
                  !f[key].includes(item[key]) ||
                !Array.isArray(f[key]) &&
                  item[key] !== f[key]
              ) {
                return false
              }
            }
          } else if (filterAlgorithm === 'or') {
            let match = false

            for (const key in f) {
              if (
                Array.isArray(f[key]) &&
                  f[key].includes(item[key]) ||
                !Array.isArray(f[key]) &&
                  item[key] === f[key]
              ) {
                match = true
              }
            }

            return match
          }

          return true
        }) : [...this.options.data]
      }

      const visibleFields = this.getVisibleFields()

      this.data = searchText ? this.data.filter((item, i) => {
        for (let j = 0; j < this.header.fields.length; j++) {
          if (!this.header.searchables[j] || this.options.visibleSearch && visibleFields.indexOf(this.header.fields[j]) === -1) {
            continue
          }

          const key = Utils.isNumeric(this.header.fields[j]) ? parseInt(this.header.fields[j], 10) : this.header.fields[j]
          const column = this.columns[this.fieldsColumnsIndex[key]]
          let value

          if (typeof key === 'string' && !item.hasOwnProperty(key)) {
            value = item
            const props = key.split('.')

            for (let i = 0; i < props.length; i++) {
              if (value[props[i]] === null || value[props[i]] === undefined) {
                value = null
                break
              } else {
                value = value[props[i]]
              }
            }
          } else {
            value = item[key]
          }

          if (this.options.searchAccentNeutralise) {
            value = Utils.normalizeAccent(value)
          }

          // Fix #142: respect searchFormatter boolean
          if (column && column.searchFormatter) {
            value = Utils.calculateObjectValue(column,
              this.header.formatters[j], [value, item, i, column.field], value)
            if (this.header.formatters[j] && typeof value !== 'number') {
              // search innerText
              value = $('<div>').html(value).text()
            }
          }

          if (typeof value === 'string' || typeof value === 'number') {
            if (this.options.strictSearch) {
              if (`${value}`.toLowerCase() === searchText) {
                return true
              }
            } else if (this.options.regexSearch) {
              if (Utils.regexCompare(value, rawSearchText)) {
                return true
              }
            } else {
              const largerSmallerEqualsRegex = /(?:(<=|=>|=<|>=|>|<)(?:\s+)?(-?\d+)?|(-?\d+)?(\s+)?(<=|=>|=<|>=|>|<))/gm
              const matches = largerSmallerEqualsRegex.exec(this.searchText)
              let comparisonCheck = false

              if (matches) {
                const operator = matches[1] || `${matches[5]}l`
                const comparisonValue = matches[2] || matches[3]
                const int = parseInt(value, 10)
                const comparisonInt = parseInt(comparisonValue, 10)

                switch (operator) {
                  case '>':
                  case '<l':
                    comparisonCheck = int > comparisonInt
                    break
                  case '<':
                  case '>l':
                    comparisonCheck = int < comparisonInt
                    break
                  case '<=':
                  case '=<':
                  case '>=l':
                  case '=>l':
                    comparisonCheck = int <= comparisonInt
                    break
                  case '>=':
                  case '=>':
                  case '<=l':
                  case '=<l':
                    comparisonCheck = int >= comparisonInt
                    break
                  default:
                    break
                }
              }

              if (comparisonCheck || `${value}`.toLowerCase().includes(searchText)) {
                return true
              }
            }
          }
        }
        return false
      }) : this.data

      if (this.options.sortReset) {
        this.unsortedData = [...this.data]
      }

      this.initSort()
    }
  },

  onSearch ({ currentTarget, firedByInitSearchText } = {}, overwriteSearchText = true) {
    if (currentTarget !== undefined && $(currentTarget).length && overwriteSearchText) {
      const text = $(currentTarget).val().trim()

      if (this.options.trimOnSearch && $(currentTarget).val() !== text) {
        $(currentTarget).val(text)
      }

      if (this.searchText === text) {
        return
      }

      const $searchInput = Utils.getSearchInput(this)
      const $currentTarget = currentTarget instanceof jQuery ? currentTarget : $(currentTarget)

      if ($currentTarget.is($searchInput) || $currentTarget.hasClass('search-input')) {
        this.searchText = text
        this.options.searchText = text
      }
    }

    if (!firedByInitSearchText) {
      this.options.pageNumber = 1
    }
    this.initSearch()
    if (firedByInitSearchText) {
      if (this.options.sidePagination === 'client') {
        this.updatePagination()
      }
    } else {
      this.updatePagination()
    }
    this.trigger('search', this.searchText)
  },

  resetSearch (text) {
    const $search = Utils.getSearchInput(this)

    const textToUse = text || ''

    $search.val(textToUse)
    this.searchText = textToUse
    this.options.searchText = textToUse
    this.onSearch({ currentTarget: $search }, false)
  },

  filterBy (columns, options) {
    this.filterOptions = Utils.isEmptyObject(options) ? this.options.filterOptions :
      Utils.extend({}, this.options.filterOptions, options)
    this.filterColumns = Utils.isEmptyObject(columns) ? {} : columns
    this.options.pageNumber = 1
    this.initSearch()
    this.updatePagination()
  }
}
