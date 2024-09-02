/*
  Prototypal Inheritance


*/

// A standard way to implement prototypal inheritance in ES5
// ES5 provided a standard way to work with prototypal inheritance by using the Object.create() method.
// Note that now you should use the newer ES6 class and extends keywords to implement inheritance. It’s much simpler.
// The Object.create() method creates a new object and uses an existing object as a prototype of the new object:
//    Object.create(proto, [propertiesObject])
let person = {
  name: 'John Doe',
  greet: function () {
    return "Hi, I'm " + this.name
  },
}

//////////////////////////
// METHOD 1: The following creates an empty teacher object with the __proto__ of the person object:
let teacher = Object.create(person)

// After that, you can define properties for the teacher object:
teacher.name = 'Jane Doe'
teacher.teach = function (subject) {
  return 'I can teach ' + subject
}

//////////////////////////
// METHOD 2: Or you can do all of these steps in one statement as follows:
// let teacher = Object.create(person, {
//   name: { value: 'John Doe' },
//   teach: {
//     value: function (subject) {
//       return 'I can teach ' + subject
//     },
//   },
// })

//////////////////////////
// ES5 also introduced the Object.getPrototypeOf() method that returns the prototype of an object. For example:
console.log(Object.getPrototypeOf(teacher) === person)
console.log(person)
console.log(Object.getPrototypeOf(teacher))
console.log(Object.getPrototypeOf(person))

/*
  Summary
  -  Inheritance allows an object to use the properties and methods of another object without duplicating the code.
  -  JavaScript uses the prototypal inheritance.
*/
