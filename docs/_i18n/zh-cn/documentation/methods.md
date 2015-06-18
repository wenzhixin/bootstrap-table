# Methods []({{ site.repo }}/blob/master/docs/_i18n/{{ site.lang }}/documentation/methods.md)

---

The calling method syntax: `$('#table').bootstrapTable('method', parameter);`.

<table class="table"
       data-toggle="table"
       data-search="true"
       data-show-toggle="true"
       data-show-columns="true"
       data-mobile-responsive="true">
    <thead>
    <tr>
        <th>Name</th>
        <th>Parameter</th>
        <th>Description</th>
    </tr>
    </thead>
    <tbody>
    <tr>
        <td>getOptions</td>
        <td>none</td>
        <td>Return the options object.</td>
    </tr>
    <tr>
        <td>getSelections</td>
        <td>none</td>
        <td>Return all selected rows, when no record selected, am empty array will return.</td>
    </tr>
    <tr>
        <td>getData</td>
        <td>useCurrentPage</td>
        <td>Get the loaded data of table. If you set the useCurrentPage to true the method will return the data in the current page</td>
    </tr>
    <tr>
        <td>load</td>
        <td>data</td>
        <td>Load the data to table, the old rows will be removed.</td>
    </tr>
    <tr>
        <td>append</td>
        <td>data</td>
        <td>Append the data to table.</td>
    </tr>
    <tr>
        <td>prepend</td>
        <td>data</td>
        <td>Prepend the data to table.</td>
    </tr>
    <tr>
        <td>remove</td>
        <td>params</td>
        <td>
        Remove data from table, the params contains two properties: <br>
        field: the field name of remove rows. <br>
        values: the array of values for rows which should be removed. <br>
        Example: $('#myTable').bootstrapTable('remove', {field: 'id', values: ["73", "74"]})
        </td>
    </tr>
    <tr>
        <td>removeAll</td>
        <td>-</td>
        <td>
        Remove all data from table<br>
        Example: $('#myTable').bootstrapTable('removeAll')
        </td>
    </tr>
    <tr>
        <td>removeByUniqueId</td>
        <td>id</td>
        <td>
        Remove data from table, the row that contains the id passed by parameter<br>
        Example: $('#myTable').bootstrapTable('removeByUniqueId', "122")
        </td>
    </tr>
    <tr>
        <td>getRowByUniqueId</td>
        <td>id</td>
        <td>
        Get data from table, the row that contains the id passed by parameter<br>
        Example: $('#myTable').bootstrapTable('getRowByUniqueId', "122")
        </td>
    </tr>
    <tr>
        <td>insertRow</td>
        <td>params</td>
        <td>
        Insert a new row, the param contains following properties:<br>
        index: the row index to insert into.<br>
        row: the row data.
        </td>
    </tr>
    <tr>
        <td>updateRow</td>
        <td>params</td>
        <td>
        Update the specified row, the param contains following properties: <br>
        index: the row index to be updated. <br>
        row: the new row data.
        </td>
    </tr>
	<tr>
        <td>showRow</td>
        <td>params</td>
        <td>Show the specified row. the param contains following properties:
        index: the row idenx or the idField.
        isIdField: Boolean to indicates if index is the idField od the row or not.</td>
    </tr>
    <tr>
        <td>hideRow</td>
        <td>params</td>
        <td>Hide the specified row. the param contains following properties:
        index: the row idenx or the idField.
        isIdField: Boolean to indicates if index is the idField od the row or not.</td>
    </tr>
    <tr>
        <td>getRowsHidden</td>
        <td>boolean</td>
        <td>Get all rows hidden and if you pass the show parameter true the rows will be shown again, otherwise, the method
        only will return the rows hidden.</td>
    </tr>
    <tr>
        <td>mergeCells</td>
        <td>options</td>
        <td>
        Merge some cells to one cell, the options contains following properties: <br>
        index: the row index. <br>
        field: the field name.<br>
        rowspan: the rowspan count to be merged. <br>
        colspan: the colspan count to be merged.
        </td>
    </tr>
    <tr>
        <td>updateCell</td>
        <td>params</td>
        <td>
        Update one cell, the params contains following properties: <br>
        rowIndex: the row index. <br>
        fieldName: the field name.<br>
        fieldValue: the new field value. <br>
        </td>
    </tr>
    <tr>
        <td>refresh</td>
        <td>params</td>
        <td>Refresh the remote server data, you can set <code>{silent: true}</code> to refresh the data silently, and set <code>{url: newUrl}</code> to change the url. To supply query params specific to this request, set <code>{query: {foo: 'bar'}}</code></td>
    </tr>
    <tr>
        <td>refreshOptions</td>
        <td>options</td>
        <td>Refresh the options</td>
    </tr>
    <tr>
        <td>showLoading</td>
        <td>none</td>
        <td>Show loading status.</td>
    </tr>
    <tr>
        <td>hideLoading</td>
        <td>none</td>
        <td>Hide loading status.</td>
    </tr>
    <tr>
        <td>checkAll</td>
        <td>none</td>
        <td>Check all current page rows.</td>
    </tr>
    <tr>
        <td>uncheckAll</td>
        <td>none</td>
        <td>Uncheck all current page rows.</td>
    </tr>
    <tr>
        <td>check</td>
        <td>index</td>
        <td>Check a row, the row index start with 0.</td>
    </tr>
    <tr>
        <td>uncheck</td>
        <td>index</td>
        <td>Uncheck a row, the row index start with 0.</td>
    </tr>
    <tr>
        <td>checkBy</td>
        <td>params</td>
        <td>
        Check a row by array of values, the params contains:<br>
        field: name of the field used to find records<br>
        values: array of values for rows to check<br>
        Example: <br>
        $("#table").bootstrapTable("checkBy", {field:"field_name", values:["value1","value2","value3"]})
        </td>
    </tr>
    <tr>
        <td>uncheckBy</td>
        <td>params</td>
        <td>
        Uncheck a row by array of values, the params contains:<br>
        field: name of the field used to find records<br>
        values: array of values for rows to uncheck<br>
        Example: <br>
        $("#table").bootstrapTable("uncheckBy", {field:"field_name", values:["value1","value2","value3"]})
        </td>
    </tr>
    <tr>
        <td>resetView</td>
        <td>params</td>
        <td>Reset the bootstrap table view, for example reset the table height.</td>
    </tr>
    <tr>
        <td>resetWidth</td>
        <td>none</td>
        <td>Resizes header and footer to fit current columns width</td>
    </tr>
    <tr>
        <td>destroy</td>
        <td>none</td>
        <td>Destroy the bootstrap table.</td>
    </tr>
    <tr>
        <td>showColumn</td>
        <td>field</td>
        <td>Show the specified column.</td>
    </tr>
    <tr>
        <td>hideColumn</td>
        <td>field</td>
        <td>Hide the specified column.</td>
    </tr>
    <tr>
        <td>getHiddenColumns</td>
        <td>-</td>
        <td>Get hidden columns.</td>
    </tr>
    <tr>
        <td>scrollTo</td>
        <td>value</td>
        <td>Scroll to the number value position, set 'bottom' means scroll to the bottom.</td>
    </tr>
    <tr>
        <td>getScrollPosition</td>
        <td>none</td>
        <td>Get the current scroll position.</td>
    </tr>
    <tr>
        <td>filterBy</td>
        <td>params</td>
        <td>(Can use only in client-side)Filter data in table, eg. you can filter <code>{age: 10}</code> to show the data only age is equal to 10.</td>
    </tr>
    <tr>
        <td>selectPage</td>
        <td>page</td>
        <td>Go to the a specified page.</td>
    </tr>
    <tr>
        <td>prevPage</td>
        <td>none</td>
        <td>Go to previous page.</td>
    </tr>
    <tr>
        <td>nextPage</td>
        <td>none</td>
        <td>Go to next page.</td>
    </tr>
    <tr>
        <td>togglePagination</td>
        <td>none</td>
        <td>Toggle the pagination option.</td>
    </tr>
    <tr>
        <td>toggleView</td>
        <td>none</td>
        <td>Toggle the card/table view.</td>
    </tr>
	<tr>
        <td>deleteCookie</td>
        <td>cookie name</td>
        <td>Delete a cookie created. You must use: 'sortOrder', 'sortName', 'pageNumber' or 'pageList'.</td>
    </tr>
    </tbody>
</table>
