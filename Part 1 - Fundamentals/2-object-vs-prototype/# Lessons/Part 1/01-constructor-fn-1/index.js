/*
  Constructor Function

*/

// For example, the following creates a new person object with two properties firstName and lastName:
let person = {
  firstName: 'John',
  lastName: 'Doe',
}
/*
  In practice, you often need to create many similar objects like the person object.

  To do that, you can use a constructor (factory) function to define a custom type and the new operator to create multiple objects from this type.

  Technically speaking, a constructor function is a regular function with the following convention:

      The name of a constructor function starts with a capital letter like Person, Document, etc.
      A constructor function should be called only with the new operator.

*/

////////////////////////////////
// The following example defines a constructor function called Person:
function Person(firstName, lastName) {
  this.firstName = firstName
  this.lastName = lastName
}

// To create a new instance of the Person, you use the new operator:
let personX = new Person('John', 'Doe')

/*
  Basically, the new operator does the following:
  - Create a new empty object and assign it to the this variable.
  - Assign the arguments 'John' and 'Doe' to the firstName and lastName properties of the object.
  - Return the this value.

  - Under the hood, it will look like this
      function Person(firstName, lastName) {
        this = {}
        
        this.firstName = firstName // add properties to this
        this.lastName = lastName

        return this;
  }

  Therefore, the following statement:

    let person = new Person('John','Doe');
    
  … returns the same result as the following statement:

    let person = {
        firstName: 'John',
        lastName: 'Doe'
    };
*/

// However, the constructor function Person allows you to create multiple similar objects. For example:
let person1 = new Person('Jane', 'Doe')
let person2 = new Person('James', 'Smith')
