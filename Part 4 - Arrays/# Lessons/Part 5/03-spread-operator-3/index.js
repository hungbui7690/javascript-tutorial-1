/*
  Spread Operator

*/

/////////////////////////////
// 1. Constructing array literal
// The spread operator allows you to insert another array into the initialized array when you construct an array using the literal form. See the following example:
let initialChars = ['A', 'B']
let chars = [...initialChars, 'C', 'D']
console.log(chars) // ["A", "B", "C", "D"]

/////////////////////////////
// 2. Concatenating arrays
// Also, you can use the spread operator to concatenate two or more arrays:
let numbers = [1, 2]
let moreNumbers = [3, 4]
let allNumbers = [...numbers, ...moreNumbers]
console.log(allNumbers) // [1, 2, 3, 4]

/////////////////////////////
// 3. Copying an array
// In addition, you can copy an array instance by using the spread operator:
let scores = [80, 70, 90]
let copiedScores = [...scores]
console.log(copiedScores) // [80, 70, 90]
// Note that the spread operator only copies the array itself to the new one, not the elements. This means that the copy is shallow, not deep.

/////////////////////////////
// 4. JavaScript spread operator and strings
// Consider the following example:
let charsX = ['A', ...'BC', 'D']
console.log(charsX) // ["A", "B", "C", "D"]
// In this example, we constructed the chars array from individual strings. When we applied the spread operator to the ‘BC’string, it spread out each character of the string 'BC' into individual characters.
