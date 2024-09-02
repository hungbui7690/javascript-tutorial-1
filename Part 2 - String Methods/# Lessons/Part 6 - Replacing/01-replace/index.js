/*
  replace
  - replace a substring in a string with a new one.
  - Note that the replace() method doesn’t change the original string. It returns a new string.

      let newStr = str.replace(substr, newSubstr);

*/

let str = 'JS will, JS will rock you!'
let newStr = str.replace('JS', 'JavaScript')
console.log(newStr) // JavaScript will, JS will rock you!

str = 'JS will, JS will rock you!'
newStr = str.replace(/JS/g, 'JavaScript')
console.log(newStr) // JavaScript will, JavaScript will rock you!

str = 'JS will, Js will rock you!'
newStr = str.replace(/JS/gi, 'JavaScript')
console.log(newStr) // JavaScript will, JavaScript will rock you!
