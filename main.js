/*global exports*/
const path = require('path'),
    os = require('os'),
    ApiBuilder = require('claudia-api-builder'),
    fs = require('./fs-promise'),
    api = new ApiBuilder();

let ipMap = {};

module.exports = api;

api.setBinaryMediaTypes(['*/*']);

api.get('/silence', (request) => {
    'use strict';
    ipMap[request.queryString.id] = request.context.sourceIp;
    return fs.readFilePromise(path.join(__dirname, 'silence250.mp3'));
}, {
    success: {
        contentType: 'audio/mpeg',
        contentHandling: 'CONVERT_TO_BINARY'
    }
});


api.get('/ip', (request) => {
    'use strict';
    return Promise.resolve(ipMap[request.queryString.id]);
}, {
    success: {
        contentType: 'text/plain'
    }
});

