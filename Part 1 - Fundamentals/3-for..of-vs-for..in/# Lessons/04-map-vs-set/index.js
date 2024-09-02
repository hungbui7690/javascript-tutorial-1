/*
  for…of 

*/

// 4) Iterating over Map objects
let colors = new Map()

colors.set('red', '#ff0000')
colors.set('green', '#00ff00')
colors.set('blue', '#0000ff')

for (let color of colors) {
  console.log(color)
}

// 5) Iterating over set objects
let nums = new Set([1, 2, 3])

for (let num of nums) {
  console.log(num)
}
