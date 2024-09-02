/*
  replacer Fn
  - The second argument of the replace() method can be a function like this:

        replace(regexp, replacerFunction)

  - The replace() method calls the replacerFunction after it finds the first match. The replacerFunction is used to create a substring to replace the match.

  - If the regexp uses the global flag (g), the replace() method will call the replacerFunction after every match.

  - The replacerFunction has the following arguments:

      match specifies the matched substring.
      p1, p2, … the values of the capturing groups in the regexp.
      offset is an integer that specifies the offset of the matched substring within the input string.
      string is the input string.
      groups is an object whose are are the named capturing group and values are matched values.

*/

// 1)
const prop = 'backgroundColor' // you want to transform it into something like: background-color

// The replacer() function adds a hyphen if the matched letter is not at the beginning of the string and concatenates the hyphen with the matched letter converted to lowercase.
function replacer(match, offset) {
  return (offset > 0 ? '-' : '') + match.toLowerCase()
}
function addHyphen(prop) {
  return prop.replace(/[A-Z]/g, replacer)
}
console.log(addHyphen(prop))

// 2) To make the code more concise, you can use arrow functions with the replacer function as a callback function like this:
const addHyphenX = (prop) =>
  prop.replace(
    /[A-Z]/g,
    (match, offset) => (offset > 0 ? '-' : '') + match.toLowerCase()
  )
console.log(addHyphenX(prop))
