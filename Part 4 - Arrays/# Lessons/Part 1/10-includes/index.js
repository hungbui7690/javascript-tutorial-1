/*
  Array includes: Check If an Element is in the Array

    array.includes(element,fromIndex);

*/

// When working with an array, you often want to check if the array contains an element. To do this, you use the indexOf() method as follows:
let numbers = [1, 2, 3]
if (numbers.indexOf(2) !== -1) {
  // process here
}
/*
  - The indexOf() method returns the index of the first occurrence of the element in the array. If the array doesn’t include the element, the indexOf() returns -1.
  - As you can see, the indexOf() method doesn’t really clearly state what it means. In addition, the indexOf() uses strict equality operator (===) for comparison, therefore, it doesn’t work with NaN as shown in the following example:
*/

;[NaN].indexOf(NaN) // -1
/*
  - In this example, the array contains one element of NaN. However, the indexOf(NaN) returns -1.
  - To work around this, developers came up with a helper function, for example, Lodash provides the _.incudes() method that checks if a value is in the array.
  - ECMAScript 2016 standardized this functionality by providing the Array.prototype.includes() method.
  - The includes() method returns true if an array contains a given element; Otherwise, it returns false.
*/

console.log([1, 2, 3].includes(2)) // true
console.log([1, 2, 3].includes(4)) // false
console.log([1, 2, 3].includes(1, 1)) // false

// Unlike the indexOf() method, the includes() method works perfectly fine with the NaN:
console.log([NaN].includes(NaN)) // true

// Note that the includes() doesn’t distinguish between +0 and -0 as shown in the following example:
console.log([-0].includes(+0)) // true

// The following example demonstrates how to use the includes() method to check if an object is in an array.
let bmw = { name: 'BMW' },
  toyota = { name: 'Toyota' },
  ford = { name: 'Ford' }

let cars = [ford, toyota]

console.log(cars.includes(ford)) // true
console.log(cars.includes(bmw)) // false
