import cloudflareAccessPlugin from "@cloudflare/pages-plugin-cloudflare-access";

export const onRequest: /* A type definition for the function that is passed to the `onRequest`
handler. */
PagesFunction = cloudflareAccessPlugin({
  domain: "https://test.cloudflareaccess.com",
  aud: "4714c1358e65fe4b408ad6d432a5f878f08194bdb4752441fd56faefa9b2b6f2",
});