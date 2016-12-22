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
        <th>Evento</th>
        <th>Evento de jQuery</th>
        <th>Parámetros</th>
        <th>Descripción</th>
    </tr>
    </thead>
    <tbody>
    <tr>
        <td>onAll</td>
        <td>all.bs.table</td>
        <td>name, args</td>
        <td>
        Se ejecuta cuando todos los eventos son llamados, los parámetros contienen: <br>
        name: nombre del evento, <br>
        args: datos del evento.</td>
    </tr>
    <tr>
        <td>onClickRow</td>
        <td>click-row.bs.table</td>
        <td>row, $element</td>
        <td>
        Se ejecuta cuando el usuario le da click a una fila, los parámetros contienen: <br>
        row: el registro que corresponde con la fila a la que se le dio click, <br>
        $element: el elemento tr, <br>
        field: el nombre del campo correspondiente a la celda hecho clic.
        </td>
    </tr>
    <tr>
        <td>onDblClickRow</td>
        <td>dbl-click-row.bs.table</td>
        <td>row, $element</td>
        <td>
        Se ejecuta cuando el usuario le da click a una fila, los parámetros contienen: <br>
        row: el registro que corresponde con la fila a la que se le dio click, <br>
        $element: el elemento tr, <br>
        field: el nombre del campo correspondiente a la celda hecho clic.
        </td>
    </tr>
    <tr>
        <td>onClickCell</td>
        <td>click-cell.bs.table</td>
        <td>field, value, row, $element</td>
        <td>
        Se ejecuta cuando el usuario le da click a una celda de la tabla, los parámetros contienen: <br>
        field: el nombre del campo correspondiente a la celda hecho clic, <br>
        value: el valor de datos correspondiente a la celda hecho clic, <br>
        row: el registro que corresponde con la fila a la que se le dio click, <br>
        $element: el elemento td.
        </td>
    </tr>
    <tr>
        <td>onDblClickCell</td>
        <td>dbl-click-cell.bs.table</td>
        <td>field, value, row, $element</td>
        <td>
        Se ejecuta cuando el usuario le da click a una celda de la tabla, los parámetros contienen: <br>
        field: el nombre del campo correspondiente a la celda hecho clic, <br>
        value: el valor de datos correspondiente a la celda hecho clic, <br>
        row: el registro que corresponde con la fila a la que se le dio click, <br>
        $element: el elemento td.
        </td>
    </tr>
    <tr>
        <td>onSort</td>
        <td>sort.bs.table</td>
        <td>name, order</td>
        <td>
        Se ejecuta cuando el usuario orderna una columna, los parámetros contienen: <br>
        name: el nombre de la columna del campo ordenado<br>
        order: el orden utilizado.
        </td>
    </tr>
    <tr>
        <td>onCheck</td>
        <td>check.bs.table</td>
        <td>row</td>
        <td>
        Se ejecuta cuando el usuario chequea una fila, los parámetros contienen: <br>
        row: el registro que corresponde a la fila chequeada.
        $element: el elemento DOM chequeado.
        </td>
    </tr>
    <tr>
        <td>onUncheck</td>
        <td>uncheck.bs.table</td>
        <td>row</td>
        <td>
        Se ejecuta cuando el usuario des-chequea una fila, los parámetros contienen: <br>
        row: el registro que corresponde a la fila deschequeada.
        $element: el elemento DOM deschequeado.
        </td>
    </tr>
    <tr>
        <td>onCheckAll</td>
        <td>check-all.bs.table</td>
        <td>rows</td>
        <td>Se ejecuta cuando el usuario chequea todas las filas, los parámetros contienen: <br>
        rows: arreglo de las filas chequeadas.</td>
    </tr>
    <tr>
        <td>onUncheckAll</td>
        <td>uncheck-all.bs.table</td>
        <td>rows</td>
        <td>Se ejecuta cuando el usuario des-chequea todas las filas, los parámetros contienen: <br>
        rows: arreglo de las filas deschequeadas.</td>
    </tr>
    <tr>
        <td>onCheckSome</td>
        <td>check-some.bs.table</td>
        <td>rows</td>
        <td>
        Se ejecuta cuando el usuario chequea algunas filas, los parámetros contienen: <br>
        rows: arreglo de las filas chequeadas.
        </td>
    </tr>
    <tr>
        <td>onUncheckSome</td>
        <td>uncheck-some.bs.table</td>
        <td>rows</td>
        <td>
        Se ejecuta cuando el usuario deschequea algunas filas, los parámetros contienen: <br>
        rows: arreglo de las filas deschequeadas.
        </td>
    </tr>
    <tr>
        <td>onLoadSuccess</td>
        <td>load-success.bs.table</td>
        <td>data</td>
        <td>Se ejecuta cuando los datos remotos se cargan correctamente.</td>
    </tr>
    <tr>
        <td>onLoadError</td>
        <td>load-error.bs.table</td>
        <td>status</td>
        <td>Se ejecuta cuando ocurre algún error cargando los datos remotos.</td>
    </tr>
    <tr>
        <td>onColumnSwitch</td>
        <td>column-switch.bs.table</td>
        <td>field, checked</td>
        <td>Se ejecuta cuando se cambia la visibilidad de una columna.</td>
    </tr>
    <tr>
        <td>onColumnSearch</td>
        <td>column-search.bs.table</td>
        <td>field, text</td>
        <td>Se ejecuta cuando se busca por columna.</td>
    </tr>
    <tr>
        <td>onPageChange</td>
        <td>page-change.bs.table</td>
        <td>number, size</td>
        <td>Se ejecuta cuando se cambia el número de página o el tamaño de la página.</td>
    </tr>
    <tr>
        <td>onSearch</td>
        <td>search.bs.table</td>
        <td>text</td>
        <td>Se ejecuta cuando se busca en la tabla.</td>
    </tr>
    <tr>
        <td>onPreBody</td>
        <td>pre-body.bs.table</td>
        <td>data</td>
        <td>Se ejecuta antes de que el cuerpo/contenido de la tabla se construya.</td>
    </tr>
    <tr>
        <td>onPostBody</td>
        <td>post-body.bs.table</td>
        <td>none</td>
        <td>Se ejecuta después de que el cuerpo/contenido de la tabla es renderizado y es disponible en el DOM</td>
    </tr>
	<tr>
       <td>onPostHeader</td>
       <td>post-header.bs.table</td>
       <td>none</td>
       <td>Se ejecuta después de que el encabezado es renderizado y disponible en el DOM.</td>
    </tr>
    <tr>
        <td>onExpandRow</td>
        <td>expand-row.bs.table</td>
        <td>index, row, $detail</td>
        <td>Se ejecuta cuando se da click al icono de detalle para expandir la vista detalle.</td>
    </tr>
    <tr>
       <td>onCollapseRow</td>
       <td>collapse-row.bs.table</td>
       <td>index, row</td>
       <td>Se ejecuta cuando se da click al icono de detalle para colapsar la vista detalle.</td>
    </tr>
    <tr>
       <td>onRefreshOptions</td>
       <td>refresh-options.bs.table</td>
       <td>options</td>
       <td>Se ejecuta cuando se actualiza el objeto options, este método se ejecuta antes de los eventos destroy e init.</td>
    </tr>
    <tr>
       <td>onRefresh</td>
       <td>refresh.bs.table</td>
       <td>params</td>
       <td>Se ejecuta cuando se cliquea el botón de refresh.</td>
    </tr>
    </tbody>
</table>
