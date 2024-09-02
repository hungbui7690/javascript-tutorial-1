/*
  Factory Functions

*/

// A factory function is a function that returns a new object. The following creates a person object named person1:
let person1 = {
  firstName: 'John',
  lastName: 'Doe',
  getFullName() {
    return this.firstName + ' ' + this.lastName
  },
}

console.log(person1.getFullName())
// The person1 object has two properties: firstName and lastName, and one method getFullName() that returns the full name.

// Suppose that you need to create another similar object called person2, you can duplicate the code as follows:
let person2 = {
  firstName: 'Jane',
  lastName: 'Doe',
  getFullName() {
    return this.firstName + ' ' + this.lastName
  },
}

console.log(person2.getFullName())
// In this example, the person1 and person2 objects have the same properties and methods.
// The problem is that the more objects you want to create, the more duplicate code you have.

/////////////////////////////////
// To avoid copying the same code all over again, you can define a function that creates the person object:
function createPerson(firstName, lastName) {
  return {
    firstName: firstName,
    lastName: lastName,
    getFullName() {
      return firstName + ' ' + lastName
    },
  }
}
// When a function creates and returns a new object, it is called a factory function. The createPerson() is a factory function because it returns a new person object.

// The following shows how to use the createPerson() factory function to create two objects personX and personY:
let personX = createPerson('Hyun', 'Doe')
let personY = createPerson('Yoona', 'Doe')

console.log(personX.getFullName())
console.log(personY.getFullName())
// By using the factory function, you create any number of the person objects without duplicating code.
// When you create an object, the JavaScript engine allocates memory to it. If you create many person objects, the JavaScript engine needs lots of memory space to store these objects.
// However, each person object has a copy of the same getFullName() method. It’s not efficient memory management.

/////////////////////////////////
// To avoid duplicating the same getFullName() function in every object, you can remove the getFullName() method from the person object:
function createPersonX(firstName, lastName) {
  return {
    firstName: firstName,
    lastName: lastName,
  }
}

// And move this method to another object:
var personActions = {
  getFullName() {
    return this.firstName + ' ' + this.lastName
  },
}

// And before calling the getFullName() method on the person object, you can assign the method of the personActions object to the person object as follows:
let personA = createPerson('Alex', 'Doe')
let personB = createPerson('Ted', 'Doe')

person1.getFullName = personActions.getFullName
person2.getFullName = personActions.getFullName

console.log(personA.getFullName())
console.log(personB.getFullName())
// This approach is not scalable if the object has many methods because you have to manually assign them individually. This is why the Object.create() method comes into play.

/////////////////////////////////
// The Object.create() method creates a new object using an existing object as the prototype of the new object
var personActionsZ = {
  getFullName() {
    return this.firstName + ' ' + this.lastName
  },
}

function createPersonZ(firstName, lastName) {
  let person = Object.create(personActionsZ)
  person.firstName = firstName
  person.lastName = lastName
  return person
}

// Now, you can create person objects and call the methods of the personActions object:
let personM = createPerson('Torres', 'Doe')
let personN = createPerson('David', 'Doe')

console.log(personM.getFullName())
console.log(personN.getFullName())
// The code works perfectly fine. However, in practice, you will rarely use the factory functions. Instead, you use classes or constructor/prototype patterns.
