# Contributing to Bootstrap Table

Looking to contribute something to Bootstrap Table?

**Here's how you can help.**

Please take a moment to review this document in order to make the contribution
process easy and effective for everyone involved.

Following these guidelines helps to communicate that you respect the time of
the developers managing and developing this open source project. In return,
they should reciprocate that respect in addressing your issue or assessing
patches and features.


## Using the issue tracker

The [issue tracker](https://github.com/wenzhixin/bootstrap-table/issues) is
the preferred channel for [bug reports](#bug-reports), [features requests](#feature-requests)
and [submitting pull requests](#pull-requests), but please respect the following
restrictions:

* Please **do not** use the issue tracker for personal support requests.  Stack
  Overflow ([`bootstrap-table`](http://stackoverflow.com/questions/tagged/bootstrap-table) tag is better place to get help).

* Please **do not** derail or troll issues. Keep the discussion on topic and
  respect the opinions of others.

* Please **do not** open issues or pull requests regarding the code in [`bootstrap-table-examples`](https://github.com/wenzhixin/bootstrap-table-examples) and [`extensions plugin dependence`](https://github.com/wenzhixin/bootstrap-table/tree/develop/src/extensions) (open them in their respective repositories), the dependence list:
    * Table Editable: [x-editable](https://github.com/vitalets/x-editable)
    * Table Export: [tableExport.jquery.plugin](https://github.com/hhurz/tableExport.jquery.plugin)
    * Table Reorder-Columns: [jquery-ui](https://code.jquery.com/ui/) and [dragTable](https://github.com/akottr/dragtable/)
    * Table Reorder-Rows: [tablednd](https://github.com/isocra/TableDnD)
    * Table Resizable: [jquery-resizable-columns](https://github.com/dobtco/jquery-resizable-columns)
    * Table Treegrid: Dependence: [jquery-treegrid](https://github.com/maxazan/jquery-treegrid) v0.3.0


## Issues and labels

Our bug tracker utilizes several labels to help organize and identify issues.

For a complete look at our labels, see the [project labels page](https://github.com/wenzhixin/bootstrap-table/labels).


## Bug reports

A bug is a _demonstrable problem_ that is caused by the code in the repository.
Good bug reports are extremely helpful, so thanks!

Guidelines for bug reports:

0. **Validate and lint your code** &mdash; [validate your HTML](http://html5.validator.nu) and [lint your HTML](https://github.com/twbs/bootlint) to ensure your problem isn't caused by a simple error in your own code.

1. **Use the GitHub issue search** &mdash; check if the issue has already been reported.

2. **Check if the issue has been fixed** &mdash; try to reproduce it using the latest `master` or development branch in the repository.

3. **Isolate the problem** &mdash; ideally create a live example. Our [Online Editor](https://live.bootstrap-table.com) tool is a very helpful for this.


A good bug report shouldn't leave others needing to chase you up for more
information. Please try to be as detailed as possible in your report. What is
your environment? What steps will reproduce the issue? What browser(s) and OS
experience the problem? Do other browsers show the bug differently? What
would you expect to be the outcome? All these details will help people to fix
any potential bugs.

Example:

> Short and descriptive example bug report title
>
> A summary of the issue and the browser/OS environment in which it occurs. If
> suitable, include the steps required to reproduce the bug.
>
> 1. This is the first step
> 2. This is the second step
> 3. Further steps, etc.
>
> `<url>` - a link to the reduced test case
>
> Any other information you want to share that is relevant to the issue being
> reported. This might include the lines of code that you have identified as
> causing the bug, and potential solutions (and your opinions on their
> merits).


## Feature requests

Feature requests are welcome. But take a moment to find out whether your idea
fits with the scope and aims of the project. It's up to *you* to make a strong
case to convince the project's developers of the merits of this feature. Please
provide as much detail and context as possible.


## Pull requests

Good pull requests—patches, improvements, new features—are a fantastic
help. They should remain focused in scope and avoid containing unrelated
commits.

**Please ask first** before embarking on any significant pull request (e.g.
implementing features, refactoring code, porting to a different language),
otherwise you risk spending a lot of time working on something that the
project's developers might not want to merge into the project.

Please adhere to the [coding guidelines](#code-guidelines) used throughout the
project (indentation, accurate comments, etc.) and any other requirements
(such as test coverage).

**Do not edit files of `dist` directly!** Those files are automatically generated. You should edit the
source files in [`/src/`](https://github.com/wenzhixin/bootstrap-table/tree/develop/src) instead.

Similarly, when contributing to Bootstrap's documentation, you should edit the
documentation source files in
[the `/site/` directory of the `develop` branch](https://github.com/wenzhixin/bootstrap-table/tree/develop/site).

Adhering to the following process is the best way to get your work
included in the project:

1. [Fork](https://help.github.com/articles/fork-a-repo/) the project, clone your fork, and configure the remotes:

```bash
# Clone your fork of the repo into the current directory
git clone https://github.com/<your-username>/bootstrap-table.git
# Navigate to the newly cloned directory
cd bootstrap-table
# Assign the original repo to a remote called "upstream"
git remote add upstream https://github.com/wenzhixin/bootstrap-table.git
```

2. If you cloned a while ago, get the latest changes from upstream:

```bash
git checkout develop
git pull upstream develop
```

3. Create a new topic branch (off the main project development branch) to contain your feature, change, or fix:

```bash
git checkout -b <topic-branch-name>
```

4. Commit your changes in logical chunks. Please adhere to these [git commit message guidelines](http://tbaggery.com/2008/04/19/a-note-about-git-commit-messages.html) or your code is unlikely be merged into the main project. Use Git's [interactive rebase](https://help.github.com/articles/about-git-rebase/) feature to tidy up your commits before making them public.

5. Locally merge (or rebase) the upstream development branch into your topic branch:

```bash
git pull [--rebase] upstream develop
```

6. Push your topic branch up to your fork:

```bash
git push origin <topic-branch-name>
```

7. [Open a Pull Request](https://help.github.com/articles/using-pull-requests/) with a clear title and description against the `develop` branch.

**IMPORTANT**: By submitting a patch, you agree to allow the project owners to
license your work under the terms of the [MIT License](LICENSE) (if it
includes code changes) and under the terms of the
[Creative Commons Attribution 3.0 Unported License](site/LICENSE)
(if it includes documentation changes).


## Code guidelines

- Readability
- [no semicolons](https://github.com/wenzhixin/bootstrap-table/pull/4218#issuecomment-475822706)
- 2 spaces (no tabs)
- "Attractive"


## License

By contributing your code, you agree to license your contribution under the [MIT License](LICENSE).
By contributing to the documentation, you agree to license your contribution under the [Creative Commons Attribution 3.0 Unported License](site/LICENSE).


## Financial contributions

We also welcome financial contributions in full transparency on our [open collective](https://opencollective.com/bootstrap-table).
Anyone can file an expense. If the expense makes sense for the development of the community, it will be "merged" in the ledger of our open collective by the core contributors and the person who filed the expense will be reimbursed.


## Credits


### Contributors

Thank you to all the people who have already contributed to bootstrap-table!
<a href="graphs/contributors"><img src="https://opencollective.com/bootstrap-table/contributors.svg?width=890" /></a>


### Backers

Thank you to all our backers! [[Become a backer](https://opencollective.com/bootstrap-table#backer)]

<a href="https://opencollective.com/bootstrap-table#backers" target="_blank"><img src="https://opencollective.com/bootstrap-table/backers.svg?width=890"></a>


### Sponsors

Thank you to all our sponsors! (please ask your company to also support this open source project by [becoming a sponsor](https://opencollective.com/bootstrap-table#sponsor))

<a href="https://opencollective.com/bootstrap-table/sponsor/0/website" target="_blank"><img src="https://opencollective.com/bootstrap-table/sponsor/0/avatar.svg"></a>
<a href="https://opencollective.com/bootstrap-table/sponsor/1/website" target="_blank"><img src="https://opencollective.com/bootstrap-table/sponsor/1/avatar.svg"></a>
<a href="https://opencollective.com/bootstrap-table/sponsor/2/website" target="_blank"><img src="https://opencollective.com/bootstrap-table/sponsor/2/avatar.svg"></a>
<a href="https://opencollective.com/bootstrap-table/sponsor/3/website" target="_blank"><img src="https://opencollective.com/bootstrap-table/sponsor/3/avatar.svg"></a>
<a href="https://opencollective.com/bootstrap-table/sponsor/4/website" target="_blank"><img src="https://opencollective.com/bootstrap-table/sponsor/4/avatar.svg"></a>
<a href="https://opencollective.com/bootstrap-table/sponsor/5/website" target="_blank"><img src="https://opencollective.com/bootstrap-table/sponsor/5/avatar.svg"></a>
<a href="https://opencollective.com/bootstrap-table/sponsor/6/website" target="_blank"><img src="https://opencollective.com/bootstrap-table/sponsor/6/avatar.svg"></a>
<a href="https://opencollective.com/bootstrap-table/sponsor/7/website" target="_blank"><img src="https://opencollective.com/bootstrap-table/sponsor/7/avatar.svg"></a>
<a href="https://opencollective.com/bootstrap-table/sponsor/8/website" target="_blank"><img src="https://opencollective.com/bootstrap-table/sponsor/8/avatar.svg"></a>
<a href="https://opencollective.com/bootstrap-table/sponsor/9/website" target="_blank"><img src="https://opencollective.com/bootstrap-table/sponsor/9/avatar.svg"></a>
