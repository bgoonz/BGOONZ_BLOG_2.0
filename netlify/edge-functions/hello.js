/* A JavaScript function that returns a response object. */
export default async Request => new Response("Hello, World!", {
  headers: { "content-type": "text/html" },
});
