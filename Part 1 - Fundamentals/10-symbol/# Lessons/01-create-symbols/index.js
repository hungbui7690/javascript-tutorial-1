/*
  Create Symbol
  - ES6 added Symbol as a new primitive type. Unlike other primitive types such as number, boolean, null, undefined, and string, the symbol type doesn’t have a literal form.

*/

// To create a new symbol, you use the global Symbol() function as shown in this example:
let s = Symbol('foo')

// The Symbol() function creates a new unique value each time you call it:
console.log(Symbol() === Symbol()) // false

// The Symbol() function accepts a description as an optional argument. The description argument will make your symbol more descriptive.
// The following example creates two symbols: firstName and lastName.
let firstName = Symbol('first name'),
  lastName = Symbol('last name')

// You can access the symbol’s description property using the toString() method. The console.log() method calls the toString() method of the symbol implicitly as shown in the following example:
console.log(firstName) // Symbol(first name)
console.log(lastName) // Symbol(last name)

// Since symbols are primitive values, you can use the  typeof operator to check whether a variable is a symbol. ES6 extended  typeof to return the symbol string when you pass in a symbol variable:
console.log(typeof firstName) // symbol

// Since a symbol is a primitive value, if you attempt to create a symbol using the new operator, you will get an error:
// let s1 = new Symbol() // error
