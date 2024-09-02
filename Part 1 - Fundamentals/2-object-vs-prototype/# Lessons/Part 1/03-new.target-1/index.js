/*
  new.target

*/

// Calling a constructor function without the new keyword
function Person(firstName, lastName) {
  this.firstName = firstName
  this.lastName = lastName

  this.getFullName = function () {
    return this.firstName + ' ' + this.lastName
  }
}

// Technically, you can call a constructor function like a regular function without using the new keyword like this:
let person = Person('John', 'Doe')

// In this case, the Person just executes like a regular function. Therefore, the this inside the Person function doesn’t bind to the person variable but the global object.
// If you attempt to access the firstName or lastName property, you’ll get an error:
// console.log(person.firstName) // err

// firstName & lastName & getFullName is bound to window object
console.log(window.firstName) // John
