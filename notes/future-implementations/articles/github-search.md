# Search - GitHub Docs

> The GitHub Search API lets you to search for the specific item efficiently.

The GitHub Search API lets you to search for the specific item efficiently.

The Search API helps you search for the specific item you want to find. For example, you can find a user or a specific file in a repository. Think of it the way you think of performing a search on Google. It's designed to help you find the one result you're looking for (or maybe the few results you're looking for). Just like searching on Google, you sometimes want to see a few pages of search results so that you can find the item that best meets your needs. To satisfy that need, the GitHub Search API provides **up to 1,000 results for each search**.

You can narrow your search using queries. To learn more about the search query syntax, see "[Constructing a search query](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en/rest/reference/search#constructing-a-search-query)."

### [Ranking search results](#ranking-search-results)

Unless another sort option is provided as a query parameter, results are sorted by best match in descending order. Multiple factors are combined to boost the most relevant item to the top of the result list.

### [Rate limit](#rate-limit)

The Search API has a custom rate limit. For requests using [Basic Authentication](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en/rest#authentication), [OAuth](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en/rest#authentication), or [client ID and secret](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en/rest#increasing-the-unauthenticated-rate-limit-for-oauth-applications), you can make up to 30 requests per minute. For unauthenticated requests, the rate limit allows you to make up to 10 requests per minute.

See the [rate limit documentation](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en/rest/reference/rate-limit) for details on determining your current rate limit status.

### [Constructing a search query](#constructing-a-search-query)

Each endpoint in the Search API uses [query parameters](https://en.wikipedia.org/wiki/Query_string) to perform searches on GitHub. See the individual endpoint in the Search API for an example that includes the endpoint and query parameters.

A query can contain any combination of search qualifiers supported on GitHub. The format of the search query is:

    SEARCH_KEYWORD_1 SEARCH_KEYWORD_N QUALIFIER_1 QUALIFIER_N

For example, if you wanted to search for all _repositories_ owned by `defunkt` that contained the word `GitHub` and `Octocat` in the README file, you would use the following query with the _search repositories_ endpoint:

    GitHub Octocat in:readme user:defunkt

**Note:** Be sure to use your language's preferred HTML-encoder to construct your query strings. For example:

    const queryString = 'q=' + encodeURIComponent('GitHub Octocat in:readme user:defunkt');

See "[Searching on GitHub](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en/articles/searching-on-github)" for a complete list of available qualifiers, their format, and an example of how to use them. For information about how to use operators to match specific quantities, dates, or to exclude results, see "[Understanding the search syntax](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en/articles/understanding-the-search-syntax)."

### [Limitations on query length](#limitations-on-query-length)

The Search API does not support queries that:

-   are longer than 256 characters (not including operators or qualifiers).
-   have more than five `AND`, `OR`, or `NOT` operators.

These search queries will return a "Validation failed" error message.

### [Timeouts and incomplete results](#timeouts-and-incomplete-results)

To keep the Search API fast for everyone, we limit how long any individual query can run. For queries that [exceed the time limit](https://developer.github.com/changes/2014-04-07-understanding-search-results-and-potential-timeouts/), the API returns the matches that were already found prior to the timeout, and the response has the `incomplete_results` property set to `true`.

Reaching a timeout does not necessarily mean that search results are incomplete. More results might have been found, but also might not.

### [Access errors or missing search results](#access-errors-or-missing-search-results)

You need to successfully authenticate and have access to the repositories in your search queries, otherwise, you'll see a `422 Unprocessible Entry` error with a "Validation Failed" message. For example, your search will fail if your query includes `repo:`, `user:`, or `org:` qualifiers that request resources that you don't have access to when you sign in on GitHub.

When your search query requests multiple resources, the response will only contain the resources that you have access to and will **not** provide an error message listing the resources that were not returned.

For example, if your search query searches for the `octocat/test` and `codertocat/test` repositories, but you only have access to `octocat/test`, your response will show search results for `octocat/test` and nothing for `codertocat/test`. This behavior mimics how search works on GitHub.

### [Search code](#search-code)

Searches for query terms inside of a file. This method returns up to 100 results [per page](https://docs.github.com/rest/overview/resources-in-the-rest-api#pagination).

When searching for code, you can get text match metadata for the file **content** and file **path** fields when you pass the `text-match` media type. For more details about how to receive highlighted search results, see [Text match metadata](https://docs.github.com/rest/reference/search#text-match-metadata).

For example, if you want to find the definition of the `addClass` function inside [jQuery](https://github.com/jquery/jquery) repository, your query would look something like this:

`q=addClass+in:file+language:js+repo:jquery/jquery`

This query searches for the keyword `addClass` within a file's contents. The query limits the search to files where the language is JavaScript in the `jquery/jquery` repository.

#### [Considerations for code search](#considerations-for-code-search)

Due to the complexity of searching code, there are a few restrictions on how searches are performed:

-   Only the _default branch_ is considered. In most cases, this will be the `master` branch.
-   Only files smaller than 384 KB are searchable.
-   You must always include at least one search term when searching source code. For example, searching for [`language:go`](https://github.com/search?utf8=%E2%9C%93&q=language%3Ago&type=Code) is not valid, while [`amazing language:go`](https://github.com/search?utf8=%E2%9C%93&q=amazing+language%3Ago&type=Code) is.

    get /search/code

#### [Parameters](#search-code--parameters)

| Name     | Type   | In     | Description |
| -------- | ------ | ------ | ----------- |
| `accept` | string | header |

Setting to `application/vnd.github.v3+json` is recommended.

|
| `q` | string | query |

The query contains one or more search keywords and qualifiers. Qualifiers allow you to limit your search to specific areas of GitHub. The REST API supports the same qualifiers as GitHub.com. To learn more about the format of the query, see [Constructing a search query](https://docs.github.com/rest/reference/search#constructing-a-search-query). See "[Searching code](https://help.github.com/articles/searching-code/)" for a detailed list of qualifiers.

|
| `sort` | string | query |

Sorts the results of your query. Can only be `indexed`, which indicates how recently a file has been indexed by the GitHub search infrastructure. Default: [best match](https://docs.github.com/rest/reference/search#ranking-search-results)

|
| `order` | string | query |

Determines whether the first search result returned is the highest number of matches (`desc`) or lowest number of matches (`asc`). This parameter is ignored unless you provide `sort`.

Default: `desc` |
| `per_page` | integer | query |

Results per page (max 100)

Default: `30` |
| `page` | integer | query |

Page number of the results to fetch.

Default: `1` |

#### [Code samples](#search-code--code-samples)

##### Shell

    curl \
      -H "Accept: application/vnd.github.v3+json" \
      https://api.github.com/search/code

##### JavaScript ([@octokit/core.js](https://github.com/octokit/core.js#readme))

    await octokit.request('GET /search/code', {
      q: 'q'
    })

#### Response

    Status: 200 OK

    {
      "total_count": 7,
      "incomplete_results": false,
      "items": [
        {
          "name": "classes.js",
          "path": "src/attributes/classes.js",
          "sha": "d7212f9dee2dcc18f084d7df8f417b80846ded5a",
          "url": "https://api.github.com/repositories/167174/contents/src/attributes/classes.js?ref=825ac3773694e0cd23ee74895fd5aeb535b27da4",
          "git_url": "https://api.github.com/repositories/167174/git/blobs/d7212f9dee2dcc18f084d7df8f417b80846ded5a",
          "html_url": "https://github.com/jquery/jquery/blob/825ac3773694e0cd23ee74895fd5aeb535b27da4/src/attributes/classes.js",
          "repository": {
            "id": 167174,
            "node_id": "MDEwOlJlcG9zaXRvcnkxNjcxNzQ=",
            "name": "jquery",
            "full_name": "jquery/jquery",
            "owner": {
              "login": "jquery",
              "id": 70142,
              "node_id": "MDQ6VXNlcjcwMTQy",
              "avatar_url": "https://0.gravatar.com/avatar/6906f317a4733f4379b06c32229ef02f?d=https%3A%2F%2Fidenticons.github.com%2Ff426f04f2f9813718fb806b30e0093de.png",
              "gravatar_id": "",
              "url": "https://api.github.com/users/jquery",
              "html_url": "https://github.com/jquery",
              "followers_url": "https://api.github.com/users/jquery/followers",
              "following_url": "https://api.github.com/users/jquery/following{/other_user}",
              "gists_url": "https://api.github.com/users/jquery/gists{/gist_id}",
              "starred_url": "https://api.github.com/users/jquery/starred{/owner}{/repo}",
              "subscriptions_url": "https://api.github.com/users/jquery/subscriptions",
              "organizations_url": "https://api.github.com/users/jquery/orgs",
              "repos_url": "https://api.github.com/users/jquery/repos",
              "events_url": "https://api.github.com/users/jquery/events{/privacy}",
              "received_events_url": "https://api.github.com/users/jquery/received_events",
              "type": "Organization",
              "site_admin": false
            },
            "private": false,
            "html_url": "https://github.com/jquery/jquery",
            "description": "jQuery JavaScript Library",
            "fork": false,
            "url": "https://api.github.com/repos/jquery/jquery",
            "forks_url": "https://api.github.com/repos/jquery/jquery/forks",
            "keys_url": "https://api.github.com/repos/jquery/jquery/keys{/key_id}",
            "collaborators_url": "https://api.github.com/repos/jquery/jquery/collaborators{/collaborator}",
            "teams_url": "https://api.github.com/repos/jquery/jquery/teams",
            "hooks_url": "https://api.github.com/repos/jquery/jquery/hooks",
            "issue_events_url": "https://api.github.com/repos/jquery/jquery/issues/events{/number}",
            "events_url": "https://api.github.com/repos/jquery/jquery/events",
            "assignees_url": "https://api.github.com/repos/jquery/jquery/assignees{/user}",
            "branches_url": "https://api.github.com/repos/jquery/jquery/branches{/branch}",
            "tags_url": "https://api.github.com/repos/jquery/jquery/tags",
            "blobs_url": "https://api.github.com/repos/jquery/jquery/git/blobs{/sha}",
            "git_tags_url": "https://api.github.com/repos/jquery/jquery/git/tags{/sha}",
            "git_refs_url": "https://api.github.com/repos/jquery/jquery/git/refs{/sha}",
            "trees_url": "https://api.github.com/repos/jquery/jquery/git/trees{/sha}",
            "statuses_url": "https://api.github.com/repos/jquery/jquery/statuses/{sha}",
            "languages_url": "https://api.github.com/repos/jquery/jquery/languages",
            "stargazers_url": "https://api.github.com/repos/jquery/jquery/stargazers",
            "contributors_url": "https://api.github.com/repos/jquery/jquery/contributors",
            "subscribers_url": "https://api.github.com/repos/jquery/jquery/subscribers",
            "subscription_url": "https://api.github.com/repos/jquery/jquery/subscription",
            "commits_url": "https://api.github.com/repos/jquery/jquery/commits{/sha}",
            "git_commits_url": "https://api.github.com/repos/jquery/jquery/git/commits{/sha}",
            "comments_url": "https://api.github.com/repos/jquery/jquery/comments{/number}",
            "issue_comment_url": "https://api.github.com/repos/jquery/jquery/issues/comments/{number}",
            "contents_url": "https://api.github.com/repos/jquery/jquery/contents/{+path}",
            "compare_url": "https://api.github.com/repos/jquery/jquery/compare/{base}...{head}",
            "merges_url": "https://api.github.com/repos/jquery/jquery/merges",
            "archive_url": "https://api.github.com/repos/jquery/jquery/{archive_format}{/ref}",
            "downloads_url": "https://api.github.com/repos/jquery/jquery/downloads",
            "issues_url": "https://api.github.com/repos/jquery/jquery/issues{/number}",
            "pulls_url": "https://api.github.com/repos/jquery/jquery/pulls{/number}",
            "milestones_url": "https://api.github.com/repos/jquery/jquery/milestones{/number}",
            "notifications_url": "https://api.github.com/repos/jquery/jquery/notifications{?since,all,participating}",
            "labels_url": "https://api.github.com/repos/jquery/jquery/labels{/name}",
            "deployments_url": "http://api.github.com/repos/octocat/Hello-World/deployments",
            "releases_url": "http://api.github.com/repos/octocat/Hello-World/releases{/id}"
          },
          "score": 1
        }
      ]
    }

#### Not modified

    Status: 304 Not Modified

#### Forbidden

    Status: 403 Forbidden

#### Validation failed

    Status: 422 Unprocessable Entity

#### Service unavailable

    Status: 503 Service Unavailable

#### Notes

-   [Works with GitHub Apps](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en/developers/apps)

---

### [Search commits](#search-commits)

Find commits via various criteria on the default branch (usually `master`). This method returns up to 100 results [per page](https://docs.github.com/rest/overview/resources-in-the-rest-api#pagination).

When searching for commits, you can get text match metadata for the **message** field when you provide the `text-match` media type. For more details about how to receive highlighted search results, see [Text match metadata](https://docs.github.com/rest/reference/search#text-match-metadata).

For example, if you want to find commits related to CSS in the [octocat/Spoon-Knife](https://github.com/octocat/Spoon-Knife) repository. Your query would look something like this:

`q=repo:octocat/Spoon-Knife+css`

    get /search/commits

#### [Parameters](#search-commits--parameters)

| Name     | Type   | In     | Description |
| -------- | ------ | ------ | ----------- |
| `accept` | string | header |

This API is under preview and subject to change.[See preview notice](#search-commits-preview-notices)

|
| `q` | string | query |

The query contains one or more search keywords and qualifiers. Qualifiers allow you to limit your search to specific areas of GitHub. The REST API supports the same qualifiers as GitHub.com. To learn more about the format of the query, see [Constructing a search query](https://docs.github.com/rest/reference/search#constructing-a-search-query). See "[Searching commits](https://help.github.com/articles/searching-commits/)" for a detailed list of qualifiers.

|
| `sort` | string | query |

Sorts the results of your query by `author-date` or `committer-date`. Default: [best match](https://docs.github.com/rest/reference/search#ranking-search-results)

|
| `order` | string | query |

Determines whether the first search result returned is the highest number of matches (`desc`) or lowest number of matches (`asc`). This parameter is ignored unless you provide `sort`.

Default: `desc` |
| `per_page` | integer | query |

Results per page (max 100)

Default: `30` |
| `page` | integer | query |

Page number of the results to fetch.

Default: `1` |

#### [Code samples](#search-commits--code-samples)

##### Shell

    curl \
      -H "Accept: application/vnd.github.cloak-preview+json" \
      https://api.github.com/search/commits

##### JavaScript ([@octokit/core.js](https://github.com/octokit/core.js#readme))

    await octokit.request('GET /search/commits', {
      q: 'q',
      mediaType: {
        previews: [
          'cloak'
        ]
      }
    })

#### Response

    Status: 200 OK

    {
      "total_count": 1,
      "incomplete_results": false,
      "items": [
        {
          "url": "https://api.github.com/repos/octocat/Spoon-Knife/commits/bb4cc8d3b2e14b3af5df699876dd4ff3acd00b7f",
          "sha": "bb4cc8d3b2e14b3af5df699876dd4ff3acd00b7f",
          "html_url": "https://github.com/octocat/Spoon-Knife/commit/bb4cc8d3b2e14b3af5df699876dd4ff3acd00b7f",
          "comments_url": "https://api.github.com/repos/octocat/Spoon-Knife/commits/bb4cc8d3b2e14b3af5df699876dd4ff3acd00b7f/comments",
          "commit": {
            "url": "https://api.github.com/repos/octocat/Spoon-Knife/git/commits/bb4cc8d3b2e14b3af5df699876dd4ff3acd00b7f",
            "author": {
              "date": "2014-02-04T14:38:36-08:00",
              "name": "The Octocat",
              "email": "octocat@nowhere.com"
            },
            "committer": {
              "date": "2014-02-12T15:18:55-08:00",
              "name": "The Octocat",
              "email": "octocat@nowhere.com"
            },
            "message": "Create styles.css and updated README",
            "tree": {
              "url": "https://api.github.com/repos/octocat/Spoon-Knife/git/trees/a639e96f9038797fba6e0469f94a4b0cc459fa68",
              "sha": "a639e96f9038797fba6e0469f94a4b0cc459fa68"
            },
            "comment_count": 8
          },
          "author": {
            "login": "octocat",
            "id": 583231,
            "node_id": "MDQ6VXNlcjU4MzIzMQ==",
            "avatar_url": "https://avatars.githubusercontent.com/u/583231?v=3",
            "gravatar_id": "",
            "url": "https://api.github.com/users/octocat",
            "html_url": "https://github.com/octocat",
            "followers_url": "https://api.github.com/users/octocat/followers",
            "following_url": "https://api.github.com/users/octocat/following{/other_user}",
            "gists_url": "https://api.github.com/users/octocat/gists{/gist_id}",
            "starred_url": "https://api.github.com/users/octocat/starred{/owner}{/repo}",
            "subscriptions_url": "https://api.github.com/users/octocat/subscriptions",
            "organizations_url": "https://api.github.com/users/octocat/orgs",
            "repos_url": "https://api.github.com/users/octocat/repos",
            "events_url": "https://api.github.com/users/octocat/events{/privacy}",
            "received_events_url": "https://api.github.com/users/octocat/received_events",
            "type": "User",
            "site_admin": false
          },
          "committer": {},
          "parents": [
            {
              "url": "https://api.github.com/repos/octocat/Spoon-Knife/commits/a30c19e3f13765a3b48829788bc1cb8b4e95cee4",
              "html_url": "https://github.com/octocat/Spoon-Knife/commit/a30c19e3f13765a3b48829788bc1cb8b4e95cee4",
              "sha": "a30c19e3f13765a3b48829788bc1cb8b4e95cee4"
            }
          ],
          "repository": {
            "id": 1300192,
            "node_id": "MDEwOlJlcG9zaXRvcnkxMzAwMTky",
            "name": "Spoon-Knife",
            "full_name": "octocat/Spoon-Knife",
            "owner": {
              "login": "octocat",
              "id": 583231,
              "node_id": "MDQ6VXNlcjU4MzIzMQ==",
              "avatar_url": "https://avatars.githubusercontent.com/u/583231?v=3",
              "gravatar_id": "",
              "url": "https://api.github.com/users/octocat",
              "html_url": "https://github.com/octocat",
              "followers_url": "https://api.github.com/users/octocat/followers",
              "following_url": "https://api.github.com/users/octocat/following{/other_user}",
              "gists_url": "https://api.github.com/users/octocat/gists{/gist_id}",
              "starred_url": "https://api.github.com/users/octocat/starred{/owner}{/repo}",
              "subscriptions_url": "https://api.github.com/users/octocat/subscriptions",
              "organizations_url": "https://api.github.com/users/octocat/orgs",
              "repos_url": "https://api.github.com/users/octocat/repos",
              "events_url": "https://api.github.com/users/octocat/events{/privacy}",
              "received_events_url": "https://api.github.com/users/octocat/received_events",
              "type": "User",
              "site_admin": false
            },
            "private": false,
            "html_url": "https://github.com/octocat/Spoon-Knife",
            "description": "This repo is for demonstration purposes only.",
            "fork": false,
            "url": "https://api.github.com/repos/octocat/Spoon-Knife",
            "forks_url": "https://api.github.com/repos/octocat/Spoon-Knife/forks",
            "keys_url": "https://api.github.com/repos/octocat/Spoon-Knife/keys{/key_id}",
            "collaborators_url": "https://api.github.com/repos/octocat/Spoon-Knife/collaborators{/collaborator}",
            "teams_url": "https://api.github.com/repos/octocat/Spoon-Knife/teams",
            "hooks_url": "https://api.github.com/repos/octocat/Spoon-Knife/hooks",
            "issue_events_url": "https://api.github.com/repos/octocat/Spoon-Knife/issues/events{/number}",
            "events_url": "https://api.github.com/repos/octocat/Spoon-Knife/events",
            "assignees_url": "https://api.github.com/repos/octocat/Spoon-Knife/assignees{/user}",
            "branches_url": "https://api.github.com/repos/octocat/Spoon-Knife/branches{/branch}",
            "tags_url": "https://api.github.com/repos/octocat/Spoon-Knife/tags",
            "blobs_url": "https://api.github.com/repos/octocat/Spoon-Knife/git/blobs{/sha}",
            "git_tags_url": "https://api.github.com/repos/octocat/Spoon-Knife/git/tags{/sha}",
            "git_refs_url": "https://api.github.com/repos/octocat/Spoon-Knife/git/refs{/sha}",
            "trees_url": "https://api.github.com/repos/octocat/Spoon-Knife/git/trees{/sha}",
            "statuses_url": "https://api.github.com/repos/octocat/Spoon-Knife/statuses/{sha}",
            "languages_url": "https://api.github.com/repos/octocat/Spoon-Knife/languages",
            "stargazers_url": "https://api.github.com/repos/octocat/Spoon-Knife/stargazers",
            "contributors_url": "https://api.github.com/repos/octocat/Spoon-Knife/contributors",
            "subscribers_url": "https://api.github.com/repos/octocat/Spoon-Knife/subscribers",
            "subscription_url": "https://api.github.com/repos/octocat/Spoon-Knife/subscription",
            "commits_url": "https://api.github.com/repos/octocat/Spoon-Knife/commits{/sha}",
            "git_commits_url": "https://api.github.com/repos/octocat/Spoon-Knife/git/commits{/sha}",
            "comments_url": "https://api.github.com/repos/octocat/Spoon-Knife/comments{/number}",
            "issue_comment_url": "https://api.github.com/repos/octocat/Spoon-Knife/issues/comments{/number}",
            "contents_url": "https://api.github.com/repos/octocat/Spoon-Knife/contents/{+path}",
            "compare_url": "https://api.github.com/repos/octocat/Spoon-Knife/compare/{base}...{head}",
            "merges_url": "https://api.github.com/repos/octocat/Spoon-Knife/merges",
            "archive_url": "https://api.github.com/repos/octocat/Spoon-Knife/{archive_format}{/ref}",
            "downloads_url": "https://api.github.com/repos/octocat/Spoon-Knife/downloads",
            "issues_url": "https://api.github.com/repos/octocat/Spoon-Knife/issues{/number}",
            "pulls_url": "https://api.github.com/repos/octocat/Spoon-Knife/pulls{/number}",
            "milestones_url": "https://api.github.com/repos/octocat/Spoon-Knife/milestones{/number}",
            "notifications_url": "https://api.github.com/repos/octocat/Spoon-Knife/notifications{?since,all,participating}",
            "labels_url": "https://api.github.com/repos/octocat/Spoon-Knife/labels{/name}",
            "releases_url": "https://api.github.com/repos/octocat/Spoon-Knife/releases{/id}",
            "deployments_url": "https://api.github.com/repos/octocat/Spoon-Knife/deployments"
          },
          "score": 1,
          "node_id": "MDQ6VXNlcjU4MzIzMQ=="
        }
      ]
    }

#### Not modified

    Status: 304 Not Modified

#### Preview header missing

    Status: 415 Unsupported Media Type

#### Notes

-   [Works with GitHub Apps](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en/developers/apps)

#### Preview notice

The Commit Search API is currently available for developers to preview. During the preview period, the APIs may change without advance notice. Please see the [blog post](https://developer.github.com/changes/2017-01-05-commit-search-api/) for full details.

To access the API you must provide a custom [media type](https://docs.github.com/rest/overview/media-types) in the `Accept` header:

    application/vnd.github.cloak-preview

☝️This header is **required**.

---

### [Search issues and pull requests](#search-issues-and-pull-requests)

Find issues by state and keyword. This method returns up to 100 results [per page](https://docs.github.com/rest/overview/resources-in-the-rest-api#pagination).

When searching for issues, you can get text match metadata for the issue **title**, issue **body**, and issue **comment body** fields when you pass the `text-match` media type. For more details about how to receive highlighted search results, see [Text match metadata](https://docs.github.com/rest/reference/search#text-match-metadata).

For example, if you want to find the oldest unresolved Python bugs on Windows. Your query might look something like this.

`q=windows+label:bug+language:python+state:open&sort=created&order=asc`

This query searches for the keyword `windows`, within any open issue that is labeled as `bug`. The search runs across repositories whose primary language is Python. The results are sorted by creation date in ascending order, which means the oldest issues appear first in the search results.

**Note:** For [user-to-server](https://docs.github.com/developers/apps/identifying-and-authorizing-users-for-github-apps#user-to-server-requests) GitHub App requests, you can't retrieve a combination of issues and pull requests in a single query. Requests that don't include the `is:issue` or `is:pull-request` qualifier will receive an HTTP `422 Unprocessable Entity` response. To get results for both issues and pull requests, you must send separate queries for issues and pull requests. For more information about the `is` qualifier, see "[Searching only issues or pull requests](https://docs.github.com/github/searching-for-information-on-github/searching-issues-and-pull-requests#search-only-issues-or-pull-requests)."

    get /search/issues

#### [Parameters](#search-issues-and-pull-requests--parameters)

| Name     | Type   | In     | Description |
| -------- | ------ | ------ | ----------- |
| `accept` | string | header |

Setting to `application/vnd.github.v3+json` is recommended.

|
| `q` | string | query |

The query contains one or more search keywords and qualifiers. Qualifiers allow you to limit your search to specific areas of GitHub. The REST API supports the same qualifiers as GitHub.com. To learn more about the format of the query, see [Constructing a search query](https://docs.github.com/rest/reference/search#constructing-a-search-query). See "[Searching issues and pull requests](https://help.github.com/articles/searching-issues-and-pull-requests/)" for a detailed list of qualifiers.

|
| `sort` | string | query |

Sorts the results of your query by the number of `comments`, `reactions`, `reactions-+1`, `reactions--1`, `reactions-smile`, `reactions-thinking_face`, `reactions-heart`, `reactions-tada`, or `interactions`. You can also sort results by how recently the items were `created` or `updated`, Default: [best match](https://docs.github.com/rest/reference/search#ranking-search-results)

|
| `order` | string | query |

Determines whether the first search result returned is the highest number of matches (`desc`) or lowest number of matches (`asc`). This parameter is ignored unless you provide `sort`.

Default: `desc` |
| `per_page` | integer | query |

Results per page (max 100)

Default: `30` |
| `page` | integer | query |

Page number of the results to fetch.

Default: `1` |

#### [Code samples](#search-issues-and-pull-requests--code-samples)

##### Shell

    curl \
      -H "Accept: application/vnd.github.v3+json" \
      https://api.github.com/search/issues

##### JavaScript ([@octokit/core.js](https://github.com/octokit/core.js#readme))

    await octokit.request('GET /search/issues', {
      q: 'q'
    })

#### Response

    Status: 200 OK

    {
      "total_count": 280,
      "incomplete_results": false,
      "items": [
        {
          "url": "https://api.github.com/repos/batterseapower/pinyin-toolkit/issues/132",
          "repository_url": "https://api.github.com/repos/batterseapower/pinyin-toolkit",
          "labels_url": "https://api.github.com/repos/batterseapower/pinyin-toolkit/issues/132/labels{/name}",
          "comments_url": "https://api.github.com/repos/batterseapower/pinyin-toolkit/issues/132/comments",
          "events_url": "https://api.github.com/repos/batterseapower/pinyin-toolkit/issues/132/events",
          "html_url": "https://github.com/batterseapower/pinyin-toolkit/issues/132",
          "id": 35802,
          "node_id": "MDU6SXNzdWUzNTgwMg==",
          "number": 132,
          "title": "Line Number Indexes Beyond 20 Not Displayed",
          "user": {
            "login": "Nick3C",
            "id": 90254,
            "node_id": "MDQ6VXNlcjkwMjU0",
            "avatar_url": "https://secure.gravatar.com/avatar/934442aadfe3b2f4630510de416c5718?d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
            "gravatar_id": "",
            "url": "https://api.github.com/users/Nick3C",
            "html_url": "https://github.com/Nick3C",
            "followers_url": "https://api.github.com/users/Nick3C/followers",
            "following_url": "https://api.github.com/users/Nick3C/following{/other_user}",
            "gists_url": "https://api.github.com/users/Nick3C/gists{/gist_id}",
            "starred_url": "https://api.github.com/users/Nick3C/starred{/owner}{/repo}",
            "subscriptions_url": "https://api.github.com/users/Nick3C/subscriptions",
            "organizations_url": "https://api.github.com/users/Nick3C/orgs",
            "repos_url": "https://api.github.com/users/Nick3C/repos",
            "events_url": "https://api.github.com/users/Nick3C/events{/privacy}",
            "received_events_url": "https://api.github.com/users/Nick3C/received_events",
            "type": "User",
            "site_admin": true
          },
          "labels": [
            {
              "id": 4,
              "node_id": "MDU6TGFiZWw0",
              "url": "https://api.github.com/repos/batterseapower/pinyin-toolkit/labels/bug",
              "name": "bug",
              "color": "ff0000"
            }
          ],
          "state": "open",
          "assignee": null,
          "milestone": {
            "url": "https://api.github.com/repos/octocat/Hello-World/milestones/1",
            "html_url": "https://github.com/octocat/Hello-World/milestones/v1.0",
            "labels_url": "https://api.github.com/repos/octocat/Hello-World/milestones/1/labels",
            "id": 1002604,
            "node_id": "MDk6TWlsZXN0b25lMTAwMjYwNA==",
            "number": 1,
            "state": "open",
            "title": "v1.0",
            "description": "Tracking milestone for version 1.0",
            "creator": {
              "login": "octocat",
              "id": 1,
              "node_id": "MDQ6VXNlcjE=",
              "avatar_url": "https://github.com/images/error/octocat_happy.gif",
              "gravatar_id": "",
              "url": "https://api.github.com/users/octocat",
              "html_url": "https://github.com/octocat",
              "followers_url": "https://api.github.com/users/octocat/followers",
              "following_url": "https://api.github.com/users/octocat/following{/other_user}",
              "gists_url": "https://api.github.com/users/octocat/gists{/gist_id}",
              "starred_url": "https://api.github.com/users/octocat/starred{/owner}{/repo}",
              "subscriptions_url": "https://api.github.com/users/octocat/subscriptions",
              "organizations_url": "https://api.github.com/users/octocat/orgs",
              "repos_url": "https://api.github.com/users/octocat/repos",
              "events_url": "https://api.github.com/users/octocat/events{/privacy}",
              "received_events_url": "https://api.github.com/users/octocat/received_events",
              "type": "User",
              "site_admin": false
            },
            "open_issues": 4,
            "closed_issues": 8,
            "created_at": "2011-04-10T20:09:31Z",
            "updated_at": "2014-03-03T18:58:10Z",
            "closed_at": "2013-02-12T13:22:01Z",
            "due_on": "2012-10-09T23:39:01Z"
          },
          "comments": 15,
          "created_at": "2009-07-12T20:10:41Z",
          "updated_at": "2009-07-19T09:23:43Z",
          "closed_at": null,
          "pull_request": {
            "url": "https://api/github.com/repos/octocat/Hello-World/pull/1347",
            "html_url": "https://github.com/octocat/Hello-World/pull/1347",
            "diff_url": "https://github.com/octocat/Hello-World/pull/1347.diff",
            "patch_url": "https://api.github.com/repos/octocat/Hello-World/pulls/1347"
          },
          "body": "...",
          "score": 1,
          "locked": true,
          "author_association": "COLLABORATOR"
        }
      ]
    }

#### Not modified

    Status: 304 Not Modified

#### Forbidden

    Status: 403 Forbidden

#### Validation failed

    Status: 422 Unprocessable Entity

#### Service unavailable

    Status: 503 Service Unavailable

#### Notes

-   [Works with GitHub Apps](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en/developers/apps)

---

### [Search labels](#search-labels)

Find labels in a repository with names or descriptions that match search keywords. Returns up to 100 results [per page](https://docs.github.com/rest/overview/resources-in-the-rest-api#pagination).

When searching for labels, you can get text match metadata for the label **name** and **description** fields when you pass the `text-match` media type. For more details about how to receive highlighted search results, see [Text match metadata](https://docs.github.com/rest/reference/search#text-match-metadata).

For example, if you want to find labels in the `linguist` repository that match `bug`, `defect`, or `enhancement`. Your query might look like this:

`q=bug+defect+enhancement&repository_id=64778136`

The labels that best match the query appear first in the search results.

    get /search/labels

#### [Parameters](#search-labels--parameters)

| Name     | Type   | In     | Description |
| -------- | ------ | ------ | ----------- |
| `accept` | string | header |

Setting to `application/vnd.github.v3+json` is recommended.

|
| `repository_id` | integer | query |

The id of the repository.

|
| `q` | string | query |

The search keywords. This endpoint does not accept qualifiers in the query. To learn more about the format of the query, see [Constructing a search query](https://docs.github.com/rest/reference/search#constructing-a-search-query).

|
| `sort` | string | query |

Sorts the results of your query by when the label was `created` or `updated`. Default: [best match](https://docs.github.com/rest/reference/search#ranking-search-results)

|
| `order` | string | query |

Determines whether the first search result returned is the highest number of matches (`desc`) or lowest number of matches (`asc`). This parameter is ignored unless you provide `sort`.

Default: `desc` |
| `per_page` | integer | query |

Results per page (max 100)

Default: `30` |
| `page` | integer | query |

Page number of the results to fetch.

Default: `1` |

#### [Code samples](#search-labels--code-samples)

##### Shell

    curl \
      -H "Accept: application/vnd.github.v3+json" \
      https://api.github.com/search/labels

##### JavaScript ([@octokit/core.js](https://github.com/octokit/core.js#readme))

    await octokit.request('GET /search/labels', {
      repository_id: 42,
      q: 'q'
    })

#### Response

    Status: 200 OK

    {
      "total_count": 2,
      "incomplete_results": false,
      "items": [
        {
          "id": 418327088,
          "node_id": "MDU6TGFiZWw0MTgzMjcwODg=",
          "url": "https://api.github.com/repos/octocat/linguist/labels/enhancement",
          "name": "enhancement",
          "color": "84b6eb",
          "default": true,
          "description": "New feature or request.",
          "score": 1
        },
        {
          "id": 418327086,
          "node_id": "MDU6TGFiZWw0MTgzMjcwODY=",
          "url": "https://api.github.com/repos/octocat/linguist/labels/bug",
          "name": "bug",
          "color": "ee0701",
          "default": true,
          "description": "Something isn't working.",
          "score": 1
        }
      ]
    }

#### Not modified

    Status: 304 Not Modified

#### Forbidden

    Status: 403 Forbidden

#### Resource not found

    Status: 404 Not Found

#### Validation failed

    Status: 422 Unprocessable Entity

#### Notes

-   [Works with GitHub Apps](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en/developers/apps)

---

### [Search repositories](#search-repositories)

Find repositories via various criteria. This method returns up to 100 results [per page](https://docs.github.com/rest/overview/resources-in-the-rest-api#pagination).

When searching for repositories, you can get text match metadata for the **name** and **description** fields when you pass the `text-match` media type. For more details about how to receive highlighted search results, see [Text match metadata](https://docs.github.com/rest/reference/search#text-match-metadata).

For example, if you want to search for popular Tetris repositories written in assembly code, your query might look like this:

`q=tetris+language:assembly&sort=stars&order=desc`

This query searches for repositories with the word `tetris` in the name, the description, or the README. The results are limited to repositories where the primary language is assembly. The results are sorted by stars in descending order, so that the most popular repositories appear first in the search results.

When you include the `mercy` preview header, you can also search for multiple topics by adding more `topic:` instances. For example, your query might look like this:

`q=topic:ruby+topic:rails`

    get /search/repositories

#### [Parameters](#search-repositories--parameters)

| Name     | Type   | In     | Description |
| -------- | ------ | ------ | ----------- |
| `accept` | string | header |

Setting to `application/vnd.github.v3+json` is recommended.[See preview notice](#search-repositories-preview-notices)

|
| `q` | string | query |

The query contains one or more search keywords and qualifiers. Qualifiers allow you to limit your search to specific areas of GitHub. The REST API supports the same qualifiers as GitHub.com. To learn more about the format of the query, see [Constructing a search query](https://docs.github.com/rest/reference/search#constructing-a-search-query). See "[Searching for repositories](https://help.github.com/articles/searching-for-repositories/)" for a detailed list of qualifiers.

|
| `sort` | string | query |

Sorts the results of your query by number of `stars`, `forks`, or `help-wanted-issues` or how recently the items were `updated`. Default: [best match](https://docs.github.com/rest/reference/search#ranking-search-results)

|
| `order` | string | query |

Determines whether the first search result returned is the highest number of matches (`desc`) or lowest number of matches (`asc`). This parameter is ignored unless you provide `sort`.

Default: `desc` |
| `per_page` | integer | query |

Results per page (max 100)

Default: `30` |
| `page` | integer | query |

Page number of the results to fetch.

Default: `1` |

#### [Code samples](#search-repositories--code-samples)

##### Shell

    curl \
      -H "Accept: application/vnd.github.v3+json" \
      https://api.github.com/search/repositories

##### JavaScript ([@octokit/core.js](https://github.com/octokit/core.js#readme))

    await octokit.request('GET /search/repositories', {
      q: 'q'
    })

#### Response

    Status: 200 OK

    {
      "total_count": 40,
      "incomplete_results": false,
      "items": [
        {
          "id": 3081286,
          "node_id": "MDEwOlJlcG9zaXRvcnkzMDgxMjg2",
          "name": "Tetris",
          "full_name": "dtrupenn/Tetris",
          "owner": {
            "login": "dtrupenn",
            "id": 872147,
            "node_id": "MDQ6VXNlcjg3MjE0Nw==",
            "avatar_url": "https://secure.gravatar.com/avatar/e7956084e75f239de85d3a31bc172ace?d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
            "gravatar_id": "",
            "url": "https://api.github.com/users/dtrupenn",
            "received_events_url": "https://api.github.com/users/dtrupenn/received_events",
            "type": "User",
            "html_url": "https://github.com/octocat",
            "followers_url": "https://api.github.com/users/octocat/followers",
            "following_url": "https://api.github.com/users/octocat/following{/other_user}",
            "gists_url": "https://api.github.com/users/octocat/gists{/gist_id}",
            "starred_url": "https://api.github.com/users/octocat/starred{/owner}{/repo}",
            "subscriptions_url": "https://api.github.com/users/octocat/subscriptions",
            "organizations_url": "https://api.github.com/users/octocat/orgs",
            "repos_url": "https://api.github.com/users/octocat/repos",
            "events_url": "https://api.github.com/users/octocat/events{/privacy}",
            "site_admin": true
          },
          "private": false,
          "html_url": "https://github.com/dtrupenn/Tetris",
          "description": "A C implementation of Tetris using Pennsim through LC4",
          "fork": false,
          "url": "https://api.github.com/repos/dtrupenn/Tetris",
          "created_at": "2012-01-01T00:31:50Z",
          "updated_at": "2013-01-05T17:58:47Z",
          "pushed_at": "2012-01-01T00:37:02Z",
          "homepage": "https://github.com",
          "size": 524,
          "stargazers_count": 1,
          "watchers_count": 1,
          "language": "Assembly",
          "forks_count": 0,
          "open_issues_count": 0,
          "master_branch": "master",
          "default_branch": "master",
          "score": 1,
          "archive_url": "https://api.github.com/repos/dtrupenn/Tetris/{archive_format}{/ref}",
          "assignees_url": "https://api.github.com/repos/dtrupenn/Tetris/assignees{/user}",
          "blobs_url": "https://api.github.com/repos/dtrupenn/Tetris/git/blobs{/sha}",
          "branches_url": "https://api.github.com/repos/dtrupenn/Tetris/branches{/branch}",
          "collaborators_url": "https://api.github.com/repos/dtrupenn/Tetris/collaborators{/collaborator}",
          "comments_url": "https://api.github.com/repos/dtrupenn/Tetris/comments{/number}",
          "commits_url": "https://api.github.com/repos/dtrupenn/Tetris/commits{/sha}",
          "compare_url": "https://api.github.com/repos/dtrupenn/Tetris/compare/{base}...{head}",
          "contents_url": "https://api.github.com/repos/dtrupenn/Tetris/contents/{+path}",
          "contributors_url": "https://api.github.com/repos/dtrupenn/Tetris/contributors",
          "deployments_url": "https://api.github.com/repos/dtrupenn/Tetris/deployments",
          "downloads_url": "https://api.github.com/repos/dtrupenn/Tetris/downloads",
          "events_url": "https://api.github.com/repos/dtrupenn/Tetris/events",
          "forks_url": "https://api.github.com/repos/dtrupenn/Tetris/forks",
          "git_commits_url": "https://api.github.com/repos/dtrupenn/Tetris/git/commits{/sha}",
          "git_refs_url": "https://api.github.com/repos/dtrupenn/Tetris/git/refs{/sha}",
          "git_tags_url": "https://api.github.com/repos/dtrupenn/Tetris/git/tags{/sha}",
          "git_url": "git:github.com/dtrupenn/Tetris.git",
          "issue_comment_url": "https://api.github.com/repos/dtrupenn/Tetris/issues/comments{/number}",
          "issue_events_url": "https://api.github.com/repos/dtrupenn/Tetris/issues/events{/number}",
          "issues_url": "https://api.github.com/repos/dtrupenn/Tetris/issues{/number}",
          "keys_url": "https://api.github.com/repos/dtrupenn/Tetris/keys{/key_id}",
          "labels_url": "https://api.github.com/repos/dtrupenn/Tetris/labels{/name}",
          "languages_url": "https://api.github.com/repos/dtrupenn/Tetris/languages",
          "merges_url": "https://api.github.com/repos/dtrupenn/Tetris/merges",
          "milestones_url": "https://api.github.com/repos/dtrupenn/Tetris/milestones{/number}",
          "notifications_url": "https://api.github.com/repos/dtrupenn/Tetris/notifications{?since,all,participating}",
          "pulls_url": "https://api.github.com/repos/dtrupenn/Tetris/pulls{/number}",
          "releases_url": "https://api.github.com/repos/dtrupenn/Tetris/releases{/id}",
          "ssh_url": "git@github.com:dtrupenn/Tetris.git",
          "stargazers_url": "https://api.github.com/repos/dtrupenn/Tetris/stargazers",
          "statuses_url": "https://api.github.com/repos/dtrupenn/Tetris/statuses/{sha}",
          "subscribers_url": "https://api.github.com/repos/dtrupenn/Tetris/subscribers",
          "subscription_url": "https://api.github.com/repos/dtrupenn/Tetris/subscription",
          "tags_url": "https://api.github.com/repos/dtrupenn/Tetris/tags",
          "teams_url": "https://api.github.com/repos/dtrupenn/Tetris/teams",
          "trees_url": "https://api.github.com/repos/dtrupenn/Tetris/git/trees{/sha}",
          "clone_url": "https://github.com/dtrupenn/Tetris.git",
          "mirror_url": "git:git.example.com/dtrupenn/Tetris",
          "hooks_url": "https://api.github.com/repos/dtrupenn/Tetris/hooks",
          "svn_url": "https://svn.github.com/dtrupenn/Tetris",
          "forks": 1,
          "open_issues": 1,
          "watchers": 1,
          "has_issues": true,
          "has_projects": true,
          "has_pages": true,
          "has_wiki": true,
          "has_downloads": true,
          "archived": true,
          "disabled": true,
          "license": {
            "key": "mit",
            "name": "MIT License",
            "url": "https://api.github.com/licenses/mit",
            "spdx_id": "MIT",
            "node_id": "MDc6TGljZW5zZW1pdA==",
            "html_url": "https://api.github.com/licenses/mit"
          }
        }
      ]
    }

#### Not modified

    Status: 304 Not Modified

#### Validation failed

    Status: 422 Unprocessable Entity

#### Service unavailable

    Status: 503 Service Unavailable

#### Notes

-   [Works with GitHub Apps](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en/developers/apps)

#### Preview notice

The `topics` property for repositories on GitHub is currently available for developers to preview. To view the `topics` property in calls that return repository results, you must provide a custom [media type](https://docs.github.com/rest/overview/media-types) in the `Accept` header:

    application/vnd.github.mercy-preview+json

---

### [Search topics](#search-topics)

Find topics via various criteria. Results are sorted by best match. This method returns up to 100 results [per page](https://docs.github.com/rest/overview/resources-in-the-rest-api#pagination). See "[Searching topics](https://help.github.com/articles/searching-topics/)" for a detailed list of qualifiers.

When searching for topics, you can get text match metadata for the topic's **short_description**, **description**, **name**, or **display_name** field when you pass the `text-match` media type. For more details about how to receive highlighted search results, see [Text match metadata](https://docs.github.com/rest/reference/search#text-match-metadata).

For example, if you want to search for topics related to Ruby that are featured on [https://github.com/topics](https://github.com/topics). Your query might look like this:

`q=ruby+is:featured`

This query searches for topics with the keyword `ruby` and limits the results to find only topics that are featured. The topics that are the best match for the query appear first in the search results.

    get /search/topics

#### [Parameters](#search-topics--parameters)

| Name     | Type   | In     | Description |
| -------- | ------ | ------ | ----------- |
| `accept` | string | header |

This API is under preview and subject to change.[See preview notice](#search-topics-preview-notices)

|
| `q` | string | query |

The query contains one or more search keywords and qualifiers. Qualifiers allow you to limit your search to specific areas of GitHub. The REST API supports the same qualifiers as GitHub.com. To learn more about the format of the query, see [Constructing a search query](https://docs.github.com/rest/reference/search#constructing-a-search-query).

|
| `per_page` | integer | query |

Results per page (max 100)

Default: `30` |
| `page` | integer | query |

Page number of the results to fetch.

Default: `1` |

#### [Code samples](#search-topics--code-samples)

##### Shell

    curl \
      -H "Accept: application/vnd.github.mercy-preview+json" \
      https://api.github.com/search/topics

##### JavaScript ([@octokit/core.js](https://github.com/octokit/core.js#readme))

    await octokit.request('GET /search/topics', {
      q: 'q',
      mediaType: {
        previews: [
          'mercy'
        ]
      }
    })

#### Response

    Status: 200 OK

    {
      "total_count": 6,
      "incomplete_results": false,
      "items": [
        {
          "name": "ruby",
          "display_name": "Ruby",
          "short_description": "Ruby is a scripting language designed for simplified object-oriented programming.",
          "description": "Ruby was developed by Yukihiro \"Matz\" Matsumoto in 1995 with the intent of having an easily readable programming language. It is integrated with the Rails framework to create dynamic web-applications. Ruby's syntax is similar to that of Perl and Python.",
          "created_by": "Yukihiro Matsumoto",
          "released": "December 21, 1995",
          "created_at": "2016-11-28T22:03:59Z",
          "updated_at": "2017-10-30T18:16:32Z",
          "featured": true,
          "curated": true,
          "score": 1
        },
        {
          "name": "rails",
          "display_name": "Rails",
          "short_description": "Ruby on Rails (Rails) is a web application framework written in Ruby.",
          "description": "Ruby on Rails (Rails) is a web application framework written in Ruby. It is meant to help simplify the building of complex websites.",
          "created_by": "David Heinemeier Hansson",
          "released": "December 13 2005",
          "created_at": "2016-12-09T17:03:50Z",
          "updated_at": "2017-10-30T16:20:19Z",
          "featured": true,
          "curated": true,
          "score": 1
        },
        {
          "name": "python",
          "display_name": "Python",
          "short_description": "Python is a dynamically typed programming language.",
          "description": "Python is a dynamically typed programming language designed by Guido Van Rossum. Much like the programming language Ruby, Python was designed to be easily read by programmers. Because of its large following and many libraries, Python can be implemented and used to do anything from webpages to scientific research.",
          "created_by": "Guido van Rossum",
          "released": "February 20, 1991",
          "created_at": "2016-12-07T00:07:02Z",
          "updated_at": "2017-10-27T22:45:43Z",
          "featured": true,
          "curated": true,
          "score": 1
        },
        {
          "name": "jekyll",
          "display_name": "Jekyll",
          "short_description": "Jekyll is a simple, blog-aware static site generator.",
          "description": "Jekyll is a blog-aware, site generator written in Ruby. It takes raw text files, runs it through a renderer and produces a publishable static website.",
          "created_by": "Tom Preston-Werner",
          "released": "2008",
          "created_at": "2016-12-16T21:53:08Z",
          "updated_at": "2017-10-27T19:00:24Z",
          "featured": true,
          "curated": true,
          "score": 1
        },
        {
          "name": "sass",
          "display_name": "Sass",
          "short_description": "Sass is a stable extension to classic CSS.",
          "description": "Sass is a stylesheet language with a main implementation in Ruby. It is an extension of CSS that makes improvements to the old stylesheet format, such as being able to declare variables and using a cleaner nesting syntax.",
          "created_by": "Hampton Catlin, Natalie Weizenbaum, Chris Eppstein",
          "released": "November 28, 2006",
          "created_at": "2016-12-16T21:53:45Z",
          "updated_at": "2018-01-16T16:30:40Z",
          "featured": true,
          "curated": true,
          "score": 1
        },
        {
          "name": "homebrew",
          "display_name": "Homebrew",
          "short_description": "Homebrew is a package manager for macOS.",
          "description": "Homebrew is a package manager for Apple's macOS operating system. It simplifies the installation of software and is popular in the Ruby on Rails community.",
          "created_by": "Max Howell",
          "released": "2009",
          "created_at": "2016-12-17T20:30:44Z",
          "updated_at": "2018-02-06T16:14:56Z",
          "featured": true,
          "curated": true,
          "score": 1
        }
      ]
    }

#### Not modified

    Status: 304 Not Modified

#### Preview header missing

    Status: 415 Unsupported Media Type

#### Notes

-   [Works with GitHub Apps](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en/developers/apps)

#### Preview notice

The `topics` property for repositories on GitHub is currently available for developers to preview. To view the `topics` property in calls that return repository results, you must provide a custom [media type](https://docs.github.com/rest/overview/media-types) in the `Accept` header:

    application/vnd.github.mercy-preview+json

☝️This header is **required**.

---

### [Search users](#search-users)

Find users via various criteria. This method returns up to 100 results [per page](https://docs.github.com/rest/overview/resources-in-the-rest-api#pagination).

When searching for users, you can get text match metadata for the issue **login**, **email**, and **name** fields when you pass the `text-match` media type. For more details about highlighting search results, see [Text match metadata](https://docs.github.com/rest/reference/search#text-match-metadata). For more details about how to receive highlighted search results, see [Text match metadata](https://docs.github.com/rest/reference/search#text-match-metadata).

For example, if you're looking for a list of popular users, you might try this query:

`q=tom+repos:%3E42+followers:%3E1000`

This query searches for users with the name `tom`. The results are restricted to users with more than 42 repositories and over 1,000 followers.

    get /search/users

#### [Parameters](#search-users--parameters)

| Name     | Type   | In     | Description |
| -------- | ------ | ------ | ----------- |
| `accept` | string | header |

Setting to `application/vnd.github.v3+json` is recommended.

|
| `q` | string | query |

The query contains one or more search keywords and qualifiers. Qualifiers allow you to limit your search to specific areas of GitHub. The REST API supports the same qualifiers as GitHub.com. To learn more about the format of the query, see [Constructing a search query](https://docs.github.com/rest/reference/search#constructing-a-search-query). See "[Searching users](https://help.github.com/articles/searching-users/)" for a detailed list of qualifiers.

|
| `sort` | string | query |

Sorts the results of your query by number of `followers` or `repositories`, or when the person `joined` GitHub. Default: [best match](https://docs.github.com/rest/reference/search#ranking-search-results)

|
| `order` | string | query |

Determines whether the first search result returned is the highest number of matches (`desc`) or lowest number of matches (`asc`). This parameter is ignored unless you provide `sort`.

Default: `desc` |
| `per_page` | integer | query |

Results per page (max 100)

Default: `30` |
| `page` | integer | query |

Page number of the results to fetch.

Default: `1` |

#### [Code samples](#search-users--code-samples)

##### Shell

    curl \
      -H "Accept: application/vnd.github.v3+json" \
      https://api.github.com/search/users

##### JavaScript ([@octokit/core.js](https://github.com/octokit/core.js#readme))

    await octokit.request('GET /search/users', {
      q: 'q'
    })

#### Response

    Status: 200 OK

    {
      "total_count": 12,
      "incomplete_results": false,
      "items": [
        {
          "login": "mojombo",
          "id": 1,
          "node_id": "MDQ6VXNlcjE=",
          "avatar_url": "https://secure.gravatar.com/avatar/25c7c18223fb42a4c6ae1c8db6f50f9b?d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
          "gravatar_id": "",
          "url": "https://api.github.com/users/mojombo",
          "html_url": "https://github.com/mojombo",
          "followers_url": "https://api.github.com/users/mojombo/followers",
          "subscriptions_url": "https://api.github.com/users/mojombo/subscriptions",
          "organizations_url": "https://api.github.com/users/mojombo/orgs",
          "repos_url": "https://api.github.com/users/mojombo/repos",
          "received_events_url": "https://api.github.com/users/mojombo/received_events",
          "type": "User",
          "score": 1,
          "following_url": "https://api.github.com/users/mojombo/following{/other_user}",
          "gists_url": "https://api.github.com/users/mojombo/gists{/gist_id}",
          "starred_url": "https://api.github.com/users/mojombo/starred{/owner}{/repo}",
          "events_url": "https://api.github.com/users/mojombo/events{/privacy}",
          "site_admin": true
        }
      ]
    }

#### Not modified

    Status: 304 Not Modified

#### Validation failed

    Status: 422 Unprocessable Entity

#### Service unavailable

    Status: 503 Service Unavailable

#### Notes

-   [Works with GitHub Apps](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en/developers/apps)

---

### [Text match metadata](#text-match-metadata)

On GitHub, you can use the context provided by code snippets and highlights in search results. The Search API offers additional metadata that allows you to highlight the matching search terms when displaying search results.

![code-snippet-highlighting](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/assets/images/text-match-search-api.png)

Requests can opt to receive those text fragments in the response, and every fragment is accompanied by numeric offsets identifying the exact location of each matching search term.

To get this metadata in your search results, specify the `text-match` media type in your `Accept` header.

    application/vnd.github.v3.text-match+json

When you provide the `text-match` media type, you will receive an extra key in the JSON payload called `text_matches` that provides information about the position of your search terms within the text and the `property` that includes the search term. Inside the `text_matches` array, each object includes the following attributes:

| Name          | Description                                                                                                                                                                                                                                                     |
| ------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `object_url`  | The URL for the resource that contains a string property matching one of the search terms.                                                                                                                                                                      |
| `object_type` | The name for the type of resource that exists at the given `object_url`.                                                                                                                                                                                        |
| `property`    | The name of a property of the resource that exists at `object_url`. That property is a string that matches one of the search terms. (In the JSON returned from `object_url`, the full content for the `fragment` will be found in the property with this name.) |
| `fragment`    | A subset of the value of `property`. This is the text fragment that matches one or more of the search terms.                                                                                                                                                    |
| `matches`     | An array of one or more search terms that are present in `fragment`. The indices (i.e., "offsets") are relative to the fragment. (They are not relative to the _full_ content of `property`.)                                                                   |

#### [Example](#example)

Using cURL, and the [example issue search](#search-issues-and-pull-requests) above, our API request would look like this:

    curl -H 'Accept: application/vnd.github.v3.text-match+json' \
    'https://api.github.com/search/issues?q=windows+label:bug+language:python+state:open&sort=created&order=asc'

The response will include a `text_matches` array for each search result. In the JSON below, we have two objects in the `text_matches` array.

The first text match occurred in the `body` property of the issue. We see a fragment of text from the issue body. The search term (`windows`) appears twice within that fragment, and we have the indices for each occurrence.

The second text match occurred in the `body` property of one of the issue's comments. We have the URL for the issue comment. And of course, we see a fragment of text from the comment body. The search term (`windows`) appears once within that fragment.

    {
      "text_matches": [
        {
          "object_url": "https://api.github.com/repositories/215335/issues/132",
          "object_type": "Issue",
          "property": "body",
          "fragment": "comprehensive windows font I know of).\n\nIf we can find a commonly distributed windows font that supports them then no problem (we can use html font tags) but otherwise the '(21)' style is probably better.\n",
          "matches": [
            {
              "text": "windows",
              "indices": [
                14,
                21
              ]
            },
            {
              "text": "windows",
              "indices": [
                78,
                85
              ]
            }
          ]
        },
        {
          "object_url": "https://api.github.com/repositories/215335/issues/comments/25688",
          "object_type": "IssueComment",
          "property": "body",
          "fragment": " right after that are a bit broken IMHO :). I suppose we could have some hack that maxes out at whatever the font does...\n\nI'll check what the state of play is on Windows.\n",
          "matches": [
            {
              "text": "Windows",
              "indices": [
                163,
                170
              ]
            }
          ]
        }
      ]
    }

[Source](https://docs.github.com/en/rest/reference/search)
