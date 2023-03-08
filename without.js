const without = function(source, itemsToRemove) {
  let result = [];
  for (let i = 0; i < source.length; i++) {
    let item = source[i];
    if (!itemsToRemove.includes(item)) {
      result.push(item);
    }
  }
  return result;
};
module.exports = without;


