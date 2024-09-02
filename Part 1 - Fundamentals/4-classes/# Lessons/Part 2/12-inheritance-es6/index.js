/*
  Inheritance Using extends & super
  - The following example defines the Animal and Bird classes and establishes the inheritance through the extends and super keywords.
  - If the Bird class doesn’t have a constructor, you don’t need to do anything else:
      @@
        class Bird extends Animal {
            fly() {
                console.log('flying');
            }
        }
      @@
*/

// The Animal class is called a base class or parent class while the Bird class is known as a derived class or child class. By doing this, the Bird class inherits all methods and properties of the Animal class.
class Animal {
  constructor(legs) {
    this.legs = legs
  }
  walk() {
    console.log('walking on ' + this.legs + ' legs')
  }
}

// First, use the extends keyword to make the Bird class inheriting from the Animal class:
class Bird extends Animal {
  constructor(legs, color) {
    // Second, in the Bird‘s constructor, call super() to invoke the Animal‘s constructor with the legs argument. Because the super() initializes the this object, you need to call the super() before accessing the this object. Trying to access this before calling super() also results in an error.
    super(legs) // equivalent to: Animal.call(this, legs);
    this.color = color
  }
  fly() {
    console.log('Bird Fly')
  }
  getColor() {
    return this.color
  }
}

let bird = new Bird(2)
bird.walk() // bird can use walk() from Animal
bird.fly()

let pegion = new Bird(2, 'white')
console.log(pegion.getColor())
