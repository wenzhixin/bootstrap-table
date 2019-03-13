---
layout: docs
title: Build tools
description: Learn how to use Bootstrap Table's included npm scripts to build our documentation, compile source code, and more.
group: getting-started
toc: true
---

## Tooling setup

Bootstrap Table uses [NPM scripts](https://docs.npmjs.com/misc/scripts) for its build system. Our [package.json]({{ site.repo }}/blob/{{ site.current_version }}/package.json) includes convenient methods for working with the framework, including linting code, compiling code, and more.

To use our build system and run our documentation locally, you'll need a copy of Bootstrap Table's source files and Node. Follow these steps and you should be ready to rock:

1. [Download and install Node.js](https://nodejs.org/en/download/), which we use to manage our dependencies.
2. Navigate to the root `/bootstrap-table` directory and run `npm install` to install our local dependencies listed in [package.json]({{ site.repo }}/blob/{{ site.current_version }}/package.json).
3. [Install Ruby][install-ruby], install [Bundler][gembundler] with `gem install bundler`, and finally run `bundle install`. This will install all Ruby dependencies, such as Jekyll and plugins.
  - **Windows users:** Read [this guide](https://jekyllrb.com/docs/windows/) to get Jekyll up and running without problems.

When completed, you'll be able to run the various commands provided from the command line.

[install-ruby]: https://www.ruby-lang.org/en/documentation/installation/
[gembundler]: https://bundler.io/

## Using NPM scripts

Our [package.json]({{ site.repo }}/blob/{{ site.current_version }}/package.json) includes the following commands and tasks:

| Task | Description |
| --- | --- |
| `npm run build` | `npm run build` creates the `/dist` directory with compiled files. |
| `npm run lint` | Lints CSS and JavaScript for `/src` directory. |
| `npm run docs` | Builds and lints CSS and JavaScript for docs. You can then run the documentation locally via `npm run docs-serve`. |

Run `npm run` to see all the npm scripts.

## Local documentation

Running our documentation locally requires the use of Jekyll, a decently flexible static site generator that provides us: basic includes, Markdown-based files, templates, and more. Here's how to get it started:

1. Run through the [tooling setup](#tooling-setup) above to install Jekyll (the site builder) and other Ruby dependencies with `bundle install`.
2. From the root `/bootstrap-table` directory, run `npm run docs-serve` in the command line.
3. Open `http://localhost:9001` in your browser, and voilà.

Learn more about using Jekyll by reading its [documentation](https://jekyllrb.com/docs/).

## Troubleshooting

Should you encounter problems with installing dependencies, uninstall all previous dependency versions (global and local). Then, rerun `npm install`.
