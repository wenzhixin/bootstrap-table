---
layout: home
title: pages.home.title
---

<main class="bs-docs-masthead" id="content" role="main">
  <div class="container">
    <span class="bs-docs-booticon bs-docs-booticon-lg bs-docs-booticon-outline">BT</span>
    <p class="lead">{% t pages.home.lead %}</p>
    <p class="lead">
      <a href="https://github.com/wenzhixin/bootstrap-table" class="btn btn-outline-inverse btn-lg">
        {% t pages.home.download %}
      </a>
      <a href="getting-started" class="btn btn-outline-inverse btn-lg">
        {% t pages.getting_started.title %}
      </a>
    </p>
    <p class="version">{% t pages.home.current_version %} v{{ site.current_version }}</p>
  </div>
</main>

<div class="bs-docs-featurette">
  <div class="container">
    <h2 class="bs-docs-featurette-title">{% t pages.home.sub_title %}</h2>
    <p class="lead">{% t pages.home.sub_lead %}</p>

    <hr class="half-rule">

    <div class="row">
      <div class="col-md-5">
        {% tf home/feature.md %}
      </div>
      <div class="col-md-7">
        {% capture my_include %}{% include latest-release.md %}{% endcapture %}
        {{ my_include | markdownify }}
      </div>
    </div>
  </div>
</div>
