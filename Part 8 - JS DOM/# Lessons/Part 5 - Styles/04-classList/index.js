/*
  classList
  - work with the CSS classes of an element.

      const classes = element.classList

  - The classList is a DOMTokenList object that represents the contents of the element’s class attribute.
  - Even though the classList is read-only, but you can manipulate the classes it contains using various methods.

*/

let div = document.querySelector('#content')

// 1) The following code displays the class list of the div element in the Console window:
for (let cssClass of div.classList) {
  console.log(cssClass) // main red
}

// 2) Add one or more classes to the class list of an element
div.classList.add('info')
console.log(div.className) // main red info

// The following example adds multiple CSS classes to the class list of an element:
div.classList.add('info', 'visible', 'block')
console.log(div.className) // main red info visible block

// 3) To remove a CSS class from the class list of an element, you use the remove() method:
div.classList.remove('visible')
console.log(div.className) // main red info block

// Like the add() method, you can remove multiple classes once:
div.classList.remove('block', 'red')
console.log(div.className) // main info

// 4) To replace an existing CSS class with a new one, you use the replace() method:
div.classList.replace('info', 'warning')
console.log(div.className) // main warning

// 5) To check if the element has a specified class, you use the contains() method:
const result = div.classList.contains('warning')
console.log(result) // true

// 6) If the class list of an element contains a specified class name, the toggle() method removes it. If the class list doesn’t contain the class name, the toggle() method adds it to the class list.
div.classList.toggle('visible')
console.log(div.className) // main warning visible
div.classList.toggle('visible')
console.log(div.className) // main warning
