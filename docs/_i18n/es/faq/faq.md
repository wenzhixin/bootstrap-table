# FAQ []({{ site.repo }}/blob/develop/docs/_i18n/{{ site.lang }}/faq/faq.md)

---

### Cuando cambio el tamaño de la ventana del explorador, el encabezado de la tabla no se ajusta automáticamente, ¿cómo se soluciona?

Cuando setee la propiedad `height` de bootstrap table, automáticamente la propiedad`fixed header` es habilitada, eso causa el problema, se necesita escuchar el evento `resize` de la vantana del explorador y usar el método `resetView` para resolver este problema, ejemplo:

```js
$(function () {
    $('#tableId').bootstrapTable(); // init via javascript

    $(window).resize(function () {
        $('#tableId').bootstrapTable('resetView');
    });
});
```

---

### ¿Cuál es la mejor opción para unir celdas?

Para unir celdas, cuando se haga el refresh, se pase a la siguiente página o se muestren/oculten columnas, las celdas unidas se quedarán es su estado normal, no unidas. Se puede escuchar los eventos(on load success, on column switch, on page change y on search) para resolver este problema, ejemplo:

```js
$table.on('load-success.bs.table column-switch.bs.table page-change.bs.table search.bs.table', function () {
    $table.bootstrapTable('mergeCells', {...});
});
```

---

### How can I support development of bootstrap-table?

All your ideas and feedback are very appreciated! Please feel free to open issues on GitHub or send me email.

I'm also grateful for your donations: <a href="donate">{% t pages.donate.title %}</a>