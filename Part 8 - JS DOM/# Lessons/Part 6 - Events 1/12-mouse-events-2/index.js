/*
  Mouse Events
  - cont.

*/

/*
\\\\\\\\\\\\\\\\\\\\
  1) Modifier keys
  - When you click an element, you may press one or more modifier keys: Shift, Ctrl, Alt, and Meta.
  - Note the Meta key is the Windows key on Windows keyboards and the Command key on the Apple keyboard.

  - To detect if these modifier keys have been pressed, you can use the event object passed to the mouse event handler.
  - The event object has four Boolean properties, where each is set to true if the key is being held down or false if the key is not pressed.
*/
let btnKeys = document.querySelector('#btnKeys')

btnKeys.addEventListener('click', (e) => {
  let keys = []

  if (e.shiftKey) keys.push('shift')
  if (e.ctrlKey) keys.push('ctrl')
  if (e.altKey) keys.push('alt')
  if (e.metaKey) keys.push('meta')

  let msg = document.querySelector('#messageKeys')
  msg.textContent = `Keys: ${keys.join('+')}`
})

/*
\\\\\\\\\\\\\\\\\\\\\
  2) Getting Screen Coordinates
    - The screenX and screenY properties of the event passed to the mouse event handler return the screen coordinates of the location of the mouse in relation to the entire screen. (pic5)
    - On the other hand, the clientX and clientY properties provide the horizontal and vertical coordinates within the application’s client area at which the mouse event occurred: (pic6)
*/
let track = document.querySelector('#track')
track.addEventListener('mousemove', (e) => {
  let log = document.querySelector('#log')
  log.innerText = `
            Screen X/Y: (${e.screenX}, ${e.screenY})
            Client X/Y: (${e.clientX}, ${e.clientY})`
})

/*
  Summary

    DOM Level 3 defines nine mouse events.
    Use addEventListener() method to register a mouse event handler.
    The event.button indicates which mouse button was pressed to trigger the mouse event.
    The modifier keys: alt, shift, ctrl, and meta (Mac) can be obtained via properties of the event object passed to the mouse event handler.
    The screenX and screenY properties return the horizontal and vertical coordinates of the mouse pointer in screen coordinates.
    The clientX and clientY properties of the event object return horizontal and vertical coordinates within the application’s client area at which the mouse event occurred.
*/
