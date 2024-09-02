/*
  append
  - inserts a set of Node objects or DOMString objects after the last child of a parent node

        parentNode.append(...nodes);
        parentNode.append(...DOMStrings);

  - Here are the differences between append() and appendChild():
      Differences	      append()	                    appendChild()
      Return value	    undefined	                    The appended Node object
      Input	            Multiple Node Objects	        A single Node object
      Parameter Types	  Accept Node and DOMString	    Only Node

*/

let app = document.querySelector('#app')

// 1) append an element
let langs = ['TypeScript', 'HTML', 'CSS']
let nodes = langs.map((lang) => {
  let li = document.createElement('li')
  li.textContent = lang
  return li
})
app.append(...nodes)

// 2) append text to an element
app.append('append() Text Demo')
console.log(app.textContent)
