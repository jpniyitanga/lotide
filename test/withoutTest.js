const eqArrays = require('../eqArrays');
const assertArraysEqual = require('../assertArraysEqual');
const without = require('../without');



const words = ["hello", "world", "lighthouse"];
const words2 = ["hello", "ottawa", "lighthouse" , "labs"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
assertArraysEqual(words2, ["hello", "ottawa", "lighthouse"]);






console.log(without([1, 2, 3], [1]));

console.log(without(["1", "2", "3"], [1, 2, "3"]));

without([1, 2, 3], [1]); // => [2, 3]
without(["1", "2", "3"], [1, 2, "3"]); // => ["1", "2"]