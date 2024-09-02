/*
  JavaScript Generators

*/

// The following example illustrates how to use a generator to generate a never-ending sequence:
function* forever() {
  let index = 0
  while (true) {
    yield index++
  }
}

let f = forever()
console.log(f.next()) // 0
console.log(f.next()) // 1
console.log(f.next()) // 2

// Each time you call the next() method of the forever generator, it returns the next number in the sequence starting from 0.

/*
  JavaScript Generators

*/

//////////////////////////////
// In JavaScript, a regular function is executed based on the run-to-completion model. It cannot pause midway and then continues from where it paused. For example:
function foo() {
  console.log('I')
  console.log('cannot')
  console.log('pause')
}
// The foo() function executes from top to bottom. The only way to exit the foo() is by returning from it or throwing an error. If you invoke the foo() function again, it will start the execution from the top to bottom.
foo()

//////////////////////////////
// ES6 introduces a new kind of function that is different from a regular function: function generator or generator.
// A generator can pause midway and then continues from where it paused. For example:
function* generate() {
  console.log('invoked 1st time')
  yield 1
  console.log('invoked 2nd time')
  yield 2
}

/*
  Let’s examine the generate() function in detail.
  -  First, you see the asterisk (*) after the function keyword. The asterisk denotes that the generate() is a generator, not a normal function.
  -  Second, the yield statement returns a value and pauses the execution of the function.
 */

//////////////////////////////
// The following code invokes the generate() generator:
let gen = generate()

/*
  When you invoke the generate() generator:
  -  First, you see nothing in the console. If the generate() were a regular function, you would expect to see some messages.
  -  Second, you get something back from generate() as a returned value.
 */

//////////////////////////////
console.log(gen) // Object [Generator] {}

/*
  - So, a generator returns a Generator object without executing its body when it is invoked.

  - The Generator object returns another object with two properties: done and value. In other words, a Generator object is iterable.
*/

//////////////////////////////
// The following calls the next() method on the Generator object:
// let result = gen.next()
// console.log(result) // {value: 1, done: false}

/*
  - As you can see, the Generator object executes its body which outputs message 'invoked 1st time' at line 1 and returns the value 1 at line 2.

  - The yield statement returns 1 and pauses the generator at line 2.
*/

//////////////////////////////
// result = gen.next()
// console.log(result) // {value: 2, done: false}
// This time the Generator resumes its execution from line 3 that outputs the message 'invoked 2nd time' and returns (or yield) 2.

//////////////////////////////
// The following invokes the next() method of the generator object a third time:
// result = gen.next()
// console.log(result) // {value: undefined, done: true}

//////////////////////////////
//////////////////////////////
// Comment the code above to run this code
// Since a generator is iterable, you can use the for...of loop:
for (const g of gen) {
  console.log(g)
}
