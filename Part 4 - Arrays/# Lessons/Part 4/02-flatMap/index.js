/*
  Array flatMap
  - maps each element in an array using a mapping function and flattens the result into a new array.

    - The flat() method creates a new array with the elements of the sub-arrays concatenated into it.
    - The map() method creates a new array whose elements are the results of a mapping function.
    - The flatMap() method is the combination of the map() method followed by the flat() method of depth 1.

          let newArray = arrayObject.flatMap(callback,thisArg)

*/

///////////////////////////
// Creating words from sentences example
// Suppose that you have the following array:
let sentences = ['JavaScript Array flatMap()', ' ', 'is', ' ', 'Awesome']

// The following map() function splits the words of  sentences:
let words = sentences.map((s) => s.split(' '))
console.log(words)
// The result is an array of nested arrays filled by words. To flatten the result, you can use the flat() method on the result of the map() method. However, it’ll be more concise to use the flatMap() method.

///////////////////////////
// The flatMap() creates a flattened array by running each sentence in the array through a mapping function and flattening the mapped results:
sentences = ['JavaScript Array flatMap()', ' ', 'is', ' ', 'Awesome']
words = sentences.flatMap((s) => s.split(' '))
console.log(words)

///////////////////////////
// Adding and removing elements during mapping example
// The flatMap() method allows you to add or remove elements during mapping. Consider the following example:
let cart = [
  {
    name: 'Smartphone',
    qty: 2,
    price: 500,
    freeOfCharge: false,
  },
  {
    name: 'Tablet',
    qty: 1,
    price: 800,
    freeOfCharge: false,
  },
]

// If customers buy a smartphone, you want to give them a free screen protector.
// When the customer adds a smartphone to the cart, you can add a screen protector to the cart using the flatMap() method as follows:
let newCart = cart.flatMap((item) => {
  if (item.name === 'Smartphone') {
    return [
      item,
      {
        name: 'Screen Protector',
        qty: item.qty,
        price: 5,
        freeOfCharge: true,
      },
    ]
  } else {
    return [item]
  }
})
console.log(newCart)

// The following uses the reduce() method to calculate the total amount from the items in the cart. It ignores the free-of-charge items, like screen protectors:
const total = newCart.reduce((sum, item) => {
  if (!item.freeOfCharge) sum += item.price * item.qty
  return sum
}, 0)
console.log({ total })
