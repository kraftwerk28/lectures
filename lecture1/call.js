'use strict';

const _bind = (fn, ...args) => {
  console.log(args);
  return function(newArgs) {
    fn.apply(null, args, newArgs);
  };
};

const f1 = function() {
  console.log(this);
};

const f2 = () => {
  console.log(this);
};

f1();
f2();
