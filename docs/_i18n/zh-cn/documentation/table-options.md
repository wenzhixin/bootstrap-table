# Table options []({{ site.repo }}/blob/master/docs/_i18n/{{ site.lang }}/documentation/table-options.md)

---

The table options is defined in `jQuery.fn.bootstrapTable.defaults`.

<table class="table"
       data-toggle="table"
       data-search="true"
       data-show-toggle="true"
       data-show-columns="true"
       data-mobile-responsive="true">
    <thead>
    <tr>
        <th>Name</th>
        <th>Attribute</th>
        <th>Type</th>
        <th>Default</th>
        <th>Description</th>
    </tr>
    </thead>
    <tbody>
    <tr>
        <td>-</td>
        <td>data-toggle</td>
        <td>String</td>
        <td>'table'</td>
        <td>Activate bootstrap table without writing JavaScript.</td>
    </tr>
    <tr>
        <td>classes</td>
        <td>data-classes</td>
        <td>String</td>
        <td>'table table-hover'</td>
        <td>The class name of table. By default, the table is bordered, you can add 'table-no-bordered' to remove table-bordered style.</td>
    </tr>
    <tr>
        <td>height</td>
        <td>data-height</td>
        <td>Number</td>
        <td>undefined</td>
        <td>The height of table.</td>
    </tr>
    <tr>
        <td>undefinedText</td>
        <td>data-undefined-text</td>
        <td>String</td>
        <td>'-'</td>
        <td>Defines the default undefined text.</td>
    </tr>
    <tr>
        <td>striped</td>
        <td>data-striped</td>
        <td>Boolean</td>
        <td>false</td>
        <td>True to stripe the rows.</td>
    </tr>
    <tr>
        <td>sortName</td>
        <td>data-sort-name</td>
        <td>String</td>
        <td>undefined</td>
        <td>Defines which column can be sorted.</td>
    </tr>
    <tr>
        <td>sortOrder</td>
        <td>data-sort-order</td>
        <td>String</td>
        <td>'asc'</td>
        <td>Defines the column sort order, can only be 'asc' or 'desc'.</td>
    </tr>
    <tr>
        <td>iconsPrefix</td>
        <td>data-icons-prefix</td>
        <td>String</td>
        <td>'glyphicon'</td>
        <td>Defines icon set name ('glyphicon' or 'fa' for FontAwesome). By default 'glyphicon' is used. </td>
    </tr>
    <tr>
        <td>icons</td>
        <td>data-icons</td>
        <td>Object</td>
        <td>{<br/>
        &nbsp;&nbsp;refresh: 'glyphicon-refresh icon-refresh',<br/>
        &nbsp;&nbsp;toggle: 'glyphicon-list-alt icon-list-alt',<br/>
        &nbsp;&nbsp;columns: 'glyphicon-th icon-th'<br/>
        }</td>
        <td>Defines icons that used for refresh, toggle and columns buttons</td>
    </tr>
    <tr>
        <td>columns</td>
        <td>-</td>
        <td>Array</td>
        <td>[]</td>
        <td>The table columns config object, see column properties for more details.
        </td>
    </tr>
    <tr>
        <td>data</td>
        <td>-</td>
        <td>Array</td>
        <td>[]</td>
        <td>The data to be loaded.</td>
    </tr>
    <tr>
        <td>ajax</td>
        <td>data-ajax</td>
        <td>Function</td>
        <td>undefined</td>
        <td>A method to replace ajax call. Should implement the same API as jQuery ajax method</td>
    </tr>
    <tr>
        <td>method</td>
        <td>data-method</td>
        <td>String</td>
        <td>'get'</td>
        <td>The method type to request remote data.</td>
    </tr>
    <tr>
        <td>url</td>
        <td>data-url</td>
        <td>String</td>
        <td>undefined</td>
        <td>A URL to request data from remote site.</td>
    </tr>
    <tr>
        <td>cache</td>
        <td>data-cache</td>
        <td>Boolean</td>
        <td>true</td>
        <td>False to disable caching of AJAX requests.</td>
    </tr>
    <tr>
        <td>contentType</td>
        <td>data-content-type</td>
        <td>String</td>
        <td>'application/json'</td>
        <td>The contentType of request remote data.</td>
    </tr>
    <tr>
        <td>dataType</td>
        <td>data-data-type</td>
        <td>String</td>
        <td>'json'</td>
        <td>The type of data that you are expecting back from the server.</td>
    </tr>
    <tr>
        <td>ajaxOptions</td>
        <td>data-ajax-options</td>
        <td>Object</td>
        <td>{}</td>
        <td>Additional options for submit ajax request. List of values: <a href="http://api.jquery.com/jQuery.ajax">http://api.jquery.com/jQuery.ajax</a>.</td>
    </tr>
    <tr>
        <td>queryParams</td>
        <td>data-query-params</td>
        <td>Function</td>
        <td>function(params) {<br>return params;<br>}</td>
        <td>
        When requesting remote data, you can send additional parameters by modifying queryParams. 
        If queryParamsType = 'limit', the params object contains: <br>
        limit, offset, search, sort, order
        Else, it contains: <br>
        pageSize, pageNumber, searchText, sortName, sortOrder. <br>
        Return false to stop request.
        </td>
    </tr>
    <tr>
        <td>queryParamsType</td>
        <td>data-query-params-type</td>
        <td>String</td>
        <td>'limit'</td>
        <td>Set 'limit' to send query params width RESTFul type.</td>
    </tr>
    <tr>
        <td>responseHandler</td>
        <td>data-response-handler</td>
        <td>Function</td>
        <td>function(res) {<br>return res;<br>}</td>
        <td>
        Before load remote data, handler the response data format, the parameters object contains: <br>
        res: the response data.
        </td>
    </tr>
    <tr>
        <td>pagination</td>
        <td>data-pagination</td>
        <td>Boolean</td>
        <td>false</td>
        <td>True to show a pagination toolbar on table bottom.</td>
    </tr>
    <tr>
        <td>sidePagination</td>
        <td>data-side-pagination</td>
        <td>String</td>
        <td>'client'</td>
        <td>Defines the side pagination of table, can only be 'client' or 'server'. Using 'server' side requires either setting the 'url' or 'ajax' option</td>
    </tr>
    <tr>
        <td>pageNumber</td>
        <td>data-page-number</td>
        <td>Number</td>
        <td>1</td>
        <td>When set pagination property, initialize the page number.</td>
    </tr>
    <tr>
        <td>pageSize</td>
        <td>data-page-size</td>
        <td>Number</td>
        <td>10</td>
        <td>When set pagination property, initialize the page size.</td>
    </tr>
    <tr>
        <td>pageList</td>
        <td>data-page-list</td>
        <td>Array</td>
        <td>[10, 25, 50, 100, All]</td>
        <td>When set pagination property, initialize the page size selecting list. If you include the 'All' option, all the records will be shown in your table</td>
    </tr>
    <tr>
        <td>selectItemName</td>
        <td>data-select-item-name</td>
        <td>String</td>
        <td>'btSelectItem'</td>
        <td>The name of radio or checkbox input.</td>
    </tr>
    <tr>
        <td>smartDisplay</td>
        <td>data-smart-display</td>
        <td>Boolean</td>
        <td>true</td>
        <td>True to display pagination or card view smartly.</td>
    </tr>
    <tr>
        <td>search</td>
        <td>data-search</td>
        <td>Boolean</td>
        <td>false</td>
        <td>Enable the search input.</td>
    </tr>
	<tr>
        <td>searchText</td>
        <td>data-search-text</td>
        <td>String</td>
        <td>''</td>
        <td>When set search property, initialize the search text.</td>
    </tr>
    <tr>
        <td>searchTimeOut</td>
        <td>data-search-time-out</td>
        <td>Number</td>
        <td>500</td>
        <td>Set timeout for search fire.</td>
    </tr>
    <tr>
        <td>trimOnSearch</td>
        <td>data-trim-on-search</td>
        <td>Boolean</td>
        <td>true</td>
        <td>True to trim spaces in search field.</td>
    </tr
    <tr>
        <td>showHeader</td>
        <td>data-show-header</td>
        <td>Boolean</td>
        <td>true</td>
        <td>False to hide the table header.</td>
    </tr>
    <tr>
        <td>showFooter</td>
        <td>data-show-footer</td>
        <td>Boolean</td>
        <td>false</td>
        <td>If true shows summary footer row</td>
    </tr>
    <tr>
        <td>showColumns</td>
        <td>data-show-columns</td>
        <td>Boolean</td>
        <td>false</td>
        <td>True to show the columns drop down list.</td>
    </tr>
    <tr>
        <td>showRefresh</td>
        <td>data-show-refresh</td>
        <td>Boolean</td>
        <td>false</td>
        <td>True to show the refresh button.</td>
    </tr>
    <tr>
        <td>showToggle</td>
        <td>data-show-toggle</td>
        <td>Boolean</td>
        <td>false</td>
        <td>True to show the toggle button to toggle table / card view.
        </td>
    </tr>
    <tr>
        <td>showPaginationSwitch</td>
        <td>data-show-pagination-switch</td>
        <td>Boolean</td>
        <td>false</td>
        <td>True to show the pagination switch button.</td>
    </tr>
    <tr>
        <td>minimumCountColumns</td>
        <td>data-minimum-count-columns</td>
        <td>Number</td>
        <td>1</td>
        <td>The minimum count columns to hide of the columns drop down list.
        </td>
    </tr>
    <tr>
        <td>idField</td>
        <td>data-id-field</td>
        <td>String</td>
        <td>undefined</td>
        <td>Indicate which field is an identity field.</td>
    </tr>
    <tr>
        <td>uniqueId</td>
        <td>data-unique-id</td>
        <td>String</td>
        <td>undefined</td>
        <td>Indicate an unique identifier for each row.</td>
    </tr>
    <tr>
        <td>cardView</td>
        <td>data-card-view</td>
        <td>Boolean</td>
        <td>false</td>
        <td>True to show card view table, for example mobile view.</td>
    </tr>
    <tr>
        <td>detailView</td>
        <td>data-detail-view</td>
        <td>Boolean</td>
        <td>false</td>
        <td>设置为 True 可以显示详细页面模式。</td>
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
        <td>Indicate how to align the search input. 'left', 'right' can be used.</td>
    </tr>
    <tr>
        <td>buttonsAlign</td>
        <td>data-buttons-align</td>
        <td>String</td>
        <td>'right'</td>
        <td>Indicate how to align the toolbar buttons. 'left', 'right' can be used.</td>
    </tr>
    <tr>
        <td>toolbarAlign</td>
        <td>data-toolbar-align</td>
        <td>String</td>
        <td>'left'</td>
        <td>Indicate how to align the custom toolbar. 'left', 'right' can be used.</td>
    </tr>
    <tr>
        <td>paginationVAlign</td>
        <td>data-pagination-v-align</td>
        <td>String</td>
        <td>'bottom'</td>
        <td>Indicate how to align the pagination. 'top', 'bottom', 'both' (put the pagination on top and bottom)  can be used.</td>
    </tr>
    <tr>
        <td>paginationHAlign</td>
        <td>data-pagination-h-align</td>
        <td>String</td>
        <td>'right'</td>
        <td>Indicate how to align the pagination. 'left', 'right' can be used.</td>
    </tr>
    <tr>
        <td>paginationDetailHAlign</td>
        <td>data-pagination-detail-h-align</td>
        <td>String</td>
        <td>'left'</td>
        <td>Indicate how to align the pagination detail. 'left', 'right' can be used.</td>
    </tr>
    <tr>
        <td>paginationFirstText</td>
        <td>data-pagination-first-text</td>
        <td>String</td>
        <td>'&lt;&lt;'</td>
        <td>Indicate the icon or text to be shown in the pagination detail, the first button of the pagination detail.</td>
    </tr>
    <tr>
        <td>paginationPreText</td>
        <td>data-pagination-pre-text</td>
        <td>String</td>
        <td>'&lt;'</td>
        <td>Indicate the icon or text to be shown in the pagination detail, the previous button.</td>
    </tr>
    <tr>
        <td>paginationNextText</td>
        <td>data-pagination-next-text</td>
        <td>String</td>
        <td>'&gt;'</td>
        <td>Indicate the icon or text to be shown in the pagination detail, the next button.</td>
    </tr>
    <tr>
        <td>paginationLastText</td>
        <td>data-pagination-last-text</td>
        <td>String</td>
        <td>'&gt;&gt;'</td>
        <td>Indicate the icon or text to be shown in the pagination detail, the last button.</td>
    </tr>
    <tr>
        <td>clickToSelect</td>
        <td>data-click-to-select</td>
        <td>Boolean</td>
        <td>false</td>
        <td>True to select checkbox or radiobox when click rows.</td>
    </tr>
    <tr>
        <td>singleSelect</td>
        <td>data-single-select</td>
        <td>Boolean</td>
        <td>false</td>
        <td>True to allow checkbox selecting only one row.</td>
    </tr>
    <tr>
        <td>toolbar</td>
        <td>data-toolbar</td>
        <td>String</td>
        <td>undefined</td>
        <td>
        A jQuery selector that indicate the toolbar, for example:<br>
        #toolbar, .toolbar.
        </td>
    </tr>
    <tr>
        <td>checkboxHeader</td>
        <td>data-checkbox-header</td>
        <td>Boolean</td>
        <td>true</td>
        <td>False to hide check-all checkbox in header row.</td>
    </tr>
    <tr>
        <td>maintainSelected</td>
        <td>data-maintain-selected</td>
        <td>Boolean</td>
        <td>false</td>
        <td>True to maintain selected rows on change page and search.</td>
    </tr>
    <tr>
        <td>sortable</td>
        <td>data-sortable</td>
        <td>Boolean</td>
        <td>true</td>
        <td>False to disable sortable of all columns.</td>
    </tr>
    <tr>
        <td>rowStyle</td>
        <td>data-row-style</td>
        <td>Function</td>
        <td>{}</td>
        <td>
        The row style formatter function, take two parameters: <br>
        row: the row record data.<br>
        index: the row index.<br>
        Support classes or css.
        </td>
    </tr>
    <tr>
        <td>rowAttributes</td>
        <td>data-row-attributes</td>
        <td>Function</td>
        <td>{}</td>
        <td>
        The row attribute formatter function, take two parameters: <br>
        row: the row record data.<br>
        index: the row index.<br>
        Support all custom attributes.
        </td>
    </tr>
    </tbody>
</table>
