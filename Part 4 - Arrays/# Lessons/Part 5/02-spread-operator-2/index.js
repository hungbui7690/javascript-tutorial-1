/*
  Spread Operator

*/

/////////////////////////////
// 1. JavaScript spread operator and apply() method
// See the following compare() function that compares two numbers:
function compare(a, b) {
  return a - b
}

// In ES5, to pass an array of two numbers to the compare() function, you often use the apply() method as follows:
let result = compare.apply(null, [1, 2])
console.log(result) // -1

// However, by using the spread operator, you can pass an array of two numbers to the compare() function:
let resultX = compare(...[1, 2])
console.log(resultX) // -1

/////////////////////////////
// 2. A better way to use the Array’s push() method
// Sometimes, a function may accept an indefinite number of arguments. Filling arguments from an array is not convenient.
// For example, the push() method of an array object allows you to add one or more elements to an array. If you want to pass an array to the push() method, you need to use apply() method as follows:
let rivers = ['Nile', 'Ganges', 'Yang-te']
let moreRivers = ['Danube', 'Amazon']

;[].push.apply(rivers, moreRivers)
console.log(rivers)
// This solution looks verbose.

// The following example uses the spread operator to improve the readability of the code:
rivers.push(...moreRivers)
console.log(rivers)
