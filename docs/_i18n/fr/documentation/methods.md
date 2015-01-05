# Methods []({{ site.repo }}/blob/master/docs/_i18n/{{ site.lang }}/documentation/methods.md)

---

The calling method syntax: `$('#table').bootstrapTable('method', parameter);`.

<table class="table"
       data-toggle="table"
       data-search="true"
       data-show-toggle="true"
       data-show-columns="true">
    <thead>
    <tr>
        <th>Name</th>
        <th>Parameter</th>
        <th>Description</th>
    </tr>
    </thead>
    <tbody>
    <tr>
        <td>getSelections</td>
        <td>none</td>
        <td>Return all selected rows, when no record selected, am empty array will return.</td>
    </tr>
    <tr>
        <td>getData</td>
        <td>none</td>
        <td>Get the loaded data of table.</td>
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
        <td>remove</td>
        <td>params</td>
        <td>
        Remove data from table, the params contains two properties: <br>
        field: the field name of remove rows. <br>
        values: the values of remove rows.
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
        <td>refresh</td>
        <td>params</td>
        <td>Refresh the remote server data, you can set <code>{silent: true}</code> to refresh the data silently, and set <code>{url: newUrl}</code> to change the url. To supply query params specific to this request, set <code>{query: {foo: 'bar'}}</code></td>
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
        <td>resetView</td>
        <td>params</td>
        <td>Reset the bootstrap table view, for example reset the table height.</td>
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
        <td>scrollTo</td>
        <td>value</td>
        <td>Scroll to the number value position, set 'bottom' means scroll to the bottom.</td>
    </tr>
    <tr>
        <td>filterBy</td>
        <td>params</td>
        <td>(Can use only in client-side)Filter data in table, eg. you can filter <code>{age: 10}</code> to show the data only age is equal to 10.</td>
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
    </tbody>
</table>
