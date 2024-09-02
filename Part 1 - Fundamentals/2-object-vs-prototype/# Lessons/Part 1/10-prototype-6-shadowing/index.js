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

// Shadowing
// See the following method call:
console.log(p1.greet())
// The p1 object doesn’t have the greet() method defined, therefore JavaScript goes up to the prototype chain to find it. In this case, it can find the method in the Person.prototype object.

// Let’s add a new method to the object p1 with the same name as the method in the Person.prototype object:
p1.greet = function () {
  console.log('Hello')
}

// And call the greet() method:
p1.greet()

// Because the p1 object has the greet() method, JavaScript just executes it immediately without looking it up in the prototype chain.
// This is an example of shadowing. The greet() method of the p1 object shadows the greet() method of the prototype object which the p1 object references.

/*
  Summary
  - The Object() function has a property called prototype that references a Object.prototype object.
    
  - The Object.prototype object has all properties and methods which are available in all objects such as toString() and valueOf().
    
  - The Object.prototype object has the constructor property that references the Object function.
    
  - Every function has a prototype object. This prototype object references the Object.prototype object via [[prototype]] linkage or __proto__ property.
    
  - The prototype chain allows one object to use the methods and properties of its prototype objects via the [[prototype]] linkages.
    
  - The Object.getPrototypeOf() method returns the prototype object of a given object. Do use the Object.getPrototypeOf() method instead of __proto__.
*/
