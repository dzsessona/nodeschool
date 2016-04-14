'use strict';
const through = require('through2');
const duplexer = require('duplexer2');

function duplexSteam (counter) {
  let counters = {};
  //both the following are closures on counts and counter
  let writableWithTransformation = through.obj(
    function write(chunk, encoding, callback) {
      counters[chunk.country] = (counters[chunk.country]) ? counters[chunk.country] + 1 : 1 ;
      callback();
    },
    function end(done){
      counter.setCounts(counters);done();
    });
  return duplexer({objectMode: true}, writableWithTransformation, counter);
};

module.exports = duplexSteam;
