/*
  getElementsByClassName
  - returns an array-like of objects of the child elements with a specified class name. 
  - The getElementsByClassName() method is available on the document element or any other elements.

      let elements = rootElement.getElementsByClassName(names);

  - The method returns the elements which is a live HTMLCollection of the matches elements.

  - The names parameter is a string that represents [one or more class names] to match; To use multiple class names, you separate them by space.
*/

////////////////////////
// 1) Calling JavaScript getElementsByClassName() on an element example
let menu = document.getElementById('menu')
let items = menu.getElementsByClassName('item')

// METHOD 1
// const data = [...items].map((item) => item.textContent)

// METHOD 2
// const data = [].map.call(items, (item) => item.textContent)
const data = Array.prototype.map.call(items, (item) => item.textContent)

console.log(data)

////////////////////////
// 2) Calling JavaScript getElementsByClassName() on the document example
// To search for the element with the class heading-secondary, you use the following code:

let elements = document.getElementsByClassName('secondary')
let info = [...elements].map((elem) => elem.textContent)

console.log(info)
