# Methods []({{ site.repo }}/blob/develop/docs/_i18n/{{ site.lang }}/documentation/methods.md)

---

The calling method syntax: `$('#table').bootstrapTable('method', parameter);`.

<table class="table"
       id="m"
       data-search="true"
       data-show-toggle="true"
       data-show-columns="true"
       data-mobile-responsive="true">
    <thead>
    <tr>
        <th>Name</th>
        <th>Parameter</th>
        <th>Description</th>
        <th data-formatter="methodFormatter"
            data-align="center"
            data-valign="middle">Example</th>
    </tr>
    </thead>
    <tbody>
    <tr>
        <td>getOptions</td>
        <td>none</td>
        <td>Return the options object.</td>
        <td>getOptions</td>
    </tr>
    <tr>
        <td>getSelections</td>
        <td>none</td>
        <td>Return selected rows, when no record selected, an empty array will return.</td>
        <td>getSelections</td>
    </tr>
    <tr>
        <td>getAllSelections</td>
        <td>none</td>
        <td>Return all selected rows contain search or filter, when no record selected, an empty array will return.</td>
        <td>getAllSelections</td>
    </tr>
    <tr>
        <td>showAllColumns</td>
        <td>none</td>
        <td>Show All the columns.</td>
        <td>showAllColumns</td>
    </tr>
    <tr>
        <td>hideAllColumns</td>
        <td>none</td>
        <td>Hide All the columns.</td>
        <td>hidAllColumns</td>
    </tr>
    <tr>
        <td>getData</td>
        <td>useCurrentPage</td>
        <td>Get the loaded data of table at the moment that this method is called. If you set the useCurrentPage to true the method will return the data in the current page.</td>
        <td>getData</td>
    </tr>
    <tr>
        <td>getRowByUniqueId</td>
        <td>id</td>
        <td>Get data from table, the row that contains the id passed by parameter.</td>
        <td>getRowByUniqueId</td>
    </tr>
    <tr>
        <td>load</td>
        <td>data</td>
        <td>Load the data to table, the old rows will be removed.</td>
        <td>load</td>
    </tr>
    <tr>
        <td>append</td>
        <td>data</td>
        <td>Append the data to table.</td>
        <td>append</td>
    </tr>
    <tr>
        <td>prepend</td>
        <td>data</td>
        <td>Prepend the data to table.</td>
        <td>prepend</td>
    </tr>
    <tr>
        <td>remove</td>
        <td>params</td>
        <td>
        Remove data from table, the params contains two properties: <br>
        field: the field name of remove rows. <br>
        values: the array of values for rows which should be removed.
        </td>
        <td>remove</td>
    </tr>
    <tr>
        <td>removeAll</td>
        <td>-</td>
        <td>
        Remove all data from table.
        </td>
        <td>removeAll</td>
    </tr>
    <tr>
        <td>removeByUniqueId</td>
        <td>id</td>
        <td>
        Remove data from table, the row that contains the id passed by parameter.
        </td>
        <td>removeByUniqueId</td>
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
        Update the specified row(s), each param contains following properties: <br>
        index: the row index to be updated. <br>
        row: the new row data.
        </td>
    </tr>
    <tr>
        <td>updateByUniqueId</td>
        <td>params</td>
        <td>
        Update the specified row(s), each param contains following properties: <br>
        id: a row id where the id should be the uniqueid field assigned to the table. <br>
        row: the new row data.
        </td>
    </tr>
	<tr>
        <td>showRow</td>
        <td>params</td>
        <td>Show the specified row. The param must contain at least one of the following properties:
        index: the row index.
        uniqueId: the value of the uniqueId for that row.</td>
    </tr>
    <tr>
        <td>hideRow</td>
        <td>params</td>
        <td>Hide the specified row. The param must contain at least one of the following properties:
        index: the row index.
        uniqueId: the value of the uniqueId for that row.</td>
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
        index: the row index. <br>
        field: the field name.<br>
        value: the new field value.
        <br>
        To disable table re-initialization you can set <code>{reinit: false}</code>
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
        <td>resetSearch</td>
        <td>text</td>
        <td>Set the search text</td>
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
        <td>checkInvert</td>
        <td>none</td>
        <td>Invert check of current page rows. Triggers onCheckSome and onUncheckSome events.</td>
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
        <td>getVisibleColumns</td>
        <td>-</td>
        <td>Get visible columns.</td>
    </tr>
    <tr>
        <td>scrollTo</td>
        <td>value</td>
        <td>Scroll to the number value position, the unit is 'px', set 'bottom' means scroll to the bottom.</td>
    </tr>
    <tr>
        <td>getScrollPosition</td>
        <td>none</td>
        <td>Get the current scroll position, the unit is 'px'.</td>
    </tr>
    <tr>
        <td>filterBy</td>
        <td>params</td>
        <td>(Can use only in client-side) Filter data in table, e.g. you can filter <code>{age: 10}</code> to show the data only age is equal to 10.  You can also filter with an array of values, as in: <code>{age: 10, hairColor: ["blue", "red", "green"]} to find data where age is equal to 10 and hairColor is either blue, red, or green.</td>
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
        <td>expandRow</td>
        <td>index</td>
        <td>Expand the row that has the index passed by parameter if the detail view option is set to True.</td>
    </tr>
    <tr>
        <td>collapseRow</td>
        <td>index</td>
        <td>Collapse the row that has the index passed by parameter if the detail view option is set to True.</td>
    </tr>
    <tr>
        <td>expandAllRows</td>
        <td>is subtable</td>
        <td>Expand all rows if the detail view option is set to True.</td>
    </tr>
    <tr>
        <td>collapseAllRows</td>
        <td>is subtable</td>
        <td>Collapse all rows if the detail view option is set to True.</td>
    </tr>
    </tbody>
</table>
