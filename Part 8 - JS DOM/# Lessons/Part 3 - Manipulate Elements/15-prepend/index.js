/*
  prepend
  - inserts a set of Node objects or DOMString objects before the first child of a parent node:

        parentNode.prepend(...nodes)
        parentNode.prepend(...DOMStrings)

  - Here are the differences between append() and appendChild():
      Differences	      append()	                    appendChild()
      Return value	    undefined	                    The appended Node object
      Input	            Multiple Node Objects	        A single Node object
      Parameter Types	  Accept Node and DOMString	    Only Node

*/

let app = document.querySelector('#app')

// 1) prepend an element
let langs = ['TypeScript', 'HTML', 'CSS']
let nodes = langs.map((lang) => {
  let li = document.createElement('li')
  li.textContent = lang
  return li
})
app.prepend(...nodes)

// 2) append text to an element
app.prepend('prepend() Text Demo')
console.log(app.textContent)
