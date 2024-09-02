/*
  Classes before ES6 revisited

*/

// Before ES6, JavaScript had no concept of classes. To mimic a class, you often use the factory/prototype pattern as shown in the following example:
function Person(name) {
  this.name = name
}

Person.prototype.getName = function () {
  return this.name
}

const john = new Person('John Doe')
console.log(john.getName())

/*
  How it works.
  - First, create the Person as a constructor function that has a property name called name. The getName() function is assigned to the prototype so that it can be shared by all instances of the Person type.

  - Then, create a new instance of the Person type using the new operator. The john object, hence, is an instance of the Person and Object through prototypal inheritance.
*/

// The following statements use the instanceof operator to check if john is an instance of the Person and Object type:
console.log(john instanceof Person) // true
console.log(john instanceof Object) // true
