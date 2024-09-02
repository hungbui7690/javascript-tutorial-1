/*
  Array sort: Sorting Array Elements

*/

// By default, the sort() method sorts the array elements in ascending order, meaning that it places the smallest value first and then the largest value last.
// When you sort an array of numbers, the sort() method converts these numbers to strings and compares the strings to determine the order. For example:
let numbers = [0, 2, 5, 3, 10]
numbers.sort()
console.log(numbers)
// In this example, the sort() method places 10 before 2 because the string “10” comes before the string “2”.

/*
  - To change this behavior, you need to pass a comparator function to the sort() method. The sort() method will use the comparator function to determine the order of elements.
  - The following illustrates the syntax of the sort() method with the comparator function:
  array.sort(comparator)
  - In this syntax, the comparator function accepts two arguments and returns a value that determines the sort order.

  - The following illustrates the syntax of the comparator function:

      function compare(a,b) {
        // ...
      }

  - The compare() function accepts two arguments a and b. The sort() method will sort elements based on the return value of the compare() function with the following rules:

      If the comparator function returns a negative number, the sort() method place a before b.
      If the comparator function returns a positive number, the sort() method place b before a.
      If the comparator function returns zero, the sort() method considers a and b are equal and leaves their positions unchanged.

*/

////////////////////////////
// SORT NUMBERS
// So to sort an array of numbers in ascending order, you can use the comparator function as follows:
numbers = [0, 2, 5, 3, 10]
numbers.sort(function (a, b) {
  if (a > b) return 1
  if (a < b) return -1
  return 0
})
console.log(numbers)

// To make the code more concise, you can define the comparator function using the arrow function syntax:
numbers = [0, 2, 5, 3, 10]
numbers.sort((a, b) => {
  if (a > b) return 1
  if (a < b) return -1
  return 0
})
console.log(numbers)

// Since array elements are numbers, you can make the code even shorter like this:
numbers = [0, 2, 5, 3, 10]
numbers.sort((a, b) => a - b)
console.log(numbers)

// To sort the array of numbers in descending order, you can reverse the result of the comparator function as follows:
numbers = [0, 2, 5, 3, 10]
numbers.sort((a, b) => b - a)
console.log(numbers)
