/*
  Symbol.hasInstance


*/

// In ES6, the instanceof operator uses the Symbol.hasInstance function to check the relationship. The Symbol.hasInstance() accepts an object and returns true if a type has that object as an instance. For example:
class Person {
  constructor(name) {
    this.name = name
  }
}

// You can redefine the Symbol.hasInstance on a subclass as a static method. For example:
class Android extends Person {
  static [Symbol.hasInstance]() {
    return false
  }
}

let p1 = new Person('John')
console.log(Person[Symbol.hasInstance](p1)) // true => Since the Symbol.hasInstance is defined on the Function prototype, it’s automatically available by default in all functions and classes

let a1 = new Android('Sonny')
console.log(a1 instanceof Android) // false
console.log(a1 instanceof Person) // true
console.log(p1 instanceof Person) // true
