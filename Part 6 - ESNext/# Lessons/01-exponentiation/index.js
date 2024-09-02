/*
  Exponentiation Operator
  - Math.pow(x,y)
  - n**m

  *** Note that some languages use the caret symbol ^ for exponentiation. However, JavaScript already uses that symbol for the bitwise logical XOR operator.

*/

let result = Math.pow(2, 2)
console.log(result) // 4

result = Math.pow(2, 3)
console.log(result) // 8

result = 2 ** 2
console.log(result) // 4

result = 2 ** 3
console.log(result) // 8

result = 2n ** 3n
console.log(result) // 8n

let x = 2
x **= 4
console.log(x) // 16

result = (-2) ** 3
console.log(result) // -8
