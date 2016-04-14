'use strict';
const combine = require('stream-combiner');
const split = require('split');
const through = require('through2');
const zlib = require('zlib');

function combined() {
  let thisone;
  let groupingStream = through(
    function write(chunk, encoding, next) {
      if (chunk.length === 0) return next();
      var line = JSON.parse(chunk);
      if (line.type === 'genre' && thisone) {
        this.push(JSON.stringify(thisone) + '\n');
        thisone = { name: line.name, books: [] };
      } else if (line.type === 'genre') {
        thisone = { name: line.name, books: [] };
      } else if (line.type === 'book') {
        thisone.books.push(line.name);
      }
      next();
    },
    function end(done){
      if (thisone) this.push(JSON.stringify(thisone) + '\n');
      done();
    }
  );
  //first is writable part last readable (first piped to second piped to third)
  return combine(split(), groupingStream, zlib.createGzip());
};

module.exports = combined;
