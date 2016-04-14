'use strict';
const through = require('through2');
const trumpet = require('trumpet')();
trumpet.pipe(process.stdout);

const toUpperCase = through(function (buff, encoding, next) {
	this.push(buff.toString().toUpperCase()); next();
});

//the selector transform the match, and need to be feeded
//again into it otherwise it gets lost
const selector = trumpet.select('.loud').createStream();
selector.pipe(toUpperCase).pipe(selector);

process.stdin.pipe(trumpet);
