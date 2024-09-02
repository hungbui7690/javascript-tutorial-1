/*
  Demystifying the JavaScript this Keyword

  
*/

// Arrow functions
// 1) ES6 introduced a new concept called the arrow function. In arrow functions, JavaScript sets the this lexically.
// It means the arrow function does not create its own execution context but inherits the this from the outer function where the arrow function is defined. See the following example:
let getThis = () => this
console.log(getThis() === window) // true
// In this example, the this value is set to the global object i.e., window in the web browser.

// 2) Since an arrow function does not create its own execution context, defining a method using an arrow function will cause an issue. For example:
function Car() {
  this.speed = 120
}

Car.prototype.getSpeed = () => {
  return this.speed // this.speed === window.speed === undefined
}

var car = new Car()
console.log(car.getSpeed()) // 👉 undefined
// Inside the getSpeed() method, the this value reference the global object, not the Car object but the global object doesn’t have a property called speed. Therefore, the this.speed in the getSpeed() method returns undefined.
