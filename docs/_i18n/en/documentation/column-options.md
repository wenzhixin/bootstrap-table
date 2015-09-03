# Column options []({{ site.repo }}/blob/master/docs/_i18n/{{ site.lang }}/documentation/column-options.md)

---

The column options is defined in `jQuery.fn.bootstrapTable.columnDefaults`.

<table class="table"
       id="c"
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
        <td>radio</td>
        <td>data-radio</td>
        <td>Boolean</td>
        <td>false</td>
        <td>True to show a radio. The radio column has fixed width.</td>
    </tr>
    <tr>
        <td>checkbox</td>
        <td>data-checkbox</td>
        <td>Boolean</td>
        <td>false</td>
        <td>True to show a checkbox. The checkbox column has fixed width.</td>
    </tr>
    <tr>
        <td>field</td>
        <td>data-field</td>
        <td>String</td>
        <td>undefined</td>
        <td>The column field name.</td>
    </tr>
    <tr>
        <td>title</td>
        <td>data-title</td>
        <td>String</td>
        <td>undefined</td>
        <td>The column title text.</td>
    </tr>
    <tr>
        <td>titleTooltip</td>
        <td>data-title-tooltip</td>
        <td>String</td>
        <td>undefined</td>
        <td>The column title tooltip text. This option also support the title HTML attribute</td>
    </tr>
    <tr>
        <td>class</td>
        <td>class / data-class</td>
        <td>String</td>
        <td>undefined</td>
        <td>The column class name.</td>
    </tr>
    <tr>
        <td>rowspan</td>
        <td>rowspan / data-rowspan</td>
        <td>Number</td>
        <td>undefined</td>
        <td>Indicate how many rows a cell should take up.</td>
    </tr>
    <tr>
        <td>colspan</td>
        <td>colspan / data-colspan</td>
        <td>Number</td>
        <td>undefined</td>
        <td>Indicate how many columns a cell should take up.</td>
    </tr>
    <tr>
        <td>align</td>
        <td>data-align</td>
        <td>String</td>
        <td>undefined</td>
        <td>Indicate how to align the column data. 'left', 'right', 'center' can be used.</td>
    </tr>
    <tr>
        <td>halign</td>
        <td>data-halign</td>
        <td>String</td>
        <td>undefined</td>
        <td>Indicate how to align the table header. 'left', 'right', 'center' can be used.</td>
    </tr>
    <tr>
        <td>falign</td>
        <td>data-falign</td>
        <td>String</td>
        <td>undefined</td>
        <td>Indicate how to align the table footer. 'left', 'right', 'center' can be used.</td>
    </tr>
    <tr>
        <td>valign</td>
        <td>data-valign</td>
        <td>String</td>
        <td>undefined</td>
        <td>Indicate how to align the cell data. 'top', 'middle', 'bottom' can be used.</td>
    </tr>
    <tr>
        <td>width</td>
        <td>data-width</td>
        <td>Number {Pixels or Percentage}</td>
        <td>undefined</td>
        <td>The width of column. If not defined, the width will auto expand to fit its contents. Also you can add '%' to your number and
		the bootstrapTable will use the percentage unit, otherwise, you can add or no the 'px' to your number and then the bootstrapTable will use the pixels</td>
    </tr>
    <tr>
        <td>sortable</td>
        <td>data-sortable</td>
        <td>Boolean</td>
        <td>false</td>
        <td>True to allow the column can be sorted.
        </td>
    </tr>
    <tr>
        <td>order</td>
        <td>data-order</td>
        <td>String</td>
        <td>'asc'</td>
        <td>The default sort order, can only be 'asc' or 'desc'.</td>
    </tr>
    <tr>
        <td>visible</td>
        <td>data-visible</td>
        <td>Boolean</td>
        <td>true</td>
        <td>False to hide the columns item.</td>
    </tr>
    <tr>
        <td>cardVisible</td>
        <td>data-card-visible</td>
        <td>Boolean</td>
        <td>true</td>
        <td>False to hide the columns item in card view state.</td>
    </tr>
	<tr>
        <td>switchable</td>
        <td>data-switchable</td>
        <td>Boolean</td>
        <td>true</td>
        <td>False to disable the switchable of columns item.</td>
    </tr>
    <tr>
        <td>clickToSelect</td>
        <td>data-click-to-select</td>
        <td>Boolean</td>
        <td>true</td>
        <td>True to select checkbox or radiobox when the column is clicked.</td>
    </tr>
    <tr>
        <td>formatter</td>
        <td>data-formatter</td>
        <td>Function</td>
        <td>undefined</td>
        <td>
        The context (this) is the column Object. <br>
        The cell formatter function, take three parameters: <br>
        value: the field value. <br>
        row: the row record data.<br>
        index: the row index.</td>
    </tr>
    <tr>
        <td>footerFormatter</td>
        <td>data-footer-formatter</td>
        <td>Function</td>
        <td>undefined</td>
        <td>
        The context (this) is the column Object. <br>
        The function, take one parameter: <br>
        data: Array of all the  data rows. <br>
        the function should return a string with the text to show in the footer cell.
    </tr>
    <tr>
        <td>events</td>
        <td>data-events</td>
        <td>Object</td>
        <td>undefined</td>
        <td>
        The cell events listener when you use formatter function, take three parameters: <br>
        event: the jQuery event. <br>
        value: the field value. <br>
        row: the row record data.<br>
        index: the row index.
        </td>
    </tr>
    <tr>
        <td>sorter</td>
        <td>data-sorter</td>
        <td>Function</td>
        <td>undefined</td>
        <td>
        The custom field sort function that used to do local sorting, take two parameters: <br>
        a: the first field value.<br>
        b: the second field value.
        </td>
    </tr>
    <tr>
        <td>sortName</td>
        <td>data-sort-name</td>
        <td>String</td>
        <td>undefined</td>
        <td>Provide a customizable sort-name, not the default sort-name in the header, or the field name
        of the column. For example, a column might display the value of fieldName of "html" such as  
        "&lt;b&gt;&lt;span style="color:red"&gt;abc&lt;/span&gt;&lt;/b&gt;", but a fieldName to sort is "content" with the value of "abc".
        </td>
    </tr>    
    <tr>
        <td>cellStyle</td>
        <td>data-cell-style</td>
        <td>Function</td>
        <td>undefined</td>
        <td>
        The cell style formatter function, take three parameters: <br>
        value: the field value.<br>
        row: the row record data.<br>
        index: the row index.<br>
        Support classes or css.
        </td>
    </tr>
    <tr>
        <td>searchable</td>
        <td>data-searchable</td>
        <td>Boolean</td>
        <td>true</td>
        <td>
        True to search data for this column.
        </td>
    </tr>
    <tr>
        <td>searchFormatter</td>
        <td>data-search-formatter</td>
        <td>Boolean</td>
        <td>true</td>
        <td>
        True to search use formated data.
        </td>
    </tr>
</tbody>
</table>
