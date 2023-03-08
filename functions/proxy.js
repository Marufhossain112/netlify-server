const fetch = require('node-fetch');

exports.handler = async function (event, context) {
    const apiUrl = event.queryStringParameters.url;
    const response = await fetch(apiUrl);
    const data = await response.json();
    return {
        statusCode: 200,
        body: JSON.stringify(data),
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json'
        }
    };
};
