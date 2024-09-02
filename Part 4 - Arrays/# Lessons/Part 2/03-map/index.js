/*
  Array map: Transforming Elements

*/

// Suppose that you have an array of numbers where each element represents the radius of a circle as follows:
let circles = [10, 30, 50]

// The following illustrates how to calculate the area of each circle and push the result into a new array.
let areas = [] // to store areas of circles
let area = 0
for (let i = 0; i < circles.length; i++) {
  area = Math.floor(Math.PI * circles[i] * circles[i])
  areas.push(area)
}
console.log(areas)
// It takes a quite amount of code to accomplish this.

// Starting from ES5, JavaScript Array type provides the map() method that allows you to transform the array elements in a cleaner way.
function circleArea(radius) {
  return Math.floor(Math.PI * radius * radius)
}
let areas1 = circles.map(circleArea)
console.log(areas1)

// To make it shorter, you can pass in the map() method an anonymous function as follows.
let areas2 = circles.map(function (radius) {
  return Math.floor(Math.PI * radius * radius)
})
console.log(areas2)

// The following example shows how to transform an array of numbers by using a built-in method of the Math type as the callback() function.
let numbers = [16, 25, 36]
let results = numbers.map(Math.sqrt)
console.log(results)
