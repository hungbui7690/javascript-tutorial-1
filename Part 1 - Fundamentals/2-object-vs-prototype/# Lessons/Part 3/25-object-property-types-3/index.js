/*
  Object Property types
  2) Accessor properties
    - Similar to data properties, accessor properties also have [[Configurable]] and [[Enumerable]] attributes.

    - But the accessor properties have the [[Get]] and [[Set]] attributes instead of [[Value]] and [[Writable]].

    - When you read data from an accessor property, the [[Get]] function is called automatically to return a value. The default return value of the [[Get]] function is undefined.

    - If you assign a value to an accessor property, the [[Set]] function is called automatically.
  
*/

// To define an accessor property, you must use the Object.defineProperty() method. For example:
// First, define the person object that contains two properties: firstName and lastName.
let person = {
  firstName: 'John',
  lastName: 'Doe',
}

// Then, add the fullName property to the person object as an accessor property.
Object.defineProperty(person, 'fullName', {
  // The [[Get]] returns the full name that is the result of concatenating of firstName, space, and lastName.
  get: function () {
    return this.firstName + ' ' + this.lastName
  },
  // The [[Set]] method splits the argument by the space and assigns the firstName and lastName properties of the corresponding parts of the name.
  set: function (value) {
    let parts = value.split(' ')
    if (parts.length == 2) {
      this.firstName = parts[0]
      this.lastName = parts[1]
    } else {
      throw 'Invalid name format' // If the full name is not in the correct format i.e., first name, space, and last name, it will throw an error.
    }
  },
})

console.log(person.fullName)
