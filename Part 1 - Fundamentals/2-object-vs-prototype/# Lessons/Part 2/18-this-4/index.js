/*
  Demystifying the JavaScript this Keyword

  
*/
// 2) Method invocation
// When you call a method of an object, JavaScript sets this to the object that owns the method. See the following car object:
let car = {
  brand: 'Honda',
  getBrand: function () {
    return this.brand
  },
}

console.log(car.getBrand()) // Honda

// In this example, the this object in the getBrand() method references the car object.
// Since a method is a property of an object which is a value, you can store it in a variable.
let brand1 = car.getBrand

// And then call the method via the variable
console.log(brand1()) // undefined
/*
  You get undefined instead of "Honda" because when you call a method without specifying its object, JavaScript sets this to the global object in non-strict mode and undefined in the strict mode.
*/

// To fix this issue, you use the bind() method of the Function.prototype object. The bind() method creates a new function whose the this keyword is set to a specified value.
let brand2 = car.getBrand.bind(car)
console.log(brand2()) // Honda

let bike = {
  brand: 'Harley Davidson',
}

// In this example, the bind() method sets the this to the bike object, therefore, you see the value of the brand property of the bike object on the console.
let brand3 = car.getBrand.bind(bike)
console.log(brand3()) // Harley Davidson
