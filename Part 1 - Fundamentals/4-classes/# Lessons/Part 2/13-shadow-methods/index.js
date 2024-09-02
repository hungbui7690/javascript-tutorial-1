/*
  Shadowing methods
  - ES6 allows the child class and parent class to have methods with the same name. In this case, when you call the method of an object of the child class, the method in the child class will shadow the method in the parent class.

*/

class Animal {
  constructor(legs) {
    this.legs = legs
  }
  walk() {
    console.log('walking on ' + this.legs + ' legs')
  }
}

// The following Dog class extends the Animal class and redefines the walk() method:
class Dog extends Animal {
  constructor() {
    super(4) // # constructor() of Dog class does not have "legs" param
  }
  walk() {
    super.walk()
    console.log(`go walking`)
  }
}

let bingo = new Dog()
bingo.walk()
