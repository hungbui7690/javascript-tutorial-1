/*
  Prototype
  - In JavaScript, objects can inherit features from one another via prototypes. Every object has its own property called a prototype.

  - Because the prototype itself is also another object, the prototype has its own prototype. This creates a something called prototype chain. The prototype chain ends when a prototype has null for its own prototype.

  *** Note that when a function is a value of an object’s property, it’s called a method. Therefore, a method is a property with value as a function.


*/

// When examining the person object in the console, you’ll find that the person object has a property called prototype denoted by the [[Prototype]]:
// The prototype itself is an object with its own properties:
let person = { name: 'John' }

// When you access a property of an object, if the object has that property, it’ll return the property value. The following example accesses the name property of the person object:
person.name

// It returns the value of the name property as expected.
// However, if you access a property that doesn’t exist in an object, the JavaScript engine will search in the prototype of the object.
// If the JavaScript engine cannot find the property in the object’s prototype, it’ll search in the prototype’s prototype until it finds the property or reaches the end of the prototype chain.
// For example, you can call the toString() method of the person object like this:
person.toString() // The toString() method returns the string representation of the person object. By default, it’s [object Object] which is not obvious.

/*
  In this example, when we call the toString() method on the person object, the JavaScript engine finds it in the person object.

  Because the person object doesn’t have the toString() method, it’ll search for the toString() method in the person’s prototype object.

  Since the person’s prototype has the toString() method, JavaScript calls the toString() of the person’s prototype object.

*/

