/*
  try..catch
  - e.name
  - e.message

*/

/////////////////////////////
// 1) When the JavaScript engine encounters an error, it issues that error and immediately terminates the execution of the entire script. In the above example, the code execution stops at the first line because add() does not exist.
// let result = add(10, 20)
// console.log(result)
// console.log('Bye')

/////////////////////////////
// 2) Sometimes, you want to handle the error and continue the execution > use try..catch
/*
  - First, place the code that may cause an error in the try block.
  - Second, implement the logic to handle the error in the catch block.

  If an error occurs in the try block, the JavaScript engine immediately executes the code in the catch block. Also, the JavaScript engine provides you with an error object that contains detailed information about the error.

  Basically, the error object has at least two properties:
  - name specifies the error name.
  - message explains the error in detail.

  If no error occurs in the try block, the JavaScript engine ignores the catch block.

  ~~ Note that web browsers may add more properties to the error object. For example, Firefox adds filename, lineNumber, and stack properties to the error object.
  *** It’s a good practice to place only the code that may cause an exception in the try block.
*/
//  The following example uses the try...catch statement to handle the error:
// try {
//   let result = add(10, 20)
//   console.log(result)
// } catch (e) {
//   console.log(Object.getOwnPropertyNames(e)) // [('stack', 'message')]
//   console.log({ name: e.name, message: e.message })
// }
// console.log('Bye')

/////////////////////////////
// 3) Ignoring the catch block
// The following example defines the add() function that returns the sum of two arguments:
const add = (x, y) => x + y

try {
  let result = add(10, 20)
  console.log(result)
} catch (e) {
  console.log({ name: e.name, message: e.message })
}
console.log('Bye')
// In this example, no error occurs because the add() function exists. Therefore, the JavaScript engine skips the catch block.

/////////////////////////////
// 4) The exception identifier
// When an exception occurs in the try block, the exception variable (e) in the catch block stores the exception object.
// If you don’t want to use the exception variable, you can omit it.
// For example, the following uses the try…catch statement without the exception variable:
const isValidJSON = (str) => {
  try {
    JSON.parse(str)
    return true
  } catch {
    return false
  }
}
let valid1 = isValidJSON(`{"language":"JavaScript"}`)
let valid2 = isValidJSON(`xxxx{"language":"JavaScript"}`)
console.log(valid1) // true
console.log(valid2) // false
