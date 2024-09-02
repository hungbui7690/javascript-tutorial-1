/*
  Backreferences
  - Backreferences allow you to reference the capturing groups in the regular expressions. Technically speaking, backreferences are like variables in regular expressions.

  - Here’s the syntax of a backreference:

        \N
  
  - In this syntax, N is an integer such as 1, 2, and 3 that represents the corresponding capturing group number.

  - Suppose you have a string with the duplicate word JavaScript like this:

      const s = 'JavaScript JavaScript is awesome';
    
  - And you want to remove the duplicate word (JavaScript) so that the result string will be:

      'JavaScript is awesome'
    
  - To do so, you can use a backreference in the regular expression.

  - First, match a word:

      /\w+\s+/
    
  - Second, create a capturing group that captures the word:

      /(\w+)\s+/

  - Third, use a backreference to reference the first capturing group:

      /(\w+)\s+\1/
  
  - In this pattern, the \1 is a backreference that references the (\w+) capturing group.

*/

// 1) Finally, replace the entire match with the first capturing group using the String.replace() method:
let s = 'JavaScript JavaScript is cool'
let pattern = /(\w+)\s+\1/
let result = s.replace(pattern, '$1')
console.log(result) // JavaScript is cool

// 2) Using backreferences to get text inside quotes
/*
  To get the text inside the double quotes like this:

    "JavaScript Regex Backreferences"
  
  Or single quotes:

    'JavaScript Regex Backreferences'
  
  But not mixed of single and double-quotes:

    'not match"
  
  To do so, you might come up with the following regular expression:

    /[\'"](.*?)[\'"]/
*/
// However, this regular expression also matches the text that starts with a single quote (‘) and ends with a double quote (“) or vice versa. For example:
let message = `"JavaScript's cool". They said`
pattern = /[\'"].*?[\'"]/
match = message.match(pattern)
console.log(match[0]) // "JavaScript'
/*
  It returns the "JavaScript' not "JavaScript's cool".

  To resolve it, you can use a backreference in the regular expression:

    /([\'"]).*?\1/

  The backreference \1 references the first capturing group. If the subgroup starts with a single quote, the \1 matches the single quote. And if the subgroup starts with double quotes, the \1 matches double-quotes.
*/
// For example:
message = `"JavaScript's cool". They said`
pattern = /([\'"]).*?\1/
match = message.match(pattern)
console.log(match[0]) // "JavaScript's cool"

// 3) Using backreferences to find word that has at least one consecutive repeated character
// The following example shows how to use a backreference to find the word that has at least one consecutive repeated character e.g., apple (the letter p is repeated):
let words = ['apple', 'orange', 'strawberry']
pattern = /\b\w*(\w)\1\w*\b/

for (const word of words) {
  const result = word.match(pattern)
  if (result) {
    console.log(result[0], '->', result[1])
  }
}
