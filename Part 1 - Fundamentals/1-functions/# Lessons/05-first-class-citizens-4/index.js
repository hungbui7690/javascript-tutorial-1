/*
  Functions are First-Class Citizens

*/

// The following example defines two functions that convert a length in centimeters to inches and vice versa:
function cmToIn(length) {
  return length / 2.54
}
function inToCm(length) {
  return length * 2.54
}

// The following convert() function has two parameters. The first parameter is a function and the second one is the length that will be converted based on the first argument:
function convert(fn, length) {
  return fn(length)
}

// To convert cm to in, you can call the convert() function and pass the cmToIn function into the convert() function as the first argument:
let inches = convert(cmToIn, 10)
console.log(inches) // 3.937007874015748

// Similarly, to convert a length from inches to centimeters, you can pass the inToCm function into the convert() function, like this:
let cm = convert(inToCm, 10)
console.log(cm) // 25.4
