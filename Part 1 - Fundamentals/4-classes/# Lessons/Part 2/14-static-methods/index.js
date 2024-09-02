/*
  Inheriting static members

*/

// Besides the properties and methods, the child class also inherits all static properties and methods of the parent class. For example:
class Animal {
  constructor(legs) {
    this.legs = legs
  }
  walk() {
    console.log('walking on ' + this.legs + ' legs')
  }
  // # static method
  static greeting() {
    console.log('Ec Ec')
  }
}

class Bird extends Animal {
  fly() {
    console.log('flying')
  }
}

// In this example, the Animal class has the greeting() static method and this method is available as Bird.greeting() and behaves the same as the Animal.greeting() method:
Animal.greeting()
Bird.greeting()
