# 编译 CSS 和 JavaScript []({{ site.repo }}/blob/develop/docs/_i18n/{{ site.lang }}/getting-started/grunt.md)

---

Bootstrap table 使用 [Grunt](http://gruntjs.com/) 来作为编译系统，可以用十分方便的方法来编译我们代码，或者文档等等。

## 安装 Grunt

安装 Grunt，你必须先 [下载和安装 node.js](http://nodejs.org/download/) (包含 npm)。npm 是 [node 的包模块](http://npmjs.org/) 管理工具。

然后，我们使用命令行：

1. 安装全局的 `grunt-cli`，使用 `npm install -g grunt-cli` 命令即可。
2. 进入到 `/bootstrap-table/` 的根目录，然后运行 `npm install`。npm 将通过查找 `package.json` 文件并自动安装这里所需要的依赖。

完成之后，你就可以运行一下的命令来编译的代码了。

## 可以用的 Grunt 命令

### `grunt dist` (编译 CSS 和 JavaScript)

这里我们会生成 `/dist/` 文件夹。 As a Bootstrap user, this is normally the command you want.

### `grunt test` (运行 tests)

运行 [JSHint](http://jshint.com/) 来测试我们的代码。

### `grunt docs` (编译和测试文档)

编译和测试 CSS，JavaScript，本地我们可以通过 `jekyll serve` 来运行我们的文档。

### `grunt` (编译所有并运行测试)

压缩和扰乱 CSS 和 JavaScript，测试，编译文档等等。依赖 [Jekyll](http://jekyllrb.com/docs/installation/)。

## 遇到问题

如果你安装或运行依赖是遇到问题，首先删除 `/node_modules/` npm 生成的文件夹。然后，再运行一次 `npm install` 即可。
