/*
  IIFE

*/

let sum1 = function (a, b) {
  return a + b
}

// you can execute the function immediately after creating it:
let sum2 = (function (a, b) {
  return a + b
})(10, 20)
console.log(sum2)

// IIFE
;(function () {
  var counter = 0

  function add(a, b) {
    return a + b
  }

  console.log(add(10, 20)) // 30
})()
