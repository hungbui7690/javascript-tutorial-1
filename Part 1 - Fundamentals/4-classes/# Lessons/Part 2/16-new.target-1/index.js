/*
  JavaScript new.target
  - ES6 provides a metaproperty named "new.target" that allows you to detect whether a function or constructor was called using the "new" operator.
  - The new.target consists of the new keyword, a dot, and target property. The new.target is available in all functions.
  - However, in arrow functions, the new.target is the one that belongs to the surrounding function.

  @@ The new.target is very useful to inspect at runtime whether a function is being executed as a function or as a constructor. It is also handy to determine a specific derived class that was called by using the new operator from within a parent class.

*/

// Let’s see the following Person constructor function:
function Person(name) {
  this.name = name
}

// You can create a new object from the Person function by using the new operator as follows:
let john = new Person('John')
console.log(john.name) // john

// Or you can call the Person as a function (without "new" keyword):
const lily = Person('Lily')
console.log(lily) // undefined

// Because the this is set to the global object i.e., the window object when you run JavaScript in the web browser, the name property is added to the window object as follows:
console.log(window.name) //Lily
console.log(this.name) //Lily
