/*
  A practical example of MutationObserver
  - In JavaScript applications, the elements on the page are typically dynamically generated. To wait for a dynamic element, you need to use MutationObserver.

*/

// The following waitForElement() function waits for one or more elements specified by a selector using MutationObserver.
function waitForElement(selector) {
  // The waitForElement() function returns a promise. The promise will be resolved once the element is available.
  return new Promise((resolve) => {
    // First, resolve the element if it is available:
    if (document.querySelector(selector)) {
      return resolve(element)
    }
    // Second, create a new MutationObserver object to observe the DOM tree if the element is not available:
    const observer = new MutationObserver(() => {
      const element = document.querySelector(selector)
      if (element) {
        resolve(element)
        observer.disconnect()
      }
    })
    // The observer object will call the resolve() function once the element is available and stop observing the DOM tree.
    // Third, observe elements of the whole DOM tree:
    observer.observe(document.body, {
      childList: true,
      subtree: true,
    })
  })
}

// Because the waitForElement() returns a Promise, you can use the then() method like this:
waitForElement()('.a-class').then((element) => {
  console.log('Element is ready')
  console.log(element.textContent)
})

// Or you can use await syntax:
// const element = await waitForElement()('.a-class')
// console.log(element.textContent)
