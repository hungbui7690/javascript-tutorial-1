/*
  JavaScript Array Length


*/

// 1) Dense arrays
// A dense array is an array where its elements have contiguous indexes starting at zero.
// For dense arrays, you can use the length property to get the number of elements in the array. For example:
let colors = ['red', 'green', 'blue']
console.log(colors.length) // 3

colors = []
console.log(colors.length) // 0

// 2) Sparse arrays
// A sparse array is an array whose elements don’t have contiguous indexes starting at zero.
// For example, the [10,, 20, 30] is a sparse array because the indexes of its elements are 0, 2, and 3.
// In a sparse array, the length property doesn’t indicate the actual number of elements. It’s a number that is greater than the highest index. For example:
let numbers = [10, , 20, 30]
console.log(numbers.length) // 4
// In this example, the number of elements in the numbers array is three: 10, 20, and 30. The highest index is three. Therefore, the length property returns four.

// The following adds an element to the numbers array at the index 10:
numbers[10] = 100
console.log(numbers.length) // 11
console.log(numbers)

// 3) Empty an array
// If you set length to zero, the array will be empty:
const fruits = ['Apple', 'Orange', 'Strawberry']
fruits.length = 0
console.log(fruits) // []

// 4) Remove elements
// If you set the length property of an array to a value that is lower than the highest index, all the elements whose index is greater than or equal to the new length are removed.
// The following example changes the length property of the fruits array to two, which removes the third element from the array:
const fruits1 = ['Apple', 'Orange', 'Strawberry']
fruits1.length = 2
console.log(fruits1) // [ 'Apple', 'Orange' ]

// 5) Make array sparse
// If you set the length property of an array to a value that is higher than the highest index, the array will be spare. For example:
const fruits2 = ['Apple', 'Orange', 'Strawberry']
fruits2.length = 5
console.log(fruits2) // [ 'Apple', 'Orange', 'Strawberry', <2 empty items> ]
