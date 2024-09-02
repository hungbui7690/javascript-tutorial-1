/*
  Promise.race
  - returns a new promise that fulfills or rejects as soon as one of the promises in an iterable fulfills or rejects, with the value or error from that promise.

  - Suppose you have to show a spinner if the data loading process from the server is taking longer than a number of seconds.
  - To do this, you can use the Promise.race() static method. If a timeout occurs, you show the loading indicator, otherwise, you show the message.

*/

// after 0.5 seconds, if the getData() has not resolved, then show the Loading indicator
const TIMEOUT = 500
const DATA_LOAD_TIME = 5000

function getData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const message = 'Promise.race() Demo'
      resolve(message)
    }, DATA_LOAD_TIME)
  })
}

function showContent(message) {
  document.querySelector('#message').textContent = message
}

function timeout() {
  return new Promise((resolve, reject) => {
    setTimeout(() => reject(), TIMEOUT)
  })
}

function showLoadingIndicator() {
  document.querySelector('#loader').className = 'loader'
}

function hideLoadingIndicator() {
  document.querySelector('#loader').className = ''
}

function reset() {
  hideLoadingIndicator()
  showContent('')
}

const btn = document.querySelector('#btnGet')

btn.addEventListener('click', () => {
  reset() // reset UI if users click the second time

  // The first promise gets data from the server, shows the content, and hides the loading indicator. The second promise sets a timeout.
  // If the first promise takes more than 500 ms to settle, the catch() is called to show the loading indicator. Once the first promise resolves, it hides the loading indicator.
  Promise.race([
    getData().then(showContent).then(hideLoadingIndicator),
    timeout(),
  ]).catch(showLoadingIndicator)
})

// The Promise.race(iterable) method returns a new promise that fulfills or rejects as soon as one of the promises in an iterable fulfills or rejects, with the value or error from that promise.
