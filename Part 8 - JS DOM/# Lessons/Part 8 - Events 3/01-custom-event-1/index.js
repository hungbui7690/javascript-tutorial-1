/*
  Custom Events

*/

let note = document.querySelector('.note')

// The following function highlights an element by changing its background color to yellow:
function highlight(elem) {
  const bgColor = 'yellow'
  elem.style.backgroundColor = bgColor
}

// To execute a piece of code after highlighting the element, you may come up with a callback:
function highlightX(elem, callback) {
  const bgColor = 'yellow'
  elem.style.backgroundColor = bgColor

  if (callback && typeof callback === 'function') {
    callback(elem)
  }
}

function addBorder(elem) {
  elem.style.border = 'solid 1px red'
}

// The following calls the highlightX() function and adds a border to a <div> element:
highlightX(note, addBorder)
// To make the code more flexible, you can use the custom event.
