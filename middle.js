let middle = function(array) {
  let middleElements = [];
  if (array.length === 0 || array.length === 2) {
    return middleElements;
  }    
  else if (array.length % 2 !== 0) {
    middleElements.push(array[(array.length - 1) / 2]);
    return middleElements;
  } else {
    middleElements.push(array[(array.length / 2) - 1 ]);
    middleElements.push(array[(array.length / 2) ]);
    return middleElements;
  }

    

};

module.exports = middle;

