/*
  How To Get Query String in JavaScript
  - http://127.0.0.1:5500/playground/index.html?type=list&page=20

  The URLSearchParams has some useful methods that return iterators of parameter keys, values, and entries:

      keys() returns an iterator that iterates over the parameter keys.
      values() returns an iterator that iterates over the parameter values.
      entries() returns an iterator that iterates over the (key, value) pairs of the parameters.

*/

// 1) To get a query string you can access the search property of the location object:
console.log(location.search)

// 2) To work with the query string, you can use the URLSearchParams object.
const urlParams = new URLSearchParams(location.search)
console.log(urlParams)

// 3) The URLSearchParams is an iterable object, therefore you can use the for...of structure to iterate over its elements which are query string parameters:
for (const [key, value] of urlParams) {
  console.log(`${key}:${value}`)
}
const urlParamsX = new URLSearchParams('?type=list&page=20')
for (const key of urlParamsX.keys()) {
  console.log({ key })
}
for (const value of urlParamsX.values()) {
  console.log({ value })
}
for (const entry of urlParams.entries()) {
  console.log({ entry })
}

// 4) Check if a query string parameter exists
// The URLSearchParams.has() method returns true if a parameter with a specified name exists.
console.log(urlParams.has('type')) // true
console.log(urlParams.has('foo')) // false
