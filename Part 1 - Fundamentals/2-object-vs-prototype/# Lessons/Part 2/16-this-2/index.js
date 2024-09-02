/*
  Demystifying the JavaScript this Keyword

  
*/

// Function context
// In JavaScript, you can call a function in the following ways:
//  - Function invocation
//  - Method invocation
//  - Constructor invocation
//  - Indirect invocation
// Each function invocation defines its own context. Therefore, the this behaves differently.
// 1) Simple function invocation
// In the non-strict mode, the this references the global object when the function is called as follows:
function show() {
  console.log(this === window) // true
}

show()

// When you call the show() function, the this references the global object, which is the window on the web browser and global on Node.js.
// Calling the show() function is the same as:
window.show()
