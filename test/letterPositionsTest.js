const eqArrays = require('../eqArrays');
const assertArraysEqual = require('../assertArraysEqual');
const letterPositions = require('../letterPositions');

let result1 = letterPositions("hello");

assertArraysEqual(letterPositions("hello").e, [1]);