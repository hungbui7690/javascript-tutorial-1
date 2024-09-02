/*
  Array filter: Filtering Elements
  - One of the most common tasks when working with an array is to create a new array that contains a subset of elements of the original array.

*/

// Suppose you have an array of city objects where each object contains two properties: name and population.
let cities = [
  { name: 'Los Angeles', population: 3792621 },
  { name: 'New York', population: 8175133 },
  { name: 'Chicago', population: 2695598 },
  { name: 'Houston', population: 2099451 },
  { name: 'Philadelphia', population: 1526006 },
]

// To find the city whose population is greater than 3 million, you typically loop over the array elements using a for loop and test if the value of the population property satisfies the condition, like this:
let bigCities = []
for (let i = 0; i < cities.length; i++) {
  if (cities[i].population > 3000000) {
    bigCities.push(cities[i])
  }
}

// JavaScript Array provides the filter() method that allows you to do this task in a shorter and cleaner way.
// The following example returns the same result as the example above:
let bigCities1 = cities.filter(function (c) {
  return c.population > 3000000
})

// Starting with ES6, you can use the arrow function to make it more concise:
let bigCities2 = cities.filter((city) => city.population > 3000000)

// Because the filter() method returns a new array, you can chain the result with other array methods such as sort() and map().
// For example, the following illustrates how to chain the three methods: filter(),sort(), and map():
cities
  .filter((city) => city.population < 3000000)
  .sort((c1, c2) => c1.population - c2.population)
  .map((city) => console.log(city.name + ':' + city.population))

//////////////////////////////
// The following example illustrates the use of the contextObject argument that specifies an object which can be referenced in the callback() function using the this keyword
// arrayObject.filter(callback, contextObject);
// First, define the isInRange() function that checks if its argument is a number and in the range specified by the lower and upper properties of an object.
function isInRange(value) {
  if (typeof value !== 'number') {
    return false
  }
  return value >= this.lower && value <= this.upper
}

// Next, define an array of mixed data that contains numbers, strings, and undefined.
let data = [10, 20, '30', 1, 5, 'JavaScript filter', undefined, 'example']

// Then, define the range object with two properties lower and upper.
let range = {
  lower: 1,
  upper: 10,
}

// After that, call the filter() methods of the data array and pass in the isInRange() function and the range object. Because we pass in the range object, inside the isInRange() function, the this keyword references to the range object.
let numberInRange = data.filter(isInRange, range)

console.log(numberInRange) // [10, 1, 5]
