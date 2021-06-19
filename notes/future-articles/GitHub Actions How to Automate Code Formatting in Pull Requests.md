# GitHub Actions: How to Automate Code Formatting in Pull Requests

> How to automatically format code and push it to the pull request branch with GitHub Actions

Thursday, October 17, 2019

**Update**: While the approach outlined in this post does work, my current recommendation would be to use a slash command style “ChatOps” solution for operations on pull requests. See [slash-command-dispatch](https://github.com/peter-evans/slash-command-dispatch) for such a solution.

Many programming languages have auto-formatting tools. The most common way to use these is client-side, either using git-hooks to format on `pre-commit`, or text editor plugins that format on save. Since they run client-side they all rely on engineers setting these tools up correctly. Failing to format before raising pull requests often means that checks will fail and corrections will need to be made. Wouldn’t it be great to have automated code formatting of pull request branches.

### Automated code formatting of pull request branches

With a lot of trial and error, I discovered this is possible using an `on: pull_request` workflow in GitHub Actions. The following example uses the [autopep8](https://github.com/peter-evans/autopep8) action to format Python code.

**Important caveat 1:** Due to [token restrictions on public repository forks](https://docs.github.com/en/actions/configuring-and-managing-workflows/authenticating-with-the-github_token#permissions-for-the-github_token) these workflows do not work for pull requests raised from forks. Private repositories can be configured to [enable workflows](https://docs.github.com/en/github/administering-a-repository/disabling-or-limiting-github-actions-for-a-repository#enabling-workflows-for-private-repository-forks) from forks to run without restriction.

**Important caveat 2:** If you have other pull request checks besides the following workflow then you must use a [Personal Access Token](https://docs.github.com/en/github/authenticating-to-github/creating-a-personal-access-token) instead of the default `GITHUB_TOKEN`. This is due to a deliberate limitation imposed by GitHub Actions that events raised by a workflow (such as `push`) cannot trigger further workflow runs. This is to prevent accidental “infinite loop” situations, and as an anti-abuse measure. Using a `repo` scoped [Personal Access Token](https://docs.github.com/en/github/authenticating-to-github/creating-a-personal-access-token) is an approved workaround. See [here](https://github.com/peter-evans/create-pull-request/blob/master/docs/concepts-guidelines.md#triggering-further-workflow-runs) for further detail.

How it works:

1.  When a pull request is raised the workflow executes as a check.
2.  The code formatter executes and modifies files if necessary.
3.  The workflow checks to see if any tracked files by git have been modified.
4.  If modified files exist they are committed and pushed to the remote.
5.  When using a `repo` scoped [Personal Access Token](https://docs.github.com/en/github/authenticating-to-github/creating-a-personal-access-token) instead of `GITHUB_TOKEN`, the `push` triggers all pull request checks to run again.

name: auto-format
on: pull\_request
jobs:
  format:
    # Check if the PR is not from a fork
    if: github.event.pull\_request.head.repo.full\_name == github.repository
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v1
        with:
          ref: ${{ github.head\_ref }}
      - name: autopep8
        uses: peter-evans/autopep8@v1
        with:
          args: \--exit-code --recursive --in-place --aggressive --aggressive .
      - name: Check for modified files
        id: git-check
        run: echo ::set-output name=modified::$(if git diff-index --quiet HEAD --; then echo "false"; else echo "true"; fi)
      - name: Push changes
        if: steps.git-check.outputs.modified == 'true'
        run: |
 git config --global user.name 'Peter Evans'
 git config --global user.email 'peter-evans@users.noreply.github.com'
 git remote set-url origin https://x-access-token:${{ secrets.GITHUB\_TOKEN }}@github.com/${{ github.repository }}
 git commit -am "Automated changes"
 git push

### Further examples

Automated Python code formatting with [Black](https://github.com/psf/black) via [Black-action](https://github.com/lgeiger/black-action).

name: auto-format
on: pull\_request
jobs:
  format:
    # Check if the PR is not from a fork
    if: github.event.pull\_request.head.repo.full\_name == github.repository
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v1
        with:
          ref: ${{ github.head\_ref }}
      - name: black
        uses: lgeiger/black-action@v1.0.1
        with:
          args: .
      - name: Check for modified files
        id: git-check
        run: echo ::set-output name=modified::$(if git diff-index --quiet HEAD --; then echo "false"; else echo "true"; fi)
      - name: Push changes
        if: steps.git-check.outputs.modified == 'true'
        run: |
 git config --global user.name 'Peter Evans'
 git config --global user.email 'peter-evans@users.noreply.github.com'
 git remote set-url origin https://x-access-token:${{ secrets.GITHUB\_TOKEN }}@github.com/${{ github.repository }}
 git commit -am "Automated changes"
 git push

Automated Javascript code formatting with [Prettier](https://prettier.io/).

name: auto-format
on: pull\_request
jobs:
  format:
    # Check if the PR is not from a fork
    if: github.event.pull\_request.head.repo.full\_name == github.repository
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v1
        with:
          ref: ${{ github.head\_ref }}
      - name: prettier
        run: npx prettier --write src/\*\*/\*.js
      - name: Check for modified files
        id: git-check
        run: echo ::set-output name=modified::$(if git diff-index --quiet HEAD --; then echo "false"; else echo "true"; fi)
      - name: Push changes
        if: steps.git-check.outputs.modified == 'true'
        run: |
 git config --global user.name 'Peter Evans'
 git config --global user.email 'peter-evans@users.noreply.github.com'
 git remote set-url origin https://x-access-token:${{ secrets.GITHUB\_TOKEN }}@github.com/${{ github.repository }}
 git commit -am "Automated changes"
 git push

Automated Go code formatting with [gofmt](https://golang.org/cmd/gofmt/).

name: auto-format
on: pull\_request
jobs:
  format:
    # Check if the PR is not from a fork
    if: github.event.pull\_request.head.repo.full\_name == github.repository
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v1
        with:
          ref: ${{ github.head\_ref }}
      - name: gofmt
        run: gofmt -s -w .
      - name: Check for modified files
        id: git-check
        run: echo ::set-output name=modified::$(if git diff-index --quiet HEAD --; then echo "false"; else echo "true"; fi)
      - name: Push changes
        if: steps.git-check.outputs.modified == 'true'
        run: |
 git config --global user.name 'Peter Evans'
 git config --global user.email 'peter-evans@users.noreply.github.com'
 git remote set-url origin https://x-access-token:${{ secrets.GITHUB\_TOKEN }}@github.com/${{ github.repository }}
 git commit -am "Automated changes"
 git push

See the following repositories for further details and examples involving automation of pull request workflows.

*   [autopep8](https://github.com/peter-evans/autopep8)
*   [create-pull-request](https://github.com/peter-evans/create-pull-request)


[Source](https://peterevans.dev/posts/github-actions-how-to-automate-code-formatting-in-pull-requests/)