/*
  substring
  - extract a substring from a string.
  - difference with substring: 
    + split returns array 
    + substring returns string
    
    str.substring(startIndex [, endIndex])

  - The startIndex specifies the index of the first character to include in the returned substring.
  - The endIndex determines the first character to exclude from the returned substring. In other words, the returned substring doesn’t include the character at the endIndex.

    + If you omit the endIndex, the substring() returns the substring to the end of the string.
    + If startIndex equals endIndex, the substring() method returns an empty string.
    + If startIndex is greater than the endIndex, the substring() swaps their roles: the startIndex becomes the endIndex and vice versa.

*/

// The following example uses the substring method to extract a substring starting from the beginning of the string:
let str = 'JavaScript Substring'
let substring = str.substring(0, 10)
console.log(substring) // JavaScript

// The following example uses the substring() to extract a substring from the index 11 to the end of the string:
str = 'JavaScript Substring'
substring = str.substring(11)
console.log(substring) // Substring

// The following example uses the substring() with the indexOf() to extract the domain from the email:
let email = 'john.doe@gmail.com'
let domain = email.substring(email.indexOf('@') + 1)
console.log(domain) // gmail.com
