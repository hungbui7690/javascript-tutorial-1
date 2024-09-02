// METHOD 1
let count = 1
export { count }

// METHOD 2
export let flag = 'flag'

// METHOD 3: function
function increase() {
  console.log('Increase')
}
export { increase }

// METHOD 4: class
class Counter {
  constructor() {
    this.count = 1
  }
  increase() {
    this.count++
  }
  get current() {
    console.log(this.count)
    return this.count
  }
}

export { Counter }

// METHOD 5: export directly
export class Animal {
  constructor(breed) {
    this.breed = breed
  }
}
