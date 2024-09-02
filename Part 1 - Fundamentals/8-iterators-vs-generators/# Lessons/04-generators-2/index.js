/*
  JavaScript Generators

*/

// The following example illustrates how to use a generator to generate a never-ending sequence:
function* forever() {
  let index = 0
  while (true) {
    yield index++
  }
}

let f = forever()
console.log(f.next()) // 0
console.log(f.next()) // 1
console.log(f.next()) // 2

// Each time you call the next() method of the forever generator, it returns the next number in the sequence starting from 0.
