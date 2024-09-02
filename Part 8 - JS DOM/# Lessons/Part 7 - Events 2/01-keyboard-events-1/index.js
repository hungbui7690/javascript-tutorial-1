/*
  Keyboard Events
  - When you interact with the keyboard, the keyboard events are fired. There are three main keyboard events:

      keydown – fires when you press a key on the keyboard and fires repeatedly while you’re holding down the key.
      keyup – fires when you release a key on the keyboard.
      keypress – fires when you press a character keyboard like a,b, or c, not the left arrow key, home, or end keyboard, … The keypress also fires repeatedly while you hold down the key on the keyboard.

  - The keyboard events typically fire on the text box, though all elements support them.
  - When you press a character key once on the keyboard, three keyboard events are fired in the following order:

      keydown
      keypress
      keyup

  - Both keydown and keypress events are fired before any change is made to the text box, whereas the keyup event fires after the changes have been made to the text box. If you hold down a character key, the keydown and keypress are fired repeatedly until you release the key.

  - When you press a non-character key, the keydown event is fired first followed by the keyup event. If you hold down the non-character key, the keydown is fired repeatedly until you release the key.

*/

let msg = document.getElementById('message')

// If you press a character key, all three event handlers will be called.
msg.addEventListener('keydown', (event) => {
  console.log('handle keydown')
})
msg.addEventListener('keypress', (event) => {
  console.log('handle keypress')
})
msg.addEventListener('keyup', (event) => {
  console.log('handle keyup')
})
