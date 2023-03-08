
const assertEqual = require('./assertEqual');

const findKeyByValue = function(obj, value) {
  let objKeys = Object.keys(obj);
  for (let key of objKeys) {
    
    if (obj[key] === value) {
      return key;
    }
  }

};

module.exports = findKeyByValue;




