/*
  var vs let

*/

// 2) let and callback function in a for loop
// The intention of the code is to output numbers from 0 to 4 to the console every second. However, it outputs the number 5 five times:
for (var i = 0; i < 5; i++) {
  setTimeout(function () {
    console.log(i)
  }, 1000)
}
// In this example, the variable i is a global variable. After the loop, its value is 5. When the callback functions are passed to the setTimeout() function executes, they reference the same variable i with the value 5.

// In ES5, you can fix this issue by creating another scope so that each callback function references a new variable. And to create a new scope, you need to create a function. Typically, you use the IIFE pattern as follows:
for (var i = 0; i < 5; i++) {
  ;(function (j) {
    setTimeout(function () {
      console.log(j)
    }, 1000)
  })(i)
}

// In ES6, the let keyword declares a new variable in each loop iteration. Therefore, you just need to replace the var keyword with the let keyword to fix the issue:
for (let i = 0; i < 5; i++) {
  setTimeout(function () {
    console.log(i)
  }, 1000)
}

// To make the code completely ES6 style, you can use an arrow function as follows:
for (let i = 0; i < 5; i++) {
  setTimeout(() => console.log(i), 1000)
}
