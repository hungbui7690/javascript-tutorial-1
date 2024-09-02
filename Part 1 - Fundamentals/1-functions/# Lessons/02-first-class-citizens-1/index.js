/*
  Functions are First-Class Citizens
  - Storing functions in variables
    > Functions are first-class citizens in JavaScript. In other words, you can treat functions like values of  other types.

*/

// The following defines the add() function and assigns the function name to the variable sum:
function add(a, b) {
  return a + b
}

// In the assignment statement, we don’t include the opening and closing parentheses at the end of the add identifier. We also don’t execute the function but reference the function.
let sum = add

// By doing this, we can have two ways to execute the same function. For example, we can call it normally as follows:
let result1 = add(10, 20)

// Alternatively, we can all the add() function via the sum variable like this:
let result2 = sum(10, 20)
