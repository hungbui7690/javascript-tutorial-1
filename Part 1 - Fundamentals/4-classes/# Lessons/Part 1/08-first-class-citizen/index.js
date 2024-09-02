/*
  First-class citizen
  - JavaScript classes are first-class citizens. It means that you can pass a class into a function, return it from a function, and assign it to a variable.

*/

// First, define a factory() function that takes a class expression as an argument and returns the instance of the class:
function factory(aClass) {
  return new aClass()
}

// Second, pass an unnamed class expression to the factory() function and assign its result to the greeting variable:
// The class expression has a method called sayHi(). And the greeting variable is an instance of the class expression.
let greeting = factory(
  class {
    sayHi() {
      console.log('Hi')
    }
  }
)

// Third, call the sayHi() method on the greeting object:
greeting.sayHi() // 'Hi'
