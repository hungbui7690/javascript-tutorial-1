/*
  Demystifying the JavaScript this Keyword

  
*/
'use strict'

// (1) In the strict mode, JavaScript sets the this inside a function to undefined
function show1() {
  console.log(this === window) // false
  console.log(this === undefined) // true
}

show1()

//////////////////////////////////
// (2) Note that the strict mode has been available since ECMAScript 5.1. The strict mode applies to both function and nested functions. For example:
function show2() {
  'use strict'
  console.log(this === undefined) // true

  function display() {
    console.log(this === undefined) // true
  }
  display()
}

show2()
