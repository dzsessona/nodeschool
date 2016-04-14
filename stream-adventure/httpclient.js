'use strict';
const request = require('request');

const port = 8099;
const toUrl = `http://localhost:${port}`;

process.stdin.pipe(request.post(toUrl)).pipe(process.stdout);