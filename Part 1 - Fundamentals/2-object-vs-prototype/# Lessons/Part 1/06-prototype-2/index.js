/*
  Prototype

*/

console.log(typeof Object) // function
console.log(typeof Object()) // object

// Also, JavaScript provides an anonymous object that can be referenced via the prototype property of the Object() function:
console.log(Object.prototype)

// The Object.prototype object has some useful properties and methods such as toString() and valueOf().
// The Object.prototype also has an important property called constructor that references the Object() function.
// The following statement confirms that the Object.prototype.constructor property references the Object function:
console.log(Object.prototype.constructor === Object) // true

// First, define a constructor function called Person as follows:
function Person(name) {
  this.name = name
}

// Behind the scenes, JavaScript creates a new function Person() and an anonymous object (pic)
console.log(Person)
console.log(Person.prototype)
// In addition, JavaScript links the Person.prototype object to the Object.prototype object via the [[Prototype]], which is known as a prototype linkage.
