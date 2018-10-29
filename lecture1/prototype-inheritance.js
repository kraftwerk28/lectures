'use strict';

function Animal(name) {
  this._name = name;
  // this.say = function() {
  //   console.log(
  //     this._name ? ('I am ' + this._name) : 'I don\'t know, who am I');
  // }
}

Animal.prototype.say = function() {
  console.log(this._name ? ('I am ' + this._name) : 'I don\'t know, who am I');
};

function Cat() {
  Animal.call(this, 'cat');
  this.otherName = 'munchkin';
}

Object.setPrototypeOf(Cat.prototype, Animal.prototype);
// require('util').inherits(Cat, Animal);

const cat = new Cat();
// cat.say();
for (const i in cat) {
  console.log(i + ': ' + cat[i]);
}
