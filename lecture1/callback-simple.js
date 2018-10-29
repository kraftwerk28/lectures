'use strict';

function doStuff(callback) {
  callback();
}

doStuff(() => {
  console.log('Hello there');
});
