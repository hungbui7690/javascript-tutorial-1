/*
  Focus Events
  - keep track of the elements that users focus on.
  - The focus events fire when an element receives or loses focus. These are the two main focus events:

      focus fires when an element has received focus.
      blur fires when an element has lost focus.

  - The focusin and focusout fire at the same time as focus and blur, however, they bubble while the focus and blur do not.
  - The following elements are focusable:

      The window gains focus when you bring it forward by using Alt+Tab or clicking on it and loses focus when you send it back.
      Links when you use a mouse or a keyboard.
      Form fields like input text when you use a keyboard or a mouse.
      Elements with tabindex, also when you use a keyboard or a mouse.

*/

const pwd = document.querySelector('input[type="password"]')

pwd.addEventListener('focus', (e) => {
  e.target.style.backgroundColor = 'yellow'
})

pwd.addEventListener('blur', (e) => {
  e.target.style.backgroundColor = ''
})
