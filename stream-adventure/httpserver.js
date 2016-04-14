'use strict';
const http = require('http');
const through = require('through2');

function tr(buff, encoding, next) {
	this.push(buff.toString().toUpperCase());next();
}

const server = http.createServer(function (req, res) {
  if (req.method === 'POST')
  	req.pipe(through(tr)).pipe(res);
  else
  	res.end('not a POST');
});

server.listen(parseInt(process.argv[2]));