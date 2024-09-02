/*
  Object.entries
  - returns its own enumerable string-keyed property [key, value] pairs of the object.

*/
const ssn = Symbol('ssn')
const person = {
  firstName: 'John',
  lastName: 'Doe',
  age: 25,
  [ssn]: '123-345-789',
}
const kv = Object.entries(person)
console.log(kv)
