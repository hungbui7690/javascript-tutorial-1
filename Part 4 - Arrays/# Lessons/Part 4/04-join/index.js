/*
  Array Join
  - concatenate all elements of an array into a string separated by a separator

  - The join() method accepts a optional argument separator which is a string that separates each pair of adjacent elements of the array in the result string.
  - The separator defaults to a comma if you don’t pass it to the join() method.
  - In case the array has one element, the join() method returns that element as a string without using the separator.
  - And if the array is empty, the join() method returns an empty string.
  - When the elements of the array aren’t strings, the join() method converts them to strings before joining.

  *** Note that the join() method converts undefined, null, and empty array [] to an empty string.


*/

// 1) Using the JavaScript Array join() method to join CSS classes
// The following example uses the JavaScript Array join() method to join CSS classes:
const cssClasses = ['btn', 'btn-primary', 'btn-active']
const btnClass = cssClasses.join(' ')
console.log(btnClass)

// 2) Using the JavaScript Array join() method to replace all occurrences of a string
// This example uses the JavaScript Array join() method to replace all occurrences of the space ' ' by the hyphen (-):
const title = 'JavaScript array join example'
const url = title.split(' ').join('-').toLowerCase()

console.log(url)
