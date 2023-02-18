const eqArrays = require('../eqArrays');
const assertArraysEqual = require('../assertArraysEqual');
const flatten = require('../flatten');

console.log(flatten([1, 2, [3, 4], 5, [6]])) // => [1, 2, 3, 4, 5, 6]