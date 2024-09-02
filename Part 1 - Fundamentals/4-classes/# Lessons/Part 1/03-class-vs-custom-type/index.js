/*
  Class vs. Custom type
  - Despite the similarities between a class and a custom type defined via a constructor function, there are some important differences.

    First, class declarations are not hoisted like function declarations.
    + For example, if you place the following code above the Person class declaration section, you will get a ReferenceError.

        let john = new Person("John Doe");

    Second, all the code inside a class automatically executes in the strict mode. And you cannot change this behavior.

    Third, class methods are non-enumerable. If you use a constructor/prototype pattern, you have to use the Object.defineProperty() method to make a property non-enumerable.

    Finally, calling the class constructor without the new operator will result in an error as shown in the following example.
        
        let john = Person("John Doe");
        <> Uncaught TypeError: Class constructor Person cannot be invoked without 'new'

  @@ Note that it’s possible to call the constructor function without the new operator. In this case, the constructor function behaves like a regular function.

*/

class Person {
  constructor(name) {
    this.name = name
  }
  getName() {
    return this.name
  }
}

let john = new Person('John Doe')
let name = john.getName()
console.log(name)
console.log(typeof Person)
console.log(john instanceof Person)
console.log(john instanceof Object)
