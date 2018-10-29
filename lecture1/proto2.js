'use strict';

const a = {
  // lol: 123
};

const b = {
  __proto__: a
};

const c = {
  __proto__: b
};

console.log(c.lol);
