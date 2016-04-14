'use strict';
const crypto = require('crypto');

const data = 'aes256';
const pass = process.argv[2];
const decyferingStream = crypto.createDecipher(data, pass);

process.stdin.pipe(decyferingStream).pipe(process.stdout);
