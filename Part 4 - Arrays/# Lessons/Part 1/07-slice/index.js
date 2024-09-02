/*
  3 Pragmatic Uses of JavaScript Array slice() Method
  - slice(start, stop);
    
    + Both start and stop parameters are optional.
    + The start parameter determines the zero-based index at which to start extraction. If the start is undefined, slice() begins at 0.
*/

// Clone an array
const numbers = [1, 2, 3, 4, 5]
const newNumbers = numbers.slice()
console.log(newNumbers)

// Copy a portion of an array
// The typical use of the slice() method is to copy a portion of an array without modifying the source array. Here is an example:
// The rgb array contains the first three elements of the colors array. The source array colors remains intact.
var colors = ['red', 'green', 'blue', 'yellow', 'purple']
var rgb = colors.slice(0, 3)
console.log(rgb) // ["red", "green", "blue"]

// Convert array-like objects into arrays
// The slice() method is used to convert an array-like object into an array. For example:
function toArray() {
  return Array.prototype.slice.call(arguments)
}
const classification = toArray('A', 'B', 'C')
console.log(classification) // ["A", "B", "C"]

// Notes
const arr = [].slice.call('A', 'B') // this won't work, since it's not array-like
console.log(arr)

// Another typical example that you often see is converting a NodeList into an array as follows:
const p = document.querySelectorAll('p')
const list1 = Array.prototype.slice.call(p) // method 1
const list2 = [].slice.call(p) // method 2
const list3 = [...p] // method 3
console.log(list1)
console.log(list2)
console.log(list3)
