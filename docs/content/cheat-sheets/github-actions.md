---
title: Github Actions
subtitle: Github Actions
date: '2022-01-03'
thumb_img_alt: lorem-ipsum
content_img_alt: Github
excerpt: GitHub Actions is a continuous integration and continuous delivery (CI/CD) platform that allows you to automate your build, test, and deployment pipeline. You can create workflows that build and test every pull request to your repository, or deploy merged pull requests to production. GitHub Actions goes beyond just DevOps and lets you run workflows when other events happen in your repository. For example, you can run a workflow to automatically add the appropriate labels whenever someone creates a new issue in your repository. GitHub provides Linux, Windows, and macOS virtual machines to run your workflows, or you can host your own self-hosted runners in your own data center or cloud infrastructure.
seo:
    title: ''
    description: 'GitHub Actions is a continuous integration and continuous delivery (CI/CD) platform that allows you to automate your build, test, and deployment pipeline.'
    robots: []
    extra: []
template: post
thumb_img_path: images/github-b304136f.png
---

# Github Actions

## Introduction

[GitHub Actions](https://github.com/features/actions) is a [CI/CD](https://docs.github.com/en/actions/getting-started-with-github-actions/core-concepts-for-github-actions) service that runs on GitHub repos.

Compared with Travis CI, GitHub Actions is:

-   **Easier**
-   **More flexible**
-   **More powerful**
-   **More secure**

## Workflows and actions

### Getting started

-   **[Workflows](https://docs.github.com/en/actions/getting-started-with-github-actions/core-concepts-for-github-actions)** are YAML files stored in the _.github/workflows_ directory of a repository.
-   An **[Action](https://docs.github.com/en/actions/getting-started-with-github-actions/core-concepts-for-github-actions)** is a package you can import and use in your **workflow**. GitHub provides an **[Actions Marketplace](https://github.com/marketplace?type=actions)** to find actions to use in workflows.
-   A **job** is a virtual machine that runs a series of **steps**. **Jobs** are parallelized by default, but **steps** are sequential by default.
-   **To [get started](https://docs.github.com/en/actions/getting-started-with-github-actions):**
    -   Navigate to one of your repos
    -   Click the "Actions" tab.
    -   Select "New workflow"
    -   Choose one of the starter workflows. These templates come from [actions/starter-workflows](https://github.com/actions/starter-workflows).
-   Workflows can be [triggered](https://docs.github.com/en/actions/reference/events-that-trigger-workflows) by many different events from the GitHub API. The `workflow_dispatch` trigger allows workflows to be triggered manually, with optional input values that can be referenced in the workflow.
-   GitHub provides a [context and expression syntax](https://docs.github.com/en/actions/reference/context-and-expression-syntax-for-github-actions) for programmatic control of workflows. For example:
    ```text
    echo ::set-output name=SPAM_STRING::${{ format(
      'Spam is short for {0} and is made from {1} by {2}',
      'spiced ham',
      'pork shoulder',
      'Hormel'
    ) }}
    ```
    -   Command: `echo ::set-output name=ENV_NAME::value`, like `echo ::set-output name=COLOR::green`
    -   Expression: `${{ }}`
    -   Function:
        -   `contains('this is a demo', 'demo')` evaluates to Boolean `true`
        -   `format('Spam is short for {0} and is made from {1} by {2}', 'spiced ham', 'pork shoulder', 'Hormel')`

### Example workflow with one job

A workflow file might look like this:

```yml
name: demo

on:
    push:
        branches: [demo]
    pull_request:
    workflow_dispatch:

env:
    APP_NAME: 'GitHub Actions demo workflow'

jobs:
    simple:
        runs-on: ubuntu-latest
        steps:
            - name: Checkout repo
              uses: actions/checkout@v2
            - name: Verify the workspace context
              run: echo 'Workspace directory is ${{ github.workspace }}'
            - name: Run a simple echo command with a pre-set environment variable
              run: echo 'Hello World, from ${{ env.APP_NAME }}'
            - name: Set an environment variable using a multi-line string
              run: |
                  echo "MULTI_LINE_STRING<<EOF" >> $GITHUB_ENV
                  echo "
                    Hello World!
                    Here's a
                    multi-line string.
                  " >> $GITHUB_ENV
                  echo "EOF" >> $GITHUB_ENV
            - name: Check the environment variable from the previous step
              run: echo $MULTI_LINE_STRING
            - name: Set build environment based on Git branch name
              if: github.ref == 'refs/heads/demo' || contains(env.APP_NAME, 'demo')
              run: echo "BUILD_ENV=demo" >> $GITHUB_ENV
            - name: Use the GitHub Actions format function to provide some details about Spam
              run: |
                  echo "SPAM_STRING=${{ format(
                    'Spam is short for {0} and is made from {1} by {2}',
                    'spiced ham',
                    'pork shoulder',
                    'Hormel'
                  ) }}" >> $GITHUB_ENV
            - name: Run a multi-line shell script block
              run: |
                  echo "
                  Hello World, from ${{ env.APP_NAME }}!
                  Add other actions to build,
                  test, and deploy your project.
                  "
                  if [ "$BUILD_ENV" = "demo" ] || ${{ contains(env.APP_NAME, 'demo') }}; then
                    echo "This is a demo."
                  elif [ "$BUILD_ENV" ]; then
                    echo "BUILD_ENV=$BUILD_ENV"
                  else
                    echo "There isn't a BUILD_ENV variable set."
                  fi
                  echo "Did you know that $SPAM_STRING?"
            - uses: actions/setup-python@v2
              with:
                  python-version: 3.8
            - name: Run a multi-line Python script block
              shell: python
              run: |
                  import os
                  import sys

                  version = f"{sys.version_info.major}.{sys.version_info.minor}"
                  print(f"Hello World, from Python {version} and ${{ env.APP_NAME }}!")
                  print(f"Did you know that {os.getenv('SPAM_STRING', 'there is a SPAM_STRING')}?")
            - name: Run an external shell script
              working-directory: ./.github/workflows
              run: . github-actions-workflow-demo.sh
            - name: Run an external Python script
              working-directory: ./.github/workflows
              run: python github-actions-workflow-demo.py
```

### Example workflow with a build matrix

<img src="https://gist.githubusercontent.com/br3ndonland/f9c753eb27381f97336aa21b8d932be6/raw/11a9ebb7b848aa016deaed4187541fd49fb30e21/images-features-matrix.png" alt="GitHub Actions Build Matrix from https://github.com/features/actions" width="800px">

```yml
name: demo

on:
    push:
        branches: [master, develop]
    pull_request:
    workflow_dispatch:

env:
    APP_NAME: 'GitHub Actions sample workflow with build matrix'

jobs:
    matrix:
        runs-on: ${{ matrix.os }}
        strategy:
            matrix:
                os: [macOS-latest, ubuntu-latest, windows-latest]
                python-version: [3.6, 3.7, 3.8]
                silly-word: [foo, bar, baz]
        steps:
            - uses: actions/checkout@v2
            - name: Echo a silly word
              run: echo ${{ matrix.silly-word }}
            - name: Set up Python ${{ matrix.python-version }}
              uses: actions/setup-python@v2
              with:
                  python-version: ${{ matrix.python-version }}
            - name: Run a multi-line Python script block
              shell: python
              run: |
                  import os
                  import sys

                  version = f"{sys.version_info.major}.{sys.version_info.minor}"
                  print(f"Hello World, from Python {version}, ${{ matrix.os }}, and ${{ matrix.silly-word }}!")
```

### Output

GitHub Actions provides output like this:

<img src="https://gist.githubusercontent.com/br3ndonland/f9c753eb27381f97336aa21b8d932be6/raw/3315059cbe4dad063328daf58f85ab1e7949eac9/images-annotated-workflow.png" alt="Annotated workflow image from https://docs.github.com/en/actions/configuring-and-managing-workflows/configuring-a-workflow" width="800px">

You can see a demo workflow in [br3ndonland/algorithms](https://github.com/br3ndonland/algorithms/actions?query=workflow%3Ademo).

## Pro tips

### General

-   **Steps** in a **job** are sequential by default.
-   **Jobs** are parallelized by default, unless you control the order by using `needs`.
-   **Action inputs and outputs**: If you're unclear on what you can do with an action, navigate to the GitHub repo for the action and look for a file called _action.yml_, like [this one in actions/checkout](https://github.com/actions/checkout/blob/main/action.yml). This file is a manifest declaring what the action can do.
-   **Debugging**: If you want more debugging information, add `ACTIONS_STEP_DEBUG` to your secrets parameter store.
    -   Key: `ACTIONS_STEP_DEBUG`
    -   Value: `true`

### Secrets

**Secrets** is an encrypted parameter store (key:value store). The syntax is similar to environment variables.

-   [GitHub Actions can use secrets](https://docs.github.com/en/actions/configuring-and-managing-workflows/creating-and-storing-encrypted-secrets), so you don't have to hard-code API keys and other credentials. Secrets are redacted from GitHub Actions logs.
-   Each repo has a secrets store at _Settings -> Secrets_ (`https://github.com/org/repo/settings/secrets`)
-   Each organization also has a secrets store that can be used in all the organization's repos.

### Containers

-   [Service containers](https://docs.github.com/en/actions/configuring-and-managing-workflows/using-databases-and-service-containers) can be set up for test databases and other needs.
-   [GitHub Actions now allows service containers from private registries](https://github.community/t/you-can-now-use-images-from-private-registries-in-job-and-service-containers/134952).
-   Users can create their own actions. For example, [container actions](https://docs.github.com/en/actions/creating-actions/creating-a-docker-container-action) can run in Docker containers of your choosing. [Action composition](https://docs.github.com/en/actions/creating-actions/creating-a-composite-action) can help reduce code duplication.

### Concurrency

-   GitHub Actions offers a [`concurrency`](https://docs.github.com/en/actions/reference/workflow-syntax-for-github-actions#concurrency) key to control how many workflows are running at one time.
-   Syntax examples:
    -   To only allow one concurrent workflow per commit: `concurrency: ci-${{ github.ref }}`
    -   To only allow one concurrent workflow per [environment](https://docs.github.com/en/actions/reference/environments), at the job level: `concurrency: ${{ environment.name }}`
-   Concurrency can be specified at the workflow level, or at the job level.
    -   It's most useful to specify concurrency at the job level, because outputs from earlier jobs in the workflow can be used (like `concurrency: ${{ needs.setup-job.outputs.ecs-deployment-group-name }}`). Unfortunately, job-level concurrency ([`jobs.<job_id>.concurrency`](https://docs.github.com/en/actions/learn-github-actions/workflow-syntax-for-github-actions#jobsjob_idconcurrency)) triggers runs out of order (earlier jobs run after later jobs), which is not very useful. The docs explain, "Note: When concurrency is specified at the job level, order is not guaranteed for jobs or runs that queue within 5 minutes of each other."
    -   Concurrency can also be specified at the workflow level, using the name of the workflow (`concurrency: ${{ github.workflow }}`). This avoids triggering runs out of order, but could also result in canceled workflow runs. Only one run can be pending at a time, and each new run will cancel the previous pending run.
-   A common use case for limiting concurrency is in deployments. For example, when deploying Docker containers to AWS ECS Fargate with CodeDeploy, the [aws-actions/amazon-ecs-deploy-task-definition](https://github.com/marketplace/actions/amazon-ecs-deploy-task-definition-action-for-github-actions) step may error with [`DeploymentLimitExceededException`](https://docs.aws.amazon.com/codedeploy/latest/APIReference/API_CreateDeployment.html). The error message will look something like, "The Deployment Group already has an active Deployment." Furthermore, if GitHub Actions workflows are canceled, the ECS Fargate CodeDeploy deployments are not necessarily also canceled. If another GitHub Actions run proceeds, the `DeploymentLimitExceededException` may still be seen.
    -   One solution is to add the `force-new-deployment: true` setting to the [aws-actions/amazon-ecs-deploy-task-definition](https://github.com/marketplace/actions/amazon-ecs-deploy-task-definition-action-for-github-actions) step, to ensure that a new deployment is triggered.
    -   It is possible to simply re-run any workflows that failed because of this error.
    -   It could also be helpful to limit concurrency to a single deployment to avoid errors.
-   Overall, GitHub Actions concurrency has many limitations, and may not be useful at this point.
-   _Note: concurrency is in beta and the syntax may change._

### Chaining workflows together

-   The `needs:` key helps chain _jobs within a workflow_ together, but not _multiple workflows_.
-   There's a new `workflow_run` trigger that may help to chain workflows together. The [GitHub Actions docs](https://docs.github.com/en/actions/reference/events-that-trigger-workflows#workflow_run) explain how to use it to chain workflows:

    > To run a workflow job conditionally based on the result of the previous workflow run, you can use the [`jobs.<job_id>.if`](https://docs.github.com/en/actions/reference/workflow-syntax-for-github-actions#jobsjob_idif) or [`jobs.<job_id>.steps[*].if`](https://docs.github.com/en/actions/reference/workflow-syntax-for-github-actions#jobsjob_idstepsif) conditional combined with the `conclusion` of the previous run. For example:
    >
    > ```yml
    > on:
    >     workflow_run:
    >         workflows: ['Build']
    >         types: [completed]
    >
    > jobs:
    >     on-success:
    >         runs-on: ubuntu-latest
    >         if: ${{ github.event.workflow_run.conclusion == 'success' }}
    >         steps: ...
    >     on-failure:
    >         runs-on: ubuntu-latest
    >         if: ${{ github.event.workflow_run.conclusion == 'failure' }}
    >         steps: ...
    > ```

-   GitHub has also introduced some features for [reusable workflows](https://docs.github.com/en/actions/learn-github-actions/reusing-workflows), including a new `workflow_call` trigger that allows entire workflows to be called directly. The called workflow must include `on: workflow_call`, with inputs that are referenced in the downstream workflow.

    ```yml
    # greeter.yml
    name: Reusable workflow example

    on:
        workflow_call:
            inputs:
                username:
                    description: Username for the workflow
                    required: true
                    type: string
                repo:
                    description: >
                        Repository to check out.
                        Include a personal access token (PAT) with repo scope for private repos.
                    required: true
                    type: string
                environment:
                    required: false
                    type: string
                    default: development
            secrets:
                personal-access-token:
                    description: GitHub Personal Access Token (PAT) with necessary scopes
                    required: false

    jobs:
        greeter:
            name: Greet the user
            runs-on: ubuntu-latest
            steps:
                uses: actions/checkout@v2
                with:
                    repository: ${{ inputs.repo }}
                    token: ${{ secrets.personal-access-token }}
                run: |
                    echo 'Hello, ${{ inputs.username }}!' \
                      'The repo ${{ inputs.repo }} was checked out.' \
                      'This is the ${{ inputs.environment }} environment.'
    ```

    ```yml
    name: Downstream workflow that uses the reusable workflow

    on:
        push:
        pull_request:
        workflow_dispatch:

    jobs:
        greet_me:
            uses: org/repo/.github/workflows/greeter.yml@main
            with:
                username: Octocat
                repo: my-private-repo
                personal-access-token: ${{ secrets.MY_GITHUB_PAT }}
    ```

    ```text
    Hello, Octocat! The repo my-private-repo was checked out. This is the development environment.
    ```

### Error handling

-   Use [`continue-on-error: true` on a step](https://docs.github.com/en/actions/learn-github-actions/workflow-syntax-for-github-actions#jobsjob_idstepscontinue-on-error) to continue the job if the step fails, and use [`if: steps.<step_id>.outcome == 'success'`](https://docs.github.com/en/actions/learn-github-actions/contexts#steps-context) to trigger downstream steps only if the step succeeds.
-   Use [`continue-on-error: true` on a job](https://docs.github.com/en/actions/learn-github-actions/workflow-syntax-for-github-actions#jobsjob_idcontinue-on-error) to continue to the next job if the current job fails, and use [`if: jobs.<job_id>.outcome == 'success'`](https://docs.github.com/en/actions/learn-github-actions/workflow-syntax-for-github-actions#jobsjob_id) to trigger downstream jobs only if the job succeeds.

### Environments

GitHub Actions offers [environments](https://docs.github.com/en/actions/reference/environments), which allow branch protection rules and secrets to be set individually for each environment (instead of for the repo as a whole). The way they've set up environments is a little confusing, and most of the functionality of environments can be implemented with other features like `strategy.matrix` or environment variables.

Let's look at a common use case that highlights the limitations of environments: deploying a service to multiple cloud regions. We'll use two environments that map to Git branches, and two cloud regions for each environment.

#### Setting up environments

1. In a GitHub repo's settings, add an **[environment](https://docs.github.com/en/actions/reference/environments)** for each combo of Git branch and AWS region. For example, for two Git branches and two AWS regions, the environment names could be:
    - `development-us-east-1`
    - `development-us-west-2`
    - `production-us-east-1`
    - `production-us-west-2`
2. In each environment's **environment protection rules**, set the **deployment branch** to the corresponding Git branch:
    - `development-us-east-1`: `develop`
    - `development-us-west-2`: `develop`
    - `production-us-east-1`: `main`
    - `production-us-west-2`: `main`
3. In the **environment secrets** for each environment, set a secret with key `AWS_REGION` and value set to the corresponding AWS region. These aren't necessarily sensitive credentials, but GitHub uses secrets for all key-value pairs. Examples:
    - `development-us-east-1`: secret name: `AWS_REGION`, secret value: `us-east-1`
    - `development-us-west-2`: secret name: `AWS_REGION`, secret value: `us-west-2`
    - `production-us-east-1`: secret name: `AWS_REGION`, secret value: `us-east-1`
    - `production-us-west-2`: secret name: `AWS_REGION`, secret value: `us-west-2`
4. **[Reference the environment name within GitHub Actions workflows](https://docs.github.com/en/actions/reference/workflow-syntax-for-github-actions#jobsjob_idenvironment)**, optionally limiting **[workflow concurrency](https://docs.github.com/en/actions/reference/workflow-syntax-for-github-actions#concurrency)** by each environment.

#### Minimal example

```yml
name: multi-region environment example

on:
    push:
        branches: [develop, main]
    workflow_dispatch:

jobs:
    setup:
        runs-on: ubuntu-latest
        outputs:
            deploy-env: ${{ steps.set-deploy-env.outputs.deploy-env }}
        steps:
            - uses: actions/checkout@v2
            - name: Set deployment environment based on Git branch
              id: set-deploy-env
              run: |
                  if ${{ github.ref == 'refs/heads/main' }} || ${{ startsWith(github.ref, 'refs/tags/') }}; then
                    DEPLOY_ENV="production"
                  else
                    DEPLOY_ENV="development"
                  fi
                  echo ::set-output name=deploy-env::$DEPLOY_ENV
    deploy:
        needs: [setup]
        runs-on: ubuntu-latest
        strategy:
            matrix:
                aws-region: [us-east-1, us-west-2]
        environment:
            name: ${{ needs.setup.outputs.deploy-env }}-${{ matrix.aws-region }}
        concurrency: ${{ environment.name }}
        steps:
            - uses: aws-actions/configure-aws-credentials@v1
              id: aws-login
              with:
                  aws-region: ${{ secrets.AWS_REGION }}
                  aws-access-key-id: ${{ secrets.AWS_ACCESS_KEY_ID }}
                  aws-secret-access-key: ${{ secrets.AWS_SECRET_ACCESS_KEY }}
            - run: echo "This job will deploy to the environment named ${{ environment.name }}."
```

#### Limitations

By the time you've done all the setup to actually specify the deployment environment and region, you already have the region you need, and the environment isn't particularly useful. For example, in the `aws-login` step above, the `aws-region: ${{ secrets.AWS_REGION }}` value could be replaced by `aws-region: ${{ matrix.aws-region }}`. It would be more helpful to have an environment automatically apply to a Git branch or a workflow, and then be able to reference the configuration values within workflows automatically. It's actually the opposite. You have to specify the environment from within the workflow, and then if the environment protection rules are met, you get access to the corresponding environment secrets.

### VMs and pricing

-   **VM info**: The GitHub Actions runner [provisions virtual machines](https://docs.github.com/en/actions/reference/virtual-environments-for-github-hosted-runners) with similar resources as [AWS EC2 `t2.large` instances](https://aws.amazon.com/ec2/instance-types/).
    -   2-core CPU
    -   7 GB of RAM memory
    -   14 GB of SSD disk space
-   GitHub Actions is free for open-source repos. Pricing for other repos only kicks in if you exceed the allotted build minutes.

    <img src="https://gist.githubusercontent.com/br3ndonland/f9c753eb27381f97336aa21b8d932be6/raw/194dc0e4b8b02e29fe50477a48e0e07aa09408db/images-features-pricing.png" alt="GitHub Actions pricing info from https://github.com/features/actions" width="800px">

### GitHub Actions and Poetry

[Poetry](https://python-poetry.org/) is a useful tool for Python packaging and dependency management. The following set of tips was originally posted to [python-poetry/poetry#366](https://github.com/python-poetry/poetry/issues/366#issuecomment-691412462).

#### Use caching to speed up workflows

Use [actions/cache](https://github.com/marketplace/actions/cache) with a variation on their [`pip` cache example](https://github.com/actions/cache/blob/main/examples.md) to cache Poetry dependencies for faster installation.

```yml
- name: Set up Poetry cache for Python dependencies
  uses: actions/cache@v2
  if: startsWith(runner.os, 'Linux')
  with:
      path: ~/.cache/pypoetry
      key: ${{ runner.os }}-poetry-${{ hashFiles('**/poetry.lock') }}
      restore-keys: ${{ runner.os }}-poetry-
```

#### Use the custom installer

Installing Poetry via `pip` can lead to dependency conflicts, so the custom installer is recommended. The command listed in the [docs](https://python-poetry.org/docs/#installation) exits in GitHub Actions with `127` ([not on `$PATH`](https://www.gnu.org/software/bash/manual/html_node/Exit-Status.html)).

There are some additional modifications needed for GitHub Actions:

-   Add `-y` to avoid prompts.
-   Add Poetry to [`$GITHUB_PATH`](https://docs.github.com/en/free-pro-team@latest/actions/reference/workflow-commands-for-github-actions#environment-files) (note that the `::set-env` syntax has been [deprecated](https://github.blog/changelog/2020-10-01-github-actions-deprecating-set-env-and-add-path-commands/)).
-   Move `poetry install` to separate step to ensure Poetry is on `$GITHUB_PATH`.

```yml
- name: Install Poetry
  run: |
      curl -fsS -o get-poetry.py https://raw.githubusercontent.com/python-poetry/poetry/master/get-poetry.py
      python get-poetry.py -y
      echo "$HOME/.poetry/bin" >> $GITHUB_PATH
- name: Install dependencies
  run: poetry install --no-interaction
```

#### Use environment variables for config

Poetry allows config from the `poetry config` command, or [by environment variables](https://python-poetry.org/docs/configuration/#using-environment-variables). Environment variables are a more dependable way to configure Poetry in CI.

```yml
env:
    POETRY_VIRTUALENVS_CREATE: false
```

#### Build and publish in one step

-   [Create a PyPI token](https://pypi.org/help/#apitoken).
-   Add it to the [GitHub Secrets](https://docs.github.com/en/actions/configuring-and-managing-workflows/creating-and-storing-encrypted-secrets) store for the repo _(Settings -> Secrets)_.
-   Use the secret in your workflow with `${{ secrets.PYPI_TOKEN }}` (secret name is `PYPI_TOKEN` in this example, and username for PyPI tokens is `__token__`).
-   Use [`poetry publish --build`](https://python-poetry.org/docs/cli/#publish) to build and publish in one step.

```yml
- name: Build Python package and publish to PyPI
  if: startsWith(github.ref, 'refs/tags/')
  run: poetry publish --build -u __token__ -p ${{ secrets.PYPI_TOKEN }}
```

That's why they call it Poetry. Beautiful.

#### Example workflow

<details><summary><em>Expand this details element for an example workflow from <a href="https://github.com/br3ndonland/inboard">br3ndonland/inboard</a> that uses these tips.</em></summary>

```yml
name: builds

on:
    push:
        branches: [develop, master]
        tags:
            - '[0-9v]+.[0-9]+.[0-9a-z]+'
    workflow_dispatch:

jobs:
    python:
        runs-on: ubuntu-latest
        env:
            POETRY_VIRTUALENVS_CREATE: false
        steps:
            - uses: actions/checkout@v2
            - uses: actions/setup-python@v2
              with:
                  python-version: 3.8
            - name: Set up Poetry cache for Python dependencies
              uses: actions/cache@v2
              if: startsWith(runner.os, 'Linux')
              with:
                  path: ~/.cache/pypoetry
                  key: ${{ runner.os }}-poetry-${{ hashFiles('**/poetry.lock') }}
                  restore-keys: ${{ runner.os }}-poetry-
            - name: Set up pre-commit cache
              uses: actions/cache@v2
              if: startsWith(runner.os, 'Linux')
              with:
                  path: ~/.cache/pre-commit
                  key: ${{ runner.os }}-pre-commit-${{ hashFiles('.pre-commit-config.yaml') }}
                  restore-keys: ${{ runner.os }}-pre-commit-
            - name: Install Poetry
              run: |
                  curl -fsS -o get-poetry.py https://raw.githubusercontent.com/python-poetry/poetry/master/get-poetry.py
                  python get-poetry.py -y
                  echo "$HOME/.poetry/bin" >> $GITHUB_PATH
            - name: Install dependencies
              run: poetry install --no-interaction -E fastapi
            - name: Run pre-commit hooks
              run: pre-commit run --all-files
            - name: Run unit tests
              run: pytest
            - name: Build Python package and publish to PyPI
              if: startsWith(github.ref, 'refs/tags/')
              run: poetry publish --build -u __token__ -p ${{ secrets.PYPI_TOKEN }}
    docker:
        runs-on: ubuntu-latest
        needs: [python]
        steps:
            - uses: actions/checkout@v2
            - name: Log in to Docker registry
              run: docker login ghcr.io -u ${{ github.actor }} -p ${{ secrets.PAT_GHCR }}
            - name: Build Docker images
              run: |
                  docker build . --rm --target base -t ghcr.io/br3ndonland/inboard:base --cache-from python:3.8
                  docker build . --rm --target starlette -t ghcr.io/br3ndonland/inboard:starlette
                  docker build . --rm --target fastapi -t ghcr.io/br3ndonland/inboard:fastapi
            - name: Push Docker images to registry
              run: |
                  docker push ghcr.io/br3ndonland/inboard:base
                  docker push ghcr.io/br3ndonland/inboard:starlette
                  docker push ghcr.io/br3ndonland/inboard:fastapi
            - name: Add Git tag to Docker images
              if: startsWith(github.ref, 'refs/tags/')
              run: |
                  GIT_TAG=$(echo ${{ github.ref }} | cut -d / -f 3)
                  docker tag ghcr.io/br3ndonland/inboard:base ghcr.io/br3ndonland/inboard:base-"$GIT_TAG"
                  docker tag ghcr.io/br3ndonland/inboard:starlette ghcr.io/br3ndonland/inboard:starlette-"$GIT_TAG"
                  docker tag ghcr.io/br3ndonland/inboard:fastapi ghcr.io/br3ndonland/inboard:fastapi-"$GIT_TAG"
                  docker push ghcr.io/br3ndonland/inboard:base-"$GIT_TAG"
                  docker push ghcr.io/br3ndonland/inboard:starlette-"$GIT_TAG"
                  docker push ghcr.io/br3ndonland/inboard:fastapi-"$GIT_TAG"
            - name: Tag and push latest image
              run: |
                  docker tag ghcr.io/br3ndonland/inboard:fastapi ghcr.io/br3ndonland/inboard:latest
                  docker push ghcr.io/br3ndonland/inboard:latest
```

</details>

#### Bonus: automated dependency updates with Dependabot

Dependabot now offers [automated version updates](https://github.blog/2020-06-01-keep-all-your-packages-up-to-date-with-dependabot/), with (preliminary) support for Poetry :tada:. If you have access to the Dependabot beta, set up _.github/dependabot.yml_ as described in the [docs](https://docs.github.com/en/github/administering-a-repository/about-github-dependabot-version-updates):

```yml
version: 2
updates:
    - package-ecosystem: 'github-actions'
      directory: '/'
      schedule:
          interval: 'weekly'
    - package-ecosystem: 'pip'
      directory: '/'
      schedule:
          interval: 'weekly'
```

Dependabot will now send you PRs when dependency updates are available. Although `package-ecosystem` must be set to `pip`, it will pick up the _pyproject.toml_ and _poetry.lock_. Check the status of the repo at _Insights -> Dependency graph -> Dependabot_.

## Challenges

### Lacking necessary `on:` triggers

There's no PR merge trigger. There are two ways to implement this:

1. Use `pull_request:` `types: [closed]` as the event trigger and only run each job if the event payload contains `merged == 'true'`. See the [context and expression syntax docs](https://docs.github.com/en/actions/reference/context-and-expression-syntax-for-github-actions) for examples of how to use the event payload.

    ```yml
    name: demo
    on:
        pull_request:
            types: [closed]
        # release:
        #   types: [published]
    jobs:
        job1:
        # if: github.event.pull_request.merged == 'true' || github.event.release.draft == 'false'
        if: github.event.pull_request.merged == 'true'
        steps:
            - name: step1
              run: echo 'hello world'
    ```

2. Set up a `repository_dispatch` or `workflow_dispatch` webhook and use that as the trigger. The method for this is unclear, and [`workflow_dispatch` events may only be read on the default branch](https://github.community/t/14470).

**Inability to set environment variables per-trigger:** It's difficult to set environment variables per-trigger, such as based on which branch was checked out. There's a top-level `env:` key, but it doesn't allow expressions or separate `steps:`.

```yaml
env: # Can't do this
    - name: Set build environment to production if master branch is checked out
      if: contains(github.ref, 'master')
      run: echo "BUILD_ENV=production" >> $GITHUB_ENV
    - name: Set build environment to development if develop branch is checked out
      if: contains(github.ref, 'develop')
      run: echo "BUILD_ENV=development" >> $GITHUB_ENV
    - name: Set build environment to test otherwise
      if: ${{ !contains(github.ref, 'master') || !contains(github.ref, 'develop') }}
      run: echo "BUILD_ENV=test" >> $GITHUB_ENV
```

Furthermore, environment variables set to `$GITHUB_ENV` within a job are scoped to that job.

The solution is to [use outputs instead of environment variables](https://github.community/t/16277). Set outputs from one job and read them in downstream jobs. Note that _step_ outputs must also be set as _job_ outputs in order to be passed to other workflows.

### PR merge conflicts blocking workflow runs

-   If a PR has merge conflicts, GitHub Actions workflows may not run at all. See [this GitHub community thread](https://github.community/t/run-actions-on-pull-requests-with-merge-conflicts/17104/13).
-   Try using [equality operators](https://docs.github.com/en/actions/reference/context-and-expression-syntax-for-github-actions#operators) (`==` and `!=`) to check out the PR `HEAD` commit, instead of the default (the merge commit), as described in the [actions/checkout README](https://github.com/actions/checkout):

    ```yml
    - uses: actions/checkout@v2
      if: ${{ github.event_name != 'pull_request' }}
    - uses: actions/checkout@v2
      if: ${{ github.event_name == 'pull_request' }}
      with:
          ref: ${{ github.event.pull_request.head.sha }}
    ```

-   If checking out the `HEAD` commit doesn't work, you may need to resolve merge conflicts to continue.

### Understanding context and expression syntax

-   See the [context and expression syntax docs](https://docs.github.com/en/actions/reference/context-and-expression-syntax-for-github-actions)
-   In which context can I use which things?
    -   _Where can I define `env:`?_
    -   _Where can I define `defaults:`?_
    -   _Where can I add `if:`?_
    -   _When do I need `${{ }}` for expressions?_ The [docs](https://docs.github.com/en/actions/reference/context-and-expression-syntax-for-github-actions) explain that `if:` conditionals are automatically evaluated as expressions, but it's not always clear in other fields.
-   [Object filters](https://docs.github.com/en/actions/reference/context-and-expression-syntax-for-github-actions#object-filters) seem like a useful corollary to [CloudFormation mappings](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/mappings-section-structure.html), but there's no explanation for how to set up object filters within workflows.
-   There's no concept of `if/elif/else`.
-   Syntactic subtleties, such as the requirement for single quotes in some YAML fields:

    ```yaml
    jobs:
        base:
            runs-on: ubuntu-latest
            steps:
                # this works
                - name: Set build environment to production
                  if: github.ref == 'refs/heads/master'
                  run: echo "BUILD_ENV=production" >> $GITHUB_ENV
                # this doesn't
                - name: Set build environment to production
                  if: github.ref == "refs/heads/master"
                  run: echo "BUILD_ENV=production" >> $GITHUB_ENV
    ```

-   `github.ref` vs `github.base_ref`: Confusingly, `github.base_ref` appears to output different syntax than `github.ref`.
    -   `github.base_ref` returns just the branch name, like `develop`.
    -   `github.ref` returns the full Git ref, like `refs/heads/develop`.

## Resources

-   **Overview**
    -   [GitHub Actions Cheat Sheet](https://resources.github.com/whitepapers/GitHub-Actions-Cheat-sheet/)
    -   [GitHub docs: Actions - Core concepts](https://docs.github.com/en/actions/getting-started-with-github-actions/core-concepts-for-github-actions)
    -   [GitHub docs: Actions - Configuring and managing workflows](https://docs.github.com/en/actions/configuring-and-managing-workflows)
-   **Workflow triggers** (the `on:` section of YAML workflow files):
    -   [GitHub docs: Actions - Events that trigger workflows](https://docs.github.com/en/actions/reference/events-that-trigger-workflows)
    -   [GitHub Blog 20200706: GitHub Actions - Manual triggers with `workflow_dispatch`](https://github.blog/changelog/2020-07-06-github-actions-manual-triggers-with-workflow_dispatch/)
-   **Workflow syntax**
    -   [GitHub docs: Actions - Workflow syntax reference](https://docs.github.com/en/actions/reference/workflow-syntax-for-github-actions)
    -   [GitHub docs: Actions - Context and expression syntax](https://docs.github.com/en/actions/reference/context-and-expression-syntax-for-github-actions) (syntax in double curly braces like `${{ github.repository }}`, and functions like `format()`)
    -   [GitHub docs: Actions - Workflow commands for GitHub Actions](https://docs.github.com/en/actions/reference/workflow-commands-for-github-actions) (shell commands you can perform within workflows, like `echo ::set-env name=COLOR::green`)
-   **GitHub Actions + GitHub Container Registry**
    -   [GitHub Blog 20200901: Introducing GitHub Container Registry](https://github.blog/2020-09-01-introducing-github-container-registry/)
    -   [GitHub docs: Getting started with GitHub Container Registry](https://docs.github.com/en/packages/getting-started-with-github-container-registry)
-   **Actions**
    -   [GitHub Actions Marketplace](https://github.com/marketplace?type=actions)
    -   [actions/runner](https://github.com/actions/runner): the runner for GitHub Actions
    -   [sdras/awesome-actions](https://github.com/sdras/awesome-actions)

## GitHub Gist notes <!-- omit in toc -->

-   A **Gist** is actually a repository.
-   To clone the Gist locally:
    ```sh
    git clone git@gist.github.com:f9c753eb27381f97336aa21b8d932be6.git github-actions
    ```
-   **No subdirectories are allowed.**
-   To add images to a Markdown file in a Gist:
    -   Commit the image file (in the same directory, no sub-directories)
    -   Push the change to GitHub with `git push`
    -   Click on the "raw" button next to the image
    -   Copy the URL
    -   Add the URL to an image tag in the Markdown file.
