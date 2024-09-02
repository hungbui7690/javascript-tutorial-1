/*
  Keyboard Events
  - The keyboard event properties
    + The keyboard event has two important properties: key and code. The key property returns the character that has been pressed whereas the code property returns the physical key code.

*/

let textBox = document.getElementById('message')

// For example, if you press the z character key, the event.key returns z and event.code returns KeyZ.
textBox.addEventListener('keydown', (event) => {
  console.log(`key=${event.key},code=${event.code}`)
})
