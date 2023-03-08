const reverse = function() {
  let input = process.argv.slice(2);
  for (let i = 0; i < input.length; i++) {
    let output = "";
    for (let j = input[i].length; j > -1; j--) {
      output += input[i].charAt(j);
    }
    console.log(output);
  }
};
module.exports = reverse;










