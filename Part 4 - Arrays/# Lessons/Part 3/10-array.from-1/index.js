/*
  Array.from() method
    

*/

// creating a new array from string
let newArray = Array.from('JavaScript')
console.log(newArray) // ['J', 'a', 'v', 'a', 'S', 'c', 'r', 'i', 'p', 't']

// Mapping Function
// Array.from(array-like, mapFunc);
const result = Array.from([1, 2, 3], (x) => x * 2)
console.log(result) // [3, 4, 5]

// Array from Set
let set = new Set(['JavaScript', 'Python', 'Go', 'Python'])
let uniqueArr = Array.from(set)
console.log(uniqueArr) // ['JavaScript', 'Python', 'Go']

const arr = Array.from({ length: 5 }, (_, i) => i)
console.log(arr) // [0, 1, 2, 3, 4]
