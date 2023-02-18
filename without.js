

const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');

let without = function(source, itemsToRemove) {
  let result = [];
  for (let i = 0; i < source.length; i++) {
    //console.log(source[i]);
    let index = source[i];
    if (!itemsToRemove.includes(index)) {
      result.push(index);
    }
      
  }
  return result;
};

module.exports = without;


