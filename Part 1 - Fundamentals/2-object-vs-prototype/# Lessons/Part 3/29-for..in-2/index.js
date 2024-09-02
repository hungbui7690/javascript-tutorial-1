/*
  for...in loop & Inheritance

*/

// When you loop over the properties of an object that inherits from another object, the for...in statement goes up in the prototype chain and enumerates inherited properties. Consider the following example:
var decoration = {
  color: 'red',
}

var circle = Object.create(decoration)
circle.radius = 10

for (const key in circle) {
  console.log(key) // radius + color
}
// The circle object has its own prototype that references the decoration object. Therefore, the for...in loop displays the properties of the circle object and its prototype.

// If you want to enumerate only the own properties of an object, you use the hasOwnProperty() method:
for (const key in circle) {
  if (circle.hasOwnProperty(key)) {
    console.log(key) // radius
  }
}
