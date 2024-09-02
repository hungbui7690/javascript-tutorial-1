/*
  Using generators to implement iterators
  - When you implement an iterator, you have to manually define the next() method. In the next() method, you also have to manually save the state of the current element.

  - Since generators are iterables, they can help you simplify the code for implementing iterator.

*/

// here is the new Sequence iterator that uses a generator:
class Sequence {
  constructor(start = 0, end = Infinity, interval = 1) {
    this.start = start
    this.end = end
    this.interval = interval
  }
  // add *
  // As you can see, the method Symbol.iterator is much simpler by using the generator.
  *[Symbol.iterator]() {
    for (let index = this.start; index <= this.end; index += this.interval) {
      yield index
    }
  }
}

// The following script uses the Sequence iterator to generate a sequence of odd numbers from 1 to 10:
let oddNumbers = new Sequence(1, 10, 2)
for (const num of oddNumbers) {
  console.log(num)
}
