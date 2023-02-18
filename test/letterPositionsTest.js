const eqArrays = require('../eqArrays');
const assertArraysEqual = require('../assertArraysEqual');
const letterPositions = require('../letterPositions');

let result1 = letterPositions("hello");
console.log(result1);

/*
{
  l: [0],
  i: [1, 11],
  g: 1,
  h: [3, 5, 15, 18]
}

*/

assertArraysEqual(letterPositions("hello").e, [1]);