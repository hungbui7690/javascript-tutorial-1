/*
  Singleton
  - Singleton is a design pattern that limits the instantiation of a class to a single instance. It ensures that only one instance of a class can be created throughout the system.

  - Class expressions can be used to create a singleton by calling the class constructor immediately.

*/

// Unnamed Class Expression
// To do that, you use the new operator with a class expression and include the parentheses at the end of the class declaration as shown in the following example:
let app = new (class {
  // The class has a constructor() that accepts an argument. It also has a method called start().
  constructor(name) {
    this.name = name
  }
  start() {
    console.log(`Starting the ${this.name}...`)
  }
})('Awesome App')

app.start() // Starting the Awesome App...

/*
  Summary

    ES6 provides you with an alternative way to define a new class using a class expression.
    Class expressions can be named or unnamed.
    The class expression can be used to create a singleton object.

*/
