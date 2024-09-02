/*
  JavaScript Array unshift
  - adds one or more elements to the beginning of an array and returns the new array’s length.

  *** Because the unshift() method needs to "re-index" the existing elements, it is slow if the array has many elements.

*/

let numbers = [30, 40]
const length = numbers.unshift(10, 20)
console.log(length)
console.log(numbers)

// Using the JavaScript array unshift() to add elements of an array to another array
// METHOD 1
let days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri']
let weekends = ['Sat', 'Sun']

for (const weekend of weekends) {
  days.unshift(weekend)
}
console.log(days)

// METHOD 2
days.unshift(...weekends)
console.log(days)

// Array Like
let greetings = {
  0: 'Hi',
  1: 'Hello',
  2: 'Howdy',
  length: 3,
  prepend(...messages) {
    ;[].unshift.call(this, ...messages)
    return this.length
  },
}

greetings.prepend('Good day', 'Bye')
console.log(greetings)
