/*
  new.target
  - ES6 introduced the new.target pseudo-property that allows you to detect whether a function or constructor was called using the new operator.

  - If a function is called normally, the new.target is undefined. However, if the function is called using the new keyword as a constructor, the new.target return a reference to the constructor.

*/

// By using the new.target, you can control how a function will be called.
function add(x, y) {
  if (new.target) {
    throw 'The add function cannot be called as a constructor'
  }
  return x + y
}

let obj = new add(10, 20)
console.log(obj)
