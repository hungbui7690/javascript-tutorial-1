/*
  Functions are First-Class Citizens

*/

function add(a, b) {
  return a + b
}

let sum = add

// Passing a function to another function
// Because functions are values, you can pass a function as an argument into another function.
// The following declares the average() function that takes three arguments. The third argument is a function:
function average(a, b, fn) {
  return fn(a, b) / 2
}

// Now, you can pass the sum function to the average() function as follows:
let result = average(10, 20, sum)

console.log(result)
