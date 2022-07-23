/* eslint-disable */
// @ts-nocheck
// GENERATED VIA NETLIFY AUTOMATED DEV TOOLS, EDIT WITH CAUTION!

export type NetlifyGraphFunctionOptions = {
  /**
   * The accessToken to use for the request
   */
  accessToken?: string;
  /**
   * The siteId to use for the request
   * @default process.env.SITE_ID
   */
  siteId?: string;
}

export type WebhookEvent = {
  body: string;
  headers: Record<string, string | null | undefined>;
};

export type GraphQLError = {
  "path": Array<string | number>;
  "message": string;
  "extensions": Record<string, unknown>;
};

/**
* An empty fragment to start from
*/
export type ExampleFragment = {
  /**
  * Fetches an object given its globally unique `oneGraphId`.
  */
oneGraphNode?: {
  /**
  * The id of the object.
  */
oneGraphId: string;
};
};


/**
* An empty fragment to start from
*/
export type ExampleFragment = {
  emailNode: /** No fields, named fragments, or inline fragments found */ Record<string, unknown>;
  gitHub?: {
  /**
  * Fetches an object given its ID.
  */
node?:  & {
  /**
  * ID of the object.
  */
id: string;
};
  /**
  * Return information about the GitHub instance
  */
meta: {
  /**
  * Returns a String that's a SHA of `github-services`
  */
gitHubServicesSha: string;
};
  /**
  * Lookup nodes by a list of IDs.
  */
nodes: Array< & {
  /**
  * ID of the object.
  */
id: string;
}>;
  /**
  * Lookup resource by a URL.
  */
resource?: ;
  /**
  * Lookup a repository owner (ie. either a User or an Organization) by login.
  */
repositoryOwner?: {
  id: string;
};
};
};



export type ExampleMutation = {
  /**
  * Any data from the function will be returned here
  */
data: {
  /**
  * The root for npm mutations
  */
npm: /** No fields, named fragments, or inline fragments found */ Record<string, unknown>;
};
  /**
  * Any errors from the function will be returned here
  */
errors?: Array<GraphQLError>;
};

/**
 * An empty mutation to start from
 */
export function executeExampleMutation (
  /**
  * Pass `{}` as no variables are defined for this function.
  */
  variables: Record<string, never>,
  options?: NetlifyGraphFunctionOptions
): Promise<ExampleMutation>;

export type GitHubCreateBranchMutationInput = {
  /**
 * The login field of a user or organization.
 */
 "repoOwner": string;  
 /**
 * The name of the repository.
 */
 "repoName": string;  
 /**
 * The name of the branch to create.
 */
 "branchName": string
};

export type GitHubCreateBranchMutation = {
  /**
  * Any data from the function will be returned here
  */
data: {
  gitHub?: {
  /**
  * Create a branch
  */
createBranch_oneGraph: {
  ref_: {
  /**
  * The ref name.
  */
name: string;
  id: string;
};
};
};
};
  /**
  * Any errors from the function will be returned here
  */
errors?: Array<GraphQLError>;
};

/**
 * Create a branch name `$branchName` (from `master`) on the GitHub project `${repoOwner}/${repoName}`
 */
export function executeGitHubCreateBranchMutation (
  variables: GitHubCreateBranchMutationInput,
  options?: NetlifyGraphFunctionOptions
): Promise<GitHubCreateBranchMutation>;


export type ExampleQuery = {
  /**
  * Any data from the function will be returned here
  */
data: {
  me: {
  github?: {
  /**
  * The user's public profile bio.
  */
bio?: string;
  /**
  * The user's public profile bio as HTML.
  */
bioHTML: unknown;
  /**
  * The user's public profile company.
  */
company?: string;
  /**
  * The user's public profile company as HTML.
  */
companyHTML: unknown;
  /**
  * Identifies the date and time when the object was created.
  */
createdAt: unknown;
  /**
  * The user's publicly visible profile email.
  */
email: string;
  /**
  * True if this user/organization has a GitHub Sponsors listing.
  */
hasSponsorsListing: boolean;
  /**
  * Whether or not this user is a participant in the GitHub Security Bug Bounty.
  */
isBountyHunter: boolean;
  /**
  * The username used to login.
  */
login: string;
  /**
  * The user's public profile name.
  */
name?: string;
  /**
  * Unique id across all of OneGraph
  */
oneGraphId: string;
  /**
  * Verified email addresses that match verified domains for a specified organization the user is a member of.
  */
organizationVerifiedDomainEmails: Array<string>;
  /**
  * The HTTP URL for this user
  */
url: string;
  /**
  * A URL pointing to the user's public website/blog.
  */
websiteUrl?: string;
};
};
  emailNode: {
  /**
  * Salesforce Contct.
  */
salesforceContact?: {
  /**
  * Assistant's Name
  */
assistantName?: string;
  /**
  * Account ID
  */
accountId?: string;
};
};
  /**
  * The root for npm queries
  */
npm: /** No fields, named fragments, or inline fragments found */ Record<string, unknown>;
  /**
  * Fetches an object given its globally unique `oneGraphId`.
  */
oneGraphNode?: {
  /**
  * The id of the object.
  */
oneGraphId: string;
  /**
  * List of OneGraphNodes that are linked from this node.
  */
oneGraphLinkedNodes: {
  /**
  * List of OneGraphNodes that are linked from this node.
  */
nodes: Array< & {
  /**
  * The id of the object.
  */
oneGraphId: string;
}>;
};
};
  gitHub?: {
  /**
  * Make a REST API call to the GitHub API.

OneGraph will inject the auth params for the API call.

Use this as an escape hatch if OneGraph does not yet support functionality of the underlying API.
  */
makeRestCall: {
  /**
  * Make a GET request to the GitHub API. Use this as an escape hatch if OneGraph does not yet support functionality of the underlying API.
  */
get: {
  /**
  * The json-encoded body of the HTTP response. If you need the raw body, use `response.rawBody`.
  */
jsonBody: unknown;
  /**
  * The full response of the API request, including headers and status code.
  */
response: {
  /**
  * The HTTP headers, as a list of key, value pairs.
  */
headers: Array<Array<string>>;
  /**
  * The HTTP version, usually 1.1
  */
httpVersion: string;
  /**
  * The body of the HTTP response, as a string.
  */
rawBody: string;
  /**
  * The HTTP status code of the response
  */
statusCode: number;
};
};
};
  /**
  * Perform a search across resources.
  */
search: {
  /**
  * A list of edges.
  */
edges?: Array</** No fields, named fragments, or inline fragments found */ Record<string, unknown>>;
};
  /**
  * Lookup a repository owner (ie. either a User or an Organization) by login.
  */
repositoryOwner?: {
  id: string;
};
  /**
  * Lookup a given repository by the owner and repository name.
  */
repository?: {
  /**
  * Whether or not Auto-merge can be enabled on pull requests in this repository.
  */
autoMergeAllowed: boolean;
  /**
  * A list of branch protection rules for this repository.
  */
branchProtectionRules: {
  /**
  * Identifies the total count of items in the connection.
  */
totalCount: number;
  /**
  * A list of edges.
  */
edges?: Array<{
  /**
  * A cursor for use in pagination.
  */
cursor: string;
  /**
  * The item at the end of the edge.
  */
node?: {
  /**
  * Can this branch be deleted.
  */
allowsDeletions: boolean;
  /**
  * Are force pushes allowed on this branch.
  */
allowsForcePushes: boolean;
  /**
  * The actor who created this branch protection rule.
  */
creator?:  & {
  /**
  * A URL pointing to the actor's public avatar.
  */
avatarUrl: string;
  /**
  * The username of the actor.
  */
login: string;
  /**
  * The HTTP path for this actor.
  */
resourcePath: string;
  /**
  * The HTTP URL for this actor.
  */
url: string;
};
};
}>;
};
};
};
};
  /**
  * Any errors from the function will be returned here
  */
errors?: Array<GraphQLError>;
};

/**
 * An example query to start with.
 */
export function fetchExampleQuery(
  /**
  * Pass `{}` as no variables are defined for this function.
  */
  variables: Record<string, never>,
  options?: NetlifyGraphFunctionOptions
): Promise<ExampleQuery>;

export type GitHubUpsertFileMutationInput = {
  /**
 * The login field of a user or organization.
 */
 "owner": string;  
 /**
 * The name of the repository.
 */
 "name": string;  
 /**
 * The name of the branch to update the file on, must already exist.
 */
 "branch": string;  
 /**
 * The path to the file to create or update (without a leading slash), e.g. `README.md`.
 */
 "path": string;  
 /**
 * The commit message to use when updating this file.
 */
 "message": string;  
 /**
 * The updated content in plain-text of the file. This argument cannot be used with `base64Content`.
 */
 "content": string;  
 /**
 * The sha of the file to be updated (if updating a file). If this doesn't match, the update mutation will be rejected to prevent updating the wrong version of the file.
 */
 "sha": string
};

export type GitHubUpsertFileMutation = {
  /**
  * Any data from the function will be returned here
  */
data: {
  gitHub?: {
  /**
  * Create a commit updating a single file
  */
createOrUpdateFileContent: {
  commit: {
  /**
  * The Git commit message
  */
message: string;
};
};
};
};
  /**
  * Any errors from the function will be returned here
  */
errors?: Array<GraphQLError>;
};

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
export function executeGitHubUpsertFileMutation (
  variables: GitHubUpsertFileMutationInput,
  options?: NetlifyGraphFunctionOptions
): Promise<GitHubUpsertFileMutation>;


export type ExampleMutation = {
  /**
  * Any data from the function will be returned here
  */
data: /** No fields, named fragments, or inline fragments found */ Record<string, unknown>;
  /**
  * Any errors from the function will be returned here
  */
errors?: Array<GraphQLError>;
};

/**
 * An empty mutation to start from
 */
export function executeExampleMutation (
  /**
  * Pass `{}` as no variables are defined for this function.
  */
  variables: Record<string, never>,
  options?: NetlifyGraphFunctionOptions
): Promise<ExampleMutation>;

/**
* An empty subscription to start from
*/
export function subscribeToExampleSubscription(
  /**
   * This will be available in your webhook handler as a query parameter.
   * Use this to keep track of which subscription you're receiving
   * events for.
   */
  variables: Record<string, never>,
  options?: {
    /**
     * The accessToken to use for the lifetime of the subscription.
     */
    accessToken?: string | null | undefined;
    /**
     * A string id that will be passed to your webhook handler as a query parameter
     * along with each event.
     * This can be used to keep track of which subscription you're receiving
     */
    netlifyGraphWebhookId?: string | null | undefined;
    /**
     * The absolute URL of your webhook handler to handle events from this subscription.
     */
    webhookUrl?: string | null | undefined;
    /**
     * The secret to use when signing the webhook request. Use this to verify
     * that the webhook payload is coming from Netlify Graph. Defaults to the
     * value of the NETLIFY_GRAPH_WEBHOOK_SECRET environment variable.
     */
    webhookSecret?: string | null | undefined;
  }) : void

export type ExampleSubscriptionEvent = {
  /**
  * Any data from the function will be returned here
  */
data: {
  github: {
  /**
  * Subscribe to new deployments.
  */
deploymentEvent: {
  /**
  * The deployment.
  */
deployment?: {
  /**
  * The current state of the deployment.
  */
state?: "ABANDONED" | "ACTIVE" | "DESTROYED" | "ERROR" | "FAILURE" | "INACTIVE" | "PENDING" | "QUEUED" | "IN_PROGRESS" | "WAITING";
  /**
  * Identifies the repository associated with the deployment.
  */
repository: {
  /**
  * A list of commit comments associated with the repository.
  */
commitComments: {
  /**
  * A list of edges.
  */
edges?: Array<{
  /**
  * The item at the end of the edge.
  */
node?: {
  id: string;
};
}>;
};
};
  /**
  * Identifies the commit sha of the deployment.
  */
commit?: {
  /**
  * The number of changed files in this commit.
  */
changedFiles: number;
  /**
  * Status information for this commit
  */
status?: {
  id: string;
};
  /**
  * The Git commit message
  */
message: string;
};
};
};
  /**
  * Subscribe to new branches or tags on a repository.

Note: You will not receive a payload for this event when you push more than three tags at once.

  */
createEvent: {
  /**
  * The actor that triggered the event.
  */
sender?: {
  /**
  * The HTTP URL for this actor.
  */
url: string;
};
};
};
};
  /**
  * Any errors from the function will be returned here
  */
errors?: Array<GraphQLError>;
}

/**
 * Verify the ExampleSubscription event body is signed securely, and then parse the result.
 */
export function parseAndVerifyExampleSubscriptionEvent (/** A Netlify Handler Event */ event : WebhookEvent) : null | ExampleSubscriptionEvent


export interface Functions {
  /**
* An empty mutation to start from
*/
executeExampleMutation : typeof executeExampleMutation ,
  /**
* Create a branch name `$branchName` (from `master`) on the GitHub project `${repoOwner}/${repoName}`
*/
executeGitHubCreateBranchMutation : typeof executeGitHubCreateBranchMutation ,
  /**
* An example query to start with.
*/
fetchExampleQuery: typeof fetchExampleQuery,
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
executeGitHubUpsertFileMutation : typeof executeGitHubUpsertFileMutation ,
  /**
* An empty mutation to start from
*/
executeExampleMutation : typeof executeExampleMutation ,
  /**
* An empty subscription to start from
*/
subscribeToExampleSubscription:subscribeToExampleSubscription,
/**
 * Verify the event body is signed securely, and then parse the result.
 */
parseAndVerifyExampleSubscriptionEvent: typeof parseAndVerifyExampleSubscriptionEvent
}

export const functions: Functions;

export default functions;
