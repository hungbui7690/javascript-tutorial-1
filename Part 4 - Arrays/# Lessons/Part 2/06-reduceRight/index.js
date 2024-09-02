/*
  reduceRight: Reducing an Array Into a Value
  - The reduceRight() method works in the same way as the reduce() method, but in the opposite direction.

  - The reduce() method starts at the first element and travels toward the last, whereas the reduceRight() method starts at the last element and travels backward the first.

*/

let numbers = [1, 2, 3]
let sum = numbers.reduceRight(function (previousValue, currentValue) {
  console.log({ previousValue, currentValue })
  return previousValue + currentValue
})
console.log(`Result:${sum}`)
