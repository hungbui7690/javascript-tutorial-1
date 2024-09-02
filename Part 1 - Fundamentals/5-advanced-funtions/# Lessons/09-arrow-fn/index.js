/*
  JavaScript Arrow Functions
  - ES6 arrow functions provide you with an alternative way to write a shorter syntax compared to the function expression.

*/

// PROBLEM
function Car() {
  this.speed = 0

  // Inside the anonymous function of the setTimeout() function, the this.speed is undefined. The reason is that the this of the anonymous function shadows the this of the speedUp() method.
  this.speedUp = function (speed) {
    this.speed = speed
    setTimeout(function () {
      console.log(this.speed) // undefined
    }, 1000)
  }
}

let car = new Car()
car.speedUp(50)

/////////////////////////////
// METHOD 1: To fix this, you assign the this value to a variable that doesn’t shadow inside the anonymous function as follows:
function CarX() {
  this.speed = 0

  this.speedUp = function (speed) {
    this.speed = speed
    let self = this
    setTimeout(function () {
      console.log(self.speed)
    }, 1000)
  }
}

let carX = new CarX()
carX.speedUp(50) // 50;

/////////////////////////////
// METHOD 2: Unlike an anonymous function, an arrow function captures the this value of the enclosing context instead of creating its own this context. The following code should work as expected:
function CarY() {
  this.speed = 0

  this.speedUp = function (speed) {
    this.speed = speed
    setTimeout(() => console.log(this.speed), 1000)
  }
}

let carY = new CarY()
carY.speedUp(50) // 50;

/////////////////////////////
// JavaScript arrow functions and the arguments object
const show = () => {
  // console.log(arguments) // err
}
let result = show(5)

function display() {
  console.log(arguments)
}
let z = display(10, 20)

function testX() {
  console.log(arguments) // this is ok
  return (x) => x + arguments[0]
}
let x = testX(10, 20)
let resultX = x(5)
console.log(resultX)
