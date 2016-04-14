'use strict';

function executeHigherOrderNtimes(higher, num){
  for(let i = 0; i < num; i++){
    higher();
  }
};

module.exports = executeHigherOrderNtimes;
