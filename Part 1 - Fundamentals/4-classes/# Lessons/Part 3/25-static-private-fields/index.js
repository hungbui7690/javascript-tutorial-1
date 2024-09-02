/*
  Static private fields

*/

// The following example shows how to use a static private field:
class Circle {
  #radius = 0

  static #count = 0 // (1) First, add a private static field #count to the Circle class and initialize its value to zero:

  constructor(radius) {
    this.radius = radius
    Circle.#count++ // (2) Second, increase the #count by one
  }

  get area() {
    return Math.PI * Math.pow(this.radius, 2)
  }
  set radius(value) {
    if (typeof value === 'number' && value > 0) {
      this.#radius = value
    } else {
      throw 'The radius must be a positive number'
    }
  }
  get radius() {
    return this.#radius
  }
  static hasRadius(circle) {
    return #radius in circle
  }

  // (3) Third, define a static method that returns the value of the #count private static field:
  static getCount() {
    return Circle.#count
  }
}

// (4) Finally, create three instances of the Circle class and output the count value to the console:
let circles = [new Circle(10), new Circle(20), new Circle(30)]
console.log(Circle.getCount())
