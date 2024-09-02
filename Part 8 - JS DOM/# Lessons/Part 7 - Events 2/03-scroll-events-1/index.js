/*
  Scroll Events
  - When you scroll a document or an element, the scroll events fire. You can trigger the scroll events in the following ways, for example:

      Using the scrollbar manually
      Using the mouse wheel
      Clicking an ID link
      Calling functions in JavaScript


*/

// To register a scroll event handler, you call the addEventListener() method on the target element, like this:
window.addEventListener('scroll', (event) => {
  console.log('Scrolling...')
})

// or assign an event handler to the onscroll property of the target element:
document.body.onscroll = (event) => {
  console.log('Scrolling...!!!!')
}

// The onscroll property of the window object is the same as document.body.onscroll and you can use them interchangeably, for example:
document.body.onscroll = null
console.log(window.onscroll) // null
