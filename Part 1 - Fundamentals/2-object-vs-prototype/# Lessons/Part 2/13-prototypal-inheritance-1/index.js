/*
  Prototypal Inheritance
  - If you’ve worked with other object-oriented programming languages such as Java or C++, you’ve been familiar with the inheritance concept.

  - In this programming paradigm, a class is a blueprint for creating objects. If you want a new class to reuse the functionality of an existing class, you can create a new class that extends the existing class. This is called classical inheritance.

  - JavaScript doesn’t use classical inheritance. Instead, it uses prototypal inheritance.

  - In prototypal inheritance, an object “inherits” properties from another object via the prototype linkage.

*/

// Prototypal inheritance and __proto__
// Let’s take an example to make the concept clear.
// The following defines a person object:
let person = {
  name: 'John Doe',
  greet: function () {
    return "Hi, I'm " + this.name
  },
}
// By default, the JavaScript engine provides you with a built-in Object() function and an anonymous object that can be referenced by the Object.prototype (pic)
// Object -> constructor -> person

// It means that the person object can call any methods defined in the anonymous object referenced by the Object.prototype.
// For example, the following shows how to call the toString() method via the person object:
console.log(person.toString()) // [object Object]
// The [object Object] is the default string representation of an object.
// When you call toString() method via person, the JavaScript engine cannot find it on the person object. Therefore, it follows the prototype chain and searches for the method in the Object.prototype object.
// Since the JavaScript engine can find the toString() method in the Object.prototype object, it executes the toString() method.

// To access the prototype of the person object, you can use the __proto__ property as follows
console.log(person.__proto__) // ** Note that you should never use the __proto__ property in the production code. Please use it for demonstration purposes only.

// The following shows the person.__proto__ and Object.prototype references the same object:
console.log(person.__proto__ === Object.prototype) // true

// The following defines the teacher object that has the teach() method:
// Object -> constructor -> person
//                       -> teacher
let teacher = {
  teach: function (subject) {
    return 'I can teach ' + subject
  },
}

// If you want the teacher object to access all methods and properties of the person object, you can set the prototype of teacher object to the person object like this:
teacher.__proto__ = person

// Now, the teacher object can access the name property and greet() method from the person object via the prototype chain:
console.log(teacher.name)
console.log(teacher.greet())

// When you call the greet() method on the teacher object, the JavaScript engine finds it in the teacher object first.
// Since the JavaScript engine cannot find the method in the teacher object, it follows the prototype chain and searches for the method in the person object. Because the JavaScript engine can find the greet() method in the person object, it executes the method.
// In JavaScript, we say that the teacher object inherits the methods and properties of the person object. This kind of inheritance is called prototypal inheritance.
