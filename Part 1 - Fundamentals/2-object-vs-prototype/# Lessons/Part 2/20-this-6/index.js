/*
  Demystifying the JavaScript this Keyword

  
*/

// 4) Indirect Invocation
// In JavaScript, functions are first-class citizens. In other words, functions are objects, which are instances of the Function type.
// The Function type has two methods: call() and apply() . These methods allow you to set the this value when calling a function. For example:
function getBrand(prefix) {
  console.log(prefix + this.brand)
}

let honda = {
  brand: 'Honda',
}
let audi = {
  brand: 'Audi',
}

getBrand.call(honda, "It's a ") // It's a Honda
getBrand.call(audi, "It's an ") // It's an Audi
// In this example, we called the getBrand() function indirectly using the call() method of the getBrand function. We passed honda and  audi object as the first argument of the call() method, therefore, we got the corresponding brand in each call.

// The apply() method is similar to the call() method except that its second argument is an array of arguments.
getBrand.apply(honda, ["It's a "]) // "It's a Honda"
getBrand.apply(audi, ["It's an "]) // "It's a Audi"
