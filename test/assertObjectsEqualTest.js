const assertObjectsEqual = require('../assertObjectsEqual');
const eqObjects = require('../eqObjects');

assertObjectsEqual({a: '1', b: 2}, {b: 2, a: '1'});

