/*
  Optional catch Binding
  - In the catch block, you can access the Error object that contains detailed information on the error.

*/

/////////////////////////////
// 1) In practice, you may want to use the try...catch statement to check if a feature is implemented in the web browser. If it isn’t, you want to fall back to a less desirable feature with broader support. For example:
try {
  // check if a feature is implemented
} catch (error) {
  // fall back to a less desirable feature
}

// 2) In this case, the error object is declared but never used.
// ES2019 introduced the optional catch binding that allows you to omit the catch binding and its surrounding parentheses, like this:
try {
} catch {}
