'use strict';
const through = require('through2');

const transform = through(function (buff, encoding, next) {
	this.push(buff.toString().toUpperCase());
  next();
});

process.stdin.pipe(transform).pipe(process.stdout);
