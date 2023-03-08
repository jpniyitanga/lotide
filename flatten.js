
const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');

const flatten = function(arrayOfArrays) {
  // return arrayOfArrays.flat();
  const newArray = [];
  for (let i = 0; i < arrayOfArrays.length; i++) {
    if (Array.isArray(arrayOfArrays[i])) {
      for (let j = 0; j < arrayOfArrays[i].length; j++) {
        newArray.push(arrayOfArrays[i][j]);
      }
    } else {
      newArray.push(arrayOfArrays[i]);
    }
  }
  return newArray;
};

module.exports = flatten;

