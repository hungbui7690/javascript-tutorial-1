/*
  Array every: Determining If All Array Elements Pass a Test
  - arrayObject.every(callback[, thisArg])
    > The thisArg argument of the every() method is optional. If you pass the thisArg argument into the method, the this value inside the callback function will reference the thisArg argument.
    > The every() method returns true if the callback function returns a truthy value for every array element; otherwise, it returns false.

  
    *** when using thisArg object > CANNOT use ARROW FN

*/

// The following example uses the every() to check if every element of the numbers array is greater than zero:
let numbers = [1, 3, 5]
let result = numbers.every(function (e) {
  return e > 0
})

// By using the ES6 arrow functions, the code can be even shorter:
let result1 = numbers.every((e) => e > 0)

// The following example tests whether all the array elements are the even numbers
let isEven = numbers.every((e) => e % 2 == 0)

///////////////////////////
// Suppose that you have an object with two properties: min and max:
let range = {
  min: 0,
  max: 10,
}

// The following example tests whether all elements in the numbers array is in the range specified by the min and max of the range object.
let isInRange = numbers.every(function (n) {
  return n >= this.min && n <= this.max
}, range)
console.log(isInRange) // true
// In this example, we pass the range object to the every() method as the second argument. And inside the callback() function, we reference the range object using the this keyword.

///////////////////////////
// Caution: Empty arrays
// If you call the every() method on an empty array, the method will always return true for any condition. For example:
let gtZero = [].every((e) => e > 0) // any condition
let ltZero = [].every((e) => e < 0) // any condition

console.log('gtZero:', gtZero)
console.log('ltZero:', ltZero)
