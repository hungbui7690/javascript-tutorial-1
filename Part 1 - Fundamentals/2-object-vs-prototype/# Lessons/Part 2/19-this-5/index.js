/*
  Demystifying the JavaScript this Keyword

  
*/

// 3) Constructor invocation
// When you use the new keyword to create an instance of a function object, you use the function as a constructor.
// The following example declares a Car function, and then invokes it as a constructor:
function Car(brand) {
  this.brand = brand
}

Car.prototype.getBrand = function () {
  return this.brand
}

let car = new Car('Honda')
console.log(car.getBrand()) // Honda
// The expression new Car('Honda') is a constructor invocation of the Car function.
// JavaScript creates a new object and sets this to the newly created object. This pattern works great with only one potential problem.

// Now, you can invoke the Car() as a function or as a constructor. If you omit the new keyword as follows:
var bmw = Car('BMW')
// console.log(bmw.brand) // error

//////////////////////////////
// Since the this value in the Car() sets to the global object, the bmw.brand returns undefined.
// To make sure that the Car() function is always invoked using constructor invocation, you add a check at the beginning of the Car() function as follows:
function CarX(brand) {
  if (!(this instanceof CarX)) {
    throw Error('Must use the new operator to call the function')
  }
  this.brand = brand
}

//////////////////////////////
// ES6 introduced a meta-property named new.target that allows you to detect whether a function is invoked as a simple invocation or as a constructor.
// You can modify the Car() function that uses the new.target metaproperty as follows:
function CarY(brand) {
  if (!new.target) {
    throw Error('Must use the new operator to call the function')
  }
  this.brand = brand
}
