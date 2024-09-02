/*
  Private fields and subclasses

*/

class Circle {
  #radius = 0

  constructor(radius) {
    this.radius = radius
  }
  get area() {
    return Math.PI * Math.pow(this.#radius, 2)
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
}

// Private fields are only accessible inside the class where they’re defined.
// Also, they’re not accessible from the subclasses. For example, the following defines the Cylinder class that extends the Circle class:
class Cylinder extends Circle {
  #height

  constructor(radius, height) {
    super(radius)
    this.#height = height

    // cannot access the #radius of the Circle class here
    // If you attempt to access the #radius private field in the Cylinder class, you’ll get a SyntaxError.
  }
}
