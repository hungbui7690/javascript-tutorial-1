/*
  Greedy
  - All quantifiers work in a greedy mode by default. This means that the quantifiers will match their preceding elements as much as possible.

*/

// Suppose you have an HTML string that represents a button element:
const button = '<button type="submit" class="btn">Send</button>'

// And you want to match the texts surrounded by double quotes ("") like submit and btn.
// To do that, you use the double quotes (“), dot (.) character class and the (+) quantifier to construct the following pattern:
let re = /".+"/g
/*
  This pattern means that:

    " starts with "
    . matches any character except the newline
    + matches the preceding character one or more times
    " ends with "
    g flag returns all matches
*/

// The following uses the match() method to match the string s with the pattern:
let s = '<button type="submit" class="btn">Send</button>'
let pattern = /".+"/g
let result = s.match(pattern)
console.log(result) // ['"submit" class="btn"']
// The reason is that in the greedy mode, the quantifier (+) tries to match the preceding element (".) as much as possible.

/*
  How greedy quantifiers work

    First, the regex engine starts matching from the first character in the string s.

    Next, because the first character < does not match the quote ("), the regex engine continues to match the next characters until it finds the first quote ("):
      <button type="submit" class="btn">

    Then, the regex engine matches the string with the next rule .+ in the regular expression.

    Since the .+ rule matches one or more characters, the regex engine matches the characters until it encounters the end of the string.

    After that, the regex engine checks the last rule in the regular expression, which is a quote (“). However, there’s no more character to match because it already reached the end of the string. This means that the regex engine is too greedy by going too far.

    Finally, the regex engine goes back from the end of the string to find the quote (“). This step is often referred to as backtracking.

    To resolve this issue, you need to instruct the quantifier (+) to use the non-greedy (or lazy) mode instead of the greedy mode. To do that, you add a question mark (?) after the quantifier like this:

      /".+?"/g

*/

// The following script returns the expected result:
s = '<button type="submit" class="btn">Send</button>'
pattern = /".+?"/g
result = s.match(pattern)
console.log(result)
