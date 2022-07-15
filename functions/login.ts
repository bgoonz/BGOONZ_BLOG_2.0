import { generateLoginURL } from "@cloudflare/pages-plugin-cloudflare-access/api";

export const onRequest = () => {
  const loginURL = generateLoginURL({
    redirectURL: "https://example.com/greet",
    domain: "https://test.cloudflareaccess.com",
    aud: "4714c1358e65fe4b408ad6d432a5f878f08194bdb4752441fd56faefa9b2b6f2",
  });

  return new Response(null, {
    status: 302,
    headers: { Location: loginURL },
  });
};