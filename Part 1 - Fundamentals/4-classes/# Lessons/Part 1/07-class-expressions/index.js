/*
  Class Expressions
  - Similar to functions, classes have expression forms. A class expression provides you with an alternative way to define a new class.
  
  - A class expression doesn’t require an identifier after the class keyword. You can use a class expression in a variable declaration and pass it into a function as an argument.

  - Similar to function expressions, class expressions are not hoisted. It means that you cannot create an instance of the class before defining the class expression.

*/

let Person = class {
  constructor(name) {
    this.name = name
  }
  getName() {
    return this.name
  }
}

let person = new Person('John Doe')

console.log(typeof Person) // function
