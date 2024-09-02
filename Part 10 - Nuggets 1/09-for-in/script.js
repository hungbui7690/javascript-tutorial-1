/*
  for-in
  - iterate over object properties
  - not advised to use it on arrays, especially if the order is important
  - on arrays, use "for-of" instead

*/

const person = {
  name: 'joe',
  age: 25,
  job: 'web dev',
}

for (const property in person) {
  console.log(`${property} : ${person[property]}`)
}
