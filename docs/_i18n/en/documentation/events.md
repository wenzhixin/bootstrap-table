# Events []({{ site.repo }}/blob/master/docs/_i18n/{{ site.lang }}/documentation/events.md)

---

<table class="table"
       id="e"
       data-search="true"
       data-show-toggle="true"
       data-show-columns="true"
       data-mobile-responsive="true">
    <thead>
    <tr>
        <th>Option Event</th>
        <th>jQuery Event</th>
        <th>Parameter</th>
        <th>Description</th>
    </tr>
    </thead>
    <tbody>
    <tr>
        <td>onAll</td>
        <td>all.bs.table</td>
        <td>name, args</td>
        <td>
        Fires when all events trigger, the parameters contain: <br>
        name: the event name, <br>
        args: the event data.
        </td>
    </tr>
    <tr>
        <td>onClickRow</td>
        <td>click-row.bs.table</td>
        <td>row, $element</td>
        <td>
        Fires when user click a row, the parameters contain: <br>
        row: the record corresponding to the clicked row, <br>
        $element: the tr element.
        </td>
    </tr>
    <tr>
        <td>onDblClickRow</td>
        <td>dbl-click-row.bs.table</td>
        <td>row, $element</td>
        <td>
        Fires when user double click a row, the parameters contain: <br>
        row: the record corresponding to the clicked row, <br>
        $element: the tr element.
        </td>
    </tr>
    <tr>
        <td>onClickCell</td>
        <td>click-cell.bs.table</td>
        <td>field, value, row, $element</td>
        <td>
        Fires when user click a cell, the parameters contain: <br>
        field: the field name corresponding to the clicked cell, <br>
        value: the data value corresponding to the clicked cell, <br>
        row: the record corresponding to the clicked row, <br>
        $element: the td element.
        </td>
    </tr>
    <tr>
        <td>onDblClickCell</td>
        <td>dbl-click-cell.bs.table</td>
        <td>field, value, row, $element</td>
        <td>
        Fires when user double click a cell, the parameters contain: <br>
        field: the field name corresponding to the clicked cell, <br>
        value: the data value corresponding to the clicked cell, <br>
        row: the record corresponding to the clicked row, <br>
        $element: the td element.
        </td>
    </tr>
    <tr>
        <td>onSort</td>
        <td>sort.bs.table</td>
        <td>name, order</td>
        <td>
        Fires when user sort a column, the parameters contain: <br>
        name: the sort column field name<br>
        order: the sort column order.
        </td>
    </tr>
    <tr>
        <td>onCheck</td>
        <td>check.bs.table</td>
        <td>row, $element</td>
        <td>
        Fires when user check a row, the parameters contain: <br>
        row: the record corresponding to the clicked row.
        $element: the DOM element checked.
        </td>
    </tr>
    <tr>
        <td>onUncheck</td>
        <td>uncheck.bs.table</td>
        <td>row, $element</td>
        <td>
        Fires when user uncheck a row, the parameters contain: <br>
        row: the record corresponding to the clicked row.
        $element: the DOM element unchecked.
        </td>
    </tr>
    <tr>
        <td>onCheckAll</td>
        <td>check-all.bs.table</td>
        <td>rows</td>
        <td>
        Fires when user check all rows, the parameters contain: <br>
        rows: array of records corresponding to newly checked rows.
        </td>
    </tr>
    <tr>
        <td>onUncheckAll</td>
        <td>uncheck-all.bs.table</td>
        <td>rows</td>
        <td>
        Fires when user uncheck all rows, the parameters contain: <br>
        rows: array of records corresponding to previously checked rows.
        </td>
    </tr>
    <tr>
        <td>onCheckSome</td>
        <td>check-some.bs.table</td>
        <td>rows</td>
        <td>
        Fires when user check some rows, the parameters contain: <br>
        rows: array of records corresponding to previously checked rows.
        </td>
    </tr>
    <tr>
        <td>onUncheckSome</td>
        <td>uncheck-some.bs.table</td>
        <td>rows</td>
        <td>
        Fires when user uncheck some rows, the parameters contain: <br>
        rows: array of records corresponding to previously checked rows.
        </td>
    </tr>
    <tr>
        <td>onLoadSuccess</td>
        <td>load-success.bs.table</td>
        <td>data</td>
        <td>Fires when remote data is loaded
            successfully.
        </td>
    </tr>
    <tr>
        <td>onLoadError</td>
        <td>load-error.bs.table</td>
        <td>status, res</td>
        <td>Fires when some errors occur to load remote data.</td>
    </tr>
    <tr>
        <td>onColumnSwitch</td>
        <td>column-switch.bs.table</td>
        <td>field, checked</td>
        <td>Fires when switch the column visible.</td>
    </tr>
    <tr>
        <td>onColumnSearch</td>
        <td>column-search.bs.table</td>
        <td>field, text</td>
        <td>Fires when search by column.</td>
    </tr>
    <tr>
        <td>onPageChange</td>
        <td>page-change.bs.table</td>
        <td>number, size</td>
        <td>Fires when change the page number or page size.</td>
    </tr>
    <tr>
        <td>onSearch</td>
        <td>search.bs.table</td>
        <td>text</td>
        <td>Fires when search the table.</td>
    </tr>
    <tr>
        <td>onToggle</td>
        <td>toggle.bs.table</td>
        <td>cardView</td>
        <td>Fires when toggle the view of table.</td>
    </tr>
    <tr>
        <td>onPreBody</td>
        <td>pre-body.bs.table</td>
        <td>data</td>
        <td>Fires before the table body is rendered</td>
    </tr>
    <tr>
        <td>onPostBody</td>
        <td>post-body.bs.table</td>
        <td>none</td>
        <td>Fires after the table body is rendered and available in the DOM</td>
    </tr>
    <tr>
       <td>onPostHeader</td>
       <td>post-header.bs.table</td>
       <td>none</td>
       <td>Fires after the table header is rendered and availble in the DOM</td>
    </tr>
    <tr>
        <td>onExpandRow</td>
        <td>expand-row.bs.table</td>
        <td>index, row, $detail</td>
        <td>Fires when click the detail icon to expand the detail view.</td>
    </tr>
    <tr>
       <td>onCollapseRow</td>
       <td>collapse-row.bs.table</td>
       <td>index, row</td>
       <td>Fires when click the detail icon to collapse the detail view.</td>
    </tr>
    <tr>
       <td>onRefreshOptions</td>
       <td>refresh-options.bs.table</td>
       <td>options</td>
       <td>Fires after refresh the options and before destroy and init the table</td>
    </tr>
    <tr>
        <td>onResetView</td>
        <td>reset-view.bs.table</td>
        <td></td>
        <td>Fires when reset view of the table.</td>
    </tr>
    </tbody>
</table>
