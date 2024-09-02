/*
  Using getter and setter to access private fields

*/

// The following redefines the Circle class by adding the radius getter and setter to provide access to the #radius private field:
class Circle {
  #radius = 0 // 1.

  constructor(radius) {
    this.radius = radius // 3. The constructor calls the radius setter to assign the argument to the #radius private field.
  }

  get area() {
    return Math.PI * Math.pow(this.#radius, 2)
  }

  // 2. The radius setter validates the argument before assigning it to the #radius private field. If the argument is not a positive number, the radius setter throws an error.
  set radius(value) {
    if (typeof value === 'number' && value > 0) {
      this.#radius = value
    } else {
      throw 'The radius must be a positive number'
    }
  }

  // The radius getter returns the value of the #radius private field.
  get radius() {
    return this.#radius
  }
}
