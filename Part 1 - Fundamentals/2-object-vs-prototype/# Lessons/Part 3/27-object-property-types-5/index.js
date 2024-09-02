/*
  Object Property types
  - JavaScript object property descriptor  
    > The Object.getOwnPropertyDescriptor() method allows you to get the descriptor object of a property. The Object.getOwnPropertyDescriptor() method takes two arguments:
      + An object
      + A property of the object

    > It returns a descriptor object that describes a property. The descriptor object has four properties: configurable, enumerable, writable, and value.

*/

// The following example gets the descriptor object of the name property of the product object in the prior example.
let person = {
  firstName: 'John',
  lastName: 'Doe',
}

let descriptor = Object.getOwnPropertyDescriptor(person, 'firstName')

console.log(descriptor)
