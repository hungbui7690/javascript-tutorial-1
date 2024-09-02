/*
  Throw Exception
  - The throw statement allows you to throw an exception
  - Here’s the syntax of the throw statement:

        throw expression

  - In this syntax, the expression specifies the value of the exception. Typically, you’ll use a new instance of the Error class or its subclasses.

  - When encountering the throw statement, the JavaScript engine stops executing and passes the control to the first catch block in the call stack. If no catch block exists, the JavaScript engine terminates the script.

*/

/////////////////////////////
// 1) Using the JavaScript throw statement to throw an exception
// The following example uses the throw statement to throw an exception in a function:
// function add(x, y) {
//   if (typeof x !== 'number') {
//     throw 'The first argument must be a number'
//   }
//   if (typeof y !== 'number') {
//     throw 'The second argument must be a number'
//   }

//   return x + y
// }
// const result = add('a', 10)
// console.log(result)

/////////////////////////////
// 2) To handle the exception, you can use the try...catch statement. For example:
// function add(x, y) {
//   if (typeof x !== 'number') {
//     throw 'The first argument must be a number'
//   }
//   if (typeof y !== 'number') {
//     throw 'The second argument must be a number'
//   }
//   return x + y
// }

// try {
//   const result = add('a', 10)
//   console.log(result)
// } catch (e) {
//   console.log(e)
// }

/////////////////////////////
// 3) Using JavaScript throw statement to throw an instance of the Error class
// In the following example, we throw an instance of the Error class rather than a string in the add() function;
// function add(x, y) {
//   if (typeof x !== 'number') {
//     throw new Error('The first argument must be a number')
//   }
//   if (typeof y !== 'number') {
//     throw new Error('The second argument must be a number')
//   }

//   return x + y
// }

// try {
//   const result = add('a', 10)
//   console.log(result)
// } catch (e) {
//   console.log(e.name, ':', e.message)
// }

/////////////////////////////
// 4) Using JavaScript throw statement to throw a user-defined exception
// Sometimes, you want to throw a custom error rather than the built-in Error. To do that, you can define a custom error class that extends the Error class and throw a new instance of that class. For example:
// First, define the NumberError that extends the Error class:
class NumberError extends Error {
  constructor(value) {
    super(`"${value}" is not a valid number`)
    this.name = 'InvalidNumber'
  }
}
// The constructor() of the NumberError class accepts a value that you’ll pass into it when creating a new instance of the class.
// In the constructor() of the NumberError class, we call the constructor of the Error class via the super and pass a string to it. Also, we override the name of the error to the literal string NumberError. If we don’t do this, the name of the NumberError will be Error.

// Second, use the NumberError class in the add() function:
// In the add() function, we throw an instance of the NumberError class if the argument is not a valid number.
function add(x, y) {
  if (typeof x !== 'number') {
    throw new NumberError(x)
  }
  if (typeof y !== 'number') {
    throw new NumberError(y)
  }

  return x + y
}

// Third, catch the exception thrown by the add() function:
try {
  const result = add('a', 10)
  console.log(result)
} catch (e) {
  console.log(e.name, ':', e.message, { cause: e })
}
// In this example, the exception name is NumberError and the message is the one that we pass into the super() in the constructor() of the NumberError class.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error/Error
