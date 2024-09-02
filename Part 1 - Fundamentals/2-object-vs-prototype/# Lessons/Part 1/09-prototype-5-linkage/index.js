/*
  Prototype
  
*/

function Person(name) {
  this.name = name
}

Person.prototype.greet = function () {
  return "Hi, I'm " + this.name + '!'
}

let p1 = new Person('John')
let p2 = new Person('Jane')

p2.draw = function () {
  return 'I can draw.'
}

p2.draw()

// Getting prototype linkage
// The __proto__ is pronounced as dunder proto. The __proto__ is an accessor property of the Object.prototype object. It exposes the internal prototype linkage ( [[Prototype]]) of an object through which it is accessed.
// The __proto__ has been standardized in ES6 to ensure compatibility with web browsers. However, it may be deprecated in favor of Object.getPrototypeOf() in the future. Therefore, you should never use the __proto__ in your production code.
console.log(p1.__proto__)

// The  p1.__proto__ exposes the [[Prototype]] that references the Person.prototype object.
// Similarly, p2.__proto__ also references the same object as p1.__proto__:
console.log(p1.__proto__ === Person.prototype) // true
console.log(p1.__proto__ === p2.__proto__) // true

// As mentioned earlier, you should use the Object.getPrototypeOf() method instead of the __proto__. The Object.getPrototypeOf() method returns the prototype of a specified object.
console.log(p1.__proto__ === Object.getPrototypeOf(p1)) // true

// Another popular way to get the prototype linkage is when the Object.getPrototypeOf() method is not available via the constructor property as follows:
console.log(p1.constructor.prototype === p1.__proto__)

// The p1.constructor returns Person, therefore, p1.constructor.prototype returns the prototype object.
