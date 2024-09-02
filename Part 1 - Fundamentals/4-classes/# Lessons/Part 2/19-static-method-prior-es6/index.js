/*
  Static Methods
  - By definition, static methods are bound to a class, not the instances of that class. Therefore, static methods are useful for defining helper or utility methods.

*/

// To define a static method before ES6, you add it directly to the constructor of the class. For example, suppose you have a Person type as follows:
function Person(name) {
  this.name = name
}

// Normal Method
Person.prototype.getName = function () {
  return this.name
}

// The following adds a static method called createAnonymous() to the Person type:
Person.createAnonymous = function (gender) {
  let name = gender == 'male' ? 'John Doe' : 'Jane Doe'
  return new Person(name)
}

// The createAnonymous() method is considered a static method because it doesn’t depend on any instance of the Person type for its property values.
// To call the createAnonymous() method, you use the Person type instead of its instances:
console.log(Person.createAnonymous()) // Person {name: 'Jane Doe'}
