const axios = require('axios');

let config = {
    method: 'get',
    url: '{{host}}/v1/account',
    headers: {},
    timeout: 100
}; <<
<< << < HEAD
axios(config)
    .then(function(response) {
        console.log(JSON.stringify(response.data));
    })
    .catch(function(error) {
        console.log(error);
    }); ===
=== =

axios(config)
    .then(function(response) {
        console.log(JSON.stringify(response.data));
    })
    .catch(function(error) {
        console.log(error);
    }); >>>
>>> > 1 f628061e(formatting)