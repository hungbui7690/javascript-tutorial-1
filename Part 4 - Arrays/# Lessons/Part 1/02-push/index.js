/*
  JavaScript Array Push
  - adds one or more elements to the end of an array and returns the new array’s length.

*/

// 1) Using the array push() to append one element to an array
// The following example adds the number 40 to the end of the numbers array:
let numbers = [10, 20, 30]
const length = numbers.push(40)
console.log(length)
console.log(numbers)

// 2) Using the array push() to add multiple elements to the end of an array
// The following example shows how to use the push() method to add multiple elements to the end of an array:
numbers.push(40, 50)
console.log(numbers)

// 3) Using the push() to append elements of an array to another array
// Suppose you have two arrays colors and cmyk:
let colors = ['red', 'green', 'blue']
let cmyk = ['cyan', 'magenta', 'yellow', 'back']

// METHOD 1
// And you want to append the elements of the cmyk to the colors array.
// To do that, you may use a for...of loop that iterates over the elements of the cmyk array and use the push() method to append each element to the colors array like this:
// for (const color of cmyk) {
//   colors.push(color)
// }
// console.log(colors)

// METHOD 2
// Starting from ES6, you can use the spread operator (...) to spread the elements of the cmyk array and push them to the colors array at the same time like this:
colors.push(...cmyk)
console.log(colors)

// 4) Using JavaScript Array push() method with array-like objects
// The Array.prototype.push() method is designed to be generic on purpose. Therefore, you can call the push() method with the call() or apply() on the array-like objects.
// Under the hood, the push() method uses the length property to determine the position for inserting the elements. If the push() method cannot convert the length property into a number, it’ll use 0 as the value for the index.
let greetings = {
  0: 'Hi',
  1: 'Hello',
  length: 2,
  append(message) {
    ;[].push.call(this, message)
  },
}
greetings.append('Howdy')
greetings.append('Bonjour')

console.log(greetings)
