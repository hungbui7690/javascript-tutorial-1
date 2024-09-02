/*
  Private Methods
  - Prefix a method name the # to make it private.
  - Private methods can be called inside the class, not from outside of the class or in the subclasses.

*/

// The following adds the #validate() private static method to the Person class:
class Person {
  #firstName
  #lastName

  // 2. Second, call the #validate() private static method in the constructor to validate the firstName and lastName arguments before assigning them to the corresponding private attributes.
  constructor(firstName, lastName) {
    this.#firstName = Person.#validate(firstName)
    this.#lastName = Person.#validate(lastName)
  }

  getFullName(format = true) {
    return format ? this.#firstLast() : this.#lastFirst()
  }

  // 1. First, define the static method #validate() that returns a value if it is a string with at least three characters. The method raises an exception otherwise.
  static #validate(name) {
    if (typeof name === 'string') {
      let str = name.trim()
      if (str.length >= 3) {
        return str
      }
    }
    throw 'The name must be a string with at least 3 characters'
  }

  #firstLast() {
    return `${this.#firstName} ${this.#lastName}`
  }
  #lastFirst() {
    return `${this.#lastName}, ${this.#firstName}`
  }
}

let person = new Person('John', 'Doe')
console.log(person.getFullName())
