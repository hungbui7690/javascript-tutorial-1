/*
  Timestamps
  - Unit Time: Jan 01, 1970
  - 1s = 1000ms

*/
console.log(new Date())

console.log(Date.now())

console.log('getTime(): ', new Date().getTime())

console.log('valueOf(): ', new Date().valueOf())

setTimeout(() => {
  console.log('setTimeout(): ', Date.now())
}, 1000)

// # create id's in learning app
let people = []
people = [...people, { id: Date.now(), name: 'peter' }]
console.log(people)

// # create /get dates
console.log(new Date(1711702384637)) // # got number from previous example

// # application: to set expire date for cookies
// 1000 * 60 = 1 min
// 1000 * 60 * 60 = 60 min = 1hr
const now = Date.now()
const future = new Date(now + 1000 * 60 * 60)

// # different between dates >> use in JS projects
const firstDate = new Date()
const secondDate = new Date(2024, 8, 20)
const firstValue = firstDate.getTime()
const secondValue = secondDate.getTime()
console.log(firstValue, secondValue) // 2nd value should be bigger

const timeDiff = secondValue - firstValue
console.log('timeDiff: ', timeDiff)

const minutes = timeDiff / (1000 * 60)
console.log('minutes: ', minutes)
