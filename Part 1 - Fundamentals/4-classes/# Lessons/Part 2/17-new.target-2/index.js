/*
  JavaScript new.target

*/

// Suppose you don’t want the Person to be called as a function, you can use the new.target as follows:
// Now, the only way to use Person is to instantiate an object from it by using the new operator. If you try to invoke it like a regular function, you will encounter an error.
function Person(name) {
  // new.target === this object === Person
  if (!new.target) {
    throw 'must use new operator with Person'
  }
  this.name = name
}

const john = new Person('john')
// const lily = Person('Lily') // Err: Uncaught must use new operator with Person
