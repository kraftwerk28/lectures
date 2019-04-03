'use strict'

const { add } = require('./add')
const HighOrderComponent = require('./HOC')

console.log(add(1)(2))
new HighOrderComponent()
