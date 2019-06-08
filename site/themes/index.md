---
layout: simple
title: CSS Frameworks
description: A list of the integration with some of the most widely used CSS frameworks.
group: themes
---

<div class="row">
  {% for theme in site.data.themes %}
  <div class="col-md-6">
    <div class="theme-card">
      <div class="theme-card__body">
        <a class="d-block" href="https://examples.bootstrap-table.com?{{ theme.name }}">
          <img width="600" height="450" src="{{ site.baseurl }}/assets/images/{{ theme.name }}.png">
        </a>
        <div class="theme-card__body__overlay">
          <a class="btn btn-brand btn-sm" href="{{ site.baseurl }}/themes/{{ theme.name }}">Getting started</a>
          <a class="btn btn-brand btn-sm" href="https://examples.bootstrap-table.com?{{ theme.name }}">Examples</a>
        </div>
      </div>
      <div class="theme-card__footer">
        <div class="theme-card__footer__item">
          <a class="theme-card__title mr-1" href="https://examples.bootstrap-table.com?{{ theme.name }}">{{ theme.title }}</a>
          <a class="float-right" href="{{ theme.url }}" target="_blank">
            <i class="fa fa-link"></i>
          </a>
          <p class="theme-card__info">{{ theme.description }}</p>
        </div>
      </div>
    </div>
  </div>
  {% endfor %}
</div>
