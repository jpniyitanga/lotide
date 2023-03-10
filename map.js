const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');

const map = function(array, callback) {
  let result = [];
  for (let item of array) {
    result.push(callback(item));
  }
  console.log(result);
  return result;
};

module.exports = map;

