/*
  <get> & <set> keyword

*/

// ES6 provides a specific syntax for defining the getter and setter using the get and set keywords. For example:
class Person {
  constructor(name) {
    this._name = name // *** the name property is changed to _name to avoid the name collision with the getter and setter.
  }
  get name() {
    return this._name + ' X'
  }
  set name(newName) {
    newName = newName.trim()
    if (newName === '') {
      throw 'The name cannot be empty'
    }
    this._name = newName
  }
}

const person = new Person('John')
console.log(person.name) // getter: now, we cannot access directly to "this._name" anymore
console.log(person._name) // but, we still access directly like this

person.name = 'Jane Smith' // setter
console.log(person.name)
