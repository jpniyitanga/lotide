
let eqArrays = function(array1, array2) {
// Comparing length of arrays
  if (array1.length != array2.length)
    return false;
  else {
    // Comparing each element of array
    for (let i = 0; i < array1.length; i++)
      if (array1[i] !== array2[i])
        return false;
    return true;
  }

};

module.exports = eqArrays;







