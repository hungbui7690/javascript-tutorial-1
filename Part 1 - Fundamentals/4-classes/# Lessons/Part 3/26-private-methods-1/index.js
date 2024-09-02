/*
  Private Methods
  - By default, members of a class are public. ES2020 introduced the private members that include private fields and methods.

  - To make a public method private, you prefix its name with a hash #. JavaScript allows you to define private methods for instance methods, static methods, and getter/setters.

  - To call the #privateMethod inside the MyClass, you use the this keyword as follows:
      @@ this.#privateMethod()

*/

// The following illustrates how to define the Person class with private instance methods:
class Person {
  // 1. First, define two private fields #firstName and #lastName in the Person class body.
  #firstName
  #lastName

  constructor(firstName, lastName) {
    this.#firstName = firstName
    this.#lastName = lastName
  }

  // 3. Third, define the public instance method getFullName() that returns a person’s full name. The getFullName() method calls the private method #firstLast() and #lastFirst() to return the full name.
  getFullName(format = true) {
    return format ? this.#firstLast() : this.#lastFirst()
  }

  // 2. Second, define the private methods #firstLast() and #lastFirst(). These methods return the full name in different formats.
  #firstLast() {
    return `${this.#firstName} ${this.#lastName}`
  }
  #lastFirst() {
    return `${this.#lastName}, ${this.#firstName}`
  }
}

let person = new Person('John', 'Doe')
console.log(person.getFullName()) // John Doe
