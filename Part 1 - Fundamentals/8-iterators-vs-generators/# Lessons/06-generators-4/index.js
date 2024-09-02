/*
  Using a generator to implement the Bag data structure
  - A Bag is a data structure that has the ability to collect elements and iterate through elements. It doesn’t support removing items.

*/

// The following script implements the Bag data structure:
class Bag {
  constructor() {
    this.elements = []
  }
  isEmpty() {
    return this.elements.length === 0
  }
  add(element) {
    this.elements.push(element)
  }
  *[Symbol.iterator]() {
    for (let element of this.elements) {
      yield element
    }
  }
}

let bag = new Bag()

bag.add(1)
bag.add(2)
bag.add(3)

for (let e of bag) {
  console.log(e)
}

/*
  Summary
  - Generators are created by the generator function function* f(){}.
  - Generators do not execute its body immediately when they are invoked.
  - Generators can pause midway and resumes their executions where they were paused. The yield statement pauses the execution of a generator and returns a value.
  - Generators are iterable so you can use them with the for...of loop.

*/
