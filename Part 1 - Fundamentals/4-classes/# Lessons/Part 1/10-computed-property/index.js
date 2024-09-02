/*
  JavaScript Computed Property
  - ES6 allows you to use an expression in brackets []. It’ll then use the result of the expression as the property name of an object. For example:

*/

// In this example, the [propName] is a computed property of the rank object. The property name is derived from the value of the propName variable.
// When you access c property of the rank object, JavaScript evaluates propName and returns the property’s value.
let propName = 'c'

const rank = {
  a: 1,
  b: 2,
  [propName]: 3,
}

console.log(rank.c) // 3
console.log(rank[propName])

////////////////////////////
// Like an object literal, you can use computed properties for getters and setters of a class. For example:
let name = 'fullName'

class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName
    this.lastName = lastName
  }
  get [name]() {
    return `${this.firstName} ${this.lastName}`
  }
}

let person = new Person('John', 'Doe')
console.log(person.fullName)

// The get[name] is a computed property name of a getter of the Person class. At runtime, when you access the fullName property, the person object calls the getter and returns the full name.
