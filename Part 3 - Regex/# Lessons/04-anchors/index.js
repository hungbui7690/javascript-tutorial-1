/*
  Anchors
  - allow you to match a position before or after characters.
  - Anchors have special meaning in regular expressions. They do not match any character. Instead, they match a position before or after characters:

      ^ – The caret anchor matches the beginning of the text.
      $ – The dollar anchor matches the end of the text.

  - Use the m flag to enable the multiline mode that instructs the ^ and $ anchors to match the beginning and end of the text as well as the beginning and end of the line.

*/

// 1) See the following example:
let str = 'JavaScript'
console.log(/^J/.test(str))
// The /^J/ match any text that starts with the letter J. It returns true.

// The following example returns false because the string JavaScript doesn’t start with the letter S:
str = 'JavaScript'
console.log(/^S/.test(str))

// Similarly, the following example returns true because the string JavaScript ends with the letter t:
str = 'JavaScript'
console.log(/t$/.test(str))

// You will often need to use anchors ^ and $ to check if a string fully matches a pattern.
// The following example checks if an input string matches a time format hh:mm like 12:05:
let isValid = /^\d\d:\d\d$/.test('12:05')
console.log(isValid)

// The following example returns false:
let valid = /^\d\d:\d\d$/.test('12:105')
console.log(valid)

/////////////////////////////
// 2) Multiline mode of anchors ^ and $: the m flag
// The default of the anchor ^ or $ is the single-line mode. In the single-line mode, the anchor ^ and $ matches the beginning and the end of a string.
// To enable the multiline mode, you use m flag. In the multiline mode, the ^ or $ anchor matches the beginning or end of the string as well as the beginning or end of lines.
// The following example returns only the first digit of the multiline string:
str = `1st line
2nd line
3rd line`
let re = /^\d/g
let matches = str.match(re)
console.log(matches) // ['1']

// If you add the flag m, the anchor ^ will also match the digit at the beginning of the line, like this:
str = `1st line
2nd line
3rd line`
re = /^\d/gm
matches = str.match(re)
console.log(matches) // ['1', '2', '3']
