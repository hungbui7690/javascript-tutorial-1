/*
  Prototype
  
*/

function Person(name) {
  this.name = name
}

// Defining methods in the JavaScript prototype object
// The following defines a new method called greet() in the Person.prototype object:
Person.prototype.greet = function () {
  return "Hi, I'm " + this.name + '!'
}

// The following creates a new instance of the Person :
// Internally, the JavaScript engine creates a new object named p1 and links the p1 object to the Person.prototype object via the prototype linkage (pic 5)
let p1 = new Person('John')
// p1.greet()

// The link between p1, Person.prototype, and Object.prototype is called a prototype chain.
// The following calls the greet() method on the p1 object:
let greeting = p1.greet()
console.log(greeting)

// Because p1 doesn’t have the greet() method, JavaScript follows the prototype linkage and finds it on the Person.prototype object.
// Since JavaScript can find the greet() method on the Person.prototype object, it executes the greet() method and returns the result:
// The following calls the toString() method on the p1 object:
let s = p1.toString()
console.log(s)

// In this case, the JavaScript engine follows the prototype chain to look up the toString() method in the Person.prototype.
// Because the Person.prototype doesn’t have the toString() method, the JavaScript engine goes up to the prototype chain and searches for the toString() method in the Object.prototype object.
// Since JavaScript can find the toString() method in the Object.prototype, it executes the toString() method.

// If you call a method that doesn’t exist on the Person.prototype and Object.prototype object, the JavaScript engine will follow the prototype chain and throw an error if it cannot find the method. For example:
// p1.fly() // err

// The following creates another instance of the Person whose name property is 'Jane':
let p2 = new Person('Jane')
// The p2 object has the same properties and methods as the p1 object.
// In conclusion, when you define a method on the prototype object, this method is shared by all instances.
