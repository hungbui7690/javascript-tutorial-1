/*
  reverse

*/

// The reverse() method does not take any parameters. It reverses the elements of an array in place and returns the reversed array.
// The reverse() method is generic. This means that you can call it on a non-array object that has the length property and integer-keyed properties.
// Note that you cannot call the reverse() on strings because strings are immutable.
const colors = ['red', 'green', 'blue']
colors.reverse()
console.log(colors)

// To reverse the order of elements in an array and return a copy of the array without modifying the original array, you can use the toReversed() method.
const items = [1, 2, 3]
const reversedItems = items.toReversed()
console.log(reversedItems)
console.log(items)

// The following example uses the reverse() method to reverse the order of objects in an array:
const books = [
  { title: 'Eloquent JavaScript', author: 'Margin' },
  { title: 'JavaScript: The Good Parts', author: 'Douglas' },
  { title: 'JavaScript: The Definitive Guide', author: 'David Flanagan' },
]
books.reverse()
console.log(books)

// Using reverse() on sparse arrays
// When you call the reverse() method on a sparse array, the array remains sparse. The reverse() method copies empty slots over their respective indices as empty slots:
const scores = [1, , 7, 5]
scores.reverse()
console.log(scores)

// Using JavaScript array reverse() on non-array objects
// The following example illustrates how to call the reverse() method on an object that has the length property and integer-keyed properties:
const arrayLike = {
  length: 3,
  unrelated: 'bar',
  2: 2,
  3: 3, // ignored by reverse() since length is 3
}
console.log(Array.prototype.reverse.call(arrayLike))
// In this example, the reverse() method starts by accessing the length property of the array. Subsequently, it iterates through each property with an integer key ranging from 0 to length / 2.
// During this process, it swaps the values at corresponding indices on both ends of the array. Additionally, the method removes any destination property without a corresponding source property.
