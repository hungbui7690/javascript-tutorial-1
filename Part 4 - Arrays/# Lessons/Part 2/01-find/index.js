/*
  Array find() Method
  - return the 1st found element

  - The find() accepts two arguments: a callback function and an optional value to use for the this inside the callback function.

    1) callback
      - The callback is a function that executes each element of the array. It takes three arguments:

            element is the current element.
            index the index of the current element.
            array the array that the find() was called upon.

    2) thisArg
      - The thisArg is the object used as this inside the callback.

  - Return value
    + The find() executes the callback function for each element in the array until the callback returns a truthy value. 

    + If the callback returns a truthy value, the find() immediately returns the element and stops searching. Otherwise, it returns undefined.

    + If you want to find the index of the found element, you can use the findIndex() method.
*/

let numbers = [1, 2, 3, 4, 5]
console.log(numbers.find((e) => e % 2 == 0))

let customers = [
  {
    name: 'ABC Inc',
    credit: 100,
  },
  {
    name: 'ACME Corp',
    credit: 200,
  },
  {
    name: 'IoT AG',
    credit: 300,
  },
]

// The following code uses the find() method to find the first customer whose credit is greater than 100.
console.log(customers.find((c) => c.credit > 100))
