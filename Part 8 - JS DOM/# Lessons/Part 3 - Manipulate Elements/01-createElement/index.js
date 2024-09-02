/*
  CreateElement
  - The document.createElement() accepts an HTML tag name and returns a new Node with the Element type.

*/

const menu = document.querySelector('#menu')

///////////////////////////////
// 1) The following example uses the document.createElement() to create a new <div> element:
let div = document.createElement('div')

// If you want to add an id to a div, you set the id attribute of the element to a value, like this:
div.id = 'content'

// The following example set the CSS class of a new div note:
div.className = 'note'

// And add an HTML snippet to the div:
div.innerHTML = '<p>CreateElement example</p>'

///////////////////////////////
// 2) To add a piece of text to a <p>, you can use the innerHTML property as the above example, or create a new Text node and append it to the div:
let p = document.createElement('p')

// METHOD 1: create a new text node and add it to the div
let text = document.createTextNode('lorem ipsum')
p.appendChild(text)

document.body.appendChild(p)

///////////////////////////////
// 3) To add an element to a div, you create an element and append it to the div using the appendChild() method:
// create a new heading and add it to the div
let h2 = document.createElement('h2')

// METHOD 2
h2.textContent = 'Add h2 element to the div'
div.appendChild(h2)

///////////////////////////////
// 4) The following code adds two li elements to the ul:
let li = document.createElement('li')
li.textContent = 'Products'
menu.appendChild(li)

li = document.createElement('li')
li.textContent = 'About Us'

menu.appendChild(li)

///////////////////////////////
// To attach the div to the document, you use the appendChild() method:
document.body.appendChild(div)

///////////////////////////////
// 5) Creating a script element example
// Sometimes, you may want to load a JavaScript file dynamically. To do this, you can use the document.createElement() to create the script element and add it to the document.
// The following example illustrates how to create a new script element and loads the /lib.js file to the document:
// You can first create a new helper function that loads a JavaScript file from an URL:
function loadJS(url) {
  let script = document.createElement('script')
  script.src = url
  document.body.appendChild(script)
}

// And then use the helper function to load the /lib.js file:
loadJS('./lib.js')

// To load a JavaScript file asynchronously, you set the async attribute of the script element to true:
function loadJSAsync(url) {
  let script = document.createElement('script')
  script.src = url
  script.async = true
  document.body.appendChild(script)
}
