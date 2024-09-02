/*
  split
  - split a string into an array of substrings.

      split([separator, [,limit]]);

  - If you omit the separator or the split() cannot find the separator in the string, the split() returns the entire string.
  - The limit is zero or positive integer that specifies the number of substrings. The split() method will stop when the number of substrings equals to the limit.
    > If the limit is zero, the split() returns an empty array. If the limit is 1, the split() returns an array that contains the string.
    > Note that the result array may have fewer entries than the limit in case the split() reaches the end of the string before the limit.

*/

// The following example uses the split() method to split the string into words:
let str = 'JavaScript String split()'
let substrings = str.split(' ')
console.log(substrings)

// Uses the second parameter to limit the number of substrings to two:
str = 'JavaScript String split()'
substrings = str.split(' ', 2)
console.log(substrings)

// The following example uses the split() method to split sentences in a paragraph into sentences:
let paragraph = 'Good Morning! How are you? This is John. John is my friend.'
let sentences = paragraph.split(/[!,?,.]/)
console.log(sentences)

// If the regular expression contains capturing parentheses (), the split() method also includes the matched results in the array:
paragraph = 'Good Morning! How are you? This is John. John is my friend.'
sentences = paragraph.split(/([!,?,.])/)
console.log(sentences)
// Notice that the !, ?, . characters are included in the returned array.
