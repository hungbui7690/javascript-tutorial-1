/*
  Demystifying the JavaScript this Keyword
  - If you have been working with other programming languages such as Java, C#, or PHP, you’re already familiar with the this keyword.

  - In these languages, the this keyword represents the current instance of the class and it is only relevant within the class.

  - JavaScript also has this keyword. However, the this keyword in JavaScript behaves differently from other programming languages.

  - In JavaScript, you can use the this keyword in the global and function contexts. Moreover, the behavior of the  this keyword changes between strict and non-strict modes.

*/

// What is this keyword
// In general, the this references the object of which the function is a property. In other words, the this references the object that is currently calling the function.
// Suppose you have an object counter that has a method next(). When you call the next() method, you can access the this object.
let counter = {
  count: 0,

  // The next() is a function that is the property of the counter object. Therefore, inside the next() function, the this references the counter object.
  next: function () {
    return ++this.count // the "this" references the counter object
  },
}
counter.next()

// Global context
// In the global context, the this references the global object, which is the window object on the web browser or global object on Node.js.
// This behavior is consistent in both strict and non-strict modes. Here’s the output on the web browser:
console.log(this === window) // true

// If you assign a property to this object in the global context, JavaScript will add the property to the global object as shown in the following example:
this.color = 'Red'
console.log(window.color) // 'Red'
