# 方法 []({{ site.repo }}/blob/develop/docs/_i18n/{{ site.lang }}/documentation/methods.md)

---

使用方法的语法：`$('#table').bootstrapTable('method', parameter);`。

<table class="table"
       id="m"
       data-search="true"
       data-show-toggle="true"
       data-show-columns="true"
       data-mobile-responsive="true">
    <thead>
    <tr>
        <th>名称</th>
        <th>参数</th>
        <th>描述</th>
        <th data-formatter="methodFormatter"
            data-align="center"
            data-valign="middle">例子</th>
    </tr>
    </thead>
    <tbody>
    <tr>
        <td>getOptions</td>
        <td>none</td>
        <td>返回表格的 Options。</td>
        <td>getOptions</td>
    </tr>
    <tr>
        <td>getSelections</td>
        <td>none</td>
        <td>返回所选的行，当没有选择任何行的时候返回一个空数组。</td>
        <td>getSelections</td>
    </tr>
    <tr>
        <td>getAllSelections</td>
        <td>none</td>
        <td>返回所有选择的行，包括搜索过滤前的，当没有选择任何行的时候返回一个空数组。</td>
        <td>getAllSelections</td>
    </tr>
    <tr>
        <td>getData</td>
        <td>useCurrentPage</td>
        <td>或者当前加载的数据。假如设置 useCurrentPage 为 true，则返回当前页的数据。</td>
        <td>getData</td>
    </tr>
    <tr>
        <td>getRowByUniqueId</td>
        <td>id</td>
        <td>根据 uniqueId 获取行数据。</td>
        <td>getRowByUniqueId</td>
    </tr>
    <tr>
        <td>load</td>
        <td>data</td>
        <td>加载数据到表格中，旧数据会被替换。</td>
        <td>load</td>
    </tr>
    <tr>
        <td>showAllColumns</td>
        <td>none</td>
        <td>显示所有列。</td>
        <td>showAllColumns</td>
    </tr>
    <tr>
        <td>hideAllColumns</td>
        <td>none</td>
        <td>隐藏所有列。</td>
        <td>hidAllColumns</td>
    </tr>
    <tr>
        <td>append</td>
        <td>data</td>
        <td>添加数据到表格在现有数据之后。</td>
        <td>append</td>
    </tr>
    <tr>
        <td>prepend</td>
        <td>data</td>
        <td>插入数据到表格在现有数据之前。</td>
        <td>prepend</td>
    </tr>
    <tr>
        <td>remove</td>
        <td>params</td>
        <td>
        从表格中删除数据，包括两个参数：
        field: 需要删除的行的 field 名称，<br>
        values: 需要删除的行的值，类型为数组。<br>
        </td>
        <td>remove</td>
    </tr>
    <tr>
        <td>removeAll</td>
        <td>-</td>
        <td>删除表格所有数据。</td>
        <td>removeAll</td>
    </tr>
    <tr>
        <td>removeByUniqueId</td>
        <td>id</td>
        <td>根据 uniqueId 删除指定的行。</td>
        <td>removeByUniqueId</td>
    </tr>
    <tr>
        <td>insertRow</td>
        <td>params</td>
        <td>
        插入新行，参数包括：<br>
        index: 要插入的行的 index，<br>
        row: 行的数据，Object 对象。
        </td>
        <td>insertRow</td>
    </tr>
    <tr>
        <td>updateRow</td>
        <td>params</td>
        <td>
        更新指定的行，参数包括：<br>
        index: 要更新的行的 index，<br>
        row: 行的数据，Object 对象。
        </td>
        <td>updateRow</td>
    </tr>
	<tr>
        <td>showRow</td>
        <td>params</td>
        <td>显示指定的行，参数包括：<br>
        index: 要更新的行的 index 或者 uniqueId，<br>
        isIdField: 指定 index 是否为 uniqueid。</td>
        <td>showRow-hideRow</td>
    </tr>
    <tr>
        <td>hideRow</td>
        <td>params</td>
        <td>显示指定的行，参数包括：<br>
        index: 要更新的行的 index，<br>
        uniqueId: 或者要更新的行的 uniqueid。
        <td>showRow-hideRow</td>
    </tr>
    <tr>
        <td>getHiddenRows</td>
        <td>show</td>
        <td>获取所有隐藏的行，如果show参数为true，行将再次显示，否则，只返回隐藏的行。</td>
    </tr>
    <tr>
        <td>mergeCells</td>
        <td>options</td>
        <td>
        将某些单元格合并到一个单元格，选项包含以下属性： <br>
        index: 行索引，<br>
        field: 字段名称，<br>
        rowspan: 要合并的rowspan数量，<br>
        colspan: 要合并的colspan数量。
        </td>
    </tr>
    <tr>
        <td>updateCell</td>
        <td>params</td>
        <td>
        更新一个单元格，params包含以下属性：<br>
        index: 行索引。<br>
        field: 字段名称。<br>
        value: 新字段值。
        </td>
    </tr>
    <tr>
        <td>refresh</td>
        <td>params</td>
        <td>刷新远程服务器数据，可以设置<code>{silent: true}</code>以静默方式刷新数据，并设置<code>{url: newUrl}</code>更改URL。 要提供特定于此请求的查询参数，请设置<code>{query: {foo: 'bar'}}</code>。</td>
    </tr>
    <tr>
        <td>refreshOptions</td>
        <td>options</td>
        <td>刷新选项。</td>
    </tr>
    <tr>
        <td>resetSearch</td>
        <td>text</td>
        <td>设置搜索文本。</td>
    </tr>
    <tr>
        <td>showLoading</td>
        <td>none</td>
        <td>显示加载状态。</td>
    </tr>
    <tr>
        <td>hideLoading</td>
        <td>none</td>
        <td>隐藏加载状态。</td>
    </tr>
    <tr>
        <td>checkAll</td>
        <td>none</td>
        <td>选中当前页面所有行。</td>
    </tr>
    <tr>
        <td>uncheckAll</td>
        <td>none</td>
        <td>取消选中当前页面所有行。</td>
    </tr>
    <tr>
        <td>check</td>
        <td>index</td>
        <td>选中某一行，行索引从0开始。</td>
    </tr>
    <tr>
        <td>uncheck</td>
        <td>index</td>
        <td>取消选中某一行，行索引从0开始。</td>
    </tr>
    <tr>
        <td>checkBy</td>
        <td>params</td>
        <td>
        按值或数组选中某行，参数包含：<br>
        field: 用于查找记录的字段的名称，<br>
        values: 要检查的行的值数组。<br>
        例子: <br>
        $("#table").bootstrapTable("checkBy", {field:"field_name", values:["value1","value2","value3"]})
        </td>
    </tr>
    <tr>
        <td>uncheckBy</td>
        <td>params</td>
        <td>
        按值数组取消选中某行，参数包含：<br>
        field: 用于查找记录的字段的名称，<br>
        values: 要检查的行的值数组。<br>
        例子: <br>
        $("#table").bootstrapTable("uncheckBy", {field:"field_name", values:["value1","value2","value3"]})
        </td>
    </tr>
    <tr>
        <td>resetView</td>
        <td>params</td>
        <td>重置引导表视图，例如重置表高度。</td>
    </tr>
    <tr>
        <td>resetWidth</td>
        <td>none</td>
        <td>调整页眉和页脚的大小以适合当前列宽度。</td>
    </tr>
    <tr>
        <td>destroy</td>
        <td>none</td>
        <td>销毁表。</td>
    </tr>
    <tr>
        <td>showColumn</td>
        <td>field</td>
        <td>显示指定的列。</td>
    </tr>
    <tr>
        <td>hideColumn</td>
        <td>field</td>
        <td>隐藏指定的列。</td>
    </tr>
    <tr>
        <td>getHiddenColumns</td>
        <td>-</td>
        <td>获取隐藏的列。</td>
    </tr>
    <tr>
        <td>getVisibleColumns</td>
        <td>-</td>
        <td>获取可见列。</td>
    </tr>
    <tr>
        <td>scrollTo</td>
        <td>value</td>
        <td>滚动到指定位置，单位为 px，设置 'bottom' 表示跳到最后。</td>
    </tr>
    <tr>
        <td>getScrollPosition</td>
        <td>none</td>
        <td>获取当前滚动条的位置，单位为 px。</td>
    </tr>
    <tr>
        <td>filterBy</td>
        <td>params</td>
        <td>（只能用于 client 端）过滤表格数据， 你可以通过过滤<code>{age: 10}</code>来显示 age 等于 10 的数据。</td>
    </tr>
    <tr>
        <td>selectPage</td>
        <td>page</td>
        <td>跳到指定的页。</td>
    </tr>
    <tr>
        <td>prevPage</td>
        <td>none</td>
        <td>跳到上一页。</td>
    </tr>
    <tr>
        <td>nextPage</td>
        <td>none</td>
        <td>跳到下一页。</td>
    </tr>
    <tr>
        <td>togglePagination</td>
        <td>none</td>
        <td>切换分页选项。</td>
    </tr>
    <tr>
        <td>toggleView</td>
        <td>none</td>
        <td>切换 card/table 视图</td>
    </tr>
    <tr>
        <td>expandRow</td>
        <td>index</td>
        <td>如果详细视图选项设置为True，可展开索引为 index 的行。</td>
    </tr>
    <tr>
        <td>collapseRow</td>
        <td>index</td>
        <td>如果详细视图选项设置为True，可收起索引为 index 的行。.</td>
    </tr>
    <tr>
        <td>expandAllRows</td>
        <td>none</td>
        <td>如果详细视图选项设置为True，可展开所有行。</td>
    </tr>
    <tr>
        <td>collapseAllRows</td>
        <td>none</td>
        <td>如果详细视图选项设置为True，可收起开所有行。</td>
    </tr>
    </tbody>
</table>
