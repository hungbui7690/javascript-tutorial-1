/*
  Well-known symbols
  - ES6 provides predefined symbols which are called well-known symbols. The well-known symbols represent the common behaviors in JavaScript. Each well-known symbol is a static property of the Symbol object.

*/

https://www.javascripttutorial.net/symbol/ NOT DONE

/*
  The Symbol.hasInstance is a symbol that changes the behavior of the instanceof operator. Typically, when you use the instanceof operator:
      obj instanceof type;
  JavaScript will call the Symbol.hasInstance method as follows:
      type[Symbol.hasInstance](obj);
*/

// It then depends on the method to determine if  obj is an instance of the type object. See the following example.
class Stack {}
console.log([] instanceof Stack) // false
// The [] array is not an instance of the Stack class, therefore, the instanceof operator returns false in this example.

///////////////////////////////
// Assuming that you want the [] array is an instance of the Stack class, you can add the Symbol.hasInstance method as follows:
class StackX {
  static [Symbol.hasInstance](obj) {
    return Array.isArray(obj)
  }
}
console.log([] instanceof StackX) // true
