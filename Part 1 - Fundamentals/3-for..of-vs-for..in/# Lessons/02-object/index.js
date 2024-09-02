/*
  for…of 

  2) In-place object destructuring with for…of

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

/*
  How it works:
  - The ratings is an array of objects. Each object has two properties user and score.
  - The for...of iterate over the ratings array and calculate the total scores of all objects.
  - The expression const {score} of ratings uses object destructing to assign the score property of the current iterated element to the score variable.

*/
