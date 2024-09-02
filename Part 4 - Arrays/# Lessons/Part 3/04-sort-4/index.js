/*
  Array sort: Sorting Array Elements

*/

////////////////////////////
// Optimizing JavaScript Array sort() method
// The sort() method calls the comparator function multiple times for each element in the array.
// See the following example:
let rivers = ['Nile', 'Amazon', 'Congo', 'Mississippi', 'Rio-Grande']

rivers.sort(function (a, b) {
  console.log(a, b)
  return a.length - b.length
})
/*
  How it works:

    First, declare an array rivers that consists of the famous river names.
    Second, sort the rivers array by the length of its element using the sort() method. We output the elements of the rivers array to the web console whenever the sort() method invokes the comparator function.

  The output shows that the sort() method evaluates each element multiple times e.g., Amazon 4 times, Congo 2 times, and so on.

  If the number of array elements is increasing, it will impact the performance.
*/

////////////////////////////
/*
  We cannot reduce the number of times that the comparator function is executed. However, we can reduce the work that the comparison has to do. This technique is called Schwartzian Transform.

  To implement this, you follow these steps:

      First, extract the actual values into a temporary array using the map() method.
      Second, sort the temporary array with the elements already evaluated (or transformed).
      Third, walk the temporary array to get the sorted array.

  Here is the solution:
*/
rivers = ['Nile', 'Amazon', 'Congo', 'Mississippi', 'Rio-Grande']

// temporary array holds objects with position and length of element
var lengths = rivers.map(function (e, i) {
  return { index: i, value: e.length }
})

// sorting the lengths array containing the lengths of river names
lengths.sort(function (a, b) {
  return +(a.value > b.value) || +(a.value === b.value) - 1
})

// copy element back to the array
var sortedRivers = lengths.map(function (e) {
  return rivers[e.index]
})

console.log(sortedRivers)
