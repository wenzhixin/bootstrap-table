/**
 * @author: general
 * @website: note.generals.space
 * @email: generals.space@gmail.com
 * @github: https://github.com/generals-space/bootstrap-table-addrbar
 * @update: zhixin wen <wenzhixin2010@gmail.com>
 */

/*
 * function: 获取浏览器地址栏中的指定参数.
 * key: 参数名
 * url: 默认为当前地址栏
 */
function _GET (key, url = window.location.search) {
  /*
   * 注意这里正则表达式的书写方法
   * (^|&)key匹配: 直接以key开始或以&key开始的字符串
   * 同理(&|$)表示以&结束或是直接结束的字符串
   * ...当然, 我并不知道这种用法.
   */
  const reg = new RegExp(`(^|&)${key}=([^&]*)(&|$)`)
  const result = url.substr(1).match(reg)

  if (result) {
    return decodeURIComponent(result[2])
  }
  return null
}

/*
 * function: 根据给定参数生成url地址
 * var dic = {name: 'genreal', age: 24}
 * var url = 'https://www.baidu.com?age=22';
 * _buildUrl(dic, url);
 * 将得到"https://www.baidu.com?age=24&name=genreal"
 * 哦, 忽略先后顺序吧...
 *
 * 补充: 可以参考浏览器URLSearchParams对象, 更加方便和强大.
 * 考虑到兼容性, 暂时不使用这个工具.
 */

function _buildUrl (dict, url = window.location.search) {
  for (const [key, val] of Object.entries(dict)) {
    // 搜索name=general这种形式的字符串(&是分隔符)
    const pattern = `${key}=([^&]*)`
    const targetStr = `${key}=${val}`

    /*
     * 如果目标url中包含了key键, 我们需要将它替换成我们自己的val
     * 不然就直接添加好了.
     */
    if (url.match(pattern)) {
      const tmp = new RegExp(`(${key}=)([^&]*)`, 'gi')
      url = url.replace(tmp, targetStr)
    } else {
      const seperator = url.match('[?]') ? '&' : '?'
      url = url + seperator + targetStr
    }
  }
  if (location.hash) {
    url += location.hash
  }
  return url
}

$.extend($.fn.bootstrapTable.defaults, {
  addrbar: false,
  addrPrefix: ''
})

$.BootstrapTable = class extends $.BootstrapTable {
  init (...args) {
    if (
      this.options.pagination &&
      this.options.sidePagination === 'server' &&
      this.options.addrbar
    ) {
      // 标志位, 初始加载后关闭
      this.addrbarInit = true

      this.options.pageNumber = +this.getDefaultOptionValue('pageNumber', 'page')
      this.options.pageSize = +this.getDefaultOptionValue('pageSize', 'size')
      this.options.sortOrder = this.getDefaultOptionValue('sortOrder', 'order')
      this.options.sortName = this.getDefaultOptionValue('sortName', 'sort')
      this.options.searchText = this.getDefaultOptionValue('searchText', 'search')

      const _prefix = this.options.addrPrefix || ''
      const _onLoadSuccess = this.options.onLoadSuccess

      this.options.onLoadSuccess = data => {
        if (this.addrbarInit) {
          this.addrbarInit = false
        } else {
          const params = {}
          params[`${_prefix}page`] = this.options.pageNumber,
          params[`${_prefix}size`] = this.options.pageSize,
          params[`${_prefix}order`] = this.options.sortOrder,
          params[`${_prefix}sort`] = this.options.sortName,
          params[`${_prefix}search`] = this.options.searchText
          // h5提供的修改浏览器地址栏的方法
          window.history.pushState({}, '', _buildUrl(params))
        }

        if (_onLoadSuccess) {
          _onLoadSuccess.call(this, data)
        }
      }
    }
    super.init(...args)
  }

  /*
   * Priority order:
   * The value specified by the user has the highest priority.
   * If it is not specified, it will be obtained from the address bar.
   * If it is not obtained, the default value will be used.
   */
  getDefaultOptionValue (optionName, prefixName) {
    if (this.options[optionName] !== $.BootstrapTable.DEFAULTS[optionName]) {
      return this.options[optionName]
    }

    return _GET(`${this.options.addrPrefix || ''}${prefixName}`) ||
      $.BootstrapTable.DEFAULTS[optionName]
  }
}
