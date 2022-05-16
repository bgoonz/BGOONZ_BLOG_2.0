const NetlifyGraph = require('./netlifyGraph');

exports.handler = async (event) => {
    // By default, all API calls use no authentication
    let accessToken;

    //// If you want to use the client's accessToken when making API calls on the user's behalf:
    // accessToken = event.headers["authorization"]?.split(" ")[1]

    //// If you want to use the API with your own access token:
    // accessToken = event.authlifyToken

    const eventBodyJson = JSON.parse(event.body || '{}');

    const { errors: ExampleQueryErrors, data: ExampleQueryData } = await NetlifyGraph.fetchExampleQuery({}, { accessToken: accessToken });

    if (ExampleQueryErrors) {
        console.error(JSON.stringify(ExampleQueryErrors, null, 2));
    }

    console.log(JSON.stringify(ExampleQueryData, null, 2));

    return {
        statusCode: 200,
        body: JSON.stringify({
            success: true,
            ExampleQueryErrors: ExampleQueryErrors,
            ExampleQueryData: ExampleQueryData
        }),
        headers: {
            'content-type': 'application/json'
        }
    };
};

/**
 * Client-side invocations:
 * Call your Netlify function from the browser (after saving
 * the code to `ExampleQuery.js`) with these helpers:
 */

/**
async function fetchExampleQuery(params) {
  const {} = params || {};
  const resp = await fetch(`/.netlify/functions/ExampleQuery?`,
    {
      method: "GET"
    });

    const text = await resp.text();

    return JSON.parse(text);
}
*/
