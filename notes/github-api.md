# All the Things You Can Do With GitHub API and Python

> All the Things You Can Do With GitHub API and Python

Most of us use GitHub every day either using CLI or its website. Sometimes however, you need to automate these same tasks like, for example creating Gist, querying repository analytics or just pulling, modifying and pushing new file. All these things and more can be done easily using [GitHub API](https://developer.github.com/v3/), and Python is here to help with that and make it even easier.

What We Will Need
-----------------

Before we start using GitHub API, we first need to generate personal access token that will allow us to authenticate against the API. We can get one at [https://github.com/settings/tokens](https://github.com/settings/tokens) by clicking on _Generate new token_. You will be asked to select scopes for the token. Which scopes you choose will determine what information and actions you will be able to perform against the API. You should be careful with the ones prefixed with `write:`, `delete:` and `admin:` as these might be quite destructive. You can find description of each scope in [docs here](https://developer.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).

Now that we have the token, let's test whether it actually works:

    ~ $ GITHUB_TOKEN="..."
    ~ $ curl -H "Authorization: token $GITHUB_TOKEN" https://api.github.com/gists

And here is the expected (trimmed) response showing list of my public _Gists_:

    [
      {
        "url": "https://api.github.com/gists/f3da4b0e3493b4bba4fb957fba1eaa02",
        "forks_url": "https://api.github.com/gists/f3da4b0e3493b4bba4fb957fba1eaa02/forks",
        "commits_url": "https://api.github.com/gists/f3da4b0e3493b4bba4fb957fba1eaa02/commits",
        "id": "f3da4b0e3493b4bba4fb957fba1eaa02",
        "node_id": "MDQ6R2lzdGYzZGE0YjBlMzQ5M2I0YmJhNGZiOTU3ZmJhMWVhYTAy",
        "git_pull_url": "https://gist.github.com/f3da4b0e3493b4bba4fb957fba1eaa02.git",
        "git_push_url": "https://gist.github.com/f3da4b0e3493b4bba4fb957fba1eaa02.git",
        "html_url": "https://gist.github.com/f3da4b0e3493b4bba4fb957fba1eaa02",
        "files": {
          "Test": {
            "filename": "Test",
            "type": "text/plain",
            "language": null,
            "raw_url": "https://gist.githubusercontent.com/MartinHeinz/f3da4b0e3493b4bba4fb957fba1eaa02/raw/cebefee5794b12a1772c97673647678f057a6854/Test",
            "size": 32
          }
        },
        "truncated": false
      }
    ]

Doing It With Python
--------------------

We have the personal token and we tested it with `cURL`, so now we can switch to doing the same thing in Python. We have two options here though. We can use raw requests or we can use [_PyGitHub_](https://github.com/PyGithub/PyGithub).

_PyGitHub_ exposes some of the GitHub API endpoints for most common operations like repository, issue or branch management. It can't be used for every single feature exposed through the GitHub API, so in the following sections, I will show mixture of _PyGitHub_ and _Requests_ calls depending on whether it can be done with _PyGitHub_ or not.

First things first though - let's install both libraries (_PyGitHub_ and _Requests_) and see a simple example for both:

    ~ $ pip install PyGithub requests

Example using _PyGitHub_:

    from github import Github
    import os
    from pprint import pprint
    
    token = os.getenv('GITHUB_TOKEN', '...')
    g = Github(token)
    repo = g.get_repo("MartinHeinz/python-project-blueprint")
    issues = repo.get_issues(state="open")
    pprint(issues.get_page(0))

Example using _Requests_:

    import requests
    import os
    from pprint import pprint
    
    token = os.getenv('GITHUB_TOKEN', '...')
    owner = "MartinHeinz"
    repo = "python-project-blueprint"
    query_url = f"https://api.github.com/repos/{owner}/{repo}/issues"
    params = {
        "state": "open",
    }
    headers = {'Authorization': f'token {token}'}
    r = requests.get(query_url, headers=headers, params=params)
    pprint(r.json())

Both snippets above use the same API endpoint to retrieve all open issues for specified repository.

In both cases we start by taking GitHub token from environment variable. Next, in the example with using _PyGitHub_ we use the token to create instance of `GitHub` class, which is then used to get repository and query its issues in _open state_. The result is paginated list of issues, of which we print the first page.

In the example that uses raw HTTP request, we achieve the same result by building API URL from username and repository name and sending GET request to it containing `state` as body parameter and token as `Authorization` header. Only difference is that result is not paginated. Here is the result for both examples:

First one being _PyGitHub_ output:

    [Issue(title="configure_project script not working", number=10),
     Issue(title="Consider Flask-Rest", number=9),
     Issue(title="Add newline to match dev.Dockerfile", number=7),
     Issue(title="Consider using wemake-python-styleguide", number=5),
     Issue(title="Consider versioneer", number=4),
     Issue(title="Adding isort and black", number=3),
     Issue(title="Consider src directory", number=2)]

Second, raw Python list of dictionaries (JSON):

    [{'assignee': None,
      'body': 'Some Markdown text...',
      'comments': 0,
      'comments_url': 'https://api.github.com/repos/MartinHeinz/python-project-blueprint/issues/10/comments',
      'created_at': '2020-04-20T22:16:33Z',
      'html_url': 'https://github.com/MartinHeinz/python-project-blueprint/issues/10',
      'id': 603571386,
      'labels': [],
      'labels_url': 'https://api.github.com/repos/MartinHeinz/python-project-blueprint/issues/10/labels{/name}',
      'milestone': None,
      'node_id': 'MDU6SXNzdWU2MDM1NzEzODY=',
      'repository_url': 'https://api.github.com/repos/MartinHeinz/python-project-blueprint',
      'state': 'open',
      'title': 'configure_project script not working',
      'url': 'https://api.github.com/repos/MartinHeinz/python-project-blueprint/issues/10',
      'user': {...}},
      ...
    ]

Create an Issue
---------------

While on topic of issues, let's create one too, shall we?

    g = Github(token)
    repo = g.get_repo("MartinHeinz/python-project-blueprint")
    i = repo.create_issue(
        title="Issue Title",
        body="Text of the body.",
        assignee="MartinHeinz",
        labels=[
            repo.get_label("good first issue")
        ]
    )
    pprint(i)

This is one of the use cases, where _PyGitHub_ is very handy. We just need to get the repository, create issues against it and specify bunch of parameters. In the snippet above we use `title`, `body`, `assignee` and `labels` parameters, but you could also add milestone or more labels which are queried using their name.

Create a Gist
-------------

Another things we can create is GitHub _Gist_, this time using _Requests_:

    query_url = "https://api.github.com/gists"
    data = {
        "public": True,
        "files": {
            "code.py": {
                "content": "print('some code')"
            },
        }
    }
    headers = {'Authorization': f'token {token}'}
    r = requests.post(query_url, headers=headers, data=json.dumps(data))
    pprint(r.json())

The request for creating _Gists_ is pretty simple. In the POST request you need to specify whether the _Gist_ should be `public` or not, next you need to populate list of `files` that will be part of said _Gist_, where each _key_ is a file name and its `content` contains actual string content of the file. The code above uses `json.dumps()` to convert Python dictionary to JSON string to create request body and the usual _Authorization_ header.

Below you can see the relevant parts of the expected response:

    {"comments": 0,
     "description": null,
     "files": {"code.py": {"content": "print('some code')",
                           "filename": "code.py",
                           "language": "Python",
                           "raw_url": "https://gist.githubusercontent.com/MartinHeinz/383c6b450f892e169074a642a372e459/raw/8d53df5862f8b687fc09d0b3c1b3c49afe441cbe/code.py",
                           "size": 18,
                           "truncated": null,
                           "type": "application/x-python"}},
     "forks": [],
     "html_url": "https://gist.github.com/383c6b450f892e169074a642a372e459",
     "id": "383c6b450f892e169074a642a372e459",
     "node_id": "MDQ6R2lzdDM4M2M2YjQ1MGY4OTJlMTY5MDc0YTY0MmEzNzJlNDU5",
     "public": true,
     "url": "https://api.github.com/gists/383c6b450f892e169074a642a372e459"
    }

After creating a _Gist_ you might want to do other things with it like update it, list commits, fork it or just fetch it. For all these operations there's a API endpoint listed in these [docs](https://developer.github.com/v3/gists/).

Programmatically Update File
----------------------------

One very practical, but quite complicated use case for using GitHub API, is programmatically fetching, modifying, committing and finally pushing some file to repository. Let's break this down and see an example:

    file_path = "requirements.txt"
    g = Github(token)
    repo = g.get_repo("MartinHeinz/python-project-blueprint")
    
    file = repo.get_contents(file_path, ref="master")  
    data = file.decoded_content.decode("utf-8")  
    data += "\npytest==5.3.2"  
    
    def push(path, message, content, branch, update=False):
        author = InputGitAuthor(
            "MartinHeinz",
            "martin7.heinz@gmail.com"
        )
        source = repo.get_branch("master")
        repo.create_git_ref(ref=f"refs/heads/{branch}", sha=source.commit.sha)  
        if update:  
            contents = repo.get_contents(path, ref=branch)  
            repo.update_file(contents.path, message, content, contents.sha, branch=branch, author=author)  
        else:  
            repo.create_file(path, message, content, branch=branch, author=author)  
    
    push(file_path, "Add pytest to dependencies.", data, "update-dependencies", update=True)

Starting from the top, we get contents of a file using the usual repository reference, decode it to plain string and modify it. Next, in the `push` function, we create new branch originating from commit specified using `source.commit.sha`. Based on the `if` statement, we have 2 options update existing file or create new one. In case we're doing update, we first retrieve existing file to get its hash and path and then we perform the update using previously modified data (`content`), supplied `message`, `branch` and `author` object. If on the other hand we want to create a new file in the repository, then we just omit passing in the SHA of existing file and we're done.

Analyzing Traffic
-----------------

If you are more into data science and analytics you might find useful possibility of querying views/clones statistics from your repositories:

    g = Github(token)
    repo = g.get_repo("MartinHeinz/python-project-blueprint")
    clones = repo.get_clones_traffic(per="day")
    views = repo.get_views_traffic(per="day")
    
    print(f"Repository has {clones['count']} clones out of which {clones['uniques']} are unique.")
    print(f"Repository has {views['count']} views out of which {views['uniques']} are unique.")
    
    best_day = max(*list((day.count, day.timestamp) for day in views["views"]), key=itemgetter(0))
    
    pprint(views)
    print(f"Repository had most views on {best_day[1]} with {best_day[0]} views")

The code needed to retrieve the data from GiHub is really just one line for _clones_ and one line for _views_. Both the `clones` and `views` object contains `count`, `uniques` and `views` attributes. We use the first 2 in the print statements to show actual and unique clones and views respectively.

The disgusting (beautiful) one liner after that iterates over list of `View` objects that contain view `count` for each day and respective `timestamp` which we extract into list of tuples. We then find tuple with maximum `count` and print its date and actual view count on last line. This gives us output shown below:

    Repository has 31 clones out of which 23 are unique.
    Repository has 1672 views out of which 297 are unique.
    {'count': 1672,
     'uniques': 297,
     'views': [View(uniques=6, timestamp=2020-04-28 00:00:00, count=29),
               View(uniques=30, timestamp=2020-04-29 00:00:00, count=141),
               View(uniques=37, timestamp=2020-04-30 00:00:00, count=184),
               View(uniques=25, timestamp=2020-05-01 00:00:00, count=93),
               View(uniques=24, timestamp=2020-05-02 00:00:00, count=131),
               View(uniques=20, timestamp=2020-05-03 00:00:00, count=41),
               View(uniques=26, timestamp=2020-05-04 00:00:00, count=121),
               View(uniques=41, timestamp=2020-05-05 00:00:00, count=250),
               View(uniques=47, timestamp=2020-05-06 00:00:00, count=184),
               View(uniques=33, timestamp=2020-05-07 00:00:00, count=216),
               View(uniques=15, timestamp=2020-05-08 00:00:00, count=48),
               View(uniques=20, timestamp=2020-05-09 00:00:00, count=71),
               View(uniques=22, timestamp=2020-05-10 00:00:00, count=51),
               View(uniques=7, timestamp=2020-05-11 00:00:00, count=16),
               View(uniques=14, timestamp=2020-05-12 00:00:00, count=96)]}
    Repository had most views on 2020-05-05 00:00:00 with 250 views

Rendering Markdown
------------------

This example uses GitHub API, but can be used for non-GitHub purposes. I'm talking about GitHub APIs ability to generate HTML from markdown text. This could be useful if you have website that can't render markdown directly, but rather you could use GitHub API to create HTML for you.

    query_url = "https://api.github.com/markdown"
    data = {
      "text": "`code`, _italics_, **bold**",
      "mode": "markdown",
    }
    headers = {'Authorization': f'token {token}'}
    r = requests.post(query_url, headers=headers, data=json.dumps(data))
    pprint(r)
    pprint(r.text)

Once again the query is quite simple. All we need to do is send the text to be rendered in `text` body parameter together with mode set to `markdown`. The example `text` above includes, `code` snippet, _italics_ and \*bold\* text and that's exactly what we get back in form of HTML:

Response:

    <Response [200]>
    '<p><code>code</code>, <em>italics</em>, <strong>bold</strong></p>\n'

Update Commit Status
--------------------

You know these nice green check marks, yellow circles and ugly red crosses next to your commits that are added by CI tools? Do you want to change them (maybe just for fun, maybe as part of your own CI solution)? Of course you do. And there is API for that:

    g = Github(token)
    repo = g.get_repo("MartinHeinz/python-project-blueprint")
    branch = repo.get_branch(branch="master")
    status = repo.get_commit(sha=branch.commit.sha).create_status(
        state="success",
        target_url="https://some-ci-url.com",
        description="CI in Progress",
        context="Just testing..."
    )
    print(status)

Surprisingly (for me) this obscure API endpoint is part of _PyGitHub_ library. To use it, we retrieve repo and its commit using commit hash. After that we create status for said commit, by describing its current state using parameters.

There are 4 states we can specify, namely - `error`, `failure`, `pending`, or `success` - in this example I chose `success`. Next, the `target_url` is the URL to which the _Details_ link points. And as you probably noticed, the `description` and `context` are the other values shown in dialog box shown below.

![GitHub Status Check](https://dev-to-uploads.s3.amazonaws.com/i/cichfnimv8dmy0xtfyq0.png)

To be able to verify that status change actually went through, we receive `CommitStatus` response which is representation of current status of commit. In this case looks like this:

    CommitStatus(state="success", id=9617694889, context="Just testing...")

Adding Reactions to Issue Comments
----------------------------------

GitHub issue comments allow you to add various [reactions](https://developer.github.com/v3/reactions/#reaction-types) to them. So, maybe you want to add `+1`/`-1` to somebodies comment. Maybe just throw in some celebratory `hooray` emoji. If that's the case, then here's how you could do that in Python:

    owner = "MartinHeinz"
    repo = "python-project-blueprint"
    comment_id = "593154350"
    query_url = f"https://api.github.com/repos/{owner}/{repo}/issues/comments/{comment_id}/reactions"
    data = {
      "content": "hooray"
    }
    headers = {
        'Authorization': f'token {token}',
        'Accept': 'application/vnd.github.squirrel-girl-preview',
    }
    r = requests.post(query_url, headers=headers, data=json.dumps(data))
    pprint(r)
    pprint(r.json())

To be able to create response, we will need the comment ID. It can be retrieved from API shown [here in docs](https://developer.github.com/v3/issues/comments/#list-comments-on-an-issue) or by clicking on the _three dots_ icon in upper right corner of issue comment and clicking _Copy Link_:

![Comment ID](https://dev-to-uploads.s3.amazonaws.com/i/5yyiatip56qs1md0vx7l.png)

With that we can insert `owner` username, `repo` name and this `comment_id` in the URL and emoji name (e.g. `hooray`) in the `content` body parameter. Additionally we need to also include `Accept` header, as this endpoint is part of developer preview.

The expected response here is either `201` which means that reaction was created or `200` in which case the reaction was already added previously.

    <Response [201]>  # First pprint from snippet above.

And here is (trimmed) JSON response body, that we get back:

    {"content": "hooray",
     "created_at": "2020-05-12T15:43:53Z",
     "id": 71256913,
     "node_id": "MDg6UmVhY3Rpb243MTI1NjkxMw==",
     "user": {...}}

Conclusion
----------

Playing with public APIs is great way to start a new project (e.g. CI tools, Repository traffic analytics, GitHub Bots) and GitHub API has a lot of data/content for such a thing. What I showed here is just a small sample. To explore full API see [docs here](https://developer.github.com/v3/) or if you don't feel like messing with the REST API, then check out [_PyGitHub_ Examples](https://pygithub.readthedocs.io/en/latest/examples.html).


[Source](https://martinheinz.dev/blog/25)