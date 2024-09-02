/*
  Classes in ES6
  - ES6 introduces the class keyword that makes the constructor/prototype pattern easier to use. 

*/

// For example, the following uses the class keyword to define the same Person type
class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName
    this.lastName = lastName
  }
  getFullName() {
    return this.firstName + ' ' + this.lastName
  }
}

let p1 = new Person('John', 'Doe')
let p2 = new Person('Jane', 'Doe')

console.log(p1.getFullName())
console.log(p2.getFullName())

/*
  In this syntax, the class moves the property initialization to the constructor method. It also packs the getFullName() method in the same place as the constructor function.

  The class syntax looks cleaner and less verbose. However, it’s syntactic sugar over the constructor/prototype pattern with some enhancements.

*/
/*
  Summary

    - Use JavaScript constructor/prototype to define a custom type in ES5.
    - Initialize the object properties in the constructor function and define methods and properties that can be shared by all instances in the prototype object.
*/
