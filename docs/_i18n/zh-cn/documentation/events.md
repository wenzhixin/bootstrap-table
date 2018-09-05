# 事件 []({{ site.repo }}/blob/develop/docs/_i18n/{{ site.lang }}/documentation/events.md)

---

<table class="table"
       id="e"
       data-search="true"
       data-show-toggle="true"
       data-show-columns="true"
       data-mobile-responsive="true">
    <thead>
    <tr>
        <th>Option 事件</th>
        <th>jQuery 事件</th>
        <th>参数</th>
        <th>描述</th>
    </tr>
    </thead>
    <tbody>
    <tr>
        <td>onAll</td>
        <td>all.bs.table</td>
        <td>name, args</td>
        <td>
        所有的事件都会触发该事件，参数包括：<br>
        name：事件名，<br>
        args：事件的参数。
        </td>
    </tr>
    <tr>
        <td>onClickRow</td>
        <td>click-row.bs.table</td>
        <td>row, $element</td>
        <td>
        当用户点击某一行的时候触发，参数包括：<br>
        row：点击行的数据，<br>
        $element：tr 元素，<br>
        field：点击列的 field 名称。
        </td>
    </tr>
    <tr>
        <td>onDblClickRow</td>
        <td>dbl-click-row.bs.table</td>
        <td>row, $element</td>
        <td>
        当用户双击某一行的时候触发，参数包括：<br>
        row：点击行的数据，<br>
        $element：tr 元素，<br>
        field：点击列的 field 名称。
        </td>
    </tr>
    <tr>
        <td>onClickCell</td>
        <td>click-cell.bs.table</td>
        <td>field, value, row, $element</td>
        <td>
        当用户点击某一列的时候触发，参数包括：<br>
        field：点击列的 field 名称，<br>
        value：点击列的 value 值，<br>
        row：点击列的整行数据，<br>
        $element：td 元素。
        </td>
    </tr>
    <tr>
        <td>onDblClickCell</td>
        <td>dbl-click-cell.bs.table</td>
        <td>field, value, row, $element</td>
        <td>
        当用户双击某一列的时候触发，参数包括：<br>
        field：点击列的 field 名称，<br>
        value：点击列的 value 值，<br>
        row：点击列的整行数据，<br>
        $element：td 元素。
        </td>
    </tr>
    <tr>
        <td>onSort</td>
        <td>sort.bs.table</td>
        <td>name, order</td>
        <td>
        当用户对某列进行排序时触发，参数包括：<br>
        name：排序列的 filed 名称，<br>
        order：排序顺序。
        </td>
    </tr>
    <tr>
        <td>onCheck</td>
        <td>check.bs.table</td>
        <td>row</td>
        <td>
        当用户选择某一行时触发，参数包含：<br>
        row：与点击行对应的记录，<br>
        $element：选择的DOM元素。
        </td>
    </tr>
    <tr>
        <td>onUncheck</td>
        <td>uncheck.bs.table</td>
        <td>row</td>
        <td>
        当用户反选某一行时触发，参数包含：<br>
        row：与点击行对应的记录，<br>
        $element：选择的DOM元素。
        </td>
    </tr>
    <tr>
        <td>onCheckAll</td>
        <td>check-all.bs.table</td>
        <td>rows</td>
        <td>
        当用户全选所有的行时触发，参数包含：<br>
        rows：最新选择的所有行的数组。
        </td>
    </tr>
    <tr>
        <td>onUncheckAll</td>
        <td>uncheck-all.bs.table</td>
        <td>rows</td>
        <td>
        当用户反选所有的行时触发，参数包含：<br>
        rows：最新选择的所有行的数组。
        </td>
    </tr>
    <tr>
        <td>onCheckSome</td>
        <td>check-some.bs.table</td>
        <td>rows</td>
        <td>
        当用户选择某些行时触发，参数包含：<br>
        rows：相对于之前选择的行的数组。
        </td>
    </tr>
    <tr>
        <td>onUncheckSome</td>
        <td>uncheck-some.bs.table</td>
        <td>rows</td>
        <td>
        当用户反选某些行时触发，参数包含：<br>
        rows：相对于之前选择的行的数组。
        </td>
    </tr>
    <tr>
        <td>onLoadSuccess</td>
        <td>load-success.bs.table</td>
        <td>data</td>
        <td>
        远程数据加载成功时触发成功。
        </td>
    </tr>
    <tr>
        <td>onLoadError</td>
        <td>load-error.bs.table</td>
        <td>status</td>
        <td>
        远程数据加载失败时触发成功。
        </td>
    </tr>
    <tr>
        <td>onColumnSwitch</td>
        <td>column-switch.bs.table</td>
        <td>field, checked</td>
        <td>
        当切换列的时候触发。
        </td>
    </tr>
    <tr>
        <td>onColumnSearch</td>
        <td>column-search.bs.table</td>
        <td>field, text</td>
        <td>
        当搜索列时触发。
        </td>
    </tr>
    <tr>
        <td>onPageChange</td>
        <td>page-change.bs.table</td>
        <td>number, size</td>
        <td>
        当页面更改页码或页面大小时触发。
        </td>
    </tr>
    <tr>
        <td>onSearch</td>
        <td>search.bs.table</td>
        <td>text</td>
        <td>
        当搜索表格时触发。
        </td>
    </tr>
    <tr>
        <td>onToggle</td>
        <td>toggle.bs.table</td>
        <td>cardView</td>
        <td>
        切换表格视图时触发。
        </td>
    </tr>
    <tr>
        <td>onPreBody</td>
        <td>pre-body.bs.table</td>
        <td>data</td>
        <td>
        在表格 body 渲染之前触发。
        </td>
    </tr>
    <tr>
        <td>onPostBody</td>
        <td>post-body.bs.table</td>
        <td>data</td>
        <td>
        在表格 body 渲染完成后触发。
        </td>
    </tr>
    <tr>
       <td>onPostHeader</td>
       <td>post-header.bs.table</td>
       <td>none</td>
       <td>
       在表格 header 渲染完成后触发。
       </td>
    </tr>
    <tr>
        <td>onExpandRow</td>
        <td>expand-row.bs.table</td>
        <td>index, row, $detail</td>
        <td>当点击详细图标展开详细页面的时候触发。</td>
    </tr>
    <tr>
       <td>onCollapseRow</td>
       <td>collapse-row.bs.table</td>
       <td>index, row</td>
       <td>当点击详细图片收起详细页面的时候触发。</td>
    </tr>
    <tr>
       <td>onRefreshOptions</td>
       <td>refresh-options.bs.table</td>
       <td>options</td>
       <td>
       刷新选项之后并在销毁和初始化表之前触发。
       </td>
    </tr>
    <tr>
       <td>onRefresh</td>
       <td>refresh.bs.table</td>
       <td>params</td>
       <td>点击刷新按钮后触发。</td>
    </tr>
    <tr>
       <td>onScrollBody</td>
       <td>scroll-body.bs.table</td>
       <td></td>
       <td>表格 body 滚动时触发。</td>
    </tr>
    </tbody>
</table>
