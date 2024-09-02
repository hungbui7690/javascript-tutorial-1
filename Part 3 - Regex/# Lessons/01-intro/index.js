/*
  Intro 
  - A regular expression is a string that describes a pattern e.g., email addresses and phone numbers.

  - built in RegExp 

  - Regular expressions are useful for searching and replacing strings that match a pattern. They have many useful applications.

  - For example, you can use regular expressions to extract useful information in web scraping like product prices. Or you can use regular expressions to validate form fields like email addresses and phone numbers.

  *** Note that a regular expression doesn’t have single quotes or double quotes like a regular string.

*/

// I. Creating a regular expression
// To create a regular expression in JavaScript, you enclose its pattern in forward-slash characters (/) like this:
let re = /hi/

// Or you can use the RegExp constructor:
re = new RegExp('hi')

// II. Testing for matching
// The RegExp object has many useful methods. One of them is the test() method that allows you to test if a string contains a match of the pattern in the regular expression.
let result = re.test('hi John')
console.log(result) // true

// III. Pattern Flags
// Besides a pattern, a RegExp object also accepts an optional flag parameter. Flags are settings that change the searching behavior. Regular expressions have many flags.
// 1) The ignore flag (i)
// The i flag ignores cases when searching. The letter i stands for ignore.
// By default, searches are case-sensitive. For example /hi/ only matches the string hi not Hi. To search for a string hi in any cases, you use the i flag:
re = /hi/i
result = re.test('Hi John')
console.log(result) // true
// In this example, the /hi/i will match any string hi, Hi, and HI. Notice that you place the flag i after the last forward-slash character (/)

// The following example shows how to use the flag in the RegExp constructor:
re = new RegExp('hi', 'i')
result = re.test('HI John')
console.log(result) // true

/*
  2) The global flag (g)
  - Another commonly used flag is the global flag (g). Without the global flag, the RegExp object only checks if there is a match in a string and returns the first match.

  - When the g flag is available, the RegExp looks for all matches and returns all of them.

  - It’s possible to combine flags e.g., gi flags combine the ignore (i) and the global (g) flags.

  - The exec() method of the RegExp performs a search for a match in a string and returns an array that contains detailed information about the match.

  - The exec() method returns null if it could not find any match. However, it returns a single match at once. To get all matches, you need to execute the exec() multiple times.

*/
// The following example uses the exec() method with a do...while loop to return all the matches:
let message = 'Hi, are you there? hi, HI...'
re = /hi/gi

let matches = []
let match
do {
  match = re.exec(message)
  if (match) {
    matches.push(match)
  }
} while (match != null) // execute the exec() method until no match found.

console.dir(matches)

// IV. Searching strings
// The method str.match(regexp) returns all matches of regexp in the string str.
let str = "Are you Ok? Yes, I'm OK"
result = str.match(/OK/gi)
console.log(result) // ['Ok', 'OK']

// V. Replacing strings
// The following example uses the replace() method to replace the first occurrence of the string 'Ok' in the string str:
str = "Are you Ok? Yes, I'm OK."
result = str.replace('Ok', 'fine')
console.log(result) // Are you fine? Yes, I'm OK.

// To replace all occurrences of OK, you use a regular expression with the global flag (g):
str = "Are you OK? Yes, I'm OK."
result = str.replace(/OK/g, 'fine')
console.log(result) // Are you fine? Yes, I'm fine.

// The following example uses both ignore and global flags to replace all occurrences of OK regardless of cases with the string fine:
str = "Are you ok? Yes, I'm OK."
result = str.replace(/OK/gi, 'fine')
console.log(result) // Are you fine? Yes, I'm fine.
