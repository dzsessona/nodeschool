'use strict';
const spawn = require('child_process').spawn;
const duplexer = require('duplexer2');

function executeAndJoinStd (cmd, args) {
  let child = spawn(cmd, args);
  return duplexer(child.stdin, child.stdout);
};

module.exports = executeAndJoinStd;
