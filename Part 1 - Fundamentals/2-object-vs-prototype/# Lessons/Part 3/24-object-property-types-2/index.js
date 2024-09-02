/*
  Object Property types
    [[Configurable]] – determines whether a property can be redefined or removed via delete operator.
    [[Enumerable]] – indicates if a property can be returned in the for...in loop.
    [[Writable]] – specifies that the value of a property can be changed.
    [[Value]] – contains the actual value of a property.
  
*/

'use strict'

////////////////////////////
// The following example creates a person object and adds the ssn property to it using the Object.defineProperty() method:
let person1 = {}

Object.defineProperty(person1, 'ssn', {
  configurable: false,
  value: '012-38-9119',
})

// delete person1.ssn
// In this example, the configurable attribute is set to false. Therefore, deleting the ssn property causes an error.
// Also, once you define a property as non-configurable, you cannot change it to configurable.

// If you use the Object.defineProperty() method to change any attribute other than the writable, you’ll get an error. or example:
// Object.defineProperty(person1, 'ssn', {
//   configurable: true,
// })

////////////////////////////
// By default, the enumerable attribute of all the properties defined on an object is true. It means that you can iterate over all object properties using the for...in loop like this:
let person2 = {}
person2.age = 25
person2.ssn = '012-38-9119'

for (let property in person2) {
  console.log(property)
}

// The following makes the ssn property non-enumerable by setting the enumerable attribute to false.
let person3 = {}
person3.age = 25
person3.ssn = '012-38-9119'

Object.defineProperty(person3, 'ssn', {
  enumerable: false,
})

for (let prop in person3) {
  console.log(prop)
}
