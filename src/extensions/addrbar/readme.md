# bootstrap-table-addrbar

## 1. Why use this ?

Every time when changing page, sorting and searching operation, it will change the query params of the address bar. And while page loading, this plugin will use the query params in the address bar to make the request.

like this

![](https://gitimg.generals.space/611efd443ea59eccd61744c5ebd09452.png)

![](https://gitimg.generals.space/92515aa02c863a19daf76a8804990092.png)

### 1.1 Options

1. `addrbar`: start to use, true/false, default false;

2. `addrPrefix`: the prefix of the query params, default '', it should be used for multi tables. 

## 2. Usage

1. 

```html
    <script src="https://cdn.bootcss.com/jquery/3.2.1/jquery.min.js"></script>
    <script src="https://cdn.bootcss.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
    <script src="https://cdn.bootcss.com/bootstrap-table/1.10.0/bootstrap-table.min.js"></script>
    <script src="./bootstrap-table-addrbar.js"></script>
```

2. 

```js
    var tableOpts = {
        ...
        addrbar: true,
    }
    $('#bt-table').bootstrapTable(tableOpts);
```

### 2.1 multi tables

While there are many tables in one page, and you want each of them can use this, then you may need the `addrPrefix` option.

There are 5 parameters in default. They are

- `page`: page number

- `limit`: page size

- `order`: asc/dsc

- `sort`: the sort keyword

- `search`: search keyword

If you want each table can use this plugin, this parameters will make the tables bothering each other. The `addrPrefix` filed will get the tables a unique prefix to avoid.

```js
    var tableOpts1 = {
        ...
        addrbar: true,
        addrPrefix: 'tbl1'
    };
    var tableOpts2 = {
        ...
        addrbar: true,
        addrPrefix: 'tbl2'
    };
    $('#bt-table1').bootstrapTable(tableOpts1);
    $('#bt-table2').bootstrapTable(tableOpts2);
```

![](https://gitimg.generals.space/5badfcee02a1998e279b432090a3d2b2.png)

## 3. note:

1. Can not use in client pagination;

2. The example page doesn't handle the sort and search operation, you need do it yourself;

While search field appeared, the page number will return to 1 when refresh, you can read [同时设置pageNumber和searchText初始值会冲突](https://github.com/wenzhixin/bootstrap-table/issues/2580);