/*
  Object Property types
  2) Accessor properties
    - Define multiple properties: Object.defineProperties()
  
*/

// In ES5, you can define multiple properties in a single statement using the Object.defineProperties() method. For example:
var product = {}

// In this example, we defined three data properties: name, price, and tax, and one accessor property netPrice for the product object.
Object.defineProperties(product, {
  name: {
    value: 'Smartphone',
  },
  price: {
    value: 799,
  },
  tax: {
    value: 0.1,
  },
  netPrice: {
    get: function () {
      return this.price * (1 + this.tax)
    },
  },
})

console.log(
  'The net price of a ' +
    product.name +
    ' is ' +
    product.netPrice.toFixed(2) +
    ' USD'
)
