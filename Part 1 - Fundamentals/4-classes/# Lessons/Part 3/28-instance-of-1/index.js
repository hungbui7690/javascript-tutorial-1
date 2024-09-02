/*
  instanceof
  - The instanceof operator returns true if a prototype of a constructor (constructor.prototype) appears in the prototype chain of an object.
  - The following shows the syntax of the instanceof operator:
      object instanceof constructor

  - In this syntax:
    > object is the object to test.
    > constructor is a function to test against.

*/

///////////////////////////////
// The following example defines the Person type and uses the instanceof operator to check if an object is an instance of that type
// (1) First, define a Person type using the constructor function pattern:
function Person(name) {
  this.name = name
}

// (2) Second, create a new object of the Person type:
let p1 = new Person('John')

// (3) Third, check if the person is an instance of the Person type > check pic
// The following also returns true because the Object.prototype appears on the prototype chain of the p1 object:
console.log(p1 instanceof Person) // true

// ********************
// The following example defines the Person class and uses the instanceof operator to check if an object is an instance of the class:
class Student {
  constructor(name) {
    this.name = name
  }
}

let s1 = new Student('John')
console.log(p1 instanceof Student) // false
