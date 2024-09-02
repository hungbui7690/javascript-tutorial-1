/*
  The apply() and call() methods
  - The apply() and call() methods call a function with a given this value and arguments.

*/

let cat = { type: 'Cat', sound: 'Meow' }
let dog = { type: 'Dog', sound: 'Woof' }

const say = function (message) {
  console.log(message)
  console.log(this.type + ' says ' + this.sound)
}

// 1) call: you pass the arguments to the call() function individually
say.call(cat, 'What does a cat say?')
say.call(dog, 'What does a dog say?')

// 2) apply: you need to pass the arguments to the apply() method as an array-like object
say.apply(cat, ['What does a cat say?'])
say.apply(dog, ['What does a dog say?'])

/////////////////////////////
// 3) bind: creates a new function instance whose this value is bound to the object that you provide
let car = {
  speed: 5,
  start: function () {
    console.log('Start with ' + this.speed + ' km/h')
  },
}

let aircraft = {
  speed: 10,
  fly: function () {
    console.log('Flying')
  },
}

// The aircraft has no start() method. To start an aircraft, you can use the bind() method of the start() method of the car object:
let taxiing = car.start.bind(aircraft)

// Now, you can call the start() method via the taxiing variable:
taxiing()

// The following uses the call() method to call the start() method on the aircraft object:
car.start.call(aircraft)

/*
  As you can see, the bind() method creates a new function that you can execute later while the call() method executes the function immediately. This is the main difference between the bind() and call() methods.

  Technically, the aircraft object borrows the start() method of the car object via the bind(), call() or apply() method.

  For this reason, the bind(), call(), and apply() methods are also known as borrowing functions.

*/
