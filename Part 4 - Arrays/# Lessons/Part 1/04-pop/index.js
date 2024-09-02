/*
  JavaScript Array Pop
  - The Array.prototype.pop() method removes the last element from an array and returns the removed element

*/

let numbers = [10, 20, 30]
let last = numbers.pop()

console.log(last) // 30
console.log(numbers.length) // 2
console.log(numbers)

// Using the JavaScript array pop() method with an empty array
// The following example calls the pop() method on an empty array. In this case, the pop() method returns undefined and the length is of the array is zero:
numbers = []
last = numbers.pop()
console.log(last)
console.log(numbers.length)

// Array-like objects
let greetings = {
  0: 'Hi',
  1: 'Hello',
  2: 'Howdy',
  length: 2,
  removeLast() {
    return [].pop.call(this)
  },
}
let greeting = greetings.removeLast()
console.log(greeting)
console.log(greetings)
