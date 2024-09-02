/*
Object.keys(): converts property names into array
Object.values(): converts property values into array
Object.entries(): covert both

*/

const person = {
  name: 'joe',
  age: 25,
  job: 'web-dev',
}

const keys = Object.keys(person)
console.log(keys) // ['name', 'age', 'job']

const values = Object.values(person)
console.log(values) // ['joe', 25, 'web dev']

const entries = Object.entries(person)
console.log(entries) // array of arrays

////////////////////////
// map()
////////////////////////
const newResult = entries.map((item) => {
  const [key, value] = item // destructure
  console.log(key, value)
  return key
})

console.log('map: ', newResult)

////////////////////////
// for-of
////////////////////////
for (const [key, value] of entries) {
  console.log('for-of: ', key, value)
}
