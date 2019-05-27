<template>
  <table/>
</template>

<script>
const $ = window.jQuery
const deepCopy = arg => {
  return $.extend(true, Array.isArray(arg) ? [] : {}, arg)
}

export default {
  name: 'BootstrapTable',
  props: {
    columns: {
      type: Array,
      require: true
    },
    data: {
      type: [Array, Object],
      default () {
        return undefined
      }
    },
    options: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  mounted () {
    this.$table = $(this.$el)

    this.$table.on('all.bs.table', (e, name, args) => {
      this.$emit($.fn.bootstrapTable.events[name], ...args)
    })

    this._initTable()
  },
  methods: {
    _initTable () {
      const options = {
        ...deepCopy(this.options),
        columns: deepCopy(this.columns),
        data: deepCopy(this.data)
      }
      if (!this._hasInit) {
        this.$table.bootstrapTable(options)
        this._hasInit = true
      } else {
        this.refreshOptions(options)
      }
    },
    ...(() => {
      const res = {}
      for (const method of $.fn.bootstrapTable.methods) {
        res[method] = function (...args) {
          return this.$table.bootstrapTable(method, ...args)
        }
      }
      return res
    })()
  },
  watch: {
    options: {
      handler () {
        this._initTable()
      },
      deep: true
    },
    columns: {
      handler () {
        this._initTable()
      },
      deep: true
    },
    data: {
      handler () {
        this.load(deepCopy(this.data))
      },
      deep: true
    }
  }
}
</script>
