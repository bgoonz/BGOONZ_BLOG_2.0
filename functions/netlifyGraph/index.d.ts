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
};

export type WebhookEvent = {
    body: string;
    headers: Record<string, string | null | undefined>;
};

export type GraphQLError = {
    path: Array<string | number>;
    message: string;
    extensions: Record<string, unknown>;
};

export type GitHubIsRepositoryAForkInput = {
    /**
     * The login field of a user or organization
     */
    repoOwner: string;
    /**
     * The name of the repository
     */
    repoName: string;
};

export type GitHubIsRepositoryAFork = {
    /**
     * Any data from the function will be returned here
     */
    data: {
        gitHub?: {
            /**
             * Lookup a given repository by the owner and repository name.
             */
            repository?: {
                id: string;
                /**
                 * Identifies if the repository is a fork.
                 */
                isFork: boolean;
                /**
                 * The repository parent, if this is a fork.
                 */
                parent?: {
                    /**
                     * The repository's name with owner.
                     */
                    nameWithOwner: string;
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
 * Given a GitHub `$repoOwner`/`$repoName`, find if the corresponding repository is fork (`gitHub.repository.isFork`) - and if so, what the original repository is `gitHub.repository.parent.nameWithOwner`.
 */
export function fetchGitHubIsRepositoryAFork(variables: GitHubIsRepositoryAForkInput, options?: NetlifyGraphFunctionOptions): Promise<GitHubIsRepositoryAFork>;

export type ExampleQuery = {
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
 *
 */
export function fetchExampleQuery(
    /**
     * Pass `{}` as no variables are defined for this function.
     */
    variables: Record<string, never>,
    options?: NetlifyGraphFunctionOptions
): Promise<ExampleQuery>;

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
    }
): void;

export type ExampleSubscriptionEvent = {
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
 * Verify the ExampleSubscription event body is signed securely, and then parse the result.
 */
export function parseAndVerifyExampleSubscriptionEvent(/** A Netlify Handler Event */ event: WebhookEvent): null | ExampleSubscriptionEvent;

export type ExampleQuery = {
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
 * An empty query to start from
 */
export function fetchExampleQuery(
    /**
     * Pass `{}` as no variables are defined for this function.
     */
    variables: Record<string, never>,
    options?: NetlifyGraphFunctionOptions
): Promise<ExampleQuery>;

export interface Functions {
    /**
     * Given a GitHub `$repoOwner`/`$repoName`, find if the corresponding repository is fork (`gitHub.repository.isFork`) - and if so, what the original repository is `gitHub.repository.parent.nameWithOwner`.
     */
    fetchGitHubIsRepositoryAFork: typeof fetchGitHubIsRepositoryAFork;
    /**
     *
     */
    fetchExampleQuery: typeof fetchExampleQuery;
    /**
     * An empty subscription to start from
     */
    subscribeToExampleSubscription: subscribeToExampleSubscription;
    /**
     * Verify the event body is signed securely, and then parse the result.
     */
    parseAndVerifyExampleSubscriptionEvent: typeof parseAndVerifyExampleSubscriptionEvent;
    /**
     * An empty query to start from
     */
    fetchExampleQuery: typeof fetchExampleQuery;
}

export const functions: Functions;

export default functions;
