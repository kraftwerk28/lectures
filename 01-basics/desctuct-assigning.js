'use strict';

const obj = {
  a: 123,
  b: 456,
};

const curry = (fn) => {
  return (...args) => {
    if (fn.length > args.length) {
      const f = fn.bind(null, ...args);
      return curry(f);
    } else {
      return fn(...args);
    }
  };
};
