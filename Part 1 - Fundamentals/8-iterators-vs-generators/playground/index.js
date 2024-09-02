/*
  for..of
  - ES6 introduced a new statement for...of that iterates over an iterable object such as:
    > Built-in Array, String, Map, Set, …
    > Array-like objects such as arguments or NodeList
    > User-defined objects that implement the iterator protocol.


*/

const ratings = [
  { user: 'John', score: 3 },
  { user: 'Jane', score: 4 },
  { user: 'David', score: 5 },
  { user: 'Peter', score: 2 },
]

let sum = 0
for (const { score } of ratings) {
  sum += score
}

console.log(`Total scores: ${sum}`) // 14
