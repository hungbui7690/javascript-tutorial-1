/*
  Promise.any
  - take a list of promises 
  - return a promise that is fulfilled first.

  1) All promises fulfilled example

*/

// The following example demonstrates the Promise.any() method with all promises fulfilled:
const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log('Promise 1 fulfilled')
    resolve(1)
  }, 1000)
})

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log('Promise 2 fulfilled')
    resolve(2)
  }, 2000)
})

const p = Promise.any([p1, p2])
p.then((value) => {
  console.log('Returned Promise')
  console.log(value)
})

/*
  How it works.

      First, create a new promise p1 that will resolve to a value 1 after one second.
      Second, create a new promise p2 that will resolve to a value 2 after two seconds.
      Third, use the Promise.any() method that uses two promises p1 and p2. The Promise.any() returns a promise p that will resolve to the value 1 of the first fulfilled promise (p1) after one second.
*/
