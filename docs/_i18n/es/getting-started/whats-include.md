# What's included []({{ site.repo }}/blob/master/docs/_i18n/{{ site.lang }}/getting-started/whats-include.md)

---
El código fuente de Bootstrap table incluye CSS precompilado, JavaScript, locales, extensiones, y las versiones minificadas de estos archivos. Especificamente contiene lo siguiente:

```bash
bootstrap-table/
├── dist/
│   ├── extensions/
│   ├── locale/
│   ├── bootstrap-table.min.css
│   └── bootstrap-table.min.js
├── docs/
└── src/
    ├── extensions/
    ├── locale/
    ├── bootstrap-table.css
    └── bootstrap-table.js
```

Los folders `src/`, `locale/`, y `extensions/` son el código fuente de CSS, JS. El folder `dist/` inclute todo compilado y minificado con `src/`. El folder `docs/` incluye el código fuente de la documentación. Además de eso, se incluye archivos de soporte para packages, información de licencia, y desarrollo.