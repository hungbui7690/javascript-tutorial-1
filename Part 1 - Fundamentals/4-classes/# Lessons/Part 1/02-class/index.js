/*
  ES6 class declaration

*/

// 1. ES6 introduced a new syntax for declaring a class as shown in this example:
class Person {
  constructor(firstName) {
    this.firstName = firstName
  }
  getFirstName() {
    return this.firstName
  }
}
/*
  This Person class behaves like the Person type in the previous example. However, instead of using a factory/prototype pattern, it uses the class keyword.
  
  In the Person class, the constructor() is where you can initialize the properties of an instance. JavaScript automatically calls the constructor() method when you instantiate an object of the class.
*/

// 2. The following creates a new Person object, which will automatically call the constructor() of the Person class:
let john = new Person('John Doe')

// 3. The getFirstName() is called a method of the Person class. Like a constructor function, you can call the methods of a class using the following syntax:
let firstName = john.getFirstName()
console.log(firstName) // "John Doe"

// 4. To verify the fact that classes are special functions, you can use the typeof operator of to check the type of the Person class.
console.log(typeof Person) // function

// 5. The john object is also an instance of the Person and Object types:
console.log(john instanceof Person) // true
console.log(john instanceof Object) // true
