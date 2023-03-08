const eqArrays = require('../eqArrays');
const assertArraysEqual = require('../assertArraysEqual');
const map = require('../map');

const words = ["ground", "control", "to", "major", "tom"];
let results1 = map(words, word => word[0]);

assertArraysEqual(map(words, word => word[0]), [ 'g', 'c', 't', 'm', 't']);