# 表格参数 []({{ site.repo }}/blob/develop/docs/_i18n/{{ site.lang }}/documentation/table-options.md)

---

表格的参数定义在 `jQuery.fn.bootstrapTable.defaults`。

<table class="table"
       id="t"
       data-search="true"
       data-show-toggle="true"
       data-show-columns="true"
       data-mobile-responsive="true">
    <thead>
    <tr>
        <th>名称</th>
        <th>标签</th>
        <th>类型</th>
        <th>默认</th>
        <th>描述</th>
    </tr>
    </thead>
    <tbody>
    <tr>
        <td>-</td>
        <td>data-toggle</td>
        <td>String</td>
        <td>'table'</td>
        <td>不用写 JavaScript 直接启用表格。</td>
    </tr>
    <tr>
        <td>classes</td>
        <td>data-classes</td>
        <td>String</td>
        <td>'table table-hover'</td>
        <td>表格的类名称。默认情况下，表格是有边框的，你可以添加 'table-no-bordered' 来删除表格的边框样式。</td>
    </tr>
    <tr>
        <td>sortClass</td>
        <td>data-sort-class</td>
        <td>String</td>
        <td>undefined</td>
        <td>被排序的td元素的类名。</td>
    </tr>
    <tr>
        <td>height</td>
        <td>data-height</td>
        <td>Number</td>
        <td>undefined</td>
        <td>定义表格的高度。</td>
    </tr>
    <tr>
        <td>undefinedText</td>
        <td>data-undefined-text</td>
        <td>String</td>
        <td>'-'</td>
        <td>当数据为 undefined 时显示的字符。</td>
    </tr>
    <tr>
        <td>striped</td>
        <td>data-striped</td>
        <td>Boolean</td>
        <td>false</td>
        <td>设置为 <code>true</code> 会有隔行变色效果。</td>
    </tr>
    <tr>
        <td>sortName</td>
        <td>data-sort-name</td>
        <td>String</td>
        <td>undefined</td>
        <td>定义排序列，通过url方式获取数据填写字段名，否则填写下标。</td>
    </tr>
    <tr>
        <td>sortOrder</td>
        <td>data-sort-order</td>
        <td>String</td>
        <td>'asc'</td>
        <td>定义排序方式，'asc' 或者 'desc'。</td>
    </tr>
    <tr>
        <td>sortStable</td>
        <td>data-sort-stable</td>
        <td>Boolean</td>
        <td>false</td>
        <td>设置为 <code>true</code> 将获得稳定的排序，我们会添加<code>\_position</code>属性到 row 数据中。
        </td>
    </tr>
    <tr>
        <td>iconsPrefix</td>
        <td>data-icons-prefix</td>
        <td>String</td>
        <td>'glyphicon'</td>
        <td>定义字体库 ('Glyphicon' or 'fa' for FontAwesome)，使用"fa"时需引用 FontAwesome，并且配合 icons 属性实现效果。<br>
		Glyphicon 集成于Bootstrap可免费使用，参考：
        <a href="http://glyphicons.com/">http://glyphicons.com/</a><br>
		FontAwesome 参考：
        <a href="http://fortawesome.github.io/">http://fortawesome.github.io/</a>
		</td>
    </tr>
    <tr>
        <td>icons</td>
        <td>data-icons</td>
        <td>Object</td>
        <td>{<br/>
        &nbsp;&nbsp;paginationSwitchDown: 'glyphicon-collapse-down icon-chevron-down',<br/>
        &nbsp;&nbsp;paginationSwitchUp: 'glyphicon-collapse-up icon-chevron-up',<br/>
        &nbsp;&nbsp;refresh: 'glyphicon-refresh icon-refresh'<br/>
		&nbsp;&nbsp;toggle: 'glyphicon-list-alt icon-list-alt'<br/>
		&nbsp;&nbsp;columns: 'glyphicon-th icon-th'<br/>
		&nbsp;&nbsp;detailOpen: 'glyphicon-plus icon-plus'<br/>
		&nbsp;&nbsp;detailClose: 'glyphicon-minus icon-minus'<br/>
        }</td>
        <td>自定义图标</td>
    </tr>
    <tr>
        <td>columns</td>
        <td>-</td>
        <td>Array</td>
        <td>[]</td>
        <td>列配置项，详情请查看 列参数 表格.
        </td>
    </tr>
    <tr>
        <td>data</td>
        <td>-</td>
        <td>Array</td>
        <td>[]</td>
        <td>加载json格式的数据。</td>
    </tr>
    <tr>
        <td>ajax</td>
        <td>data-ajax</td>
        <td>Function</td>
        <td>undefined</td>
        <td>自定义 AJAX 方法，须实现 jQuery AJAX API。</td>
    </tr>
    <tr>
        <td>method</td>
        <td>data-method</td>
        <td>String</td>
        <td>'get'</td>
        <td>服务器数据的请求方式 'get' 或 'post'。</td>
    </tr>
    <tr>
        <td>url</td>
        <td>data-url</td>
        <td>String</td>
        <td>undefined</td>
        <td>服务器数据的加载地址。</td>
    </tr>
    <tr>
        <td>cache</td>
        <td>data-cache</td>
        <td>Boolean</td>
        <td>true</td>
        <td>设置为 <code>false</code> 禁用 AJAX 数据缓存。</td>
    </tr>
    <tr>
        <td>contentType</td>
        <td>data-content-type</td>
        <td>String</td>
        <td>'application/json'</td>
        <td>发送到服务器的数据编码类型。</td>
    </tr>
    <tr>
        <td>dataType</td>
        <td>data-data-type</td>
        <td>String</td>
        <td>'json'</td>
        <td>服务器返回的数据类型。</td>
    </tr>
    <tr>
        <td>ajaxOptions</td>
        <td>data-ajax-options</td>
        <td>Object</td>
        <td>{}</td>
        <td>提交ajax请求时的附加参数，可用参数列请查看<a href="http://api.jquery.com/jQuery.ajax">http://api.jquery.com/jQuery.ajax</a>.</td>
    </tr>
    <tr>
        <td>queryParams</td>
        <td>data-query-params</td>
        <td>Function</td>
        <td>function(params) {<br>return params;<br>}</td>
        <td>
		请求服务器数据时，你可以通过重写参数的方式添加一些额外的参数，例如 toolbar 中的参数
		如果 queryParamsType = 'limit' ,返回参数必须包含<br>
        limit, offset, search, sort, order
		否则, 需要包含: <br>
        pageSize, pageNumber, searchText, sortName, sortOrder. <br>
        返回false将会终止请求。
        </td>
    </tr>
    <tr>
        <td>queryParamsType</td>
        <td>data-query-params-type</td>
        <td>String</td>
        <td>'limit'</td>
        <td>设置为 'limit' 则会发送符合 RESTFul 格式的参数。</td>
    </tr>
    <tr>
        <td>responseHandler</td>
        <td>data-response-handler</td>
        <td>Function</td>
        <td>function(res) {<br>return res;<br>}</td>
        <td>
		加载服务器数据之前的处理程序，可以用来格式化数据。<br />
        参数：res为从服务器请求到的数据。
        </td>
    </tr>
    <tr>
        <td>pagination</td>
        <td>data-pagination</td>
        <td>Boolean</td>
        <td>false</td>
        <td>设置为 <code>true</code> 会在表格底部显示分页条。</td>
    </tr>
    <tr>
        <td>paginationLoop</td>
        <td>data-pagination-loop</td>
        <td>Boolean</td>
        <td>true</td>
        <td>设置为 <code>true</code> 启用分页条无限循环的功能。</td>
    </tr>
    <tr>
        <td>onlyInfoPagination</td>
        <td>data-only-info-pagination</td>
        <td>Boolean</td>
        <td>false</td>
        <td>设置为 <code>true</code> 只显示总数据数，而不显示分页按钮。需要设置 pagination='true'。</td>
    </tr>
    <tr>
        <td>sidePagination</td>
        <td>data-side-pagination</td>
        <td>String</td>
        <td>'client'</td>
        <td>设置在哪里进行分页，可选值为 'client' 或者 'server'。设置 'server'时，必须设置服务器数据地址（url）或者重写ajax方法。</td>
    </tr>
    <tr>
        <td>pageNumber</td>
        <td>data-page-number</td>
        <td>Number</td>
        <td>1</td>
        <td>如果设置了分页，首页页码。</td>
    </tr>
    <tr>
        <td>pageSize</td>
        <td>data-page-size</td>
        <td>Number</td>
        <td>10</td>
        <td>如果设置了分页，页面数据条数。</td>
    </tr>
    <tr>
        <td>pageList</td>
        <td>data-page-list</td>
        <td>Array</td>
        <td>[10, 25, 50, 100, All]</td>
        <td>如果设置了分页，设置可供选择的页面数据条数。设置为 All 或者 Unlimited，则显示所有记录。</td>
    </tr>
    <tr>
        <td>selectItemName</td>
        <td>data-select-item-name</td>
        <td>String</td>
        <td>'btSelectItem'</td>
        <td>radio 或者 checkbox 的字段 name 名。</td>
    </tr>
    <tr>
        <td>smartDisplay</td>
        <td>data-smart-display</td>
        <td>Boolean</td>
        <td>true</td>
        <td>设置为 true 是程序自动判断显示分页信息和 card 视图。</td>
    </tr>
    <tr>
        <td>escape</td>
        <td>data-escape</td>
        <td>Boolean</td>
        <td>false</td>
        <td>转义HTML字符串，替换 <code>&</code>, <code><</code>,
        <code>></code>, <code>"</code>, <code>\`</code>, 和 <code>'</code> 字符。</td>
    </tr>
    <tr>
        <td>search</td>
        <td>data-search</td>
        <td>Boolean</td>
        <td>false</td>
        <td>是否启用搜索框。</td>
    </tr>
    <tr>
        <td>searchOnEnterKey</td>
        <td>data-search-on-enter-key</td>
        <td>Boolean</td>
        <td>false</td>
        <td>设置为 <code>true</code>时，按回车触发搜索方法，否则自动触发搜索方法。</td>
    </tr>
    <tr>
        <td>strictSearch</td>
        <td>data-strict-search</td>
        <td>Boolean</td>
        <td>false</td>
        <td>设置为 <code>true</code>启用全匹配搜索，否则为模糊搜索。</td>
    </tr>
	<tr>
        <td>searchText</td>
        <td>data-search-text</td>
        <td>String</td>
        <td>''</td>
        <td>初始化搜索文字。</td>
    </tr>
    <tr>
        <td>searchTimeOut</td>
        <td>data-search-time-out</td>
        <td>Number</td>
        <td>500</td>
        <td>设置搜索超时时间。</td>
    </tr>
    <tr>
        <td>trimOnSearch</td>
        <td>data-trim-on-search</td>
        <td>Boolean</td>
        <td>true</td>
        <td>设置为 <code>true</code> 将自动去掉搜索字符的前后空格。</td>
    </tr
    <tr>
        <td>showHeader</td>
        <td>data-show-header</td>
        <td>Boolean</td>
        <td>true</td>
        <td>是否显示列头。</td>
    </tr>
    <tr>
        <td>showFooter</td>
        <td>data-show-footer</td>
        <td>Boolean</td>
        <td>false</td>
        <td>是否显示列脚。</td>
    </tr>
    <tr>
        <td>showColumns</td>
        <td>data-show-columns</td>
        <td>Boolean</td>
        <td>false</td>
        <td>是否显示内容列下拉框。</td>
    </tr>
    <tr>
        <td>showRefresh</td>
        <td>data-show-refresh</td>
        <td>Boolean</td>
        <td>false</td>
        <td>是否显示刷新按钮。</td>
    </tr>
    <tr>
        <td>showToggle</td>
        <td>data-show-toggle</td>
        <td>Boolean</td>
        <td>false</td>
        <td>是否显示切换视图（table/card）按钮。
        </td>
    </tr>
    <tr>
        <td>showPaginationSwitch</td>
        <td>data-show-pagination-switch</td>
        <td>Boolean</td>
        <td>false</td>
        <td>是否显示切换分页按钮。</td>
    </tr>
    <tr>
        <td>showFullscreen</td>
        <td>data-show-fullscreen</td>
        <td>Boolean</td>
        <td>false</td>
        <td>是否显示全屏按钮。</td>
    </tr>
    <tr>
        <td>minimumCountColumns</td>
        <td>data-minimum-count-columns</td>
        <td>Number</td>
        <td>1</td>
        <td>
        最小隐藏列的数量。
        </td>
    </tr>
    <tr>
        <td>idField</td>
        <td>data-id-field</td>
        <td>String</td>
        <td>undefined</td>
        <td>指定主键列。</td>
    </tr>
    <tr>
        <td>uniqueId</td>
        <td>data-unique-id</td>
        <td>String</td>
        <td>undefined</td>
        <td>对每一行指定唯一标识符。</td>
    </tr>
    <tr>
        <td>cardView</td>
        <td>data-card-view</td>
        <td>Boolean</td>
        <td>false</td>
        <td>设置为 <code>true</code>将显示card视图，适用于移动设备。否则为table试图，适用于pc端。</td>
    </tr>
    <tr>
        <td>detailView</td>
        <td>data-detail-view</td>
        <td>Boolean</td>
        <td>false</td>
        <td>设置为 <code>true</code> 可以显示详细页面模式。</td>
    </tr>
    <tr>
        <td>detailFormatter</td>
        <td>data-detail-formatter</td>
        <td>Function</td>
        <td>function(index, row) {<br>return '';<br>}</td>
        <td>格式化详细页面模式的视图。</td>
    </tr>
    <tr>
        <td>searchAlign</td>
        <td>data-search-align</td>
        <td>String</td>
        <td>'right'</td>
        <td>指定 搜索框 水平方向的位置。'left' 或 'right'。</td>
    </tr>
    <tr>
        <td>buttonsAlign</td>
        <td>data-buttons-align</td>
        <td>String</td>
        <td>'right'</td>
        <td>指定 按钮栏 水平方向的位置。'left' 或 'right'。</td>
    </tr>
    <tr>
        <td>toolbarAlign</td>
        <td>data-toolbar-align</td>
        <td>String</td>
        <td>'left'</td>
        <td>指定 toolbar 水平方向的位置。'left' 或 'right'。</td>
    </tr>
    <tr>
        <td>paginationVAlign</td>
        <td>data-pagination-v-align</td>
        <td>String</td>
        <td>'bottom'</td>
        <td>指定 分页条 在垂直方向的位置。'top'，'bottom' 或 'both'。</td>
    </tr>
    <tr>
        <td>paginationHAlign</td>
        <td>data-pagination-h-align</td>
        <td>String</td>
        <td>'right'</td>
        <td>指定 分页条 在水平方向的位置。'left' 或 'right'。</td>
    </tr>
    <tr>
        <td>paginationDetailHAlign</td>
        <td>data-pagination-detail-h-align</td>
        <td>String</td>
        <td>'left'</td>
        <td>指定 分页详细信息 在水平方向的位置。'left' 或 'right'。</td>
    </tr>
    <tr>
        <td>paginationPreText</td>
        <td>data-pagination-pre-text</td>
        <td>String</td>
        <td>'&lt;'</td>
        <td>指定分页条中上一页按钮的图标或文字。</td>
    </tr>
    <tr>
        <td>paginationNextText</td>
        <td>data-pagination-next-text</td>
        <td>String</td>
        <td>'&gt;'</td>
        <td>指定分页条中下一页按钮的图标或文字。</td>
    </tr>
    <tr>
        <td>clickToSelect</td>
        <td>data-click-to-select</td>
        <td>Boolean</td>
        <td>false</td>
        <td>设置 true 将在点击行时，自动选择 rediobox 和 checkbox。</td>
    </tr>
    <tr>
        <td>ignoreClickToSelectOn</td>
        <td>data-ignore-click-to-select-on</td>
        <td>Function</td>
        <td><code>{ return $.inArray(element.tagName, ['A', 'BUTTON']); }</code></td>
        <td>
        包含一个参数：<br>
        element: 点击的元素。<br>
        返回 true 是点击事件会被忽略，返回 false 将会自动选中。该选项只有在 clickToSelect 为 true 时才生效。
        </td>
    </tr>
    <tr>
        <td>singleSelect</td>
        <td>data-single-select</td>
        <td>Boolean</td>
        <td>false</td>
        <td>设置 true 将禁止多选。</td>
    </tr>
    <tr>
        <td>toolbar</td>
        <td>data-toolbar</td>
        <td>String</td>
        <td>undefined</td>
        <td>
        一个jQuery 选择器，指明自定义的 toolbar。例如:<br>
        #toolbar, .toolbar.
        </td>
    </tr>
    <tr>
        <td>buttonsToolbar</td>
        <td>data-buttons-toolbar</td>
        <td>String | Node</td>
        <td>undefined</td>
        <td>
        一个jQuery 选择器，指明自定义的 buttons toolbar。例如:<br>
        #buttons-toolbar, .buttons-toolbar 或 DOM 节点。
        </td>
    </tr>
    <tr>
        <td>checkboxHeader</td>
        <td>data-checkbox-header</td>
        <td>Boolean</td>
        <td>true</td>
        <td>设置 false 将在列头隐藏全选复选框。</td>
    </tr>
    <tr>
        <td>maintainSelected</td>
        <td>data-maintain-selected</td>
        <td>Boolean</td>
        <td>false</td>
        <td>设置为 <code>true</code> 在点击分页按钮或搜索按钮时，将记住checkbox的选择项。</td>
    </tr>
    <tr>
        <td>sortable</td>
        <td>data-sortable</td>
        <td>Boolean</td>
        <td>true</td>
        <td>设置为<code>false</code> 将禁止所有列的排序。</td>
    </tr>
    <tr>
        <td>silentSort</td>
        <td>data-silent-sort</td>
        <td>Boolean</td>
        <td>true</td>
        <td>设置为 <code>false</code> 将在点击分页按钮时，自动记住排序项。仅在 sidePagination设置为 <code>server</code>时生效。</td>
    </tr>
    <tr>
        <td>rowStyle</td>
        <td>data-row-style</td>
        <td>Function</td>
        <td>function(row,index) {<br>return class;<br>}</td>
        <td>
        自定义行样式 参数为：<br>
        row: 行数据<br>
        index: 行下标<br>
        返回值可以为class或者css
        </td>
    </tr>
    <tr>
        <td>rowAttributes</td>
        <td>data-row-attributes</td>
        <td>Function</td>
        <td>function(row,index) {<br>return attributes;<br>}</td>
        <td>
        自定义行属性 参数为：<br>
        row: 行数据<br>
        index: 行下标<br>
        返回值可以为class或者css
        支持所有自定义属性
        </td>
    </tr>
    <tr>
        <td>customSearch</td>
        <td>data-custom-search</td>
        <td>Function</td>
        <td>$.noop</td>
        <td>
        自定义搜索方法来替代内置的搜索功能，它包含一个参数：<br>
        text：搜索文字。<br>
        用法示例：<br>
        <pre>
        function customSearch(text) {
            //Search logic here.
            //You must use `this.data` array in order to filter the data. NO use `this.options.data`.
        }
        </pre>
        </td>
    </tr>
    <tr>
        <td>customSort</td>
        <td>data-custom-sort</td>
        <td>Function</td>
        <td>$.noop</td>
        <td>
        自定义排序方法来替代内置的搜索功能，它包含一个参数：<br>
        sortName: 排序名。<br>
        sortOrder: 排序顺序。<br>
        用法示例：<br>
        <pre>
        function customSort(sortName, sortOrder) {
            //Sort logic here.
            //You must use `this.data` array in order to sort the data. NO use `this.options.data`.
        }
        </pre>
        </td>
        </tr>
    </tbody>
</table>
