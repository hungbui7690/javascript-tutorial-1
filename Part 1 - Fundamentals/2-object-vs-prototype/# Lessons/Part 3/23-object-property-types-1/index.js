/*
  Object Property types
  - JavaScript specifies the characteristics of properties of objects via internal attributes surrounded by the two pairs of square brackets, e.g., [[Enumerable]].

  - Objects have two types of properties: data and accessor properties.


  1) Data properties
    - A data property contains a single location for a data value. A data property has four attributes:

        [[Configurable]] – determines whether a property can be redefined or removed via delete operator.
        [[Enumerable]] – indicates if a property can be returned in the for...in loop.
        [[Writable]] – specifies that the value of a property can be changed.
        [[Value]] – contains the actual value of a property.

    - By default, the [[Configurable]] , [[Enumerable]]And [[Writable]] attributes set to true for all properties defined directly on an object. The default value of the[[Value]] attribute is undefined.

  
*/

// For example, the following creates a person object with two properties firstName and lastName with the configurable, enumerable, and writable attributes set to true and their values are set to 'John' and 'Doe' respectively:
let person1 = {
  firstName: 'John',
  lastName: 'Doe',
}
/*
  To change any attribute of a property, you use the Object.defineProperty() method.

  The Object.defineProperty() method accepts three arguments:

      An object.
      A property name of the object.
      A property descriptor object that has four properties: configurable, enumerable, writable, and value.

  If you use the Object.defineProperty() method to define a property of the object, the default values of [[Configurable]], [[Enumerable]], and [[Writable]] are set to false unless otherwise specified.
*/

// The following example creates a person object with the age property:
let person2 = {}
person2.age = 25

// Since the default value of the [[Configurable]] attribute is set to true, you can remove it via the delete operator:
delete person2.age
console.log(person2.age) // undefined
