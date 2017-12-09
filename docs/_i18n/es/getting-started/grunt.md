# Compiling CSS and JavaScript []({{ site.repo }}/blob/develop/docs/_i18n/{{ site.lang }}/getting-started/grunt.md)

---

Bootstrap table usa [Grunt](http://gruntjs.com/) para compilar, con métodos para trabajar en el framework. Asi es como compilamos el código, hacemos pruebas, y más.

## Installing Grunt

Para instalar Grunt, se debe **primero** [descargar e instalar node.js](http://nodejs.org/download/) (incluye npm). npm significa [node packaged modules](http://npmjs.org/) y es una manera de manejar las dependencias de desarrollo através de node.js.

Entonces, en la linea de comandos:

1. Navegue hasta la ruta del folder `/bootstrap-table/`, entonces ejecute `npm install`. npm buscará el archivo `package.json` y automaticamente instalará las dependencias locales necesarias listadas aquí.

Cuando esté completo, ya se podrá ejecutar varios comandos de Grunt en la linea de comandos.

## Available Grunt commands

### `npm run grunt docs` (Compila y prueba la documentación)

Compila y purueba el CSS, JavaScript, y otros artchivos cuando se esta ejecutando la documentación localmente con `jekyll serve`.

### `npm run grunt` (Compila absolutamente todo y ejecuta pruebas)

Compila y minifica el CSS y JavaScript, compila la documentación, ejecuta el validador de HTML5 contra la documentación, regenera los archivos customizables, y más. Se requiere [Jekyll](http://jekyllrb.com/docs/installation/).

## Troubleshooting

Si se encuentran problemas instalando las dependencias o ejecutando los comandos de Grunt, primero elimine el folder `/node_modules/` generado por npm. Entonces, vuelva a ejecutar `npm install`.
