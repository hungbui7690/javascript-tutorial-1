/*
  Iterators
  - Since ES6 provides built-in iterators for the collection types  Array, Set, and Map, you don’t have to create iterators for these objects.

  - If you have a custom type and want to make it iterable so that you can use the for...of loop construct, you need to implement the iteration protocols.

*/

// The following code creates a Sequence object that returns a list of numbers in the range of ( start, end) with an interval between subsequent numbers.
class Sequence {
  constructor(start = 0, end = Infinity, interval = 1) {
    this.start = start
    this.end = end
    this.interval = interval
  }

  [Symbol.iterator]() {
    let counter = 0
    let nextIndex = this.start
    return {
      next: () => {
        if (nextIndex <= this.end) {
          let result = { value: nextIndex, done: false }
          nextIndex += this.interval
          counter++
          return result
        }
        return { value: counter, done: true }
      },
    }
  }
}

//////////////////////////////
// The following code uses the Sequence iterator in a for...of loop:
let evenNumbers = new Sequence(2, 10, 2)

for (const num of evenNumbers) {
  console.log(num)
}

//////////////////////////////
// You can explicitly access the [Symbol.iterator]() method as shown in the following script:
// let iterator = evenNumbers[Symbol.iterator]()
// let result = iterator.next()

// while (!result.done) {
//   console.log(result.value)
//   result = iterator.next()
// }
