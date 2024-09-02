/*
  The arguments object
  - Inside a function, you can access an object called arguments that represents the named arguments of the function.

  - The arguments object behaves like an array though it is not an instance of the Array type.

  - For example, you can use the square bracket [] to access the arguments: arguments[0] returns the first argument, arguments[1] returns the second one, and so on.

  - Also, you can use the length property of the arguments object to determine the number of arguments.

*/

// The following example implements a generic add() function that calculates the sum of any number of arguments.
function add() {
  let sum = 0
  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i]
  }
  return sum
}

console.log(add(1, 2)) // 3
console.log(add(1, 2, 3, 4, 5)) // 15
