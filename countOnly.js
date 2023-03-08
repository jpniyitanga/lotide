const assertEqual = require('./assertEqual');

const countOnly = function(allItems, itemToCount) {
  let output = {};
  for (let item of allItems) {
    if (itemToCount[item] === true) {
    
      if (output[item]) {
        output[item] += 1;
      } else {
        output[item] = 1;
      }
    }
  }
  return output;
};
module.exports = countOnly;












