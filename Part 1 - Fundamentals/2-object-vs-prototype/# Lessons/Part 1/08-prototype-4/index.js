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

// Defining methods in an individual object
// The following defines the draw() method on the p2 object.
// The JavaScript engine adds the draw() method to the p2 object, not the Person.prototype object.
p2.draw = function () {
  return 'I can draw.'
}

// It means that you can call the draw() method on the p2 object:
p2.draw()

// But you cannot call the draw() method on the p1 object:
// p1.draw()

// When you define a method in an object, the method is only available to that object. It cannot be shared with other objects by default.
