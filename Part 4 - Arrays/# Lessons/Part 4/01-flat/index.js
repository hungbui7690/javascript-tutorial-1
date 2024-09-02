/*
  Array flat
  - creates a new array with all the elements of the sub-arrays concatenated to it recursively up to a specified depth.

      let newArray = arrayObject.flat([depth])

*/

// In this example, we didn’t pass the depth argument into the flat() method therefore the depth is 1 by default. The flat() method concatenated all the elements of the nested array [3,4,5] to the elements of the new array.
let numbers = [1, 2, [3, 4, 5]]
let flatNumbers = numbers.flat() // 1 level depth
console.log(flatNumbers)

// The following example flats an array with two level depth:
numbers = [1, 2, [3, 4, 5, [6, 7]]]
flatNumbers = numbers.flat(2) // 2 level depth
console.log(flatNumbers)

// When you don’t know the depth level, you can pass the Infinity into the flat() method to recursively concatenate all elements of the sub-arrays into the new array:
numbers = [1, 2, [3, 4, 5, [6, 7, [8, 9]]]]
flatNumbers = numbers.flat(Infinity)
console.log(flatNumbers)

// If an array has empty slots, you can use the flat() method to remove the holes, like this:
numbers = [1, 2, , 4, , 5]
sequence = numbers.flat()
console.log(sequence)
