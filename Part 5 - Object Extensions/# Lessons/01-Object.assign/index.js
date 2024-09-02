/*
  Object.assign
  - The Object.assign() copies all enumerable and own properties from the source objects to the target object. It returns the target object.
  - The Object.assign() invokes the getters on the source objects and setters on the target. It assigns properties only, not copying or defining new properties.

      Object.assign(target, ...sources)

*/

// Clone an object.
let widget = {
  color: 'red',
}
let clonedWidget = Object.assign({}, widget)
console.log(clonedWidget)
// Note that the Object.assign() only carries a shallow clone, not a deep clone.

// The Object.assign() can merge source objects into a target object which has properties consisting of all the properties of the source objects. For example:
let box = {
  height: 10,
  width: 20,
}
let style = {
  color: 'Red',
  borderStyle: 'solid',
}
let styleBox = Object.assign({}, box, style)
console.log(styleBox)

// If the source objects have the same property, the property of the later object overwrites the earlier one:
let boxX = {
  height: 10,
  width: 20,
  color: 'Red',
}
let styleX = {
  color: 'Blue',
  borderStyle: 'solid',
}
let styleBoxX = Object.assign({}, boxX, styleX) // styleX is after boxX
console.log(styleBoxX)
