'use strict';
const ws = require('websocket-stream');

const port = 8099;
const toUrl = `ws://localhost:${port}`;

const stream = ws(toUrl);
stream.write('hello\n');
stream.end();
