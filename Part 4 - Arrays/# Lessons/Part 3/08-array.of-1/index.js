/*
  Array.of() method
    
      The difference between Array.of() and the Array() constructor is in the handling of single arguments: Array.of(7) creates an array with a single element, 7, whereas Array(7) creates an empty array with a length property of 7. (That implies an array of 7 empty slots, not slots with actual undefined values.)

*/

const arr1 = Array.of(7)
console.log(arr1) // [7]

const arr2 = Array(7)
console.log(arr2) // array of 7 empty slots

const arr3 = Array.of(1, 2, 3)
console.log(arr3) // [1, 2, 3]

const arr4 = Array(1, 2, 3)
console.log(arr4) // [1, 2, 3]

const arr5 = Array.of(undefined)
console.log(arr5) // [undefined]
