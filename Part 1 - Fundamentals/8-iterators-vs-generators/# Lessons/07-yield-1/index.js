/*
  JavaScript yield
  - The yield keyword allows you to pause and resume a generator function (function*).

  - The following shows the syntax of the yield keyword:
      [variable_name] = yield [expression]

  - In this syntax:
    > The expression specifies the value to return from a generator function via the iteration protocol. If you omit the expression, the yield returns undefined.
    > The variable_name stores the optional value passed to the next() method of the iterator object.

*/

// A) Returning a value
// The following trivial example illustrates how to use the yield keyword to return a value from a generator function:
function* foo() {
  yield 1
  yield 2
  yield 3
}

let f = foo()

// As you can see the value that follows the yield is added to the value property of the return object when the next() is called:
console.log(f.next()) // { value: 1, done: false }
