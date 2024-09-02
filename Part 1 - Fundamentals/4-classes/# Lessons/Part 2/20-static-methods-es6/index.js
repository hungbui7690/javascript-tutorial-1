/*
  Static Methods in ES6
*/

// In ES6, you define static methods using the static keyword. The following example defines a static method called createAnonymous() for the Person class:
class Person {
  constructor(name) {
    this.name = name
  }
  getName() {
    const x = this.constructor.createAnonymous('female') // (2) to call a static method inside > use "this.constructor"
    return this.name
  }

  // (1)
  static createAnonymous(gender) {
    let name = gender == 'male' ? 'John Doe' : 'Jane Doe'
    return new Person(name)
  }
}

// To invoke the static method, you use the following syntax:
let anonymous = Person.createAnonymous('male')
console.log(anonymous)

// If you attempt to call the static method from an instance of the class, you’ll get an error. For example:
let person = new Person('James Doe')
// let anonymous1 = person.createAnonymous('male')// Error

let anonymous2 = person.constructor.createAnonymous('male') // (3)
console.log(anonymous2)

console.log(person.getName()) // James Doe
