/*
  Default Export
  - can change name when import

  *** we just can have 1 default export in a module

*/

// METHOD 1
// import sayHello from './lib.js'
// sayHello()

// METHOD 2
import * as greeting from './lib.js'
greeting.default() // *** must use default(), but not sayHi()
// greeting.sayHi() // err
