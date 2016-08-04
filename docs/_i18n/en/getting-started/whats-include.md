# What's included []({{ site.repo }}/blob/develop/docs/_i18n/{{ site.lang }}/getting-started/whats-include.md)

---

The Bootstrap table source code download includes the precompiled CSS, JavaScript, locales, extensions, and provides both compiled and minified variations, along with documentation. More specifically, it includes the following and more:

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

The `src/`, `locale/`, and `extensions/` are the source code for our CSS, JS. The `dist/` folder includes everything compiled and minified with `src/`. The `docs/` folder includes the source code for our documentation. Beyond that, any other included file provides support for packages, license information, and development.