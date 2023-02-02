let assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅ ✅ ✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑 🛑 🛑 Assertion Failed:  ${actual} !== ${expected}`);
  }

};



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





const letterPositions = function(sentence) {
  const results = {};
  for (let i = 0; i < sentence.length; i++) {
    let letter = sentence[i];
    let indexPosition = [];
    if (letter === " ") {
      continue
    }     
    //results[letter] = i;

    if (results[letter]){
      results[letter].push(i)      
    } else {
      results[letter] = indexPosition;
      results[letter] = [i]
    }
    
    
    
  }
  
  
  
  console.log(results)
  //return results;
};


let result1 = letterPositions("hello")
console.log(result1);

/* 
{
  l: [0],
  i: [1, 11],
  g: 1,
  h: [3, 5, 15, 18]
}

*/

//assertArraysEqual(letterPositions("hello").e, [1]);
