/* eslint-disable */
// @ts-nocheck
// GENERATED VIA NETLIFY AUTOMATED DEV TOOLS, EDIT WITH CAUTION!
const buffer = require("buffer")
const crypto = require("crypto")
const https = require("https")
const process = require("process")

exports.verifySignature = (input) => {
  const secret = input.secret
  const body = input.body
  const signature = input.signature

  if (!signature) {
    console.error('Missing signature')
    return false
  }

  const sig = {}
  for (const pair of signature.split(',')) {
    const [key, value] = pair.split('=')
    sig[key] = value
  }

  if (!sig.t || !sig.hmac_sha256) {
    console.error('Invalid signature header')
    return false
  }

  const hash = crypto
    .createHmac('sha256', secret)
    .update(sig.t)
    .update('.')
    .update(body)
    .digest('hex')

  if (
    !crypto.timingSafeEqual(
      Buffer.from(hash, 'hex'),
      Buffer.from(sig.hmac_sha256, 'hex')
    )
  ) {
    console.error('Invalid signature')
    return false
  }

  if (parseInt(sig.t, 10) < Date.now() / 1000 - 300 /* 5 minutes */) {
    console.error('Request is too old')
    return false
  }

  return true
}

// Basic LRU cache implementation
const makeLRUCache = (max) => {
  return { max: max, cache: new Map() };
};

const getFromCache = (lru, key) => {
  const item = lru.cache.get(key);
  if (item) {
    lru.cache.delete(key);
    lru.cache.set(key, item);
  }
  return item;
};

const setInCache = (lru, key, value) => {
  if (lru.cache.has(key)) {
    lru.cache.delete(key);
  }
  if (lru.cache.size == lru.max) {
    lru.cache.delete(lru.first());
  }
  lru.cache.set(key, value);
};

// Cache the results of the Netlify Graph API for conditional requests
const cache = makeLRUCache(100);

const calculateCacheKey = (payload) => {
  return JSON.stringify(payload);
};

const httpFetch = (siteId, options) => {
      const reqBody = options.body || null
      const userHeaders = options.headers || {}
      const headers = {
        ...userHeaders,
        'Content-Type': 'application/json',
        'Content-Length': reqBody.length,
      }

      const timeoutMs = 30_000

      const reqOptions = {
        method: 'POST',
        headers: headers,
        timeout: timeoutMs,
      }

  const url = 'https://graph.netlify.com/graphql?app_id=' + siteId

  const respBody = []

  return new Promise((resolve, reject) => {
    const req = https.request(url, reqOptions, (res) => {
      if (res.statusCode && (res.statusCode < 200 || res.statusCode > 299)) {
        return reject(
          new Error(
            "Netlify Graph return non-OK HTTP status code" + res.statusCode,
          ),
        )
      }

      res.on('data', (chunk) => respBody.push(chunk))

      res.on('end', () => {
        const resString = buffer.Buffer.concat(respBody).toString()
        resolve(resString)
      })
    })

    req.on('error', (error) => {
      console.error('Error making request to Netlify Graph:', error)
    })

    req.on('timeout', () => {
      req.destroy()
      reject(new Error('Request to Netlify Graph timed out'))
    })

    req.write(reqBody)
    req.end()
  })
}



const fetchNetlifyGraph = function fetchNetlifyGraph(input) {
  const query = input.query;
  const docId = input.doc_id;
  const operationName = input.operationName;
  const variables = input.variables;

  const options = input.options || {};
  const accessToken = options.accessToken;
  const siteId = options.siteId || process.env.SITE_ID;

  const payload = {
    query: query,
    doc_id: docId,
    variables: variables,
    operationName: operationName,
  };

  let cachedOrLiveValue = new Promise((resolve) => {
  const cacheKey = calculateCacheKey(payload);

  // Check the cache for a previous result
  const cachedResultPair = getFromCache(cache, cacheKey);

  let conditionalHeaders = {
    'If-None-Match': ''
  };
  let cachedResultValue;

  if (cachedResultPair) {
    const [etag, previousResult] = cachedResultPair;
    conditionalHeaders = {
      'If-None-Match': etag
    };
    cachedResultValue = previousResult;
  }

  const response = httpFetch(siteId, {
    method: 'POST',
    headers: {
      ...conditionalHeaders,
      Authorization: accessToken ? 'Bearer ' + accessToken : '',
    },
    body: JSON.stringify(payload),
  });

  response.then((result) => {
    // Check response headers for a 304 Not Modified
    if (result.status === 304) {
      // Return the cached result
      resolve(cachedResultValue);
    }
    else if (result.status === 200) {
      // Update the cache with the new etag and result
      const etag = result.headers.get('etag');
      const resultJson = result.json();
      resultJson.then((json) => {
        if (etag) {
          // Make a note of the new etag for the given payload
          setInCache(cache, cacheKey, [etag, json])
        };
        resolve(json);
      });
    } else {
      return result.json().then((json) => {
        resolve(json);
      });
    }
  });
  });

  return cachedOrLiveValue
}


exports.verifyRequestSignature = (request, options) => {
  const event = request.event
  const secret = options.webhookSecret || process.env.NETLIFY_GRAPH_WEBHOOK_SECRET
  const signature = event.headers['x-netlify-graph-signature']
  const body = event.body

  if (!secret) {
    console.error(
      'NETLIFY_GRAPH_WEBHOOK_SECRET is not set, cannot verify incoming webhook request'
    )
    return false
  }

  return verifySignature({ secret, signature, body: body || '' })
}

exports.executeExampleMutation  = (
      variables,
      options
    ) => {
      return fetchNetlifyGraph({
        query: `mutation ExampleMutation {
  npm(userIds: {adroll: ""})
}`,
        operationName: "ExampleMutation",
        variables: variables,
        options: options,
        fetchStrategy: "POST",
      });
    }


exports.executeGitHubCreateBranchMutation  = (
      variables,
      options
    ) => {
      return fetchNetlifyGraph({
        query: `mutation GitHubCreateBranchMutation($repoOwner: String!, $repoName: String!, $branchName: String!) {
  gitHub {
    createBranch_oneGraph(
      input: {branchName: $branchName, repoName: $repoName, repoOwner: $repoOwner}
    ) {
      ref_: ref {
        name
        id
      }
    }
  }
}`,
        operationName: "GitHubCreateBranchMutation",
        variables: variables,
        options: options,
        fetchStrategy: "POST",
      });
    }


exports.fetchExampleQuery = (
      variables,
      options
    ) => {
      return fetchNetlifyGraph({
        query: `query ExampleQuery {
  me(
    auths: {brexAuth: "", airtableApiKey: "", clearbitAuth: "", crunchbaseUserKey: "", cloudflareUserAuth: {key: "", email: ""}, dribbbleOAuthToken: "", dropboxOAuthToken: "", facebookOAuthToken: "", firebaseOAuthToken: "", gitHubOAuthToken: "", gmailOAuthToken: "", googleCalendarOAuthToken: "", gongAuth: {basic: {accessKeySecret: "", accessKey: ""}, oauthToken: ""}, googleComputeOAuthToken: "", googleMapsKey: "", googleDocsOAuthToken: "", googleOAuthToken: "", intercomOAuthToken: "", hubspotOAuthToken: "", googleSearchConsoleOAuthToken: "", zendeskAPITokenAuth: {token: "", email: "", subdomain: ""}, zeitOAuthToken: "", youtubeOAuthToken: "", wordpressBearerToken: "", upsAPIAuth: {accessToken: "", password: "", username: ""}, stripeOAuthToken: "", spotifyOAuthToken: "", slackOAuthToken: "", productHuntOAuthToken: "", openCollective: {apiKey: ""}, onegraphToken: "", graphCmsToken: "", googleTranslateOAuthToken: ""}
  ) {
    github {
      bio
      bioHTML
      company
      companyHTML
      createdAt
      email
      hasSponsorsListing
      isBountyHunter
      login
      name
      oneGraphId
      organizationVerifiedDomainEmails(login: "")
      url
      websiteUrl
    }
  }
  emailNode(email: "") {
    salesforceContact {
      assistantName
      accountId
    }
  }
  npm
  oneGraphNode(oneGraphId: "") {
    oneGraphId
    oneGraphLinkedNodes {
      nodes {
        oneGraphId
        ... on ApolloSequence {
          id
          name
        }
        ... on ApolloAccount {
          id
          name
        }
        ... on ApolloContact {
          id
          email
          lastName
        }
        ... on ApolloPerson {
          id
          email
          accountId
          city
          country
          emailStatus
        }
      }
    }
  }
  gitHub(
    auths: {airtableApiKey: "", clearbitAuth: "", crunchbaseUserKey: "", dribbbleOAuthToken: "", facebookOAuthToken: "", gitHubOAuthToken: "", gmailOAuthToken: "", gongAuth: {oauthToken: ""}, logdnaServiceAuth: {serviceKey: ""}, mixpanelApiSecret: "", productHuntOAuthToken: ""}
  ) {
    makeRestCall {
      get(path: "", accept: "", allowUnauthenticated: false, query: "") {
        jsonBody
        response {
          headers
          httpVersion
          rawBody(as: PLAIN)
          statusCode
        }
      }
    }
    search(query: "", type: ISSUE) {
      edges {
        node
      }
    }
    resource(url: "")
    repositoryOwner(login: "") {
      id
    }
    repository(name: "", owner: "") {
      autoMergeAllowed
      branchProtectionRules(after: "", before: "", first: 10, last: 10) {
        totalCount
        edges {
          cursor
          node {
            allowsDeletions
            allowsForcePushes
            creator {
              avatarUrl(size: 10)
              login
              resourcePath
              url
              ... on GitHubUser {
                id
                email
                bioHTML
                commitComments(after: "", before: "", last: 10) {
                  edges {
                    cursor
                  }
                }
                company
                companyHTML
                createdAt
                databaseId
                followers(after: "", last: 10, first: 10, before: "") {
                  totalCount
                  edges {
                    cursor
                  }
                }
                login
                issues {
                  edges {
                    node {
                      id
                    }
                  }
                }
              }
              ... on GitHubBot {
                id
                avatarUrl
                login
                oneGraphId
              }
            }
          }
        }
      }
    }
  }
}`,
        operationName: "ExampleQuery",
        variables: variables,
        options: options,
        fetchStrategy: "POST",
      });
    }


exports.executeGitHubUpsertFileMutation  = (
      variables,
      options
    ) => {
      return fetchNetlifyGraph({
        query: `mutation GitHubUpsertFileMutation($owner: String!, $name: String!, $branch: String!, $path: String!, $message: String!, $content: String!, $sha: String!) {
  gitHub {
    createOrUpdateFileContent: createOrUpdateFileContent_oneGraph(
      input: {message: $message, path: $path, repoName: $name, repoOwner: $owner, branchName: $branch, plainContent: $content, existingFileSha: $sha}
    ) {
      commit {
        message
      }
    }
  }
}`,
        operationName: "GitHubUpsertFileMutation",
        variables: variables,
        options: options,
        fetchStrategy: "POST",
      });
    }


exports.executeExampleMutation  = (
      variables,
      options
    ) => {
      return fetchNetlifyGraph({
        query: `mutation ExampleMutation {
  __typename
}`,
        operationName: "ExampleMutation",
        variables: variables,
        options: options,
        fetchStrategy: "POST",
      });
    }


const subscribeToExampleSubscription = (
  variables,
  rawOptions
  ) => {
    const options = rawOptions || {};
    const netlifyGraphWebhookId = options.netlifyGraphWebhookId;
    const netlifyGraphWebhookUrl = options.webhookUrl || `${process.env.DEPLOY_URL}/.netlify/functions/ExampleSubscription?netlifyGraphWebhookId=${netlifyGraphWebhookId}`;
    const secret = options.webhookSecret || process.env.NETLIFY_GRAPH_WEBHOOK_SECRET
    const fullVariables = {...variables, netlifyGraphWebhookUrl: netlifyGraphWebhookUrl, netlifyGraphWebhookSecret: { hmacSha256Key: secret }}

    const subscriptionOperationDoc = `subscription ExampleSubscription($netlifyGraphWebhookUrl: String!, $netlifyGraphWebhookSecret: OneGraphSubscriptionSecretInput!) @netlify(id: """f288b991-1f62-494f-84de-73c7ca70fc77""", doc: """An empty subscription to start from""") {
  github(webhookUrl: $netlifyGraphWebhookUrl, secret: $netlifyGraphWebhookSecret) {
    deploymentEvent(input: {repoOwner: "", repoName: ""}) {
      deployment {
        state
        repository {
          commitComments {
            edges {
              node {
                id
              }
            }
          }
        }
        commit {
          changedFiles
          status {
            id
          }
          message
        }
      }
    }
    createEvent(input: {repoOwner: "", repoName: ""}) {
      sender {
        url
      }
    }
  }
}`;

    fetchNetlifyGraph({
      query: subscriptionOperationDoc,
      operationName: "ExampleSubscription",
      variables: fullVariables,
      options: options,
      fetchStrategy: "POST",
  })
}

const parseAndVerifyExampleSubscriptionEvent = (event, options) => {
  if (!verifyRequestSignature({ event: event }, options)) {
    console.warn("Unable to verify signature for ExampleSubscription")
    return null
  }

  return JSON.parse(event.body || '{}')
}

/**
 * The generated NetlifyGraph library with your operations
 */
const functions = {
  /**
  * An empty mutation to start from
  */
  executeExampleMutation : exports.executeExampleMutation ,
  /**
  * Create a branch name `$branchName` (from `master`) on the GitHub project `${repoOwner}/${repoName}`
  */
  executeGitHubCreateBranchMutation : exports.executeGitHubCreateBranchMutation ,
  /**
  * An example query to start with.
  */
  fetchExampleQuery: exports.fetchExampleQuery,
  /**
  * Create a single commit on the GitHub project `${repoOwner}/${repoName}` that "upserts" (creates a new file if it doesn'texist, or updates it if it does).
* 
* For example, to add a new file "/examples/MyExample.md" to the [OneGraph GraphQL Docs Repository](https://github.comnetlify/labs/tree/main/src/NetlifyGraph.md), the following variables would work:
* 
* ```javascript
* {
*   "repoOwner": "netlify",
*   "repoName": "labs",
*   "branchName": "main",
*   "path": "src/NetlifyGraph.md",
*   "message": "Your git commit message here",
*   "content": "The content of the file here",
*   "sha": null
* }
* ```
* 
* Note that if you're _updating_ a file, you'll need to provide its *current* `sha` for the mutation to succeed. See theGitHubGetFileShaAndContent example for how to find an existing file's sha.
  */
  executeGitHubUpsertFileMutation : exports.executeGitHubUpsertFileMutation ,
  /**
  * An empty mutation to start from
  */
  executeExampleMutation : exports.executeExampleMutation ,
  /**
  * An empty subscription to start from
  */
  subscribeToExampleSubscription:subscribeToExampleSubscription,
  /**
   * Verify the event body is signed securely, and then parse the result.
   */
  parseAndVerifyExampleSubscriptionEvent: parseAndVerifyExampleSubscriptionEvent
}

exports.default = functions

exports.handler = () => {
      // return a 401 json response
      return {
        statusCode: 401,
        body: JSON.stringify({
          message: 'Unauthorized',
        }),
      }
    }