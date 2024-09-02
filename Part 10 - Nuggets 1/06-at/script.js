/*
  ES2022
  - ECMAScript 2022
  - at(): takes integer and returns the item at that index (string, array)

*/

const scores = [99, 90, 100]

///////////////////////
// last
const oldLast = scores[scores.length - 1]
const newLast = scores.at(-1) // -1 to get last value

console.log(oldLast, newLast)

///////////////////////
// first
const channel = 'Codding Addict'
console.log(channel.at(0))
