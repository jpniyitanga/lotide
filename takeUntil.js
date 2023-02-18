

const takeUntil = function(array, callback) {
  let result = [];
  for (let item of array) {
    if (!callback(item)) {
      result.push(item);
    }   else {
      return result;
    }
    
  }

};

// let callbackx = function(item) {
//   if (item < 0) {
//     return true;
//   } else {
//     return false;
//   }
// };

module.exports = takeUntil;


