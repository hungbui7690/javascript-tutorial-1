/*
  var vs let
  - In ES5, when you declare a variable using the var keyword, the scope of the variable is either global or local. If you declare a variable outside of a function, the scope of the variable is global. When you declare a variable inside a function, the scope of the variable is local.

  - ES6 provides a new way of declaring a variable by using the let keyword. The let keyword is similar to the var keyword, except that these variables are blocked-scope.

  - In JavaScript, blocks are denoted by curly braces {} , for example, the if else, for, do while, while, try catch and so on:

      if(condition) {
        // inside a block
      }


*/

// Because the let keyword declares a block-scoped variable, the x variable inside the if block is a new variable and it shadows the x variable declared at the top of the script. Therefore, the value of x in the console is 20.
let x = 10
if (x == 10) {
  let x = 20
  console.log(x) // 20:  reference x inside the block
}
console.log(x) // 10: reference at the beginning of the script
// When the JavaScript engine completes executing the if block, the x variable inside the if block is out of scope. Therefore, the value of the x variable that following the if block is 10.

// 1) let and global object
var a = 10
console.log(window.a) // 10

// However, when you use the let keyword to declare a variable, that variable is not attached to the global object as a property. For example:
let b = 20
console.log(window.b) // undefined
