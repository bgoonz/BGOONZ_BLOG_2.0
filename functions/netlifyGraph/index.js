// GENERATED VIA NETLIFY AUTOMATED DEV TOOLS, EDIT WITH CAUTION!
const buffer = require('buffer');
const crypto = require('crypto');
const https = require('https');
const process = require('process');

exports.verifySignature = (input) => {
    const secret = input.secret;
    const body = input.body;
    const signature = input.signature;

    if (!signature) {
        console.error('Missing signature');
        return false;
    }

    const sig = {};
    for (const pair of signature.split(',')) {
        const [key, value] = pair.split('=');
        sig[key] = value;
    }

    if (!sig.t || !sig.hmac_sha256) {
        console.error('Invalid signature header');
        return false;
    }

    const hash = crypto.createHmac('sha256', secret).update(sig.t).update('.').update(body).digest('hex');

    if (!crypto.timingSafeEqual(Buffer.from(hash, 'hex'), Buffer.from(sig.hmac_sha256, 'hex'))) {
        console.error('Invalid signature');
        return false;
    }

    if (parseInt(sig.t, 10) < Date.now() / 1000 - 300 /* 5 minutes */) {
        console.error('Request is too old');
        return false;
    }

    return true;
};

const operationsDoc = `query ExampleQuery
@netlify(
    id: """
    9d091d59-0d10-400f-8417-f171e588dfc2
    """
    doc: """
    An example query to start with.
    """
) {
    me(
        auths: {
            brexAuth: ""
            airtableApiKey: ""
            clearbitAuth: ""
            crunchbaseUserKey: ""
            cloudflareUserAuth: { key: "", email: "" }
            dribbbleOAuthToken: ""
            dropboxOAuthToken: ""
            facebookOAuthToken: ""
            firebaseOAuthToken: ""
            gitHubOAuthToken: ""
            gmailOAuthToken: ""
            googleCalendarOAuthToken: ""
            gongAuth: { basic: { accessKeySecret: "", accessKey: "" }, oauthToken: "" }
            googleComputeOAuthToken: ""
            googleMapsKey: ""
            googleDocsOAuthToken: ""
            googleOAuthToken: ""
            intercomOAuthToken: ""
            hubspotOAuthToken: ""
            googleSearchConsoleOAuthToken: ""
            zendeskAPITokenAuth: { token: "", email: "", subdomain: "" }
            zeitOAuthToken: ""
            youtubeOAuthToken: ""
            wordpressBearerToken: ""
            upsAPIAuth: { accessToken: "", password: "", username: "" }
            stripeOAuthToken: ""
            spotifyOAuthToken: ""
            slackOAuthToken: ""
            productHuntOAuthToken: ""
            openCollective: { apiKey: "" }
            onegraphToken: ""
            graphCmsToken: ""
            googleTranslateOAuthToken: ""
        }
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
        auths: {
            airtableApiKey: ""
            clearbitAuth: ""
            crunchbaseUserKey: ""
            dribbbleOAuthToken: ""
            facebookOAuthToken: ""
            gitHubOAuthToken: ""
            gmailOAuthToken: ""
            gongAuth: { oauthToken: "" }
            logdnaServiceAuth: { serviceKey: "" }
            mixpanelApiSecret: ""
            productHuntOAuthToken: ""
        }
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
}
`;

const httpFetch = (siteId, options) => {
    const reqBody = options.body || null;
    const userHeaders = options.headers || {};
    const headers = {
        ...userHeaders,
        'Content-Type': 'application/json',
        'Content-Length': reqBody.length
    };

    const timeoutMs = 30_000;

    const reqOptions = {
        method: 'POST',
        headers: headers,
        timeout: timeoutMs
    };

    const url = 'https://serve.onegraph.com/graphql?app_id=' + siteId;

    const respBody = [];

    return new Promise((resolve, reject) => {
        const req = https.request(url, reqOptions, (res) => {
            if (res.statusCode && (res.statusCode < 200 || res.statusCode > 299)) {
                return reject(new Error('Netlify Graph return non-OK HTTP status code' + res.statusCode));
            }

            res.on('data', (chunk) => respBody.push(chunk));

            res.on('end', () => {
                const resString = buffer.Buffer.concat(respBody).toString();
                resolve(resString);
            });
        });

        req.on('error', (error) => {
            console.error('Error making request to Netlify Graph:', error);
        });

        req.on('timeout', () => {
            req.destroy();
            reject(new Error('Request to Netlify Graph timed out'));
        });

        req.write(reqBody);
        req.end();
    });
};

const fetchNetlifyGraph = async function fetchNetlifyGraph(input) {
    const query = input.query;
    const operationName = input.operationName;
    const variables = input.variables;

    const options = input.options || {};
    const accessToken = options.accessToken;
    const siteId = options.siteId || process.env.SITE_ID;

    const payload = {
        query: query,
        variables: variables,
        operationName: operationName
    };

    const result = await httpFetch(siteId, {
        method: 'POST',
        headers: {
            Authorization: accessToken ? 'Bearer ' + accessToken : ''
        },
        body: JSON.stringify(payload)
    });

    return JSON.parse(result);
};

exports.verifyRequestSignature = (request, options) => {
    const event = request.event;
    const secret = options.webhookSecret || process.env.NETLIFY_GRAPH_WEBHOOK_SECRET;
    const signature = event.headers['x-netlify-graph-signature'];
    const body = event.body;

    if (!secret) {
        console.error('NETLIFY_GRAPH_WEBHOOK_SECRET is not set, cannot verify incoming webhook request');
        return false;
    }

    return verifySignature({ secret, signature, body: body || '' });
};

exports.fetchExampleQuery = (variables, options) => {
    return fetchNetlifyGraph({
        query: operationsDoc,
        operationName: 'ExampleQuery',
        variables: variables,
        options: options || {}
    });
};

/**
 * The generated NetlifyGraph library with your operations
 */
const functions = {
    /**
     * An example query to start with.
     */
    fetchExampleQuery: exports.fetchExampleQuery
};

exports.default = functions;

exports.handler = () => {
    // return a 401 json response
    return {
        statusCode: 401,
        body: JSON.stringify({
            message: 'Unauthorized'
        })
    };
};
