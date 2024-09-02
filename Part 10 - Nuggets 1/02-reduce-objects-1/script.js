/*
  Reduce - Objects
  - pic >> use case

*/

const cart = [
  {
    title: 'Samsung Galaxy S8',
    price: '399.99',
    amount: 11,
  },
  {
    title: 'google pixel',
    price: '499.99',
    amount: 4,
  },
  {
    title: 'Xiaomi Redmi Note 2',
    price: '699.99',
    amount: 2,
  },
  {
    title: 'Samsung Galaxy S7',
    price: '599.99 ',
    amount: 1,
  },
]

let total = cart.reduce(
  (acc, cur) => {
    const { price, amount } = cur

    acc.numCart += amount
    acc.totalPrice += amount * price

    return acc
  },
  {
    numCart: 0, // number of items in the cart
    totalPrice: 0, // total price
  }
)

console.log(total)
