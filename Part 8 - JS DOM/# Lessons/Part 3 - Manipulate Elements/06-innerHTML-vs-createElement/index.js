/*
  innerHTML vs createElement

*/

// #1) createElement is more performant
// You can new elements to the div element by creating an element and appending it:
let div = document.querySelector('.container')
let p = document.createElement('p')
p.textContent = 'JS DOM textContent'
div.appendChild(p)

// You can also manipulate an element’s HTML directly using innerHTML like this:
div.innerHTML += '<p>JS DOM innerHTML</p>'

// Using innerHTML is cleaner and shorter when you want to add attributes to the element:
div.innerHTML += '<p class="note">JS DOM with class</p>'
/*
  However, using the innerHTML causes the web browsers to re-parse and recreate all DOM nodes inside the div element. 
  
  Therefore, it is less efficient than creating a new element and appending to the div. In other words, creating a new element and appending it to the DOM tree provides better performance than the innerHTML.
*/

/*
  #2) createElement is more secure

  As mentioned in the innerHTML tutorial, you should use it only when the data comes from a trusted source like a database.

  If you set the contents that you have no control over to the innerHTML, the malicious code may be injected and executed.
*/

// #3) Using DocumentFragment for composing DOM Nodes
// Assuming that you have a list of elements and you need in each iteration:
for (let i = 0; i < 50; i++) {
  let p = document.createElement('p')
  p.textContent = `Paragraph ${i}`
  div.appendChild(p)
}
// This code results in recalculation of styles, painting, and layout every iteration. This is not very efficient.

// To overcome this, you typically use a DocumentFragment to compose DOM nodes and append it to the DOM tree:
// compose DOM nodes
let fragment = document.createDocumentFragment()
for (let i = 0; i < 1000; i++) {
  let p = document.createElement('p')
  p.textContent = `P ${i}`
  fragment.appendChild(p)
}
div.appendChild(fragment)

// A document fragment does not link to the active DOM tree, therefore, it doesn’t incur any performance.
