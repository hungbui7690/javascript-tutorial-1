/*
  Array toSorted
  - not modify the original arrays

*/

// Strings
const colors = ['red', 'green', 'blue']
const sortedColors = colors.toSorted()
console.log(colors)
console.log(sortedColors)

// Numbers
const scores = [3, 1, 2, 7, 9]
const sortedScores = scores.toSorted((a, b) => a - b)
console.log(scores)
console.log(sortedScores)

// Object's Property
const books = [
  { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', year: 1925 },
  { title: 'To Kill a Mockingbird', author: 'Harper Lee', year: 1960 },
  { title: '1984', author: 'George Orwell', year: 1949 },
  { title: 'Brave New World', author: 'Aldous Huxley', year: 1932 },
]
const sortedBooks = books.toSorted((a, b) => a.year - b.year)
console.log(sortedBooks)

// Array Like Object
const arrayLike = {
  length: 3,
  unrelated: 'foo',
  0: 5,
  2: 4,
  3: 3, // ignored by toSorted() since length is 3
}
console.log(Array.prototype.toSorted.call(arrayLike)) // [4, 5, undefined]

// Sparse Array
const skills = ['JS', , 'Node.js']
const sortedSkills = skills.toSorted()

console.log(sortedSkills)
