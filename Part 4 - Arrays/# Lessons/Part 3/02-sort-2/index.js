/*
  Array sort: Sorting Array Elements

*/

////////////////////////////
// SORT STRINGS
// To sort the elements of the animals array in ascending order alphabetically, you use the sort() method without passing the compare function as shown in the following example:
let animals = ['cat', 'dog', 'elephant', 'bee', 'ant']
animals.sort()

console.log(animals)

// To sort the animals array in descending order, you need to change the logic of the comparator function and pass it to the sort() method as the following example.
animals = ['cat', 'dog', 'elephant', 'bee', 'ant']

animals.sort((a, b) => {
  if (a > b) return -1
  if (a < b) return 1
  return 0
})
console.log(animals)

// Suppose you have an array that contains elements in both uppercase and lowercase as follows:
let mixedCaseAnimals = ['Cat', 'dog', 'Elephant', 'bee', 'ant']

// To sort this array alphabetically, you need to use a custom comparator function to convert all elements to the same case e.g., uppercase for comparison, and pass that function to the sort() method.
mixedCaseAnimals.sort(function (a, b) {
  let x = a.toUpperCase(),
    y = b.toUpperCase()
  return x == y ? 0 : x > y ? 1 : -1
})

////////////////////////////
// SORT NON-ASCII CHARS
// The sort() method is working fine with the strings with ASCII characters. However, for the strings with non-ASCII characters e.g., é, è, etc., the sort() method will not work correctly. For example:
let animaux = ['zèbre', 'abeille', 'écureuil', 'chat']
animaux.sort()
console.log(animaux)

// The code returns an unexpected output because écureuil should come before zèbre.
// To fix this, you use the localeCompare() method of the String object to compare strings in a specific locale, like this:
animaux = ['zèbre', 'abeille', 'écureuil', 'chat']
animaux.sort(function (a, b) {
  return a.localeCompare(b)
})
console.log(animaux)
