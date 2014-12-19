# Events []({{ site.repo }}/blob/master/docs/_i18n/{{ site.lang }}/documentation/events.md)

---

<table class="table"
       data-toggle="table"
       data-search="true"
       data-show-toggle="true"
       data-show-columns="true">
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
        Fires when all events trigger, the parameters contains: <br>
        name: the event name, <br>
        args: the event data.
        </td>
    </tr>
    <tr>
        <td>onClickRow</td>
        <td>click-row.bs.table</td>
        <td>row, $element</td>
        <td>
        Fires when user click a row, the parameters contains: <br>
        row: the record corresponding to the clicked row, <br>
        $element: the tr element.
        </td>
    </tr>
    <tr>
        <td>onDblClickRow</td>
        <td>dbl-click-row.bs.table</td>
        <td>row, $element</td>
        <td>
        Fires when user click a row, the parameters contains: <br>
        row: the record corresponding to the clicked row, <br>
        $element: the tr element.
        </td>
    </tr>
    <tr>
        <td>onSort</td>
        <td>sort.bs.table</td>
        <td>name, order</td>
        <td>
        Fires when user sort a column, the parameters contains: <br>
        name: the sort column field name<br>
        order: the sort column order.
        </td>
    </tr>
    <tr>
        <td>onCheck</td>
        <td>check.bs.table</td>
        <td>row</td>
        <td>
        Fires when user check a row, the parameters contains: <br>
        row: the record corresponding to the clicked row.
        </td>
    </tr>
    <tr>
        <td>onUncheck</td>
        <td>uncheck.bs.table</td>
        <td>row</td>
        <td>
        Fires when user uncheck a row, the parameters contains: <br>
        row: the record corresponding to the clicked row.
        </td>
    </tr>
    <tr>
        <td>onCheckAll</td>
        <td>check-all.bs.table</td>
        <td>none</td>
        <td>Fires when user check all rows.</td>
    </tr>
    <tr>
        <td>onUncheckAll</td>
        <td>uncheck-all.bs.table</td>
        <td>none</td>
        <td>Fires when user uncheck all rows.</td>
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
        <td>status</td>
        <td>Fires when some errors occur to load remote data.</td>
    </tr>
    <tr>
        <td>onColumnSwitch</td>
        <td>column-switch.bs.table</td>
        <td>field, checked</td>
        <td>Fires when switch the column visible.</td>
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
    </tbody>
</table>
