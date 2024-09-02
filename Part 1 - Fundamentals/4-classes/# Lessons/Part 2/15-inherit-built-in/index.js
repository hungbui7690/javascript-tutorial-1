/*
  Inheriting from built-in types
  - JavaScript allows you to extend a built-in type such as Array, String, Map, and Set through inheritance.

*/

// The following Queue class extends the Array reference type. The syntax is much cleaner than the Queue implemented using the constructor/prototype pattern.
class Queue extends Array {
  enqueue(element) {
    super.push(element)
  }
  dequeue() {
    return super.shift()
  }
  peek() {
    return !this.empty() ? this[0] : undefined
  }
  empty() {
    return this.length === 0
  }
}

const customers = new Queue()
console.log('customers', customers)

customers.enqueue('A')
customers.enqueue('B')
customers.enqueue('C')
customers.dequeue()
console.log(customers)

while (!customers.empty()) {
  console.log(customers.dequeue())
}

/*
  Summary
  - Use the extends keyword to implement the inheritance in ES6. The class to be extended is called a base class or parent class. The class that extends the base class or parent class is called the derived class or child class.
  - Call the super(arguments) in the child class’s constructor to invoke the parent class’s constructor.
  - Use super keyword to call methods of the parent class in the methods of the child class.

*/
