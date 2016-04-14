'use strict';

function executeHigherOrderNtimes(higher, num){
  if(num == 0) return;
  higher();
  return executeHigherOrderNtimes(higher, --num);
};

module.exports = executeHigherOrderNtimes;
