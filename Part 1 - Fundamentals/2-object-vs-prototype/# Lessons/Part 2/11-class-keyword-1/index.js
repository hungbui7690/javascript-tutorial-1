/*
  Constructor/Prototype Pattern
  - The combination of the constructor and prototype patterns is the most common way to define custom types in ES5. In this pattern:
    > The constructor pattern defines the object properties.
    > The prototype pattern defines the object methods.

  - By using this pattern, all objects of the custom type share the methods defined in the prototype. Also, each object has its own properties.

  - This constructor/prototype pattern takes the best parts of both constructor and prototype patterns.

*/

// First, use the constructor function to initialize the properties:
function Person(firstName, lastName) {
  this.firstName = firstName
  this.lastName = lastName
}

// Second, define the getFullName() method in the prototype object of the Person function:
Person.prototype.getFullName = function () {
  return this.firstName + ' ' + this.lastName
}

// Third, create multiple instances of the Person type:
let p1 = new Person('John', 'Doe')
let p2 = new Person('Jane', 'Doe')

console.log(p1.getFullName())
console.log(p2.getFullName())

// Javascript creates two objects p1 and p2. These objects link to the Person.prototype object via the [[Prototype]] linkage.
// Each object has its own properties firstName and lastName. However, they share the same getFullName() method.
// When you call the getFullName() method on the p1 or p2 object, the JavaScript engine searches for the method on these objects. Because the JavaScript engine doesn’t find the method there, it follows the prototype linkage and searches for the method in the Person.prototype object.
// Because the Person.prototype object has the getFullName() method, JavaScript stops searching and executes the method.
