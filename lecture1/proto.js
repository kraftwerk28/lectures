'use strict';

const animal = {
  _name: 'dragon',
  say() {
    console.log(this._name ? 'I am ' + this._name : '...');
  }
};

const cat = {
  __proto__: animal,
  _name: 'munchkin'
};

for (const i in cat) {
  console.log(i + ': ' + cat[i]);
}
// console.log(cat._name);
