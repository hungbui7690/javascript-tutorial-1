/*
  Constructor Function

*/

// Adding methods to JavaScript constructor functions
// An object may have methods that manipulate its data. To add a method to an object created via the constructor function, you can use the this keyword. For example:
function Person(firstName, lastName) {
  this.firstName = firstName
  this.lastName = lastName

  this.getFullName = function () {
    return this.firstName + ' ' + this.lastName
  }
}

// Now, you can create a new Person object and invoke the getFullName() method:
let person = new Person('John', 'Doe')
console.log(person.getFullName())

/*
  The problem with the constructor function is that when you create multiple instances of the Person, the this.getFullName() is duplicated in every instance, which is not memory efficient.

  To resolve this, you can use the prototype so that all instances of a custom type can share the same methods.
*/

/*
  Returning from constructor functions
  - Typically, a constructor function implicitly returns "this" that set to the newly created object. But if it has a return statement, then here are the rules:
    + If return is called with an object, the constructor function returns that object instead of this.
    + If return is called with a value other than an object, it is ignored.

*/
console.log(person.firstName.getFullName())
