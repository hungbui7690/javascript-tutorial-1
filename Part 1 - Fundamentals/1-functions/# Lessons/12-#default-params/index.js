/*
  Default Params

*/

function say(message = 'Hi') {
  console.log(message)
}

say() // 'Hi'
say(undefined) // 'Hi'
say('Hello') // 'Hello'

////////////////////////////////
// 1) Passing undefined arguments
function createDiv(
  height = '100px',
  width = '100px',
  border = 'solid 1px red'
) {
  let div = document.createElement('div')
  div.style.height = height
  div.style.width = width
  div.style.border = border
  document.body.appendChild(div)
  return div
}

// Suppose you want to use the default values for the height and width parameters and specific border style. In this case, you need to pass undefined values to the first two parameters as follows:
createDiv(undefined, undefined, 'solid 5px blue')

////////////////////////////////
// 2) Evaluating default parameters
// JavaScript engine evaluates the default arguments at the time you call the function. See the following example:
function put(toy, toyBox = []) {
  toyBox.push(toy)
  return toyBox
}

console.log(put('Toy Car'))
// -> ['Toy Car']
console.log(put('Teddy Bear'))
// -> ['Teddy Bear'], not ['Toy Car','Teddy Bear']

////////////////////////////////
// 3) We can use this feature to make arguments mandatory. If the caller doesn’t pass any argument, we throw an error as follows:
function requiredArg() {
  throw new Error('The argument is required')
}
function add(x = requiredArg(), y = requiredArg()) {
  return x + y
}

// add(10) // error
add(10, 20) // OK

////////////////////////////////
// 4) Using other parameters in default values
// Using functions
// You can use the return value of a function as a default value for a parameter. For example:
let taxRate = () => 0.1
let getPrice = function (price, tax = price * taxRate()) {
  return price + tax
}

let fullPrice = getPrice(100)
console.log(fullPrice) // 110
