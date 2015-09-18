# Methods []({{ site.repo }}/blob/master/docs/_i18n/{{ site.lang }}/documentation/methods.md)

---

Sintaxis para llamar a un método: `$('#table').bootstrapTable('method', parameter);`.

<table class="table"
       id="m"
       data-search="true"
       data-show-toggle="true"
       data-show-columns="true"
       data-mobile-responsive="true">
    <thead>
    <tr>
        <th>Nombre</th>
        <th>Parámetro</th>
        <th>Descripción</th>
    </tr>
    </thead>
    <tbody>
    <tr>
        <td>getOptions</td>
        <td>none</td>
        <td>Retorna el objeto options.</td>
    </tr>
    <tr>
        <td>getSelections</td>
        <td>none</td>
        <td>Retorna todas las filas seleccionadas, cuando no hay seleccionadas, se retorna un array vacío .</td>
    </tr>
    <tr>
        <td>getData</td>
        <td>useCurrentPage</td>
        <td>Retorna los datos cargados en la tabla en el momento que se llama este método. Si se setea useCurrentPage a true se devolverá los datos mostrados en la página
        actual</td>
    </tr>
    <tr>
        <td>load</td>
        <td>data</td>
        <td>Se cargan los datos en la tabla, las filas antiguas se removeran.</td>
    </tr>
    <tr>
        <td>append</td>
        <td>data</td>
        <td>Se anexan los datos a la tabla.</td>
    </tr>
	<tr>
        <td>prepend</td>
        <td>data</td>
        <td>Se antepone los datos a la tabla.</td>
    </tr>
    <tr>
        <td>remove</td>
        <td>params</td>
        <td>
        Se remueven los datos de la tabla, los parámetros contienen dos propiedades: <br>
        field: el nombre del campo de las filas removidas. <br>
        values: el array de valores de las filas que deberían ser removidas. <br>
        Ejemplo: $('#myTable').bootstrapTable('remove', {field: 'id', values: ["73", "74"]})
        </td>
    </tr>
    <tr>
        <td>removeAll</td>
        <td>-</td>
        <td>
        Se remueven todos los datos de la tabla <br>
        Ejemplo: $('#myTable').bootstrapTable('removeAll')
        </td>
    </tr>
    <tr>
        <td>removeByUniqueId</td>
        <td>id</td>
        <td>
        Se remueve el dato de la tabla que contiene el id pasado por parámetro<br>
        Ejemplo: $('#myTable').bootstrapTable('removeByUniqueId', "122")
        </td>
    </tr>
    <tr>
        <td>getRowByUniqueId</td>
        <td>id</td>
        <td>
        Se obtiene el dato de la tabla que contiene el id pasado por parámetro<br>
        Ejemplo: $('#myTable').bootstrapTable('getRowByUniqueId', "122")
        </td>
    </tr>
    <tr>
        <td>insertRow</td>
        <td>params</td>
        <td>
        Inserta una nueva fila, los paeámetros contienen las siguientes propiedades:<br>
        index: el índice donde se insertara la nueva fila.<br>
        row: los datos de la fila.
        </td>
    </tr>
    <tr>
        <td>updateRow</td>
        <td>params</td>
        <td>
        Actualiza la fila especificada, el parámetro contiene las siguientes propiedades: <br>
        index: el índice de la fila para ser actualizada. <br>
        row: los nuevos data de la fila.
        </td>
    </tr>
	<tr>
        <td>showRow</td>
        <td>params</td>
        <td>Muesta la fila especificada. El parámetro contiene los siguiente propiedades: <br>
        index: el indice o idField de la fila.
        isIdField: Boolean que indica si el index es idField o la posición de la fila.</td>
    </tr>
    <tr>
        <td>hideRow</td>
        <td>params</td>
        <td>Oculta la fila especificada. El parámetro contiene los siguiente propiedades: <br>
        index: el indice o idField de la fila.
        isIdField: Boolean que indica si el index es idField o la posición de la fila.</td>
    </tr>
    <tr>
        <td>getRowsHidden</td>
        <td>boolean</td>
        <td>Obitnene todas las filas ocultas si se pasa el parámetro show en true las filas serán mostradas, sino, el método solo
        devolvera las filas ocultas.</td>
    </tr>
    <tr>
        <td>mergeCells</td>
        <td>options</td>
        <td>
        Se unen algunas celdas en una, las opciones contienen las siguientes propiedades: <br>
        index: el índice de la fila. <br>
        field: el nombre del campo.<br>
        rowspan: el rowspan para ser unidas. <br>
        colspan: el colspan para ser unidas.
        </td>
    </tr>
    <tr>
        <td>updateCell</td>
        <td>params</td>
        <td>
        Actualiza una celda, los parámetros contienen: <br>
        rowIndex: índice de la fila. <br>
        fieldName: el nombre del campo.<br>
        fieldValue: el nuevo valor de la celda. <br>
        </td>
    </tr>
    <tr>
        <td>refresh</td>
        <td>params</td>
        <td>Refresca los datos remotos del servidor, se puede setear <code>{silent: true}</code> para refrescar los datos silenciosamente, y setear <code>{url: newUrl}</code> para cambiar el URL. Para suministrar query params especificos para este request, setear <code>{query: {foo: 'bar'}}</code></td>
    </tr>
    <tr>
        <td>refreshOptions</td>
        <td>options</td>
        <td>Actualiza el objecto options</td>
    </tr>
    <tr>
        <td>showLoading</td>
        <td>none</td>
        <td>Mostrar el estado de la carga.</td>
    </tr>
    <tr>
        <td>hideLoading</td>
        <td>none</td>
        <td>Ocultar el estado de la carga.</td>
    </tr>
    <tr>
        <td>checkAll</td>
        <td>none</td>
        <td>Chequear todas las filas de la página actual de la tabla.</td>
    </tr>
    <tr>
        <td>uncheckAll</td>
        <td>none</td>
        <td>Des-chequear todas las filas de la página actual de la tabla.</td>
    </tr>
    <tr>
        <td>check</td>
        <td>index</td>
        <td>Chequea una fila, el índice de la fila inicia en 0.</td>
    </tr>
    <tr>
        <td>uncheck</td>
        <td>index</td>
        <td>Des-chequea una fila, el índice de la fila inicia en 0.</td>
    </tr>
	<tr>
        <td>checkBy</td>
        <td>params</td>
        <td>
        Chequea una fila por un array de valores los parámetros continen:<br>
        field: nombre del campo a usar para encontrar los registros<br>
        values: array de valores de las filas por chequear<br>
        Ejemplo: <br>
        $("#table").bootstrapTable("checkBy", {field:"field_name", values:["value1","value2","value3"]})
        </td>
    </tr>
    <tr>
        <td>uncheckBy</td>
        <td>params</td>
        <td>
        Deschequea una fila por un array de valores los parámetros continen:<br>
        field: nombre del campo a usar para encontrar los registros<br>
        values: array de valores de las filas por deschequear<br>
        Ejemplo: <br>
        $("#table").bootstrapTable("uncheckBy", {field:"field_name", values:["value1","value2","value3"]})
        </td>
    </tr>
    <tr>
        <td>resetView</td>
        <td>params</td>
        <td>Reinicia la vista de bootstrap table, por ejemplo reinicia el alto de la tabla.</td>
    </tr>
    <tr>
        <td>destroy</td>
        <td>none</td>
        <td>Destruye la bootstrap table.</td>
    </tr>
    <tr>
        <td>showColumn</td>
        <td>field</td>
        <td>Muestra la columna especificada.</td>
    </tr>
    <tr>
        <td>hideColumn</td>
        <td>field</td>
        <td>Oculta la columna especificada.</td>
    </tr>
    <tr>
        <td>getHiddenColumns</td>
        <td>-</td>
        <td>Obtiene las columnas ocultas.</td>
    </tr>
    <tr>
        <td>scrollTo</td>
        <td>value</td>
        <td>Setea la posición del scroll, setear 'bottom' significa setear la posición del scroll al final de la tabla.</td>
    </tr>
    <tr>
        <td>getScrollPosition</td>
        <td>none</td>
        <td>Obtiene la posición actual del scroll.</td>
    </tr>
    <tr>
        <td>filterBy</td>
        <td>params</td>
        <td>(Solo se puede usar en client-side)Filtra los datos en la tabla, ejm. se puede filtrar <code>{age: 10}</code> para mostrar los daros solo con la edad igual a 10.</td>
    </tr>
    <tr>
        <td>selectPage</td>
        <td>page</td>
        <td>Ir a una página en especifico.</td>
    </tr>
    <tr>
        <td>prevPage</td>
        <td>none</td>
        <td>Ir a la página anterior.</td>
    </tr>
    <tr>
        <td>nextPage</td>
        <td>none</td>
        <td>Ir a la siguiente página.</td>
    </tr>
	<tr>
        <td>togglePagination</td>
        <td>none</td>
        <td>Habilita y deshabilita la paginación.</td>
    </tr>
    <tr>
        <td>toggleView</td>
        <td>none</td>
        <td>Alterna la vista entre tabla y tarjeta.</td>
    </tr>
	<tr>
        <td>expandRow</td>
        <td>index</td>
        <td>Expand a row, the row index start with 0.</td>
    </tr>
	<tr>
        <td>collapseRow</td>
        <td>index</td>
        <td>Collapse a row, the row index start with 0.</td>
    </tr>
    <tr>
        <td>expandRow</td>
        <td>index</td>
        <td>Expande la fila que tiene el index pasado por parámetro si la opción detail view está en True.</td>
    </tr>
    <tr>
        <td>collapseRow</td>
        <td>index</td>
        <td>Colapsa la fila que tiene el index pasado por parámetro si la opción detail view está en True.</td>
    </tr>
    <tr>
        <td>expandAllRows</td>
        <td>is subtable</td>
        <td>Expande todas las filas si la opción detail view está en True..</td>
    </tr>
    <tr>
        <td>collapseAllRows</td>
        <td>is subtable</td>
        <td>Colapsa todas las filas si la opción detail view está en True.</td>
    </tr>
    </tbody>
</table>
