/*
  setInterval
  - The setInterval() repeatedly calls a function with a fixed delay between each call.

      let intervalID = setInterval(callback, delay,[arg1, arg2, ...])

  - The setInterval() returns a numeric, non-zero number that identifies the created timer. You can pass the intervalID to the clearInterval() to cancel the timeout.
*/

// The following example uses the setInterval() and clearInterval() to change the color of a heading once a second once you press the Start button. If you stop the button, the clearInterval() will cancel the timeout.
let intervalID

function toggleColor() {
  let e = document.getElementById('flash-text')
  e.style.color = e.style.color == 'red' ? 'blue' : 'red'
}

function stop() {
  clearInterval(intervalID)
}
function start() {
  intervalID = setInterval(toggleColor, 1000)
}
