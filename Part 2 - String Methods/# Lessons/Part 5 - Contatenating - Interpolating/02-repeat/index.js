/*
  repeat
  - Note that the repeat() method doesn’t change the original string but returns a new string.

        str.repeat(count)

  - In this method, the count is an integer that specifies the number of times to repeat the string str. The count is greater than 0 and less than +Infinity.
  - If the count is zero, the repeat() method returns an empty string. And if the count is negative or +Infinity, the repeat() method raises a RangeError exception.

*/

let result = '*'.repeat(1)
console.log({ result }) // **

result = '*'.repeat(3)
console.log({ result }) // ***

result = '*'.repeat(0)
console.log({ result }) // ''

// result = '*'.repeat(-1) // err

// The repeat() method is generic by design, which does not require its this value to be a String object. Therefore, you can use the repeat() method with any other objects. For example:
const message = {
  toString() {
    return 'Hi'
  },
}
result = String.prototype.repeat.call(message, 3)
console.log(result) // HiHiHi
