/*
  toReverse

*/

// Using JavaScript Array toReversed() method on arrays of objects
// The following example uses the toReversed() method to reverse the order of objects in an array:
const contacts = [{ name: 'John' }, { name: 'Alice' }, { name: 'Bob' }]
const reversedContacts = contacts.toReversed()
console.log(contacts)
console.log(reversedContacts)

// Calling toReversed() method on sparse arrays
// When you call the toReversed() method on a sparse array, the result array remains sparse. The toReversed() method copies empty slots over their respective indices as empty slots:
const scores = [1, , 7, 5]
const reversedScores = scores.toReversed()
console.log(scores)
console.log(reversedScores)

// Calling toReversed() method on non-array objects
// The following example illustrates how to call the toReversed() method on an object that has the length property and integer-keyed properties:
const arrayLike = {
  length: 3,
  unrelated: 'bar',
  2: 2,
  3: 3, // ignored because the length is 3
}
const result = Array.prototype.reverse.call(arrayLike)
console.log(result)
/*
  In this example, the toReversed() method does the following:

    First, access the length property of the object.
    Second, iterate through each property with an integer key ranging from 0 to length / 2.
    Third, swap the values at corresponding indices on both ends of the array. Additionally, remove any destination property without a corresponding source property.
    Finally, return a new object with the order of the elements (or properties) in the reversed order.

*/
