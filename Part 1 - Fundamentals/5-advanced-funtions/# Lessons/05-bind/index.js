/*
  bind() Method


*/

// When you pass a method an object is to another function as a callback, the "this" is lost. For example:
let person = {
  name: 'John Doe',
  getName: function () {
    console.log(this.name)
  },
}

setTimeout(person.getName, 1000) // lost person context

let f1 = person.getName
setTimeout(f1, 1000) // lost person context

// 1) To fix the issue, you can wrap the call to the person.getName method in an anonymous function, like this:
setTimeout(function () {
  person.getName()
}, 1000)
// This works because it gets the person from the outer scope and then calls the method getName().

// 2) Or you can use the bind() method:
let f2 = person.getName.bind(person)
setTimeout(f2, 1000)

// 3) Using bind() to borrow methods from a different object
let runner = {
  name: 'Runner',
  run: function (speed) {
    console.log(this.name + ' runs at ' + speed + ' mph.')
  },
}
let flyer = {
  name: 'Flyer',
  fly: function (speed) {
    console.log(this.name + ' flies at ' + speed + ' mph.')
  },
}

// If you want the flyer object to be able to run, you can use the bind() method to create the run() function with the this  sets to the flyer object:
let run = runner.run.bind(flyer, 20)
run()
