/*
  Functions are First-Class Citizens

*/

// Returning functions from functions
// Since functions are values, you can return a function from another function.
// The following compareBy() function returns a function that compares two objects by a property:
function compareBy(propertyName) {
  return function (a, b) {
    let x = a[propertyName],
      y = b[propertyName]

    if (x > y) {
      return 1
    } else if (x < y) {
      return -1
    } else {
      return 0
    }
  }
}

// Suppose that you have an array of product objects where each product object has two properties: name and price.
let products = [
  { name: 'iPhone', price: 900 },
  { name: 'Samsung Galaxy', price: 850 },
  { name: 'Sony Xperia', price: 700 },
]

// You can sort an array by calling the sort() method. The sort() method accepts a function that compares two elements of the array as an argument.
// For example, you can sort the product objects based on the name by passing a function returned from the compareBy() function as follows:
console.log('Products sorted by name:')
products.sort(compareBy('name'))

console.table(products)

// Similarly, you can sort the product objects by price:
console.log('Products sorted by price:')
products.sort(compareBy('price'))
console.table(products)
