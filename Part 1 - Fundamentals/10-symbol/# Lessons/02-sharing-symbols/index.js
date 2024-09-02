/*
  Sharing symbols
  - ES6 provides you with a global symbol registry that allows you to share symbols globally. If you want to create a symbol that will be shared, you use the Symbol.for() method instead of calling the Symbol() function.

*/

// The Symbol.for() method accepts a single parameter that can be used for symbol’s description, as shown in the following example:
let ssn = Symbol.for('ssn')
// The Symbol.for() method first searches for the symbol with the  ssn key in the global symbol registry. It returns the existing symbol if there is one. Otherwise, the Symbol.for() method creates a new symbol, registers it to the global symbol registry with the specified key, and returns the symbol.

// Later, if you call the Symbol.for() method using the same key, the Symbol.for() method will return the existing symbol.
let citizenID = Symbol.for('ssn')
console.log(ssn === citizenID) // true

// To get the key associated with a symbol, you use the Symbol.keyFor() method as shown in the following example:
console.log(Symbol.keyFor(citizenID)) // 'ssn'

// If a symbol does not exist in the global symbol registry, the System.keyFor() method returns undefined.
let systemID = Symbol('sys')
console.log(Symbol.keyFor(systemID)) // undefined
