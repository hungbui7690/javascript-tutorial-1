/*
  TDZ

*/

// Temporal death zone (TDZ)
// A variable declared by the let keyword has a so-called temporal dead zone (TDZ). The TDZ is the time from the start of the block until the variable declaration is processed.
// The following example illustrates that the temporal dead zone is time-based, not location-based.
{
  // enter new scope, TDZ starts
  let log = function () {
    console.log(message) // message declared later
  }

  // This is the TDZ and accessing log
  // would cause a ReferenceError

  let message = 'Hello' // TDZ ends
  log() // called outside TDZ
}
// In this example:
// First, the curly brace starts a new block scope, therefore, the TDZ starts.
// Second, the log() function expression accesses the message variable. However, the log() function has not been executed yet.
// Third, declare the message variable and initialize its value to 'Hello'. The time from the start of the block scope to the time that the message variable is accessed is called a temporal death zone. When the JavaScript engine processes the declaration, the TDZ ends.
// Finally, call the log() function that accesses the message variable outside of the TDZ.

// Note that if you access a variable declared by the let keyword in the TDZ, you’ll get a ReferenceError as illustrated in the following example.

{
  // TDZ starts
  // console.log(typeof myVar) // undefined
  // console.log(typeof message) // ReferenceError
  // let message // TDZ ends
}
// Notice that myVar variable is a non-existing variable, therefore, its type is undefined.
// The temporal death zone prevents you from accidentally referencing a variable before its declaration.
