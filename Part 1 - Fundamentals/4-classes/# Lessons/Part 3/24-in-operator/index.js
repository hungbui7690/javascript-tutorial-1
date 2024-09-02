/*
  The in operator: check private fields exist

*/

// For example, the following adds the hasRadius() static method to the Circle class that uses the in operator to check if the circle object has the #radius private field:
class Circle {
  #radius = 0

  constructor(radius) {
    this.radius = radius
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

  // (1)
  static hasRadius(circle) {
    return #radius in circle
    // return this.radius in circle // using getter here will return false
  }
}

let circle = new Circle(10)
console.log(Circle.hasRadius(circle)) // (2) true
