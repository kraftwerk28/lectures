'use strict';

class Animal {
  constructor(name) {
    this.fluffy = true;
    this.fnn = function() { };
    this._name = name;
  }



  say() {

  }
}

class Cat extends Animal {
  constructor() {
    super('cat');
  }
}
