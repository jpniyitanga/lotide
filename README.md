# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @jpniyitanga/lotide`

**Require it:**

`const _ = require('@jpniyitanga/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual(actual, expected)`: compares actual result with expected result (arrays)
* `assertEqual(actual, expected)`: compares actual result with expected result (primitives)
* `assertObjectsEqual(actual, expected)`: compares actual result with expected result (objects)
* `eqArrays(array1, array2)`: compares two arrays
* `eqObjects(obj1, obj2)`: compares two objects
* `countLetters(sentence)`: counts how many times a letter appears in the sentence
* `countOnly(allItems, itemToCount)`: counts itemToCount only if they are available in allItems
* `findKey(callback)`: returns a value based on a given key
* `findKeyByValue(object)`: returns a value based on a given key
* `flatten(array)`: takes nested arrays and flattened them into one array
* `head(array)`: returns first element of an array
* `tail(array)`: returns other then first element of an array
* `letterPositions(array)`: returns index of each letter in an array
* `map(array)`: returns first letter (at index 0) for each element of an array
* `middle(array)`: returns middle element or elements of an array
* `reverse(string)`: takes a string from command line arguments and retuns a reversed string
* `takeUntil(array, callback)`: returns a modified array based on the logic of the callback
* `without(source, itemsToRemove)`: returns source array without itemsToRemove





