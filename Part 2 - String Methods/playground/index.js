/*
  replaceAll
  - To replace all the occurrences of a substring with a new one, you can call the replace() method repeatedly or use a regular expression with a global flag (g).
  - ES2021 introduced the String replaceAll() method that returns a new string with all matches of a pattern replaced by a replacement:

      replaceAll(pattern, replacement)
  
  - replacement(match, offset, str)
    > match is the matched substring.
    > offset is offset of the matched substring within the original string. For example, if the original string is 'Hello' and the matched substring is 'll', then the offset will be 2.
    > str is the original string.

*/

let str = 'JS will, JS will, JS will rock you.'
let newStr = str.replaceAll('JS', 'JavaScript')
console.log(newStr)

str = 'JS will, Js will, js will rock you.'
pattern = /js/gi
str.replaceAll(pattern, function (match, offset, str) {
  if (match === 'JS') return 'JavaScript'
  if (match === 'Js') return 'Javascript'
  if (match === 'js') return 'javascript'
  return ''
})

console.log(newStr)
