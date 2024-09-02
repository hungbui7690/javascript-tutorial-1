/*
  JavaScript events
  - An event is an action that occurs in the web browser, which the web browser feedbacks to you so that you can respond to it.
  - For example, when users click a button on a webpage, you may want to respond to this click event by displaying a dialog box.

  - Each event may have an event handler which is a block of code that will execute when the event occurs.
  - An event handler is also known as an event listener. It listens to the event and executes when the event occurs.

  /////////////////////////////
  Event flow
  - When you click the button, you’re clicking not only the button but also the button’s container, the div, and the whole webpage.
  - Event flow explains the order in which events are received on the page from the element where the event occurs and propagated through the DOM tree.
  - There are two main event models: event bubbling and event capturing.

  /////////////////////////////
  Event bubbling
  - In the event bubbling model, an event starts at the most specific element and then flows upward toward the least specific element (the document or even window).
  - When you click the button, the click event occurs in the following order:

      button
      div with the id container
      body
      html
      document

  - The click event first occurs on the button which is the element that was clicked. Then the click event goes up the DOM tree, firing on each node along its way until it reaches the document object.
  - The following picture illustrates the event bubbling effect when users click the button: pic
  - Note that modern web browsers bubble the event up to the window object.

  /////////////////////////////
  Event capturing
  - In the event capturing model, an event starts at the least specific element and flows downward toward the most specific element.
  - When you click the button, the click event occurs in the following order:

      document
      html
      body
      div with the id container
      button

  - The following picture illustrates the event capturing effect: pic

  //////////////////////////////
  DOM Level 2 Event flow
  - DOM level 2 events specify that event flow has three phases:

      First, event capturing occurs, which provides the opportunity to intercept the event.
      Then, the actual target receives the event.
      Finally, event bubbling occurs, which allows a final response to the event.

  - The following picture illustrates the DOM Level 2 event model when users click the button: pic

*/

// To define the code that will be executed when the button is clicked, you need to register an event handler using the addEventListener() method:
let btn = document.querySelector('#btn')

function display() {
  alert('It was clicked!')
}

// Register an event handler using the addEventListener() so that when users click the button, the display() function will be executed.
btn.addEventListener('click', display)
