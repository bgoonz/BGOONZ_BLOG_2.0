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

export type ExampleQuery = {
    /**
     * Any data from the function will be returned here
     */
    data: {
        me: {
            github: {
                /**
                 * The user's public profile bio.
                 */
                bio: string;
                /**
                 * The user's public profile bio as HTML.
                 */
                bioHTML: unknown;
                /**
                 * The user's public profile company.
                 */
                company: string;
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
                name: string;
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
                websiteUrl: string;
            };
        };
        emailNode: {
            /**
             * Salesforce Contct.
             */
            salesforceContact: {
                /**
                 * Assistant's Name
                 */
                assistantName: string;
                /**
                 * Account ID
                 */
                accountId: string;
            };
        };
        /**
         * The root for npm queries
         */
        npm: /** No fields, named fragments, or inline fragments found */ Record<string, unknown>;
        /**
         * Fetches an object given its globally unique `oneGraphId`.
         */
        oneGraphNode: {
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
                nodes: Array<
                    {
                        /**
                         * The id of the object.
                         */
                        oneGraphId: string;
                    }
                >;
            };
        };
        gitHub: {
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
            search: /** No fields, named fragments, or inline fragments found */ Record<string, unknown>;
            /**
             * Lookup a given repository by the owner and repository name.
             */
            repository: {
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
                    edges: Array<{
                        /**
                         * A cursor for use in pagination.
                         */
                        cursor: string;
                        /**
                         * The item at the end of the edge.
                         */
                        node: {
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
                            creator: {
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
    errors: Array<GraphQLError>;
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
