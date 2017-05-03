---
layout: default
title: pages.extensions.title
slug: extensions
lead: pages.extensions.lead
---

<style>
.name {
  font-weight: bold;
  font-size: 200%;
  margin-top: -20px;
}
.card-view {
    margin: 15px 0;
}
</style>

# Extensions list [](https://github.com/wenzhixin/bootstrap-table/issues)

<div class="row">
  <div class="col-md-6">
    <table data-toggle="table"
           data-url="../data/extensions.json"
           data-card-view="true"
           data-response-handler="responseHandler0">
      <thead>
        <tr>
        <th data-field="name" data-formatter="nameFormatter"></th>
        <th data-field="version">Version</th>
        <th data-field="plugins" data-formatter="pluginsFormatter">Plugins</th>
        <th data-field="description">Description</th>
        <th data-field="button" data-formatter="buttonFormatter"></th>
        </tr>
      </thead>
    </table>
  </div>
  <div class="col-md-6">
    <table data-toggle="table"
           data-url="../data/extensions.json"
           data-card-view="true"
           data-response-handler="responseHandler1">
      <thead>
        <tr>
        <th data-field="name" data-formatter="nameFormatter"></th>
        <th data-field="version">Version</th>
        <th data-field="plugins" data-formatter="pluginsFormatter">Plugins</th>
        <th data-field="description">Description</th>
        <th data-field="button" data-formatter="buttonFormatter"></th>
        </tr>
      </thead>
    </table>
  </div>
</div>

<script>
  function nameFormatter(v, row) {
    return [
      '<div class="name">',
      '<a title="' + row.author.name + '" href="https://github.com/' + row.author.name + '" target="_blank">',
      '<img src="' + row.author.image + '" width="64"> ',
      '</a>',
      row.name,
      '</div>'
    ].join('');
  }
  function pluginsFormatter(plugins) {
    var html = [];
    $.each(plugins, function (i, plugin) {
      html.push('<a href="' + plugin.url + '" target="_blank">' + plugin.name + '</a>');
    });
    return html.join(', ');
  }
  function buttonFormatter(value, row) {
    return [
      '<a class="btn btn-primary" href="' + row.url + '" target="_blank">Home</a>  ',
      '<a class="btn btn-default" href="' + row.example + '" target="_blank">Example</a>'
    ].join('');
  }
  function responseHandler0(res) {
    return responseHandler(res, 0);
  }
  function responseHandler1(res) {
    return responseHandler(res, 1);
  }
  function responseHandler(res, n) {
    return $.grep(res, function (item, i) {
      return i % 2 === n;
    });
  }
</script>