/*
  stopPropagation
  - The stopPropagation() method immediately stops the flow of an event through the DOM tree. However, it does not stop the browsers default behavior.

*/

let btn = document.querySelector('#btn')

// Without the stopPropagation() method, you would see two messages on the Console window.
// However, the click event never reaches the body because the stopPropagation() was called on the click event handler of the button.
btn.addEventListener('click', function (event) {
  // event.stopPropagation() // *** turn on/off to test
  console.log('The button was clicked!')
})

document.body.addEventListener('click', function (event) {
  console.log('The body was clicked!')
})

/*
  Summary

    An event is an action that occurs in the web browser e.g., a mouse click.
    Event flow has two main models: event bubbling and event capturing.
    DOM Level 2 Event specifies that the event flow has three phases: event bubbling, the event occurs at the exact element, and event capturing.
    Use addEventListener() to register an event that connects an event to an event listener
    The event object is accessible only within the event listener.
    Use preventDefault() method to prevent the default behavior of an event, but does not stop the event flow.
    Use stopPropagation() method to stop the flow of an event through the DOM tree, but does not cancel the browser default behavior.
*/
