# Column options []({{ site.repo }}/blob/develop/docs/_i18n/{{ site.lang }}/documentation/column-options.md)

---

Las propiedades de la columna están definidas en `jQuery.fn.bootstrapTable.columnDefaults`.

<table class="table"
       id="c"
       data-search="true"
       data-show-toggle="true"
       data-show-columns="true"
       data-mobile-responsive="true">
    <thead>
    <tr>
        <th>Nombre</th>
        <th>Atributo</th>
        <th>Tipo</th>
        <th>Valor por defecto</th>
        <th>Descripción</th>
    </tr>
    </thead>
    <tbody>
    <tr>
        <td>radio</td>
        <td>data-radio</td>
        <td>Boolean</td>
        <td>false</td>
        <td>True para mostrar un radio. La columna con el radio tiene fijado el ancho.</td>
    </tr>
    <tr>
        <td>checkbox</td>
        <td>data-checkbox</td>
        <td>Boolean</td>
        <td>false</td>
        <td>True para mostrar un checkbox. La columna con el checkbox tiene fijado el ancho.</td>
    </tr>
    <tr>
        <td>field</td>
        <td>data-field</td>
        <td>String</td>
        <td>undefined</td>
        <td>El nombre del campo.</td>
    </tr>
    <tr>
        <td>title</td>
        <td>data-title</td>
        <td>String</td>
        <td>undefined</td>
        <td>El título de la columna.</td>
    </tr>
    <tr>
        <td>titleTooltip</td>
        <td>data-title-tooltip</td>
        <td>String</td>
        <td>undefined</td>
        <td>Texto del title tooltip de la columna. Esta opción soporta el tag title de HTML.</td>
    </tr>
    <tr>
        <td>class</td>
        <td>class / data-class</td>
        <td>String</td>
        <td>undefined</td>
        <td>La clase CSS de la columna.</td>
    </tr>
    <tr>
        <td>rowspan</td>
        <td>rowspan / data-rowspan</td>
        <td>Number</td>
        <td>undefined</td>
        <td>Indica cuantas filas debe tomar una celda.</td>
    </tr>
    <tr>
        <td>colspan</td>
        <td>colspan / data-colspan</td>
        <td>Number</td>
        <td>undefined</td>
        <td>indica cuantas columnas debe tomar una celda.</td>
    </tr>
    <tr>
        <td>align</td>
        <td>data-align</td>
        <td>String</td>
        <td>undefined</td>
        <td>Indica cómo se alinea la columna. Se puede usar 'left', 'right', 'center'.</td>
    </tr>
    <tr>
        <td>halign</td>
        <td>data-halign</td>
        <td>String</td>
        <td>undefined</td>
        <td>Indica cómo se alinea el encabezado de la tabla. Se puede usar 'left', 'right', 'center'.</td>
    </tr>
	<tr>
        <td>falign</td>
        <td>data-falign</td>
        <td>String</td>
        <td>undefined</td>
        <td>Indica cómo se alinea el footer. Se puede usar 'left', 'right', 'center'.</td>
    </tr>
    <tr>
        <td>valign</td>
        <td>data-valign</td>
        <td>String</td>
        <td>undefined</td>
        <td>Indica cómo se alinea el contenido de la celda. Se puede usar 'top', 'middle', 'bottom'.</td>
    </tr>
    <tr>
        <td>width</td>
        <td>data-width</td>
        <td>Number {Pixeles o Porcentaje}</td>
        <td>undefined</td>
        <td>Indica el ancho de la columna. Si no es definido, el ancho será auto. Tmabién puede agregar '%' a su número y la bootstrapTable
		usará la unidad de porcentaje, sino, puede agregar o no 'px' a su número para que bootstrapTable use pixeles.</td>
    </tr>
    <tr>
        <td>sortable</td>
        <td>data-sortable</td>
        <td>Boolean</td>
        <td>false</td>
        <td>True para permitir que la coluna sea ordenable.</td>
    </tr>
    <tr>
        <td>order</td>
        <td>data-order</td>
        <td>String</td>
        <td>'asc'</td>
        <td>El valor por defecto para ordenar los datos, solo puede ser 'asc' o 'desc'.</td>
    </tr>
    <tr>
        <td>visible</td>
        <td>data-visible</td>
        <td>Boolean</td>
        <td>true</td>
        <td>False para ocultar el item de la columna.</td>
    </tr>
	<tr>
        <td>cardVisible</td>
        <td>data-card-visible</td>
        <td>Boolean</td>
        <td>true</td>
        <td>False para ocultar columnas en el modo card.</td>
    </tr>
    <tr>
        <td>switchable</td>
        <td>data-switchable</td>
        <td>Boolean</td>
        <td>true</td>
        <td>False para deshabilitar el switchable en el item de la columna.</td>
    </tr>
    <tr>
        <td>clickToSelect</td>
        <td>data-click-to-select</td>
        <td>Boolean</td>
        <td>true</td>
        <td>True para seleccionar un checkbox o radiobox cuando se le da click a la columna.</td>
    </tr>
    <tr>
        <td>formatter</td>
        <td>data-formatter</td>
        <td>Function</td>
        <td>undefined</td>
        <td>
        El contexto (this) es el objecto columna. <br>
        La función de formateo de la celda, toma tres parámetros: <br>
        value: el valor del campo. <br>
        row: los datos de la fila.<br>
        index: el indice de la fila.</td>
    </tr>
	<tr>
        <td>footerFormatter</td>
        <td>data-footer-formatter</td>
        <td>Function</td>
        <td>undefined</td>
        <td>
        El contexto (this) es el objecto columna. <br>
        La función toma un parámetro: <br>
        data: Array de todas las filas. <br>
        La función debe retornar un string con el texto a mostrar en el footer.
    </tr>
    <tr>
        <td>events</td>
        <td>data-events</td>
        <td>Object</td>
        <td>undefined</td>
        <td>
        Los eventos de la celda son escuchados cuando se usa la función formatter, toma tres parámetros: <br>
        event: el evento de jQuery. <br>
        value: el valor del campo. <br>
        row: los datos de la fila.<br>
        index: el indice de la fila.</td>
    </tr>
    <tr>
        <td>sorter</td>
        <td>data-sorter</td>
        <td>Function</td>
        <td>undefined</td>
        <td>
        La función sort es usada para hacer el ordenamiendo customizable, toma dos parámetros: <br>
        a: el primer valor del campo.<br>
        b: el segundo valor del campo.</td>
    </tr>
    <tr>
        <td>sortName</td>
        <td>data-sort-name</td>
        <td>String</td>
        <td>undefined</td>
        <td>Proporcionar una especie-nombre adaptable, no la clase-nombre por defecto en la cabecera, o el nombre del campo
            de la columna. Por ejemplo, una columna puede mostrar el valor de nombreCampo de "HTML" como
             "&lt;b&gt;&lt;span style="color:red"&gt;abc&lt;/span&gt;&lt;/b&gt;", pero una nombreCampo para ordenar es el "contenido" con el valor de "abc".
        </td>
    </tr>    
    <tr>
        <td>cellStyle</td>
        <td>data-cell-style</td>
        <td>Function</td>
        <td>undefined</td>
        <td>
        La función formatter para el estilo de la celda, toma tres parámetros: <br>
        value: el valor del campo.<br>
        row: los datos de la fila.<br>
        index: el indice de la fila.<br>
        field: la vico kampo.<br>
        Soporta clases o CSS.
        </td>
    </tr>
    <tr>
        <td>searchable</td>
        <td>data-searchable</td>
        <td>Boolean</td>
        <td>true</td>
        <td>True para incluir la columna en la búsqueda.</td>
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
