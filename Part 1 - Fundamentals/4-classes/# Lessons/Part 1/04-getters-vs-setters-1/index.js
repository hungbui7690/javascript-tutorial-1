/*
  Getters and Setters
  - Sometimes, you don’t want the name property to be accessed directly: person.name
  - To do that, you may come up with a pair of methods that manipulate the name property

  ++++++++++++
  - In this lesson, we create getName & setName as getter & setter methods

*/

class Person {
  constructor(name) {
    this.setName(name)
  }

  // this is just normal functions > does not have ES6 "get" & "set" keywords
  getName() {
    return this.name
  }
  setName(newName) {
    newName = newName.trim()
    if (newName === '') {
      throw 'The name cannot be empty'
    }
    this.name = newName
  }
}

let person = new Person('Jane Doe')
console.log(person) // Jane Doe

person.setName('Jane Smith')
console.log(person.getName()) // Jane Smith
console.log(person.name) // we still can access name property directly

/*
  In this example, the Person class has the name property. Also, it has two additional methods getName() and setName().

  The getName() method returns the value of the name property.

  The setName() method assigns an argument to the name property. The setName() removes the white spaces from both ends of the newName argument and throws an exception if the newName is empty.
*/
