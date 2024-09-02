/*
  concat: Merge Arrays

*/

// METHOD 1: To merge two or more arrays, you use the concat() method of an Array object. The concat() method returns a new array and doesn’t change the original arrays. For example:
let odds = [1, 3, 5]
let evens = [2, 4, 6]
let combined = odds.concat(evens) // merge odds and evens array
console.log('Result:', combined)
console.log('Odds:', odds)
console.log('Events:', evens)

// METHOD 2
odds = [1, 3, 5]
evens = [2, 4, 6]
combined = [].concat(odds, evens)
console.log(combined)

// The concat() method allows you to merge more than two arrays as shown in the following example:
let upper = ['A', 'B', 'C']
let lower = ['a', 'b', 'c']
let digits = [1, 2, 3]
let alphanumerics = upper.concat(lower, digits)
console.log('alphanumerics', alphanumerics)

// CLONE: When you don’t pass any argument into the concat() method, it simply clones the array and returns it:
let colors = ['red', 'green', 'blue']
let rgb = colors.concat()
console.log('rgb', rgb)

// If you pass values that are not arrays, into the concat() method, the method will append each value to the end of the result array:
rgb = ['red', 'green', 'blue']
let moreColors = rgb.concat('yellow', 'magenta')
console.log('moreColors', moreColors)

// In ES6, you can use the spread operator to merge multiple arrays as follows:
odds = [1, 3, 5]
evens = [2, 4, 6]
combined = [...odds, ...evens]
console.log(combined)
