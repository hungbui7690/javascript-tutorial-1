/*
  replaceChild
  - replace an HTML element by a new one.

        parentNode.replaceChild(newChild, oldChild);

*/

let menu = document.getElementById('menu')

let li = document.createElement('li')
li.textContent = '🎈'
menu.replaceChild(li, menu.firstElementChild)
