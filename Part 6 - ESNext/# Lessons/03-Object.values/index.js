/*
  Object.values
  - access the own enumerable properties of an object.

*/

// Prior to ES2017, you use a for...in loop and Object.hasOwnProperty()  method to access values of own enumerable properties of an object. For example:
const person = {
  firstName: 'John',
  lastName: 'Doe',
  age: 25,
}
for (const key in person) {
  if (person.hasOwnProperty(key)) {
    const value = person[key]
    console.log(value)
  }
}

// The Object.values() accepts an object and returns its own enumerable property’s values as an array. See the following example:
const profile = Object.values(person)
console.log(profile) // ['John', 'Doe', 25]
