/*
  A practical JavaScript Promise example
  - The following example shows how to load a JSON file from the server and display its contents on a webpage.
  - Suppose you have the following JSON file:
    > https://www.javascripttutorial.net/sample/promise/api.json

*/

// First, define the load() function that uses the XMLHttpRequest object to load the JSON file from the server:
function load(url) {
  return new Promise(function (resolve, reject) {
    const request = new XMLHttpRequest()
    request.onreadystatechange = function () {
      // In the executor, we call resolve() function with the Response if the HTTP status code is 200. Otherwise, we invoke the reject() function with the HTTP status code.
      if (this.readyState === 4 && this.status == 200) {
        resolve(this.response)
      } else {
        reject(this.status)
      }
    }
    request.open('GET', url, true)
    request.send()
  })
}

// Second, register the button click event listener, and call the then() method of the promise object. If the load is successful, then we show the message returned from the server. Otherwise, we show the error message with the HTTP status code.
const url = 'https://www.javascripttutorial.net/sample/promise/api.json'
const btn = document.querySelector('#btnGet')
const msg = document.querySelector('#message')

btn.addEventListener('click', () => {
  load(URL)
    .then((response) => {
      const result = JSON.parse(response)
      msg.innerHTML = result.message
    })
    .catch((error) => {
      msg.innerHTML = `Error getting the message, HTTP status: ${error}`
    })
})

/*
  Summary
  - A promise is an object that encapsulates the result of an asynchronous operation.
  - A promise starts in the pending state and ends in either a fulfilled state or a rejected state.
  - Use then() method to schedule a callback to be executed when the promise is fulfilled, and catch() method to schedule a callback to be invoked when the promise is rejected.
  - Place the code that you want to execute in the finally() method whether the promise is fulfilled or rejected.

*/
