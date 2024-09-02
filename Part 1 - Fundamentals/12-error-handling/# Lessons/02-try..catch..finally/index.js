/*
  try…catch…finally
  - The try...catch statement allows you to catch exceptions and handle them gracefully. 
  - Sometimes, you want to execute a block whether exceptions occur or not. 
  - In this case, you can use the try...catch...finally statement with the following syntax.
  - The finally block always executes after the try and catch blocks complete and whether exceptions occur or not.

*/

/////////////////////////////
// 1) Because the add() function does not exist, the JavaScript engine raises an exception.
// let result = 0
// try {
//   result = add(10, 20)
// } catch (e) {
//   console.log({ name: e.name, message: e.message })
// } finally {
//   console.log({ result })
// }

/////////////////////////////
// 2)
const add = (x, y) => x + y

try {
  result = add(10, 20)
} catch (e) {
  console.log(e.message)
} finally {
  console.log({ result })
}

//////////////////////////////
// 3) // try…catch…finally and return
// The finally block always executes whether exceptions occur or not. Also, you can do nothing to prevent it from executing including using a return statement. For example:
function fn() {
  try {
    return 1
  } catch {
    return 2
  } finally {
    return 3
  }
}
console.log(fn())

/*
  In this example, the return statement in the try block returns 1. Hence, the fn() function should have returned 1. However, it is not the case.

  Because the finally block always executes, the return statement in the finally block returns 3. Therefore, the fn() function returns 3.

  In other words, the return statements in the try and catch blocks are ignored in the try...catch...finally statement.
*/
