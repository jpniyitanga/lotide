const countLetters = require('../countLetters');
const assertEqual = require('../assertEqual');

let result = countLetters("Hello");

console.log(result);

assertEqual(countLetters("Hello").l, 2);