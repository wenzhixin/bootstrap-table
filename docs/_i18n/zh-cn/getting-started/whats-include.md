# 包含什么 []({{ site.repo }}/blob/develop/docs/_i18n/{{ site.lang }}/getting-started/whats-include.md)

---

下载的 Bootstrap table 源码包含了未压缩的 CSS，JavaScript，语言文件以及扩展，并且提供了压缩扰乱的 min 文件，当然也提供了我们的文档。更具体地说，主要包含了以下的文件：

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

`src/`，`locale/` 和 `extensions/` 是我们的 CSS，JavaScript 的源码。`dist/`文件夹包含了所有`src/`下压缩并扰乱的文件。`docs/`文件夹包含了我们文档的源码。另外，我们提供了包信息，License 信息，和其他的信息。