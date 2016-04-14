'use strict';

function upperCaser(input){
  return input.split(' ')
    .map(x => x.toString().toUpperCase())
    .join(' ');
};

module.exports = upperCaser;
