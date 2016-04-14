'use strict';
const crypto = require('crypto');
const tar = require('tar');
const zlib = require('zlib');
const concat = require('concat-stream');

//crypto can be used both for the decifer and to create md5
const decipherStream = crypto.createDecipher(process.argv[2], process.argv[3]);

//hashify as requested each file
const parseEachFileStream = tar.Parse();
function hashifyEntry(entry){
  if(entry.type === 'File'){
    let md5er = crypto.createHash('md5', { encoding: 'hex' });
    entry.pipe(md5er).pipe(concat(function(hash){
      console.log(hash + ' ' + entry.path);
    }));
  }
};
parseEachFileStream.on('entry', hashifyEntry);

process.stdin.pipe(decipherStream).pipe(zlib.createGunzip()).pipe(parseEachFileStream);
