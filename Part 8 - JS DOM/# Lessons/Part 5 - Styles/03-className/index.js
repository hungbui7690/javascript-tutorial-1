/*
  className
  - manipulate CSS classes of an element.

      element.className

  *** Because the class is a keyword in JavaScript, the name className is used instead of the class.

*/

let note = document.querySelector('#note')
let menu = document.querySelector('#menu')

// The following shows the classes of the ul element in the console window:
console.log(menu.className) // vertical main

// The += operator concatenates newClassName to the existing class list of the element. Therefore, you need to prefix the new class name with a space like this:
menu.className += ' new'
console.log(menu.className) // vertical main new

// In practice, you’ll use the classList to add a new class to the existing classes of an element:
menu.classList.add('icon')
console.log(menu.className) // vertical main new icon

// To completely overwrite all the classes of an element, you use a simple assignment operator. For example:
menu.className = 'vertical main info'
console.log(menu.className) // vertical main info

// While className is a DOM property of the element:
console.log(note.className)
