/*
  Array.from
  - turns array-like/ish (string, nodeList, set...) into array 

*/

const udemy = 'udemy'
console.log(Array.from(udemy)) // ['u', 'd', 'e', 'm', 'y']

/////////////////////////////
// ***
/////////////////////////////
const text = document.querySelectorAll('.text')
const newText = Array.from(text).find((item) => item.textContent === 'Person')
console.log(newText)

/////////////////////////////
// {length: xxx}
/////////////////////////////
const items = Array.from({ length: 129 }, (_, idx) => {
  return idx
})
console.log(items)

/////////////////////////////
// pagination
/////////////////////////////
const itemsPerPage = 14
// const pages = items.length / itemsPerPage // 1.2
const pages = Math.ceil(items.length / itemsPerPage) // 2

const newItems = Array.from({ length: pages }, (_, idx) => {
  const start = idx * itemsPerPage
  const tempItems = items.slice(start, start + itemsPerPage)
  return tempItems // array of arrays
})

console.log(newItems)
