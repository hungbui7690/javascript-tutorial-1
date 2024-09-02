/*
  The instanceof operator and inheritance

*/

// The following example defines the Employee class that extends the Person class:
class Person {
  constructor(name) {
    this.name = name
  }
}

class Employee extends Person {
  constructor(name, title) {
    super(name)
    this.title = title
  }
}

let e1 = new Employee()

// Since e1 is an instance of the Employee class, it’s also an instance of the Person and Object classes (base classes).
console.log(e1 instanceof Employee) // true
console.log(e1 instanceof Person) // true
console.log(e1 instanceof Object) // true
