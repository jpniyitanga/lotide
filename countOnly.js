let assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ ✅ ✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑 🛑 🛑 Assertion Failed:  ${actual} !== ${expected}`);
  }

};


let countOnly = function(allItems, itemToCount) {
  let output = {};
for (let item of allItems) {
  if (itemToCount[item] === true) {
    
   if (output[item]) {
     output[item] += 1
   } else {
     output[item] = 1
   }
  }
}
return output;

};










const firstNames = ["Karl", "Salima", "Agouhanna", "Fang", "Kavith", "Jason", "Salima", "Fang", "Joe"];

let friends = { 
  "Jason": true, 
  "Karima": true, 
  "Fang": true, 
  "Agouhanna": false 
};

const result1 = countOnly(firstNames, friends);

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);


