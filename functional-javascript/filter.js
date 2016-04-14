'use strict';

function getShortMessages(msgs){
  return msgs
    .filter(x => (x.message.length < 50))
    .map(x => x.message);
};

module.exports = getShortMessages;
