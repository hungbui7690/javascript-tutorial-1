/*
  forEach: Executing a Function on Every Element
  - The forEach() method iterates over elements in an array and executes a predefined function once per element.

*/

let ranks = ['A', 'B', 'C']

ranks.forEach(function (e) {
  console.log(e)
})

// Let’s take a look at an example of the forEach() method that uses a contextObject.
// The following illustrates Counter constructor function:
function Counter() {
  this.count = 0
  let self = this
  return {
    increase: function () {
      self.count++
    },
    current: function () {
      return self.count
    },
    reset: function () {
      self.count = 0
    },
  }
}

const counter = new Counter()
const numbers = [1, 2, 3]
let sum = 0

numbers.forEach(function (e) {
  sum += e
  this.increase()
}, counter)

console.log(sum) // 6
console.log(counter.current()) // 3

/*
  How it works.

    First, create a new Counter object.
    Next, define an array of three numbers.
    Then, declare a variable sum and assign it a value of zero.
    After that, call the forEach() method on the numbers array. In the callback function, add the element to the sum variable and call the increase() method of the counter object. Notice that the counter object is referred to as this inside the callback function.
    Finally, log the value of the sum and current value of the counter in the web console.
*/
