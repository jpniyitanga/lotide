const middle = function(array) {
  let middleElement = [];
  if (array.length === 0 || array.length === 1 || array.length === 2) {
    return middleElement;
  } else if (array.length % 2 !== 0) {
    middleElement.push(array[(array.length - 1) / 2]);
    return middleElement;
  } else {
    middleElement.push(array[(array.length / 2) - 1 ]);
    middleElement.push(array[(array.length / 2) ]);
    return middleElement;
  }
};
module.exports = middle;