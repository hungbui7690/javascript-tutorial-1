/*
  replacer Function

  - let newStr = str.replace(substr | regexp, replacer)
    > the replace() method will invoke the replacer function after the match has been performed. It then uses the result of this function as the replacement string.
    > If you use the global flag (g) in the regular expression, the replace() method will invoke the replacer function for every match. For example, if there are three matches, the replace() method will invoke the replacer() function three times.
  
  - function replacer(match, p1, p2, ..., offset, string)
    > match: is the matched substring.
    > p1, p2, …pn are the nth string found by a parenthesized capture group provided by the regular expression.
    > offset: is the offset of the matched substring within the whole string being searched.
    > string: is the whole string being examined.

*/

let str = 'I like to eat, eat, eat apples and bananas'
let re = /apples|bananas/gi
let newStr = str.replace(re, (match) => {
  console.log({ match })
  return match.toUpperCase()
})
console.log(newStr)

/*
  {match: 'apples'}
  {match: 'bananas'}
  I like to eat, eat, eat APPLES and BANANAS
*/
