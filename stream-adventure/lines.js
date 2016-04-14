'use strict';
const through = require('through2');
const split = require('split');

let lineCount = 0;
let transform = through(function (buff, encoding, next) {
    let upperedOrNot = lineCount % 2 === 0 ? buff.toString().toLowerCase() : buff.toString().toUpperCase();
    this.push(upperedOrNot + '\n');
    lineCount++;
    next();
});

process.stdin.pipe(split()).pipe(transform).pipe(process.stdout);