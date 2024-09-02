/*
  JavaScript new.target in constructors

*/

// In this example, new.target.name is the human-friendly name of the constructor reference of new.target
// In a class constructor, the new.target refers to the constructor that was invoked directly by the new operator. It is true if the constructor is in the parent class and was delegated from the constructor of the child class:
class Person {
  constructor(name) {
    this.name = name
    console.log(new.target.name) // # Person or Employee
  }
}

class Employee extends Person {
  constructor(name, title) {
    super(name)
    this.title = title
  }
}

let john = new Person('John Doe') // Person
let lily = new Employee('Lily Bush', 'Programmer') // Employee
