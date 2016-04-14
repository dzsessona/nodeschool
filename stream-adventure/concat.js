'use strict';
const concat = require('concat-stream');

function splitReverseJoin(src){
	let s = src.toString().split('').reverse().join('');
  console.log(s);
}

process.stdin.pipe(concat(splitReverseJoin));