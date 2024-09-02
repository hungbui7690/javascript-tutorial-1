/*
  Array findIndex() Method
  -  find the first element that satisfies a given test.


*/

// 1) Using the Array findIndex() method with a simple array example
// The following example returns the index of the first occurrence of the number 7 in the ranks array:
let ranks = [1, 5, 7, 8, 10, 7]
let index = ranks.findIndex((rank) => rank === 7)
console.log(index)

// 2) Using the Array findIndex() method with a more complex condition
// This example uses the findIndex() method to get the index of the first occurrence of the number 7 after the index 2 in the ranks array:
let index1 = ranks.findIndex((rank, index) => rank === 7 && index > 2)
console.log(index1)

// 3) Using the Array findIndex() method with an array of objects
// The following example uses the Array findIndex() method to find the index of the first product whose price is greater than 1000:
const products = [
  { name: 'Phone', price: 999 },
  { name: 'Computer', price: 1999 },
  { name: 'Tablet', price: 995 },
]
const index2 = products.findIndex((product) => product.price > 1000)
console.log(index2) // 1
