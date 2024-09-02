/*
  new.target
  - To prevent a constructor function from being invoked without the new keyword, ES6 introduced the new.target property.

  - If a constructor function is called with the new keyword, the new.target returns a reference of the function. Otherwise, it returns undefined.

*/

// The following adds a statement to the Person function to show the new.target to the console:
function Person(firstName, lastName) {
  console.log(new.target) // return undefined when calling without "new" keyword

  // METHOD 1: By using the new.target, you can force the callers of the constructor function to use the new keyword. Otherwise, you can throw an error like this:
  // if (!new.target) {
  //   throw Error('Cannot be called without the new keyword')
  // }

  // METHOD 2: Alternatively, you can make the syntax more flexible by creating a new Person object if the users of the constructor function don’t use the new keyword:
  // This pattern is often used in JavaScript libraries and frameworks to make the syntax more flexible.
  if (!new.target) {
    return new Person(firstName, lastName)
  }

  this.firstName = firstName
  this.lastName = lastName

  this.getFullName = function () {
    return this.firstName + ' ' + this.lastName
  }
}

// The following returns undefined because the Person constructor function is called like a regular function:
let person1 = Person('John', 'Doe')
console.log(person1)

// However, the following returns a reference to the Person function because it’s called the new keyword:
let person2 = new Person('John', 'Doe')
console.log(person2)
