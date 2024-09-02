/*
  Pass-By-Value
  - pic
  - In JavaScript, all function arguments are always "passed by value". It means that JavaScript copies the values of the variables into the function arguments. (stack)

  - Any changes that you make to the arguments inside the function do not reflect the passing variables outside of the function. In other words, the changes made to the arguments are not reflected outside of the function.

  - If function arguments are passed by reference, the changes of variables that you pass into the function will be reflected outside the function. This is not possible in JavaScript.

*/

//////////////////////////
// 1) Pass-by-value of primitives values
// Let’s take a look at the following example.
function square(x) {
  x = x * x // b) x is created and square in the stack
  return x
}

let y = 10 // a) y is created in the stack
let result = square(y)

console.log(result) // 100
console.log(y) // 10 -- no change

// If JavaScript used the pass-by-reference, the variable y would change to 100 after calling the function.

////////////////////////////
// 2) Pass-by-value of reference values
// It’s not obvious to see that reference values are also passed by values. For example:
let person = {
  name: 'John',
  age: 25,
}

function increaseAge(obj) {
  obj.age += 1
  obj = { name: 'Jane', age: 22 } // reference another object
  console.log('obj: ', obj)
}

increaseAge(person)

console.log('person: ', person)

// It seems that JavaScript passes an object by reference because the change to the object is reflected outside the function. However, this is not the case.
// In fact, when passing an object to a function, you are passing the reference of that object, not the actual object. Therefore, the function can modify the properties of the object via its reference.
