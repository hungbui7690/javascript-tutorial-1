/*
  reduce & reduceRight: Reducing an Array Into a Value
    
      array.reduce(callback(), initial:optional)
      function callbackFn(previousValue, currentValue, currentIndex, array){}

*/

// The Array.prototype allows you to reduce an array to a single value using the reduce() method like this:
let numbers = [1, 2, 3]
let sum = numbers.reduce(function (previousValue, currentValue) {
  return previousValue + currentValue
})
// What we have done was to reduce an array into a value.
console.log(sum)

////////////////////////////
// Suppose that you have the following shoppingCart array of product objects:
let shoppingCart = [
  {
    product: 'phone',
    qty: 1,
    price: 500,
  },
  {
    product: 'Screen Protector',
    qty: 1,
    price: 10,
  },
  {
    product: 'Memory Card',
    qty: 2,
    price: 20,
  },
]

// To calculate the total amount of the products in the shopping cart, you can use the reduce() method, like this:
let total = shoppingCart.reduce(function (previousValue, currentValue) {
  return previousValue + currentValue.qty * currentValue.price
}, 0)
// Notice that in this example, we passed in the initialValue argument to the reduce() method.
// If we didn’t do so, the reduce() method would take the first element of the shoppingCart array, which is an object, as an initial value and perform the calculation on this object. Hence, it would cause an incorrect result.
console.log(total)
