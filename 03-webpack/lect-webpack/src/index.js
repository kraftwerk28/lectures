import Add from './module1'
console.dir(Add, { depth: null }) // defaultFunc(): ...

import { pow as power, substract } from './module1'
console.log('power :', power, 'substract :', substract) // as they as)

import * as Lib from './module1'
console.dir(Lib) // { default: (a, b) => a + b, pow: ..., substract: ... }

import './style.css'
