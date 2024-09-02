/*
  Array.of() method

*/

////////////////////////////
// 1) In ES5, when you pass a number to the Array constructor, JavaScript creates an array whose length equals the number. For example:
let numbers = new Array(2)
console.log(numbers) // [empty × 2]
console.log(numbers.length) // 2
console.log(numbers[0]) // undefined

// However, when you pass to the Array constructor a value that is not a number, JavaScript creates an array that contains one element with that value. For example:
numbers = new Array('2')
console.log(numbers.length) // 1
console.log(numbers[0]) // "2"
// This behavior is sometimes confusing and error-prone because you may not know the type of data that you pass to the Array constructor.

////////////////////////////
// 2) ES6 introduces the Array.of() method to solve this problem.
// The Array.of() method is similar to the Array constructor except the Array.of() method does not treat a single numeric value special.
// In other words, the Array.of() method always creates an array that contains the values that you pass to it regardless of the types or the number of arguments.
numbers = Array.of(3)
console.log(numbers.length) // 1
console.log(numbers[0]) // 3
// In this example, we passed the number 3 to the Array.of() method. The Array.of() method creates an array of one number.

// Consider the following example:
let chars = Array.of('A', 'B', 'C')
console.log(chars.length) // 3
console.log(chars) // ['A','B','C']
// In this example, we created an array of three strings by passing 'A', 'B', and 'C' to the Array.of() method. The size of the array is 3.

////////////////////////////
// 3) If you execute the JavaScript in the environment that doesn’t support the  Array.of() method, you can use the following polyfill:
if (!Array.of) {
  Array.of = function () {
    return Array.prototype.slice.call(arguments)
  }
}
