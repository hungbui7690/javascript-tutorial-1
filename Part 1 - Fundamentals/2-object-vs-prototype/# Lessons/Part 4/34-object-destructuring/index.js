/*
  Object Destructuring

*/

let person = {
  firstName: 'John',
  lastName: 'Doe',
  currentAge: 28,
}

// 1) You can assign a default value to the variable when the property of an object doesn’t exist. For example:
let { firstName, lastName, middleName = '', currentAge: age = 18, job } = person

console.log(middleName) // ''
console.log(age) // 28
console.log(job) // undefined

// 2) Destructuring a null object
function getSizes() {
  return null
}
// let { height, width } = getSizes() // error

function getCourse() {
  return null
}
let { name, description } = getCourse() || {}

// 3) Nested object destructuring
let employee = {
  id: 1001,
  address: {
    street: '123 Amber St',
    city: 'Broomfield',
  },
}

const {
  address: { street, city },
} = employee

// 4) Destructuring function arguments
let display1 = (person) => console.log(`${person.firstName} ${person.lastName}`)

let display2 = ({ firstName, lastName }) =>
  console.log(`${firstName} ${lastName}`)
