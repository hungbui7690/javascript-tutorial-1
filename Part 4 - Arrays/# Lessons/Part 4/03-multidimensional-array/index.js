/*
  JavaScript Multidimensional Array
  - JavaScript does not provide the multidimensional array natively. However, you can create a multidimensional array by defining an array of elements, where each element is also another array.

  - For this reason, we can say that a JavaScript multidimensional array is an array of arrays. The easiest way to define a multidimensional array is to use the array literal notation.

*/

// 1) The following example defines a two-dimensional array named activities:
let activities = [
  ['Work', 9],
  ['Eat', 1],
  ['Commute', 2],
  ['Play Game', 1],
  ['Sleep', 7],
]
console.table(activities)
// In the activities array, the first dimension represents the activity and the second one shows the number of hours spent per day for each.

/*
  Note that the (index) column is for the illustration that indicates the indices of the inner array.

  To access an element of the multidimensional array, you first use square brackets to access an element of the outer array that returns an inner array; and then use another square bracket to access the element of the inner array.
*/

// The following example returns the second element of the first inner array in the activities array above:
console.log(activities[0][1]) // 9

// 2) Adding elements to the JavaScript multidimensional array
// You can use the Array methods such as push() and splice() to manipulate elements of a multidimensional array.
activities.push(['Study', 2])
console.table(activities)

// To insert an element in the middle of the array, you use the splice() method. The following inserts an element in the second position of the activities array:
activities.splice(1, 0, ['Programming', 2])
console.table(activities)

// This example calculates the percentage of the hours spent on each activity and appends the percentage to the inner array.
activities.forEach((activity) => {
  let percentage = ((activity[1] / 24) * 100).toFixed()
  activity[2] = percentage + '%'
})
console.table(activities)

// 3) Removing elements from the JavaScript multidimensional array
// To remove an element from an array, you use the pop() or splice() method.
// For example, the following statement removes the last element of the activities array.
activities.pop()
console.table(activities)

// Similarly, you can remove the elements from the inner array of the multidimensional array by using the pop() method. The following example removes the percentage element from the inner arrays of the activities array.
activities.forEach((activity) => {
  activity.pop(2)
})
console.table(activities)

// 4) Iterating over elements of the JavaScript multidimensional array
// To iterate a multidimensional array, you use a nested for loop as in the following example.
// loop the outer array
for (let i = 0; i < activities.length; i++) {
  // get the size of the inner array
  const innerArrayLength = activities[i].length
  // loop the inner array
  for (let j = 0; j < innerArrayLength; j++) {
    console.log('[' + i + ',' + j + '] = ' + activities[i][j])
  }
}

// Or you can use the forEach() method twice:
activities.forEach((activity) => {
  activity.forEach((data) => {
    console.log(data)
  })
})
