/*
Mouse Events
  - mousedown, mouseup, and click (pic)
  
  - Mouse events fire when you use the mouse to interact with the elements on the page. DOM Level 3 events define nine mouse events.
  - When you click an element, there are no less than three mouse events fire in the following sequence:

      1. The mousedown fires when you depress the mouse button on the element.
      2. The mouseup fires when you release the mouse button on the element.
      3. The click fires when one mousedown and one mouseup detected on the element.

\\\\\\\\\\\\\\\\\\\\
  dblclick
  - In practice, you rarely use the dblclick event. The dblclick event fires when you double click over an element.
  - It takes two click events to cause a dblclick event to fire. The dblclick event has four events fired in the following order:

        1. mousedown
        2. mouseup
        3. click
        4. mousedown
        5. mouseup
        6. click
        7. dblclick
  - As you can see, the click events always take place before the dblclick event. If you register both click and dblclick event handlers on the same element, you will not know exactly what user actually has clicked or double-clicked the element.

\\\\\\\\\\\\\\\\\\\\
  mousemove
  - The mousemove event fires repeatedly when you move the mouse cursor around an element. Even when you move the mouse one pixel, the mousemove event still fires. It will cause the page slow, therefore, you only register mousemove event handler only when you need it and immediately remove the event handler as soon as it is no longer used, like this:

      element.onmousemove = mouseMoveEventHandler;
      element.onmousemove = null;

\\\\\\\\\\\\\\\\\\\\
  mouseover / mouseout
  - The mouseover fires when the mouse cursor is outside of the element and then move to inside the boundaries of the element.
  - The mouseout fires when the mouse cursor is over an element and then moves another element.

\\\\\\\\\\\\\\\\\\\\
  mouseenter / mouseleave
  - The mouseenter fires when the mouse cursor is outside of an element and then moves to inside the boundaries of the element.
  - The mouseleave fires when the mouse cursor is over an element and then moves to the outside of the element’s boundaries.
  - Both mouseenter and mouseleave does not bubble and does not fire when the mouse cursor moves over descendant elements.

*/

// 1) To register a mouse click event handler, you use the following code:
let btn = document.querySelector('#btn')

btn.addEventListener('click', (event) => {
  console.log('clicked')
})

// or you can assign a mouse event handler to the element’s property:
btn.onclick = (event) => {
  console.log('clicked !!!')
}
/*
  In legacy systems, you may find that the event handler is assigned in the HTML attribute of the element:
    
    <button id="btn" onclick="console.log('clicked')">Click Me!</button>

  It’s a good practice to always use the addEventListener() to register a mouse event handler.
*/

/*
  2) Detecting mouse buttons
  - The event object passed to the mouse event handler has a property called button that indicates which mouse button was pressed on the mouse to trigger the event.

  - The mouse button is represented by a number: (pic)

      0: the main mouse button is pressed, usually the left button.
      1: the auxiliary button is pressed, usually the middle button or the wheel button.
      2: the secondary button is pressed, usually the right button.
      3: the fourth button is pressed, usually the Browser Back button.
      4: the fifth button is pressed, usually the Browser Forward button. 

*/
let btnX = document.querySelector('#btnX')

// disable context menu when right-mouse clicked
btnX.addEventListener('contextmenu', (e) => {
  e.preventDefault()
})

// show the mouse event message
btnX.addEventListener('mouseup', (e) => {
  let msg = document.querySelector('#message')
  switch (e.button) {
    case 0:
      msg.textContent = 'Left mouse button clicked.'
      break
    case 1:
      msg.textContent = 'Middle mouse button clicked.'
      break
    case 2:
      msg.textContent = 'Right mouse button clicked.'
      break
    default:
      msg.textContent = `Unknown mouse button code: ${event.button}`
  }
})
