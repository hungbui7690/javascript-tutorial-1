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

export { Counter as MyCounter }
