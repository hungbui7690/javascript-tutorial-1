/*
  Array splice: Delete, Insert, and Replace
  - mutates the original array
  - pic

*/

// Deleting
// Array.splice(startingPosition,num);
let scores = [1, 2, 3, 4, 5]
let deletedScores = scores.splice(0, 3)
console.log(scores) //  [4, 5]
console.log(deletedScores) // [1, 2, 3]

// Inserting
// Array.splice(position,0,new_element_1,new_element_2,...);
// The second argument is zero (0) which instructs the splice() method to not delete any array elements.
let colors = ['red', 'green', 'blue']
colors.splice(2, 0, 'purple')
console.log(colors) // ["red", "green", "purple", "blue"]

colors.splice(1, 0, 'yellow', 'pink')
console.log(colors) // ["red", "yellow", "pink", "green", "purple", "blue"]

// Replacing
// To do this, you pass at least three arguments with the second one that specifies the number of items to delete and the third one that indicates the elements to insert.
let languages = ['C', 'C++', 'Java', 'JavaScript']
languages.splice(1, 1, 'Python')
console.log(languages) // ["C", "Python", "Java", "JavaScript"]

// You can replace one element with multiple elements by passing more arguments into the splice() method as follows:
languages.splice(2, 1, 'C#', 'Swift', 'Go')
console.log(languages) // ["C", "Python", "C#", "Swift", "Go", "JavaScript"]
