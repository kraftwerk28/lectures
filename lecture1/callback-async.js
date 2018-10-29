'use strict';

function doAsyncStuff(anotherCallback) {
  anotherCallback();
}

setTimeout(() => {
  console.log('This is async Hi there');
}, 100);
