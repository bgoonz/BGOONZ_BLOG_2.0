

# Workflow syntax for GitHub Actions - GitHub Docs

> ## Excerpt
> A workflow is a configurable automated process made up of one or more jobs. You must create a YAML file to define your workflow configuration.

---
## [](https://docs.github.com/en/actions/learn-github-actions/workflow-syntax-for-github-actions#about-yaml-syntax-for-workflows)About YAML syntax for workflows

Workflow files use YAML syntax, and must have either a `.yml` or `.yaml` file extension. If you're new to YAML and want to learn more, see "[Learn YAML in Y minutes](https://learnxinyminutes.com/docs/yaml/)."

You must store workflow files in the `.github/workflows` directory of your repository.

## [](https://docs.github.com/en/actions/learn-github-actions/workflow-syntax-for-github-actions#name)`name`

The name of your workflow. GitHub displays the names of your workflows on your repository's actions page. If you omit `name`, GitHub sets it to the workflow file path relative to the root of the repository.

## [](https://docs.github.com/en/actions/learn-github-actions/workflow-syntax-for-github-actions#on)`on`

**Required**. The name of the GitHub event that triggers the workflow. You can provide a single event `string`, `array` of events, `array` of event `types`, or an event configuration `map` that schedules a workflow or restricts the execution of a workflow to specific files, tags, or branch changes. For a list of available events, see "[Events that trigger workflows](https://docs.github.com/en/articles/events-that-trigger-workflows)."

## [](https://docs.github.com/en/actions/learn-github-actions/workflow-syntax-for-github-actions#example-using-a-single-event)Example: Using a single event

```

on: push
```

## [](https://docs.github.com/en/actions/learn-github-actions/workflow-syntax-for-github-actions#example-using-a-list-of-events)Example: Using a list of events

```

on: [push, pull_request]
```

## [](https://docs.github.com/en/actions/learn-github-actions/workflow-syntax-for-github-actions#example-using-multiple-events-with-activity-types-or-configuration)Example: Using multiple events with activity types or configuration

If you need to specify activity types or configuration for an event, you must configure each event separately. You must append a colon (`:`) to all events, including events without configuration.

```
on:
  
  
  push:
    branches:
      - main
  pull_request:
    branches:
      - main
  
  page_build:
  release:
    types: 
      - created
```

## [](https://docs.github.com/en/actions/learn-github-actions/workflow-syntax-for-github-actions#onevent_nametypes)`on.<event_name>.types`

Selects the types of activity that will trigger a workflow run. Most GitHub events are triggered by more than one type of activity. For example, the event for the release resource is triggered when a release is `published`, `unpublished`, `created`, `edited`, `deleted`, or `prereleased`. The `types` keyword enables you to narrow down activity that causes the workflow to run. When only one activity type triggers a webhook event, the `types` keyword is unnecessary.

You can use an array of event `types`. For more information about each event and their activity types, see "[Events that trigger workflows](https://docs.github.com/en/articles/events-that-trigger-workflows#webhook-events)."

```

on:
  release:
    
    types: [published, created, edited]
```

When using the `push` and `pull_request` events, you can configure a workflow to run on specific branches or tags. For a `pull_request` event, only branches and tags on the base are evaluated. If you define only `tags` or only `branches`, the workflow won't run for events affecting the undefined Git ref.

The `branches`, `branches-ignore`, `tags`, and `tags-ignore` keywords accept glob patterns that use characters like `*`, `**`, `+`, `?`, `!` and others to match more than one branch or tag name. If a name contains any of these characters and you want a literal match, you need to _escape_ each of these special characters with `\`. For more information about glob patterns, see the "[Filter pattern cheat sheet](https://docs.github.com/en/actions/learn-github-actions/workflow-syntax-for-github-actions#filter-pattern-cheat-sheet)."

### [](https://docs.github.com/en/actions/learn-github-actions/workflow-syntax-for-github-actions#example-including-branches-and-tags)Example: Including branches and tags

The patterns defined in `branches` and `tags` are evaluated against the Git ref's name. For example, defining the pattern `mona/octocat` in `branches` will match the `refs/heads/mona/octocat` Git ref. The pattern `releases/**` will match the `refs/heads/releases/10` Git ref.

```
on:
  push:
    
    branches:    
      
      - main
      
      - 'mona/octocat'
      
      - 'releases/**'
    
    tags:        
      - v1             
      - v1.*           
```

### [](https://docs.github.com/en/actions/learn-github-actions/workflow-syntax-for-github-actions#example-ignoring-branches-and-tags)Example: Ignoring branches and tags

Anytime a pattern matches the `branches-ignore` or `tags-ignore` pattern, the workflow will not run. The patterns defined in `branches-ignore` and `tags-ignore` are evaluated against the Git ref's name. For example, defining the pattern `mona/octocat` in `branches` will match the `refs/heads/mona/octocat` Git ref. The pattern `releases/**-alpha` in `branches` will match the `refs/releases/beta/3-alpha` Git ref.

```
on:
  push:
    
    branches-ignore:
      
      - 'mona/octocat'
      
      - 'releases/**-alpha'
    
    tags-ignore:
      - v1.*           
```

### [](https://docs.github.com/en/actions/learn-github-actions/workflow-syntax-for-github-actions#excluding-branches-and-tags)Excluding branches and tags

You can use two types of filters to prevent a workflow from running on pushes and pull requests to tags and branches.

-   `branches` or `branches-ignore` - You cannot use both the `branches` and `branches-ignore` filters for the same event in a workflow. Use the `branches` filter when you need to filter branches for positive matches and exclude branches. Use the `branches-ignore` filter when you only need to exclude branch names.
-   `tags` or `tags-ignore` - You cannot use both the `tags` and `tags-ignore` filters for the same event in a workflow. Use the `tags` filter when you need to filter tags for positive matches and exclude tags. Use the `tags-ignore` filter when you only need to exclude tag names.

### [](https://docs.github.com/en/actions/learn-github-actions/workflow-syntax-for-github-actions#example-using-positive-and-negative-patterns)Example: Using positive and negative patterns

You can exclude `tags` and `branches` using the `!` character. The order that you define patterns matters.

-   A matching negative pattern (prefixed with `!`) after a positive match will exclude the Git ref.
-   A matching positive pattern after a negative match will include the Git ref again.

The following workflow will run on pushes to `releases/10` or `releases/beta/mona`, but not on `releases/10-alpha` or `releases/beta/3-alpha` because the negative pattern `!releases/**-alpha` follows the positive pattern.

```
on:
  push:
    branches:    
      - 'releases/**'
      - '!releases/**-alpha'
```

## [](https://docs.github.com/en/actions/learn-github-actions/workflow-syntax-for-github-actions#onpushpull_requestpaths)`on.<push|pull_request>.paths`

When using the `push` and `pull_request` events, you can configure a workflow to run when at least one file does not match `paths-ignore` or at least one modified file matches the configured `paths`. Path filters are not evaluated for pushes to tags.

The `paths-ignore` and `paths` keywords accept glob patterns that use the `*` and `**` wildcard characters to match more than one path name. For more information, see the "[Filter pattern cheat sheet](https://docs.github.com/en/actions/learn-github-actions/workflow-syntax-for-github-actions#filter-pattern-cheat-sheet)."

### [](https://docs.github.com/en/actions/learn-github-actions/workflow-syntax-for-github-actions#example-ignoring-paths)Example: Ignoring paths

When all the path names match patterns in `paths-ignore`, the workflow will not run. GitHub evaluates patterns defined in `paths-ignore` against the path name. A workflow with the following path filter will only run on `push` events that include at least one file outside the `docs` directory at the root of the repository.

```
on:
  push:
    paths-ignore:
      - 'docs/**'
```

### [](https://docs.github.com/en/actions/learn-github-actions/workflow-syntax-for-github-actions#example-including-paths)Example: Including paths

If at least one path matches a pattern in the `paths` filter, the workflow runs. To trigger a build anytime you push a JavaScript file, you can use a wildcard pattern.

```
on:
  push:
    paths:
      - '**.js'
```

### [](https://docs.github.com/en/actions/learn-github-actions/workflow-syntax-for-github-actions#excluding-paths)Excluding paths

You can exclude paths using two types of filters. You cannot use both of these filters for the same event in a workflow.

-   `paths-ignore` - Use the `paths-ignore` filter when you only need to exclude path names.
-   `paths` - Use the `paths` filter when you need to filter paths for positive matches and exclude paths.

### [](https://docs.github.com/en/actions/learn-github-actions/workflow-syntax-for-github-actions#example-using-positive-and-negative-patterns-1)Example: Using positive and negative patterns

You can exclude `paths` using the `!` character. The order that you define patterns matters:

-   A matching negative pattern (prefixed with `!`) after a positive match will exclude the path.
-   A matching positive pattern after a negative match will include the path again.

This example runs anytime the `push` event includes a file in the `sub-project` directory or its subdirectories, unless the file is in the `sub-project/docs` directory. For example, a push that changed `sub-project/index.js` or `sub-project/src/index.js` will trigger a workflow run, but a push changing only `sub-project/docs/readme.md` will not.

```
on:
  push:
    paths:
      - 'sub-project/**'
      - '!sub-project/docs/**'
```

### [](https://docs.github.com/en/actions/learn-github-actions/workflow-syntax-for-github-actions#git-diff-comparisons)Git diff comparisons

**Note:** If you push more than 1,000 commits, or if GitHub does not generate the diff due to a timeout, the workflow will always run.

The filter determines if a workflow should run by evaluating the changed files and running them against the `paths-ignore` or `paths` list. If there are no files changed, the workflow will not run.

GitHub generates the list of changed files using two-dot diffs for pushes and three-dot diffs for pull requests:

-   **Pull requests:** Three-dot diffs are a comparison between the most recent version of the topic branch and the commit where the topic branch was last synced with the base branch.
-   **Pushes to existing branches:** A two-dot diff compares the head and base SHAs directly with each other.
-   **Pushes to new branches:** A two-dot diff against the parent of the ancestor of the deepest commit pushed.

Diffs are limited to 300 files. If there are files changed that aren't matched in the first 300 files returned by the filter, the workflow will not run. You may need to create more specific filters so that the workflow will run automatically.

For more information, see "[About comparing branches in pull requests](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-comparing-branches-in-pull-requests)."

## [](https://docs.github.com/en/actions/learn-github-actions/workflow-syntax-for-github-actions#onworkflow_callinputs)`on.workflow_call.inputs`

When using the `workflow_call` keyword, you can optionally specify inputs that are passed to the called workflow from the caller workflow. For more information about the `workflow_call` keyword, see "[Events that trigger workflows](https://docs.github.com/en/actions/learn-github-actions/events-that-trigger-workflows#workflow-reuse-events)."

In addition to the standard input parameters that are available, `on.workflow_call.inputs` requires a `type` parameter. For more information, see [`on.workflow_call.inputs.<input_id>.type`](https://docs.github.com/en/actions/learn-github-actions/workflow-syntax-for-github-actions#onworkflow_callinputsinput_idtype).

If a `default` parameter is not set, the default value of the input is `false` for a boolean, `0` for a number, and `""` for a string.

Within the called workflow, you can use the `inputs` context to refer to an input.

If a caller workflow passes an input that is not specified in the called workflow, this results in an error.

### [](https://docs.github.com/en/actions/learn-github-actions/workflow-syntax-for-github-actions#example)Example

```
on:
  workflow_call:
    inputs:
      username:
        description: 'A username passed from the caller workflow'
        default: 'john-doe'
        required: false
        type: string
  
jobs:
  print-username:
    runs-on: ubuntu-latest

    steps:
      - name: Print the input name to STDOUT
        run: echo The username is ${{ inputs.username }}
```

For more information, see "[Reusing workflows](https://docs.github.com/en/actions/learn-github-actions/reusing-workflows)."

## [](https://docs.github.com/en/actions/learn-github-actions/workflow-syntax-for-github-actions#onworkflow_callinputsinput_idtype)`on.workflow_call.inputs.<input_id>.type`

Required if input is defined for the `on.workflow_call` keyword. The value of this parameter is a string specifying the data type of the input. This must be one of: `boolean`, `number`, or `string`.

## [](https://docs.github.com/en/actions/learn-github-actions/workflow-syntax-for-github-actions#onworkflow_calloutputs)`on.workflow_call.outputs`

A map of outputs for a called workflow. Called workflow outputs are available to all downstream jobs in the caller workflow. Each output has an identifier, an optional `description,` and a `value.` The `value` must be set to the value of an output from a job within the called workflow.

In the example below, two outputs are defined for this reusable workflow: `workflow_output1` and `workflow_output2`. These are mapped to outputs called `job_output1` and `job_output2`, both from a job called `my_job`.

### [](https://docs.github.com/en/actions/learn-github-actions/workflow-syntax-for-github-actions#example-1)Example

```
on:
  workflow_call:
    
    outputs:
      workflow_output1:
        description: "The first job output"
        value: ${{ jobs.my_job.outputs.job_output1 }}
      workflow_output2:
        description: "The second job output"
        value: ${{ jobs.my_job.outputs.job_output2 }}  
```

For information on how to reference a job output, see [`jobs.<job_id>.outputs`](https://docs.github.com/en/actions/learn-github-actions/workflow-syntax-for-github-actions#jobsjob_idoutputs). For more information, see "[Reusing workflows](https://docs.github.com/en/actions/learn-github-actions/reusing-workflows)."

## [](https://docs.github.com/en/actions/learn-github-actions/workflow-syntax-for-github-actions#onworkflow_callsecrets)`on.workflow_call.secrets`

A map of the secrets that can be used in the called workflow.

Within the called workflow, you can use the `secrets` context to refer to a secret.

If a caller workflow passes a secret that is not specified in the called workflow, this results in an error.

### [](https://docs.github.com/en/actions/learn-github-actions/workflow-syntax-for-github-actions#example-2)Example

```
on:
  workflow_call:
    secrets:
      access-token:
        description: 'A token passed from the caller workflow'
        required: false
  
jobs:
  pass-secret-to-action:
    runs-on: ubuntu-latest

    steps:  
      - name: Pass the received secret to an action
        uses: ./.github/actions/my-action@v1
        with:
          token: ${{ secrets.access-token }}
```

## [](https://docs.github.com/en/actions/learn-github-actions/workflow-syntax-for-github-actions#onworkflow_callsecretssecret_id)`on.workflow_call.secrets.<secret_id>`

A string identifier to associate with the secret.

## [](https://docs.github.com/en/actions/learn-github-actions/workflow-syntax-for-github-actions#onworkflow_callsecretssecret_idrequired)`on.workflow_call.secrets.<secret_id>.required`

A boolean specifying whether the secret must be supplied.

## [](https://docs.github.com/en/actions/learn-github-actions/workflow-syntax-for-github-actions#onworkflow_dispatchinputs)`on.workflow_dispatch.inputs`

When using the `workflow_dispatch` event, you can optionally specify inputs that are passed to the workflow.

The triggered workflow receives the inputs in the `github.event.inputs` context. For more information, see "[Contexts](https://docs.github.com/en/actions/learn-github-actions/contexts#github-context)."

### [](https://docs.github.com/en/actions/learn-github-actions/workflow-syntax-for-github-actions#example-3)Example

```
on: 
  workflow_dispatch:
    inputs:
      logLevel:
        description: 'Log level'     
        required: true
        default: 'warning' {% ifversion ghec or ghes > 3.3 or ghae-issue-5511 %}
        type: choice
        options:
        - info
        - warning
        - debug {% endif %}
      tags:
        description: 'Test scenario tags'
        required: false {% ifversion ghec or ghes > 3.3 or ghae-issue-5511 %}
        type: boolean
      environment:
        description: 'Environment to run tests against'
        type: environment
        required: true {% endif %}
  
jobs:
  print-tag:
    runs-on: ubuntu-latest

    steps:
      - name: Print the input tag to STDOUT
        run: echo The tag is ${{ github.event.inputs.tag }}
```

## [](https://docs.github.com/en/actions/learn-github-actions/workflow-syntax-for-github-actions#onschedule)`on.schedule`

You can schedule a workflow to run at specific UTC times using [POSIX cron syntax](https://pubs.opengroup.org/onlinepubs/9699919799/utilities/crontab.html#tag_20_25_07). Scheduled workflows run on the latest commit on the default or base branch. The shortest interval you can run scheduled workflows is once every 5 minutes.

This example triggers the workflow every day at 5:30 and 17:30 UTC:

```
on:
  schedule:
    
    - cron:  '30 5,17 * * *'

```

For more information about cron syntax, see "[Events that trigger workflows](https://docs.github.com/en/actions/automating-your-workflow-with-github-actions/events-that-trigger-workflows#scheduled-events)."

## [](https://docs.github.com/en/actions/learn-github-actions/workflow-syntax-for-github-actions#permissions)`permissions`

You can modify the default permissions granted to the `GITHUB_TOKEN`, adding or removing access as required, so that you only allow the minimum required access. For more information, see "[Authentication in a workflow](https://docs.github.com/en/actions/reference/authentication-in-a-workflow#permissions-for-the-github_token)."

You can use `permissions` either as a top-level key, to apply to all jobs in the workflow, or within specific jobs. When you add the `permissions` key within a specific job, all actions and run commands within that job that use the `GITHUB_TOKEN` gain the access rights you specify. For more information, see [`jobs.<job_id>.permissions`](https://docs.github.com/en/actions/learn-github-actions/workflow-syntax-for-github-actions#jobsjob_idpermissions).

Available scopes and access values:

```
permissions:
  actions: read|write|none
  checks: read|write|none
  contents: read|write|none
  deployments: read|write|none
  id-token: read|write|none
  issues: read|write|none
  discussions: read|write|none
  packages: read|write|none
  pages: read|write|none
  pull-requests: read|write|none
  repository-projects: read|write|none
  security-events: read|write|none
  statuses: read|write|none
```

If you specify the access for any of these scopes, all of those that are not specified are set to `none`.

You can use the following syntax to define read or write access for all of the available scopes:

```
permissions: read-all|write-all
```

You can use the `permissions` key to add and remove read permissions for forked repositories, but typically you can't grant write access. The exception to this behavior is where an admin user has selected the **Send write tokens to workflows from pull requests** option in the GitHub Actions settings. For more information, see "[Managing GitHub Actions settings for a repository](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-github-actions-settings-for-a-repository#enabling-workflows-for-private-repository-forks)."

### [](https://docs.github.com/en/actions/learn-github-actions/workflow-syntax-for-github-actions#example-4)Example

This example shows permissions being set for the `GITHUB_TOKEN` that will apply to all jobs in the workflow. All permissions are granted read access.

```
name: "My workflow"

on: [ push ]

permissions: read-all

jobs:
  ...
```

## [](https://docs.github.com/en/actions/learn-github-actions/workflow-syntax-for-github-actions#env)`env`

A `map` of environment variables that are available to the steps of all jobs in the workflow. You can also set environment variables that are only available to the steps of a single job or to a single step. For more information, see [`jobs.<job_id>.env`](https://docs.github.com/en/actions/learn-github-actions/workflow-syntax-for-github-actions#jobsjob_idenv) and [`jobs.<job_id>.steps[*].env`](https://docs.github.com/en/actions/learn-github-actions/workflow-syntax-for-github-actions#jobsjob_idstepsenv).

When more than one environment variable is defined with the same name, GitHub uses the most specific environment variable. For example, an environment variable defined in a step will override job and workflow variables with the same name, while the step executes. A variable defined for a job will override a workflow variable with the same name, while the job executes.

### [](https://docs.github.com/en/actions/learn-github-actions/workflow-syntax-for-github-actions#example-5)Example

```
env:
  SERVER: production
```

## [](https://docs.github.com/en/actions/learn-github-actions/workflow-syntax-for-github-actions#defaults)`defaults`

A `map` of default settings that will apply to all jobs in the workflow. You can also set default settings that are only available to a job. For more information, see [`jobs.<job_id>.defaults`](https://docs.github.com/en/actions/learn-github-actions/workflow-syntax-for-github-actions#jobsjob_iddefaults).

When more than one default setting is defined with the same name, GitHub uses the most specific default setting. For example, a default setting defined in a job will override a default setting that has the same name defined in a workflow.

## [](https://docs.github.com/en/actions/learn-github-actions/workflow-syntax-for-github-actions#defaultsrun)`defaults.run`

You can provide default `shell` and `working-directory` options for all [`run`](https://docs.github.com/en/actions/learn-github-actions/workflow-syntax-for-github-actions#jobsjob_idstepsrun) steps in a workflow. You can also set default settings for `run` that are only available to a job. For more information, see [`jobs.<job_id>.defaults.run`](https://docs.github.com/en/actions/learn-github-actions/workflow-syntax-for-github-actions#jobsjob_iddefaultsrun). You cannot use contexts or expressions in this keyword.

When more than one default setting is defined with the same name, GitHub uses the most specific default setting. For example, a default setting defined in a job will override a default setting that has the same name defined in a workflow.

### [](https://docs.github.com/en/actions/learn-github-actions/workflow-syntax-for-github-actions#example-6)Example

```
defaults:
  run:
    shell: bash
    working-directory: scripts
```

## [](https://docs.github.com/en/actions/learn-github-actions/workflow-syntax-for-github-actions#concurrency)`concurrency`

Concurrency ensures that only a single job or workflow using the same concurrency group will run at a time. A concurrency group can be any string or expression. The expression can only use the [`github` context](https://docs.github.com/en/actions/learn-github-actions/contexts#github-context). For more information about expressions, see "[Expressions](https://docs.github.com/en/actions/learn-github-actions/expressions)."

You can also specify `concurrency` at the job level. For more information, see [`jobs.<job_id>.concurrency`](https://docs.github.com/en/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions#jobsjob_idconcurrency).

When a concurrent job or workflow is queued, if another job or workflow using the same concurrency group in the repository is in progress, the queued job or workflow will be `pending`. Any previously pending job or workflow in the concurrency group will be canceled. To also cancel any currently running job or workflow in the same concurrency group, specify `cancel-in-progress: true`.

## [](https://docs.github.com/en/actions/learn-github-actions/workflow-syntax-for-github-actions#examples-using-concurrency-and-the-default-behavior)Examples: Using concurrency and the default behavior

```
concurrency: staging_environment
```

```
concurrency: ci-${{ github.ref }}
```

## [](https://docs.github.com/en/actions/learn-github-actions/workflow-syntax-for-github-actions#example-using-concurrency-to-cancel-any-in-progress-job-or-run)Example: Using concurrency to cancel any in-progress job or run

```
concurrency: 
  group: ${{ github.head_ref }}
  cancel-in-progress: true
```

## [](https://docs.github.com/en/actions/learn-github-actions/workflow-syntax-for-github-actions#jobs)`jobs`

A workflow run is made up of one or more jobs. Jobs run in parallel by default. To run jobs sequentially, you can define dependencies on other jobs using the `jobs.<job_id>.needs` keyword.

Each job runs in a runner environment specified by `runs-on`.

You can run an unlimited number of jobs as long as you are within the workflow usage limits. For more information, see "[Usage limits and billing](https://docs.github.com/en/actions/reference/usage-limits-billing-and-administration)" for GitHub-hosted runners and "[About self-hosted runners](https://docs.github.com/en/actions/hosting-your-own-runners/about-self-hosted-runners/#usage-limits)" for self-hosted runner usage limits.

If you need to find the unique identifier of a job running in a workflow run, you can use the GitHub API. For more information, see "[Workflow Jobs](https://docs.github.com/en/rest/reference/actions#workflow-jobs)."

## [](https://docs.github.com/en/actions/learn-github-actions/workflow-syntax-for-github-actions#jobsjob_id)`jobs.<job_id>`

Create an identifier for your job by giving it a unique name. The key `job_id` is a string and its value is a map of the job's configuration data. You must replace `<job_id>` with a string that is unique to the `jobs` object. The `<job_id>` must start with a letter or `_` and contain only alphanumeric characters, `-`, or `_`.

### [](https://docs.github.com/en/actions/learn-github-actions/workflow-syntax-for-github-actions#example-7)Example

In this example, two jobs have been created, and their `job_id` values are `my_first_job` and `my_second_job`.

```
jobs:
  my_first_job:
    name: My first job
  my_second_job:
    name: My second job
```

## [](https://docs.github.com/en/actions/learn-github-actions/workflow-syntax-for-github-actions#jobsjob_idname)`jobs.<job_id>.name`

The name of the job displayed on GitHub.

## [](https://docs.github.com/en/actions/learn-github-actions/workflow-syntax-for-github-actions#jobsjob_idneeds)`jobs.<job_id>.needs`

Identifies any jobs that must complete successfully before this job will run. It can be a string or array of strings. If a job fails, all jobs that need it are skipped unless the jobs use a conditional expression that causes the job to continue.

### [](https://docs.github.com/en/actions/learn-github-actions/workflow-syntax-for-github-actions#example-requiring-dependent-jobs-to-be-successful)Example: Requiring dependent jobs to be successful

```
jobs:
  job1:
  job2:
    needs: job1
  job3:
    needs: [job1, job2]
```

In this example, `job1` must complete successfully before `job2` begins, and `job3` waits for both `job1` and `job2` to complete.

The jobs in this example run sequentially:

1.  `job1`
2.  `job2`
3.  `job3`

### [](https://docs.github.com/en/actions/learn-github-actions/workflow-syntax-for-github-actions#example-not-requiring-dependent-jobs-to-be-successful)Example: Not requiring dependent jobs to be successful

```
jobs:
  job1:
  job2:
    needs: job1
  job3:
    if: ${{ always() }}
    needs: [job1, job2]
```

In this example, `job3` uses the `always()` conditional expression so that it always runs after `job1` and `job2` have completed, regardless of whether they were successful. For more information, see "[Expressions](https://docs.github.com/en/actions/learn-github-actions/expressions#job-status-check-functions)."

## [](https://docs.github.com/en/actions/learn-github-actions/workflow-syntax-for-github-actions#jobsjob_idruns-on)`jobs.<job_id>.runs-on`

**Required**. The type of machine to run the job on. The machine can be either a GitHub-hosted runner or a self-hosted runner. You can provide `runs-on` as a single string or as an array of strings.

### [](https://docs.github.com/en/actions/learn-github-actions/workflow-syntax-for-github-actions#github-hosted-runners)GitHub-hosted runners

If you use a GitHub-hosted runner, each job runs in a fresh instance of a virtual environment specified by `runs-on`.

Available GitHub-hosted runner types are:

**Virtual environment**

**YAML workflow label**

**Notes**

Windows Server 2022

`windows-2022`

The `windows-latest` label currently uses the Windows Server 2019 runner image.

Windows Server 2019

`windows-latest` or `windows-2019`

Windows Server 2016\[deprecated\]

`windows-2016`

Migrate to Windows 2019 or Windows 2022. For more information, see [the blog post](https://github.blog/changelog/2021-10-19-github-actions-the-windows-2016-runner-image-will-be-removed-from-github-hosted-runners-on-march-15-2022/).

Ubuntu 20.04

`ubuntu-latest` or `ubuntu-20.04`

Ubuntu 18.04

`ubuntu-18.04`

macOS Big Sur 11

`macos-11`

The `macos-latest` label currently uses the macOS 10.15 runner image.

macOS Catalina 10.15

`macos-latest` or `macos-10.15`

**Note:** Beta and Deprecated Images are provided "as-is", "with all faults" and "as available" and are excluded from the service level agreement and warranty. Beta Images may not be covered by customer support.

#### [](https://docs.github.com/en/actions/learn-github-actions/workflow-syntax-for-github-actions#example-8)Example

```
runs-on: ubuntu-latest
```

For more information, see "[Virtual environments for GitHub-hosted runners](https://docs.github.com/en/github/automating-your-workflow-with-github-actions/virtual-environments-for-github-hosted-runners)."

### [](https://docs.github.com/en/actions/learn-github-actions/workflow-syntax-for-github-actions#self-hosted-runners)Self-hosted runners

To specify a self-hosted runner for your job, configure `runs-on` in your workflow file with self-hosted runner labels.

All self-hosted runners have the `self-hosted` label. Using only this label will select any self-hosted runner. To select runners that meet certain criteria, such as operating system or architecture, we recommend providing an array of labels that begins with `self-hosted` (this must be listed first) and then includes additional labels as needed. When you specify an array of labels, jobs will be queued on runners that have all the labels that you specify.

Although the `self-hosted` label is not required, we strongly recommend specifying it when using self-hosted runners to ensure that your job does not unintentionally specify any current or future GitHub-hosted runners.

#### [](https://docs.github.com/en/actions/learn-github-actions/workflow-syntax-for-github-actions#example-9)Example

```
runs-on: [self-hosted, linux]
```

For more information, see "[About self-hosted runners](https://docs.github.com/en/github/automating-your-workflow-with-github-actions/about-self-hosted-runners)" and "[Using self-hosted runners in a workflow](https://docs.github.com/en/github/automating-your-workflow-with-github-actions/using-self-hosted-runners-in-a-workflow)."

## [](https://docs.github.com/en/actions/learn-github-actions/workflow-syntax-for-github-actions#jobsjob_idpermissions)`jobs.<job_id>.permissions`

You can modify the default permissions granted to the `GITHUB_TOKEN`, adding or removing access as required, so that you only allow the minimum required access. For more information, see "[Authentication in a workflow](https://docs.github.com/en/actions/reference/authentication-in-a-workflow#permissions-for-the-github_token)."

By specifying the permission within a job definition, you can configure a different set of permissions for the `GITHUB_TOKEN` for each job, if required. Alternatively, you can specify the permissions for all jobs in the workflow. For information on defining permissions at the workflow level, see [`permissions`](https://docs.github.com/en/actions/learn-github-actions/workflow-syntax-for-github-actions#permissions).

Available scopes and access values:

```
permissions:
  actions: read|write|none
  checks: read|write|none
  contents: read|write|none
  deployments: read|write|none
  id-token: read|write|none
  issues: read|write|none
  discussions: read|write|none
  packages: read|write|none
  pages: read|write|none
  pull-requests: read|write|none
  repository-projects: read|write|none
  security-events: read|write|none
  statuses: read|write|none
```

If you specify the access for any of these scopes, all of those that are not specified are set to `none`.

You can use the following syntax to define read or write access for all of the available scopes:

```
permissions: read-all|write-all
```

You can use the `permissions` key to add and remove read permissions for forked repositories, but typically you can't grant write access. The exception to this behavior is where an admin user has selected the **Send write tokens to workflows from pull requests** option in the GitHub Actions settings. For more information, see "[Managing GitHub Actions settings for a repository](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-github-actions-settings-for-a-repository#enabling-workflows-for-private-repository-forks)."

### [](https://docs.github.com/en/actions/learn-github-actions/workflow-syntax-for-github-actions#example-10)Example

This example shows permissions being set for the `GITHUB_TOKEN` that will only apply to the job named `stale`. Write access is granted for the `issues` and `pull-requests` scopes. All other scopes will have no access.

```
jobs:
  stale:
    runs-on: ubuntu-latest

    permissions:
      issues: write
      pull-requests: write

    steps:
      - uses: actions/stale@v3
```

## [](https://docs.github.com/en/actions/learn-github-actions/workflow-syntax-for-github-actions#jobsjob_idenvironment)`jobs.<job_id>.environment`

The environment that the job references. All environment protection rules must pass before a job referencing the environment is sent to a runner. For more information, see "[Using environments for deployment](https://docs.github.com/en/actions/deployment/using-environments-for-deployment)."

You can provide the environment as only the environment `name`, or as an environment object with the `name` and `url`. The URL maps to `environment_url` in the deployments API. For more information about the deployments API, see "[Deployments](https://docs.github.com/en/rest/reference/repos#deployments)."

#### [](https://docs.github.com/en/actions/learn-github-actions/workflow-syntax-for-github-actions#example-using-a-single-environment-name)Example using a single environment name

```
environment: staging_environment
```

#### [](https://docs.github.com/en/actions/learn-github-actions/workflow-syntax-for-github-actions#example-using-environment-name-and-url)Example using environment name and URL

```
environment:
  name: production_environment
  url: https://github.com
```

The URL can be an expression and can use any context except for the [`secrets` context](https://docs.github.com/en/actions/learn-github-actions/contexts#contexts). For more information about expressions, see "[Expressions](https://docs.github.com/en/actions/learn-github-actions/expressions)."

### [](https://docs.github.com/en/actions/learn-github-actions/workflow-syntax-for-github-actions#example-11)Example

```
environment:
  name: production_environment
  url: ${{ steps.step_id.outputs.url_output }}
```

## [](https://docs.github.com/en/actions/learn-github-actions/workflow-syntax-for-github-actions#jobsjob_idconcurrency)`jobs.<job_id>.concurrency`

**Note:** When concurrency is specified at the job level, order is not guaranteed for jobs or runs that queue within 5 minutes of each other.

Concurrency ensures that only a single job or workflow using the same concurrency group will run at a time. A concurrency group can be any string or expression. The expression can use any context except for the `secrets` context. For more information about expressions, see "[Expressions](https://docs.github.com/en/actions/learn-github-actions/expressions)."

You can also specify `concurrency` at the workflow level. For more information, see [`concurrency`](https://docs.github.com/en/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions#concurrency).

When a concurrent job or workflow is queued, if another job or workflow using the same concurrency group in the repository is in progress, the queued job or workflow will be `pending`. Any previously pending job or workflow in the concurrency group will be canceled. To also cancel any currently running job or workflow in the same concurrency group, specify `cancel-in-progress: true`.

## [](https://docs.github.com/en/actions/learn-github-actions/workflow-syntax-for-github-actions#examples-using-concurrency-and-the-default-behavior-1)Examples: Using concurrency and the default behavior

```
concurrency: staging_environment
```

```
concurrency: ci-${{ github.ref }}
```

## [](https://docs.github.com/en/actions/learn-github-actions/workflow-syntax-for-github-actions#example-using-concurrency-to-cancel-any-in-progress-job-or-run-1)Example: Using concurrency to cancel any in-progress job or run

```
concurrency: 
  group: ${{ github.head_ref }}
  cancel-in-progress: true
```

## [](https://docs.github.com/en/actions/learn-github-actions/workflow-syntax-for-github-actions#jobsjob_idoutputs)`jobs.<job_id>.outputs`

A `map` of outputs for a job. Job outputs are available to all downstream jobs that depend on this job. For more information on defining job dependencies, see [`jobs.<job_id>.needs`](https://docs.github.com/en/actions/learn-github-actions/workflow-syntax-for-github-actions#jobsjob_idneeds).

Job outputs are strings, and job outputs containing expressions are evaluated on the runner at the end of each job. Outputs containing secrets are redacted on the runner and not sent to GitHub Actions.

To use job outputs in a dependent job, you can use the `needs` context. For more information, see "[Contexts](https://docs.github.com/en/actions/learn-github-actions/contexts#needs-context)."

### [](https://docs.github.com/en/actions/learn-github-actions/workflow-syntax-for-github-actions#example-12)Example

```
jobs:
  job1:
    runs-on: ubuntu-latest
    
    outputs:
      output1: ${{ steps.step1.outputs.test }}
      output2: ${{ steps.step2.outputs.test }}
    steps:
      - id: step1
        run: echo "::set-output name=test::hello"
      - id: step2
        run: echo "::set-output name=test::world"
  job2:
    runs-on: ubuntu-latest
    needs: job1
    steps:
      - run: echo ${{needs.job1.outputs.output1}} ${{needs.job1.outputs.output2}}
```

## [](https://docs.github.com/en/actions/learn-github-actions/workflow-syntax-for-github-actions#jobsjob_idenv)`jobs.<job_id>.env`

A `map` of environment variables that are available to all steps in the job. You can also set environment variables for the entire workflow or an individual step. For more information, see [`env`](https://docs.github.com/en/actions/learn-github-actions/workflow-syntax-for-github-actions#env) and [`jobs.<job_id>.steps[*].env`](https://docs.github.com/en/actions/learn-github-actions/workflow-syntax-for-github-actions#jobsjob_idstepsenv).

When more than one environment variable is defined with the same name, GitHub uses the most specific environment variable. For example, an environment variable defined in a step will override job and workflow variables with the same name, while the step executes. A variable defined for a job will override a workflow variable with the same name, while the job executes.

### [](https://docs.github.com/en/actions/learn-github-actions/workflow-syntax-for-github-actions#example-13)Example

```
jobs:
  job1:
    env:
      FIRST_NAME: Mona
```

## [](https://docs.github.com/en/actions/learn-github-actions/workflow-syntax-for-github-actions#jobsjob_iddefaults)`jobs.<job_id>.defaults`

A `map` of default settings that will apply to all steps in the job. You can also set default settings for the entire workflow. For more information, see [`defaults`](https://docs.github.com/en/actions/learn-github-actions/workflow-syntax-for-github-actions#defaults).

When more than one default setting is defined with the same name, GitHub uses the most specific default setting. For example, a default setting defined in a job will override a default setting that has the same name defined in a workflow.

## [](https://docs.github.com/en/actions/learn-github-actions/workflow-syntax-for-github-actions#jobsjob_iddefaultsrun)`jobs.<job_id>.defaults.run`

Provide default `shell` and `working-directory` to all `run` steps in the job. Context and expression are not allowed in this section.

You can provide default `shell` and `working-directory` options for all [`run`](https://docs.github.com/en/actions/learn-github-actions/workflow-syntax-for-github-actions#jobsjob_idstepsrun) steps in a job. You can also set default settings for `run` for the entire workflow. For more information, see [`jobs.defaults.run`](https://docs.github.com/en/actions/learn-github-actions/workflow-syntax-for-github-actions#defaultsrun). You cannot use contexts or expressions in this keyword.

When more than one default setting is defined with the same name, GitHub uses the most specific default setting. For example, a default setting defined in a job will override a default setting that has the same name defined in a workflow.

### [](https://docs.github.com/en/actions/learn-github-actions/workflow-syntax-for-github-actions#example-14)Example

```
jobs:
  job1:
    runs-on: ubuntu-latest
    defaults:
      run:
        shell: bash
        working-directory: scripts
```

## [](https://docs.github.com/en/actions/learn-github-actions/workflow-syntax-for-github-actions#jobsjob_idif)`jobs.<job_id>.if`

You can use the `if` conditional to prevent a job from running unless a condition is met. You can use any supported context and expression to create a conditional.

When you use expressions in an `if` conditional, you may omit the expression syntax (`${{ }}`) because GitHub automatically evaluates the `if` conditional as an expression. For more information, see "[Expressions](https://docs.github.com/en/actions/learn-github-actions/expressions)."

## [](https://docs.github.com/en/actions/learn-github-actions/workflow-syntax-for-github-actions#jobsjob_idsteps)`jobs.<job_id>.steps`

A job contains a sequence of tasks called `steps`. Steps can run commands, run setup tasks, or run an action in your repository, a public repository, or an action published in a Docker registry. Not all steps run actions, but all actions run as a step. Each step runs in its own process in the runner environment and has access to the workspace and filesystem. Because steps run in their own process, changes to environment variables are not preserved between steps. GitHub provides built-in steps to set up and complete a job.

You can run an unlimited number of steps as long as you are within the workflow usage limits. For more information, see "[Usage limits and billing](https://docs.github.com/en/actions/reference/usage-limits-billing-and-administration)" for GitHub-hosted runners and "[About self-hosted runners](https://docs.github.com/en/actions/hosting-your-own-runners/about-self-hosted-runners/#usage-limits)" for self-hosted runner usage limits.

### [](https://docs.github.com/en/actions/learn-github-actions/workflow-syntax-for-github-actions#example-15)Example

```
name: Greeting from Mona

on: push

jobs:
  my-job:
    name: My Job
    runs-on: ubuntu-latest
    steps:
      - name: Print a greeting
        env:
          MY_VAR: Hi there! My name is
          FIRST_NAME: Mona
          MIDDLE_NAME: The
          LAST_NAME: Octocat
        run: |
          echo $MY_VAR $FIRST_NAME $MIDDLE_NAME $LAST_NAME.
```

## [](https://docs.github.com/en/actions/learn-github-actions/workflow-syntax-for-github-actions#jobsjob_idstepsid)`jobs.<job_id>.steps[*].id`

A unique identifier for the step. You can use the `id` to reference the step in contexts. For more information, see "[Contexts](https://docs.github.com/en/actions/learn-github-actions/contexts)."

## [](https://docs.github.com/en/actions/learn-github-actions/workflow-syntax-for-github-actions#jobsjob_idstepsif)`jobs.<job_id>.steps[*].if`

You can use the `if` conditional to prevent a step from running unless a condition is met. You can use any supported context and expression to create a conditional.

When you use expressions in an `if` conditional, you may omit the expression syntax (`${{ }}`) because GitHub automatically evaluates the `if` conditional as an expression. For more information, see "[Expressions](https://docs.github.com/en/actions/learn-github-actions/expressions)."

### [](https://docs.github.com/en/actions/learn-github-actions/workflow-syntax-for-github-actions#example-using-contexts)Example: Using contexts

This step only runs when the event type is a `pull_request` and the event action is `unassigned`.

```
steps:
 - name: My first step
   if: ${{ github.event_name == 'pull_request' && github.event.action == 'unassigned' }}
   run: echo This event is a pull request that had an assignee removed.
```

### [](https://docs.github.com/en/actions/learn-github-actions/workflow-syntax-for-github-actions#example-using-status-check-functions)Example: Using status check functions

The `my backup step` only runs when the previous step of a job fails. For more information, see "[Expressions](https://docs.github.com/en/actions/learn-github-actions/expressions#job-status-check-functions)."

```
steps:
  - name: My first step
    uses: octo-org/action-name@main
  - name: My backup step
    if: ${{ failure() }}
    uses: actions/heroku@1.0.0
```

## [](https://docs.github.com/en/actions/learn-github-actions/workflow-syntax-for-github-actions#jobsjob_idstepsname)`jobs.<job_id>.steps[*].name`

A name for your step to display on GitHub.

## [](https://docs.github.com/en/actions/learn-github-actions/workflow-syntax-for-github-actions#jobsjob_idstepsuses)`jobs.<job_id>.steps[*].uses`

Selects an action to run as part of a step in your job. An action is a reusable unit of code. You can use an action defined in the same repository as the workflow, a public repository, or in a [published Docker container image](https://hub.docker.com/).

We strongly recommend that you include the version of the action you are using by specifying a Git ref, SHA, or Docker tag number. If you don't specify a version, it could break your workflows or cause unexpected behavior when the action owner publishes an update.

-   Using the commit SHA of a released action version is the safest for stability and security.
-   Using the specific major action version allows you to receive critical fixes and security patches while still maintaining compatibility. It also assures that your workflow should still work.
-   Using the default branch of an action may be convenient, but if someone releases a new major version with a breaking change, your workflow could break.

Some actions require inputs that you must set using the [`with`](https://docs.github.com/en/actions/learn-github-actions/workflow-syntax-for-github-actions#jobsjob_idstepswith) keyword. Review the action's README file to determine the inputs required.

Actions are either JavaScript files or Docker containers. If the action you're using is a Docker container you must run the job in a Linux environment. For more details, see [`runs-on`](https://docs.github.com/en/actions/learn-github-actions/workflow-syntax-for-github-actions#jobsjob_idruns-on).

### [](https://docs.github.com/en/actions/learn-github-actions/workflow-syntax-for-github-actions#example-using-versioned-actions)Example: Using versioned actions

```
steps:
  
  - uses: actions/checkout@a81bbbf8298c0fa03ea29cdc473d45769f953675
  
  - uses: actions/checkout@v2
  
  - uses: actions/checkout@v2.2.0
  
  - uses: actions/checkout@main
```

### [](https://docs.github.com/en/actions/learn-github-actions/workflow-syntax-for-github-actions#example-using-a-public-action)Example: Using a public action

`{owner}/{repo}@{ref}`

You can specify a branch, ref, or SHA in a public GitHub repository.

```
jobs:
  my_first_job:
    steps:
      - name: My first step
        
        uses: actions/heroku@main
      - name: My second step
        
        uses: actions/aws@v2.0.1
```

### [](https://docs.github.com/en/actions/learn-github-actions/workflow-syntax-for-github-actions#example-using-a-public-action-in-a-subdirectory)Example: Using a public action in a subdirectory

`{owner}/{repo}/{path}@{ref}`

A subdirectory in a public GitHub repository at a specific branch, ref, or SHA.

```
jobs:
  my_first_job:
    steps:
      - name: My first step
        uses: actions/aws/ec2@main
```

### [](https://docs.github.com/en/actions/learn-github-actions/workflow-syntax-for-github-actions#example-using-an-action-in-the-same-repository-as-the-workflow)Example: Using an action in the same repository as the workflow

`./path/to/dir`

The path to the directory that contains the action in your workflow's repository. You must check out your repository before using the action.

```
jobs:
  my_first_job:
    steps:
      - name: Check out repository
        uses: actions/checkout@v2
      - name: Use local my-action
        uses: ./.github/actions/my-action
```

### [](https://docs.github.com/en/actions/learn-github-actions/workflow-syntax-for-github-actions#example-using-a-docker-hub-action)Example: Using a Docker Hub action

`docker://{image}:{tag}`

A Docker image published on [Docker Hub](https://hub.docker.com/).

```
jobs:
  my_first_job:
    steps:
      - name: My first step
        uses: docker://alpine:3.8
```

#### [](https://docs.github.com/en/actions/learn-github-actions/workflow-syntax-for-github-actions#example-using-the-github-packages-container-registry)Example: Using the GitHub Packages Container registry

`docker://{host}/{image}:{tag}`

A Docker image in the GitHub Packages Container registry.

```
jobs:
  my_first_job:
    steps:
      - name: My first step
        uses: docker://ghcr.io/OWNER/IMAGE_NAME
```

#### [](https://docs.github.com/en/actions/learn-github-actions/workflow-syntax-for-github-actions#example-using-a-docker-public-registry-action)Example: Using a Docker public registry action

`docker://{host}/{image}:{tag}`

A Docker image in a public registry. This example uses the Google Container Registry at `gcr.io`.

```
jobs:
  my_first_job:
    steps:
      - name: My first step
        uses: docker://gcr.io/cloud-builders/gradle
```

### [](https://docs.github.com/en/actions/learn-github-actions/workflow-syntax-for-github-actions#example-using-an-action-inside-a-different-private-repository-than-the-workflow)Example: Using an action inside a different private repository than the workflow

Your workflow must checkout the private repository and reference the action locally. Generate a personal access token and add the token as an encrypted secret. For more information, see "[Creating a personal access token](https://docs.github.com/en/github/authenticating-to-github/creating-a-personal-access-token)" and "[Encrypted secrets](https://docs.github.com/en/actions/reference/encrypted-secrets)."

Replace `PERSONAL_ACCESS_TOKEN` in the example with the name of your secret.

```
jobs:
  my_first_job:
    steps:
      - name: Check out repository
        uses: actions/checkout@v2
        with:
          repository: octocat/my-private-repo
          ref: v1.0
          token: ${{ secrets.PERSONAL_ACCESS_TOKEN }}
          path: ./.github/actions/my-private-repo
      - name: Run my action
        uses: ./.github/actions/my-private-repo/my-action
```

## [](https://docs.github.com/en/actions/learn-github-actions/workflow-syntax-for-github-actions#jobsjob_idstepsrun)`jobs.<job_id>.steps[*].run`

Runs command-line programs using the operating system's shell. If you do not provide a `name`, the step name will default to the text specified in the `run` command.

Commands run using non-login shells by default. You can choose a different shell and customize the shell used to run commands. For more information, see [`jobs.<job_id>.steps[*].shell`](https://docs.github.com/en/actions/learn-github-actions/workflow-syntax-for-github-actions#jobsjob_idstepsshell).

Each `run` keyword represents a new process and shell in the runner environment. When you provide multi-line commands, each line runs in the same shell. For example:

-   A single-line command:
    
    ```
    - name: Install Dependencies
      run: npm install
    ```
    
-   A multi-line command:
    
    ```
    - name: Clean install dependencies and build
      run: |
        npm ci
        npm run build
    ```
    

Using the `working-directory` keyword, you can specify the working directory of where to run the command.

```
- name: Clean temp directory
  run: rm -rf *
  working-directory: ./temp
```

## [](https://docs.github.com/en/actions/learn-github-actions/workflow-syntax-for-github-actions#jobsjob_idstepsshell)`jobs.<job_id>.steps[*].shell`

You can override the default shell settings in the runner's operating system using the `shell` keyword. You can use built-in `shell` keywords, or you can define a custom set of shell options. The shell command that is run internally executes a temporary file that contains the commands specified in the `run` keyword.

Supported platform

`shell` parameter

Description

Command run internally

All

`bash`

The default shell on non-Windows platforms with a fallback to `sh`. When specifying a bash shell on Windows, the bash shell included with Git for Windows is used.

`bash --noprofile --norc -eo pipefail {0}`

All

`pwsh`

The PowerShell Core. GitHub appends the extension `.ps1` to your script name.

`pwsh -command ". '{0}'"`

All

`python`

Executes the python command.

`python {0}`

Linux / macOS

`sh`

The fallback behavior for non-Windows platforms if no shell is provided and `bash` is not found in the path.

`sh -e {0}`

Windows

`cmd`

GitHub appends the extension `.cmd` to your script name and substitutes for `{0}`.

`%ComSpec% /D /E:ON /V:OFF /S /C "CALL "{0}""`.

Windows

`pwsh`

This is the default shell used on Windows. The PowerShell Core. GitHub appends the extension `.ps1` to your script name. If your self-hosted Windows runner does not have _PowerShell Core_ installed, then _PowerShell Desktop_ is used instead.

`pwsh -command ". '{0}'"`.

Windows

`powershell`

The PowerShell Desktop. GitHub appends the extension `.ps1` to your script name.

`powershell -command ". '{0}'"`.

### [](https://docs.github.com/en/actions/learn-github-actions/workflow-syntax-for-github-actions#example-running-a-script-using-bash)Example: Running a script using bash

```
steps:
  - name: Display the path
    run: echo $PATH
    shell: bash
```

### [](https://docs.github.com/en/actions/learn-github-actions/workflow-syntax-for-github-actions#example-running-a-script-using-windows-cmd)Example: Running a script using Windows `cmd`

```
steps:
  - name: Display the path
    run: echo %PATH%
    shell: cmd
```

### [](https://docs.github.com/en/actions/learn-github-actions/workflow-syntax-for-github-actions#example-running-a-script-using-powershell-core)Example: Running a script using PowerShell Core

```
steps:
  - name: Display the path
    run: echo ${env:PATH}
    shell: pwsh
```

### [](https://docs.github.com/en/actions/learn-github-actions/workflow-syntax-for-github-actions#example-using-powershell-desktop-to-run-a-script)Example: Using PowerShell Desktop to run a script

```
steps:
  - name: Display the path
    run: echo ${env:PATH}
    shell: powershell
```

### [](https://docs.github.com/en/actions/learn-github-actions/workflow-syntax-for-github-actions#example-running-a-python-script)Example: Running a python script

```
steps:
  - name: Display the path
    run: |
      import os
      print(os.environ['PATH'])
    shell: python
```

### [](https://docs.github.com/en/actions/learn-github-actions/workflow-syntax-for-github-actions#custom-shell)Custom shell

You can set the `shell` value to a template string using `command […options] {0} [..more_options]`. GitHub interprets the first whitespace-delimited word of the string as the command, and inserts the file name for the temporary script at `{0}`.

For example:

```
steps:
  - name: Display the environment variables and their values
    run: |
      print %ENV
    shell: perl {0}
```

The command used, `perl` in this example, must be installed on the runner.

For information about the software included on GitHub-hosted runners, see "[Specifications for GitHub-hosted runners](https://docs.github.com/en/actions/reference/specifications-for-github-hosted-runners#supported-software)."

### [](https://docs.github.com/en/actions/learn-github-actions/workflow-syntax-for-github-actions#exit-codes-and-error-action-preference)Exit codes and error action preference

For built-in shell keywords, we provide the following defaults that are executed by GitHub-hosted runners. You should use these guidelines when running shell scripts.

-   `bash`/`sh`:
    
    -   Fail-fast behavior using `set -eo pipefail`: Default for `bash` and built-in `shell`. It is also the default when you don't provide an option on non-Windows platforms.
    -   You can opt out of fail-fast and take full control by providing a template string to the shell options. For example, `bash {0}`.
    -   sh-like shells exit with the exit code of the last command executed in a script, which is also the default behavior for actions. The runner will report the status of the step as fail/succeed based on this exit code.
-   `powershell`/`pwsh`
    
    -   Fail-fast behavior when possible. For `pwsh` and `powershell` built-in shell, we will prepend `$ErrorActionPreference = 'stop'` to script contents.
    -   We append `if ((Test-Path -LiteralPath variable:\LASTEXITCODE)) { exit $LASTEXITCODE }` to powershell scripts so action statuses reflect the script's last exit code.
    -   Users can always opt out by not using the built-in shell, and providing a custom shell option like: `pwsh -File {0}`, or `powershell -Command "& '{0}'"`, depending on need.
-   `cmd`
    
    -   There doesn't seem to be a way to fully opt into fail-fast behavior other than writing your script to check each error code and respond accordingly. Because we can't actually provide that behavior by default, you need to write this behavior into your script.
    -   `cmd.exe` will exit with the error level of the last program it executed, and it will return the error code to the runner. This behavior is internally consistent with the previous `sh` and `pwsh` default behavior and is the `cmd.exe` default, so this behavior remains intact.

## [](https://docs.github.com/en/actions/learn-github-actions/workflow-syntax-for-github-actions#jobsjob_idstepswith)`jobs.<job_id>.steps[*].with`

A `map` of the input parameters defined by the action. Each input parameter is a key/value pair. Input parameters are set as environment variables. The variable is prefixed with `INPUT_` and converted to upper case.

### [](https://docs.github.com/en/actions/learn-github-actions/workflow-syntax-for-github-actions#example-16)Example

Defines the three input parameters (`first_name`, `middle_name`, and `last_name`) defined by the `hello_world` action. These input variables will be accessible to the `hello-world` action as `INPUT_FIRST_NAME`, `INPUT_MIDDLE_NAME`, and `INPUT_LAST_NAME` environment variables.

```
jobs:
  my_first_job:
    steps:
      - name: My first step
        uses: actions/hello_world@main
        with:
          first_name: Mona
          middle_name: The
          last_name: Octocat      
```

## [](https://docs.github.com/en/actions/learn-github-actions/workflow-syntax-for-github-actions#jobsjob_idstepswithargs)`jobs.<job_id>.steps[*].with.args`

A `string` that defines the inputs for a Docker container. GitHub passes the `args` to the container's `ENTRYPOINT` when the container starts up. An `array of strings` is not supported by this parameter.

### [](https://docs.github.com/en/actions/learn-github-actions/workflow-syntax-for-github-actions#example-17)Example

```
steps:
  - name: Explain why this job ran
    uses: octo-org/action-name@main
    with:
      entrypoint: /bin/echo
      args: The ${{ github.event_name }} event triggered this step.
```

The `args` are used in place of the `CMD` instruction in a `Dockerfile`. If you use `CMD` in your `Dockerfile`, use the guidelines ordered by preference:

1.  Document required arguments in the action's README and omit them from the `CMD` instruction.
2.  Use defaults that allow using the action without specifying any `args`.
3.  If the action exposes a `--help` flag, or something similar, use that as the default to make your action self-documenting.

## [](https://docs.github.com/en/actions/learn-github-actions/workflow-syntax-for-github-actions#jobsjob_idstepswithentrypoint)`jobs.<job_id>.steps[*].with.entrypoint`

Overrides the Docker `ENTRYPOINT` in the `Dockerfile`, or sets it if one wasn't already specified. Unlike the Docker `ENTRYPOINT` instruction which has a shell and exec form, `entrypoint` keyword accepts only a single string defining the executable to be run.

### [](https://docs.github.com/en/actions/learn-github-actions/workflow-syntax-for-github-actions#example-18)Example

```
steps:
  - name: Run a custom command
    uses: octo-org/action-name@main
    with:
      entrypoint: /a/different/executable
```

The `entrypoint` keyword is meant to be used with Docker container actions, but you can also use it with JavaScript actions that don't define any inputs.

## [](https://docs.github.com/en/actions/learn-github-actions/workflow-syntax-for-github-actions#jobsjob_idstepsenv)`jobs.<job_id>.steps[*].env`

Sets environment variables for steps to use in the runner environment. You can also set environment variables for the entire workflow or a job. For more information, see [`env`](https://docs.github.com/en/actions/learn-github-actions/workflow-syntax-for-github-actions#env) and [`jobs.<job_id>.env`](https://docs.github.com/en/actions/learn-github-actions/workflow-syntax-for-github-actions#jobsjob_idenv).

When more than one environment variable is defined with the same name, GitHub uses the most specific environment variable. For example, an environment variable defined in a step will override job and workflow variables with the same name, while the step executes. A variable defined for a job will override a workflow variable with the same name, while the job executes.

Public actions may specify expected environment variables in the README file. If you are setting a secret in an environment variable, you must set secrets using the `secrets` context. For more information, see "[Using environment variables](https://docs.github.com/en/actions/automating-your-workflow-with-github-actions/using-environment-variables)" and "[Contexts](https://docs.github.com/en/actions/learn-github-actions/contexts)."

### [](https://docs.github.com/en/actions/learn-github-actions/workflow-syntax-for-github-actions#example-19)Example

```
steps:
  - name: My first action
    env:
      GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
      FIRST_NAME: Mona
      LAST_NAME: Octocat
```

## [](https://docs.github.com/en/actions/learn-github-actions/workflow-syntax-for-github-actions#jobsjob_idstepscontinue-on-error)`jobs.<job_id>.steps[*].continue-on-error`

Prevents a job from failing when a step fails. Set to `true` to allow a job to pass when this step fails.

## [](https://docs.github.com/en/actions/learn-github-actions/workflow-syntax-for-github-actions#jobsjob_idstepstimeout-minutes)`jobs.<job_id>.steps[*].timeout-minutes`

The maximum number of minutes to run the step before killing the process.

## [](https://docs.github.com/en/actions/learn-github-actions/workflow-syntax-for-github-actions#jobsjob_idtimeout-minutes)`jobs.<job_id>.timeout-minutes`

The maximum number of minutes to let a job run before GitHub automatically cancels it. Default: 360

If the timeout exceeds the job execution time limit for the runner, the job will be canceled when the execution time limit is met instead. For more information about job execution time limits, see "[Usage limits and billing](https://docs.github.com/en/actions/reference/usage-limits-billing-and-administration#usage-limits)" for GitHub-hosted runners and "[About self-hosted runners](https://docs.github.com/en/actions/hosting-your-own-runners/about-self-hosted-runners/#usage-limits)" for self-hosted runner usage limits.

## [](https://docs.github.com/en/actions/learn-github-actions/workflow-syntax-for-github-actions#jobsjob_idstrategy)`jobs.<job_id>.strategy`

A strategy creates a build matrix for your jobs. You can define different variations to run each job in.

## [](https://docs.github.com/en/actions/learn-github-actions/workflow-syntax-for-github-actions#jobsjob_idstrategymatrix)`jobs.<job_id>.strategy.matrix`

You can define a matrix of different job configurations. A matrix allows you to create multiple jobs by performing variable substitution in a single job definition. For example, you can use a matrix to create jobs for more than one supported version of a programming language, operating system, or tool. A matrix reuses the job's configuration and creates a job for each matrix you configure.

A job matrix can generate a maximum of 256 jobs per workflow run. This limit also applies to self-hosted runners.

Each option you define in the `matrix` has a key and value. The keys you define become properties in the `matrix` context and you can reference the property in other areas of your workflow file. For example, if you define the key `os` that contains an array of operating systems, you can use the `matrix.os` property as the value of the `runs-on` keyword to create a job for each operating system. For more information, see "[Contexts](https://docs.github.com/en/actions/learn-github-actions/contexts)."

The order that you define a `matrix` matters. The first option you define will be the first job that runs in your workflow.

### [](https://docs.github.com/en/actions/learn-github-actions/workflow-syntax-for-github-actions#example-running-multiple-versions-of-nodejs)Example: Running multiple versions of Node.js

You can specify a matrix by supplying an array for the configuration options. For example, if the runner supports Node.js versions 10, 12, and 14, you could specify an array of those versions in the `matrix`.

This example creates a matrix of three jobs by setting the `node` key to an array of three Node.js versions. To use the matrix, the example sets the `matrix.node` context property as the value of the `setup-node` action's input parameter `node-version`. As a result, three jobs will run, each using a different Node.js version.

```
strategy:
  matrix:
    node: [10, 12, 14]
steps:
  
  - uses: actions/setup-node@v2
    with:
      
      node-version: ${{ matrix.node }}
```

The `setup-node` action is the recommended way to configure a Node.js version when using GitHub-hosted runners. For more information, see the [`setup-node`](https://github.com/actions/setup-node) action.

### [](https://docs.github.com/en/actions/learn-github-actions/workflow-syntax-for-github-actions#example-running-with-multiple-operating-systems)Example: Running with multiple operating systems

You can create a matrix to run workflows on more than one runner operating system. You can also specify more than one matrix configuration. This example creates a matrix of 6 jobs:

-   2 operating systems specified in the `os` array
-   3 Node.js versions specified in the `node` array

When you define a matrix of operating systems, you must set the value of `runs-on` to the `matrix.os` context property you defined.

```
runs-on: ${{ matrix.os }}
strategy:
  matrix:
    os: [ubuntu-18.04, ubuntu-20.04]
    node: [10, 12, 14]
steps:
  - uses: actions/setup-node@v2
    with:
      node-version: ${{ matrix.node }}
```

To find supported configuration options for GitHub-hosted runners, see "[Virtual environments for GitHub-hosted runners](https://docs.github.com/en/actions/automating-your-workflow-with-github-actions/virtual-environments-for-github-hosted-runners)."

### [](https://docs.github.com/en/actions/learn-github-actions/workflow-syntax-for-github-actions#example-including-additional-values-into-combinations)Example: Including additional values into combinations

You can add additional configuration options to a build matrix job that already exists. For example, if you want to use a specific version of `npm` when the job that uses `windows-latest` and version 8 of `node` runs, you can use `include` to specify that additional option.

```
runs-on: ${{ matrix.os }}
strategy:
  matrix:
    os: [macos-latest, windows-latest, ubuntu-18.04]
    node: [8, 10, 12, 14]
    include:
      
      
      - os: windows-latest
        node: 8
        npm: 6
```

### [](https://docs.github.com/en/actions/learn-github-actions/workflow-syntax-for-github-actions#example-including-new-combinations)Example: Including new combinations

You can use `include` to add new jobs to a build matrix. Any unmatched include configurations are added to the matrix. For example, if you want to use `node` version 14 to build on multiple operating systems, but wanted one extra experimental job using node version 15 on Ubuntu, you can use `include` to specify that additional job.

```
runs-on: ${{ matrix.os }}
strategy:
  matrix:
    node: [14]
    os: [macos-latest, windows-latest, ubuntu-18.04]
    include:
      - node: 15
        os: ubuntu-18.04
        experimental: true
```

### [](https://docs.github.com/en/actions/learn-github-actions/workflow-syntax-for-github-actions#example-excluding-configurations-from-a-matrix)Example: Excluding configurations from a matrix

You can remove a specific configurations defined in the build matrix using the `exclude` option. Using `exclude` removes a job defined by the build matrix. The number of jobs is the cross product of the number of operating systems (`os`) included in the arrays you provide, minus any subtractions (`exclude`).

```
runs-on: ${{ matrix.os }}
strategy:
  matrix:
    os: [macos-latest, windows-latest, ubuntu-18.04]
    node: [8, 10, 12, 14]
    exclude:
      
      - os: macos-latest
        node: 8
```

**Note:** All `include` combinations are processed after `exclude`. This allows you to use `include` to add back combinations that were previously excluded.

#### [](https://docs.github.com/en/actions/learn-github-actions/workflow-syntax-for-github-actions#using-environment-variables-in-a-matrix)Using environment variables in a matrix

You can add custom environment variables for each test combination by using the `include` key. You can then refer to the custom environment variables in a later step.

In this example, the matrix entries for `node-version` are each configured to use different values for the `site` and `datacenter` environment variables. The `Echo site details` step then uses `env: ${{ matrix.env }}` to refer to the custom variables:

```
name: Node.js CI
on: [push]
jobs:
  build:
    runs-on: ubuntu-latest
    strategy:
      matrix:
       include:
         - node-version: 10.x
           site: "prod"
           datacenter: "site-a"
         - node-version: 12.x
           site: "dev"
           datacenter: "site-b"
    steps:
      - name: Echo site details
        env:
          SITE: ${{ matrix.site }}
          DATACENTER: ${{ matrix.datacenter }}
        run: echo $SITE $DATACENTER
```

## [](https://docs.github.com/en/actions/learn-github-actions/workflow-syntax-for-github-actions#jobsjob_idstrategyfail-fast)`jobs.<job_id>.strategy.fail-fast`

When set to `true`, GitHub cancels all in-progress jobs if any `matrix` job fails. Default: `true`

## [](https://docs.github.com/en/actions/learn-github-actions/workflow-syntax-for-github-actions#jobsjob_idstrategymax-parallel)`jobs.<job_id>.strategy.max-parallel`

The maximum number of jobs that can run simultaneously when using a `matrix` job strategy. By default, GitHub will maximize the number of jobs run in parallel depending on the available runners on GitHub-hosted virtual machines.

```
strategy:
  max-parallel: 2
```

## [](https://docs.github.com/en/actions/learn-github-actions/workflow-syntax-for-github-actions#jobsjob_idcontinue-on-error)`jobs.<job_id>.continue-on-error`

Prevents a workflow run from failing when a job fails. Set to `true` to allow a workflow run to pass when this job fails.

### [](https://docs.github.com/en/actions/learn-github-actions/workflow-syntax-for-github-actions#example-preventing-a-specific-failing-matrix-job-from-failing-a-workflow-run)Example: Preventing a specific failing matrix job from failing a workflow run

You can allow specific jobs in a job matrix to fail without failing the workflow run. For example, if you wanted to only allow an experimental job with `node` set to `15` to fail without failing the workflow run.

```
runs-on: ${{ matrix.os }}
continue-on-error: ${{ matrix.experimental }}
strategy:
  fail-fast: false
  matrix:
    node: [13, 14]
    os: [macos-latest, ubuntu-18.04]
    experimental: [false]
    include:
      - node: 15
        os: ubuntu-18.04
        experimental: true
```

## [](https://docs.github.com/en/actions/learn-github-actions/workflow-syntax-for-github-actions#jobsjob_idcontainer)`jobs.<job_id>.container`

A container to run any steps in a job that don't already specify a container. If you have steps that use both script and container actions, the container actions will run as sibling containers on the same network with the same volume mounts.

If you do not set a `container`, all steps will run directly on the host specified by `runs-on` unless a step refers to an action configured to run in a container.

### [](https://docs.github.com/en/actions/learn-github-actions/workflow-syntax-for-github-actions#example-20)Example

```
jobs:
  my_job:
    container:
      image: node:14.16
      env:
        NODE_ENV: development
      ports:
        - 80
      volumes:
        - my_docker_volume:/volume_mount
      options: --cpus 1
```

When you only specify a container image, you can omit the `image` keyword.

```
jobs:
  my_job:
    container: node:14.16
```

## [](https://docs.github.com/en/actions/learn-github-actions/workflow-syntax-for-github-actions#jobsjob_idcontainerimage)`jobs.<job_id>.container.image`

The Docker image to use as the container to run the action. The value can be the Docker Hub image name or a registry name.

## [](https://docs.github.com/en/actions/learn-github-actions/workflow-syntax-for-github-actions#jobsjob_idcontainercredentials)`jobs.<job_id>.container.credentials`

If the image's container registry requires authentication to pull the image, you can use `credentials` to set a `map` of the `username` and `password`. The credentials are the same values that you would provide to the [`docker login`](https://docs.docker.com/engine/reference/commandline/login/) command.

### [](https://docs.github.com/en/actions/learn-github-actions/workflow-syntax-for-github-actions#example-21)Example

```
container:
  image: ghcr.io/owner/image
  credentials:
     username: ${{ github.actor }}
     password: ${{ secrets.ghcr_token }}
```

## [](https://docs.github.com/en/actions/learn-github-actions/workflow-syntax-for-github-actions#jobsjob_idcontainerenv)`jobs.<job_id>.container.env`

Sets a `map` of environment variables in the container.

## [](https://docs.github.com/en/actions/learn-github-actions/workflow-syntax-for-github-actions#jobsjob_idcontainerports)`jobs.<job_id>.container.ports`

Sets an `array` of ports to expose on the container.

## [](https://docs.github.com/en/actions/learn-github-actions/workflow-syntax-for-github-actions#jobsjob_idcontainervolumes)`jobs.<job_id>.container.volumes`

Sets an `array` of volumes for the container to use. You can use volumes to share data between services or other steps in a job. You can specify named Docker volumes, anonymous Docker volumes, or bind mounts on the host.

To specify a volume, you specify the source and destination path:

`<source>:<destinationPath>`.

The `<source>` is a volume name or an absolute path on the host machine, and `<destinationPath>` is an absolute path in the container.

### [](https://docs.github.com/en/actions/learn-github-actions/workflow-syntax-for-github-actions#example-22)Example

```
volumes:
  - my_docker_volume:/volume_mount
  - /data/my_data
  - /source/directory:/destination/directory
```

## [](https://docs.github.com/en/actions/learn-github-actions/workflow-syntax-for-github-actions#jobsjob_idcontaineroptions)`jobs.<job_id>.container.options`

Additional Docker container resource options. For a list of options, see "[`docker create` options](https://docs.docker.com/engine/reference/commandline/create/#options)."

**Warning:** The `--network` option is not supported.

## [](https://docs.github.com/en/actions/learn-github-actions/workflow-syntax-for-github-actions#jobsjob_idservices)`jobs.<job_id>.services`

**Note:** If your workflows use Docker container actions or service containers, then you must use a Linux runner:

-   If you are using GitHub-hosted runners, you must use an Ubuntu runner.
-   If you are using self-hosted runners, you must use a Linux machine as your runner and Docker must be installed.

Used to host service containers for a job in a workflow. Service containers are useful for creating databases or cache services like Redis. The runner automatically creates a Docker network and manages the life cycle of the service containers.

If you configure your job to run in a container, or your step uses container actions, you don't need to map ports to access the service or action. Docker automatically exposes all ports between containers on the same Docker user-defined bridge network. You can directly reference the service container by its hostname. The hostname is automatically mapped to the label name you configure for the service in the workflow.

If you configure the job to run directly on the runner machine and your step doesn't use a container action, you must map any required Docker service container ports to the Docker host (the runner machine). You can access the service container using localhost and the mapped port.

For more information about the differences between networking service containers, see "[About service containers](https://docs.github.com/en/actions/automating-your-workflow-with-github-actions/about-service-containers)."

### [](https://docs.github.com/en/actions/learn-github-actions/workflow-syntax-for-github-actions#example-using-localhost)Example: Using localhost

This example creates two services: nginx and redis. When you specify the Docker host port but not the container port, the container port is randomly assigned to a free port. GitHub sets the assigned container port in the `${{job.services.<service_name>.ports}}` context. In this example, you can access the service container ports using the `${{ job.services.nginx.ports['8080'] }}` and `${{ job.services.redis.ports['6379'] }}` contexts.

```
services:
  nginx:
    image: nginx
    
    ports:
      - 8080:80
  redis:
    image: redis
    
    ports:
      - 6379/tcp
```

## [](https://docs.github.com/en/actions/learn-github-actions/workflow-syntax-for-github-actions#jobsjob_idservicesservice_idimage)`jobs.<job_id>.services.<service_id>.image`

The Docker image to use as the service container to run the action. The value can be the Docker Hub image name or a registry name.

## [](https://docs.github.com/en/actions/learn-github-actions/workflow-syntax-for-github-actions#jobsjob_idservicesservice_idcredentials)`jobs.<job_id>.services.<service_id>.credentials`

If the image's container registry requires authentication to pull the image, you can use `credentials` to set a `map` of the `username` and `password`. The credentials are the same values that you would provide to the [`docker login`](https://docs.docker.com/engine/reference/commandline/login/) command.

### [](https://docs.github.com/en/actions/learn-github-actions/workflow-syntax-for-github-actions#example-23)Example

```
services:
  myservice1:
    image: ghcr.io/owner/myservice1
    credentials:
      username: ${{ github.actor }}
      password: ${{ secrets.ghcr_token }}
  myservice2:
    image: dockerhub_org/myservice2
    credentials:
      username: ${{ secrets.DOCKER_USER }}
      password: ${{ secrets.DOCKER_PASSWORD }}
```

## [](https://docs.github.com/en/actions/learn-github-actions/workflow-syntax-for-github-actions#jobsjob_idservicesservice_idenv)`jobs.<job_id>.services.<service_id>.env`

Sets a `map` of environment variables in the service container.

## [](https://docs.github.com/en/actions/learn-github-actions/workflow-syntax-for-github-actions#jobsjob_idservicesservice_idports)`jobs.<job_id>.services.<service_id>.ports`

Sets an `array` of ports to expose on the service container.

## [](https://docs.github.com/en/actions/learn-github-actions/workflow-syntax-for-github-actions#jobsjob_idservicesservice_idvolumes)`jobs.<job_id>.services.<service_id>.volumes`

Sets an `array` of volumes for the service container to use. You can use volumes to share data between services or other steps in a job. You can specify named Docker volumes, anonymous Docker volumes, or bind mounts on the host.

To specify a volume, you specify the source and destination path:

`<source>:<destinationPath>`.

The `<source>` is a volume name or an absolute path on the host machine, and `<destinationPath>` is an absolute path in the container.

### [](https://docs.github.com/en/actions/learn-github-actions/workflow-syntax-for-github-actions#example-24)Example

```
volumes:
  - my_docker_volume:/volume_mount
  - /data/my_data
  - /source/directory:/destination/directory
```

## [](https://docs.github.com/en/actions/learn-github-actions/workflow-syntax-for-github-actions#jobsjob_idservicesservice_idoptions)`jobs.<job_id>.services.<service_id>.options`

Additional Docker container resource options. For a list of options, see "[`docker create` options](https://docs.docker.com/engine/reference/commandline/create/#options)."

**Warning:** The `--network` option is not supported.

## [](https://docs.github.com/en/actions/learn-github-actions/workflow-syntax-for-github-actions#jobsjob_iduses)`jobs.<job_id>.uses`

The location and version of a reusable workflow file to run as a job.

`{owner}/{repo}/{path}/{filename}@{ref}`

`{ref}` can be a SHA, a release tag, or a branch name. Using the commit SHA is the safest for stability and security. For more information, see "[Security hardening for GitHub Actions](https://docs.github.com/en/actions/learn-github-actions/security-hardening-for-github-actions#reusing-third-party-workflows)."

### [](https://docs.github.com/en/actions/learn-github-actions/workflow-syntax-for-github-actions#example-25)Example

```
jobs:
  call-workflow-1:
    uses: octo-org/this-repo/.github/workflows/workflow-1.yml@172239021f7ba04fe7327647b213799853a9eb89
  call-workflow-2:
    uses: octo-org/another-repo/.github/workflows/workflow-2.yml@v1
```

For more information, see "[Reusing workflows](https://docs.github.com/en/actions/learn-github-actions/reusing-workflows)."

## [](https://docs.github.com/en/actions/learn-github-actions/workflow-syntax-for-github-actions#jobsjob_idwith)`jobs.<job_id>.with`

When a job is used to call a reusable workflow, you can use `with` to provide a map of inputs that are passed to the called workflow.

Any inputs that you pass must match the input specifications defined in the called workflow.

Unlike [`jobs.<job_id>.steps[*].with`](https://docs.github.com/en/actions/learn-github-actions/workflow-syntax-for-github-actions#jobsjob_idstepswith), the inputs you pass with `jobs.<job_id>.with` are not be available as environment variables in the called workflow. Instead, you can reference the inputs by using the `inputs` context.

### [](https://docs.github.com/en/actions/learn-github-actions/workflow-syntax-for-github-actions#example-26)Example

```
jobs:
  call-workflow:
    uses: octo-org/example-repo/.github/workflows/called-workflow.yml@main
    with:
      username: mona
```

## [](https://docs.github.com/en/actions/learn-github-actions/workflow-syntax-for-github-actions#jobsjob_idwithinput_id)`jobs.<job_id>.with.<input_id>`

A pair consisting of a string identifier for the input and the value of the input. The identifier must match the name of an input defined by [`on.workflow_call.inputs.<inputs_id>`](https://docs.github.com/en/actions/creating-actions/metadata-syntax-for-github-actions#inputsinput_id) in the called workflow. The data type of the value must match the type defined by [`on.workflow_call.inputs.<input_id>.type`](https://docs.github.com/en/actions/learn-github-actions/workflow-syntax-for-github-actions#onworkflow_callinputsinput_idtype) in the called workflow.

Allowed expression contexts: `github`, and `needs`.

## [](https://docs.github.com/en/actions/learn-github-actions/workflow-syntax-for-github-actions#jobsjob_idsecrets)`jobs.<job_id>.secrets`

When a job is used to call a reusable workflow, you can use `secrets` to provide a map of secrets that are passed to the called workflow.

Any secrets that you pass must match the names defined in the called workflow.

### [](https://docs.github.com/en/actions/learn-github-actions/workflow-syntax-for-github-actions#example-27)Example

```
jobs:
  call-workflow:
    uses: octo-org/example-repo/.github/workflows/called-workflow.yml@main
    secrets:
      access-token: ${{ secrets.PERSONAL_ACCESS_TOKEN }} 
```

## [](https://docs.github.com/en/actions/learn-github-actions/workflow-syntax-for-github-actions#jobsjob_idsecretssecret_id)`jobs.<job_id>.secrets.<secret_id>`

A pair consisting of a string identifier for the secret and the value of the secret. The identifier must match the name of a secret defined by [`on.workflow_call.secrets.<secret_id>`](https://docs.github.com/en/actions/learn-github-actions/workflow-syntax-for-github-actions#onworkflow_callsecretssecret_id) in the called workflow.

Allowed expression contexts: `github`, `needs`, and `secrets`.

## [](https://docs.github.com/en/actions/learn-github-actions/workflow-syntax-for-github-actions#filter-pattern-cheat-sheet)Filter pattern cheat sheet

You can use special characters in path, branch, and tag filters.

-   `*`: Matches zero or more characters, but does not match the `/` character. For example, `Octo*` matches `Octocat`.
-   `**`: Matches zero or more of any character.
-   `?`: Matches zero or one of the preceding character.
-   `+`: Matches one or more of the preceding character.
-   `[]` Matches one character listed in the brackets or included in ranges. Ranges can only include `a-z`, `A-Z`, and `0-9`. For example, the range`[0-9a-z]` matches any digit or lowercase letter. For example, `[CB]at` matches `Cat` or `Bat` and `[1-2]00` matches `100` and `200`.
-   `!`: At the start of a pattern makes it negate previous positive patterns. It has no special meaning if not the first character.

The characters `*`, `[`, and `!` are special characters in YAML. If you start a pattern with `*`, `[`, or `!`, you must enclose the pattern in quotes.

```

- '**/README.md'



- **/README.md
```

For more information about branch, tag, and path filter syntax, see "[`on.<push|pull_request>.<branches|tags>`](https://docs.github.com/en/actions/learn-github-actions/workflow-syntax-for-github-actions#onpushpull_requestbranchestags)" and "[`on.<push|pull_request>.paths`](https://docs.github.com/en/actions/learn-github-actions/workflow-syntax-for-github-actions#onpushpull_requestpaths)."

### [](https://docs.github.com/en/actions/learn-github-actions/workflow-syntax-for-github-actions#patterns-to-match-branches-and-tags)Patterns to match branches and tags

Pattern

Description

Example matches

`feature/*`

The `*` wildcard matches any character, but does not match slash (`/`).

`feature/my-branch`

`feature/your-branch`

`feature/**`

The `**` wildcard matches any character including slash (`/`) in branch and tag names.

`feature/beta-a/my-branch`

`feature/your-branch`

`feature/mona/the/octocat`

`main`

`releases/mona-the-octocat`

Matches the exact name of a branch or tag name.

`main`

`releases/mona-the-octocat`

`'*'`

Matches all branch and tag names that don't contain a slash (`/`). The `*` character is a special character in YAML. When you start a pattern with `*`, you must use quotes.

`main`

`releases`

`'**'`

Matches all branch and tag names. This is the default behavior when you don't use a `branches` or `tags` filter.

`all/the/branches`

`every/tag`

`'*feature'`

The `*` character is a special character in YAML. When you start a pattern with `*`, you must use quotes.

`mona-feature`

`feature`

`ver-10-feature`

`v2*`

Matches branch and tag names that start with `v2`.

`v2`

`v2.0`

`v2.9`

`v[12].[0-9]+.[0-9]+`

Matches all semantic versioning branches and tags with major version 1 or 2

`v1.10.1`

`v2.0.0`

### [](https://docs.github.com/en/actions/learn-github-actions/workflow-syntax-for-github-actions#patterns-to-match-file-paths)Patterns to match file paths

Path patterns must match the whole path, and start from the repository's root.

Pattern

Description of matches

Example matches

`'*'`

The `*` wildcard matches any character, but does not match slash (`/`). The `*` character is a special character in YAML. When you start a pattern with `*`, you must use quotes.

`README.md`

`server.rb`

`'*.jsx?'`

The `?` character matches zero or one of the preceding character.

`page.js`

`page.jsx`

`'**'`

The `**` wildcard matches any character including slash (`/`). This is the default behavior when you don't use a `path` filter.

`all/the/files.md`

`'*.js'`

The `*` wildcard matches any character, but does not match slash (`/`). Matches all `.js` files at the root of the repository.

`app.js`

`index.js`

`'**.js'`

Matches all `.js` files in the repository.

`index.js`

`js/index.js`

`src/js/app.js`

`docs/*`

All files within the root of the `docs` directory, at the root of the repository.

`docs/README.md`

`docs/file.txt`

`docs/**`

Any files in the `/docs` directory at the root of the repository.

`docs/README.md`

`docs/mona/octocat.txt`

`docs/**/*.md`

A file with a `.md` suffix anywhere in the `docs` directory.

`docs/README.md`

`docs/mona/hello-world.md`

`docs/a/markdown/file.md`

`'**/docs/**'`

Any files in a `docs` directory anywhere in the repository.

`docs/hello.md`

`dir/docs/my-file.txt`

`space/docs/plan/space.doc`

`'**/README.md'`

A README.md file anywhere in the repository.

`README.md`

`js/README.md`

`'**/*src/**'`

Any file in a folder with a `src` suffix anywhere in the repository.

`a/src/app.js`

`my-src/code/js/app.js`

`'**/*-post.md'`

A file with the suffix `-post.md` anywhere in the repository.

`my-post.md`

`path/their-post.md`

`'**/migrate-*.sql'`

A file with the prefix `migrate-` and suffix `.sql` anywhere in the repository.

`migrate-10909.sql`

`db/migrate-v1.0.sql`

`db/sept/migrate-v1.sql`

`*.md`

`!README.md`

Using an exclamation mark (`!`) in front of a pattern negates it. When a file matches a pattern and also matches a negative pattern defined later in the file, the file will not be included.

`hello.md`

_Does not match_

`README.md`

`docs/hello.md`

`*.md`

`!README.md`

`README*`

Patterns are checked sequentially. A pattern that negates a previous pattern will re-include file paths.

`hello.md`

`README.md`

`README.doc`
