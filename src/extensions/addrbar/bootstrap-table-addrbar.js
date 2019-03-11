/**
 * @author: general
 * @website: note.generals.space
 * @email: generals.space@gmail.com
 * @github: https://github.com/generals-space/bootstrap-table-addrbar
 * @update: zhixin wen <wenzhixin2010@gmail.com>
 */

($ => {
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

  $.BootstrapTable = class extends $.BootstrapTable {
    init () {
      // 拥有addrbar选项并且其值为true的才会继续执行
      if (this.options.addrbar) {
        // 标志位, 初始加载后关闭
        this.addrbarInit = true
        const _prefix = this.options.addrPrefix || ''

        // 优先级排序: 用户指定值最优先, 未指定时从地址栏获取, 未获取到时采用默认值
        this.options.pageSize = this.options.pageSize || (
          _GET(`${_prefix}limit`) ? parseInt(_GET(`${_prefix}limit`)) : $.BootstrapTable.DEFAULTS.pageSize
        )
        this.options.pageNumber = this.options.pageNumber || (
          _GET(`${_prefix}page`) ? parseInt(_GET(`${_prefix}page`)) : $.BootstrapTable.DEFAULTS.pageNumber
        )
        this.options.sortOrder = this.options.sortOrder || (
          _GET(`${_prefix}order`) ? _GET(`${_prefix}order`) : $.BootstrapTable.DEFAULTS.sortOrder
        )
        this.options.sortName = this.options.sortName || (
          _GET(`${_prefix}sort`) ? _GET(`${_prefix}sort`) : 'id'
        )
        this.options.searchText = this.options.searchText || (
          _GET(`${_prefix}search`) ? _GET(`${_prefix}search`) : $.BootstrapTable.DEFAULTS.searchText
        )

        const _onLoadSuccess = this.options.onLoadSuccess

        this.options.onLoadSuccess = data => {
          if (this.addrbarInit) {
            this.addrbarInit = false
          } else {
            const params = {}
            params[`${_prefix}page`] = this.options.pageNumber,
            params[`${_prefix}limit`] = this.options.pageSize,
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
      super.init()
    }
  }
})(jQuery)
