/*
  textContent
  - property to get the text content of a node and its descendants.
  - show the hidden text


      + Use the textContent property to return the concatenation of the textContent of every child node. You can use it to set a text for a node.
      + The innerText returns the human-readable text that takes CSS into account.

*/

// 1) The following example uses the textContent property to get the text of the <div> element:
let note = document.getElementById('note')
console.log(note.textContent)
// As you can see clearly from the output, the textContent property returns the concatenation of the textContent of every child node, excluding comments (and also processing instructions).

// 2) textContent vs. innerText
// On the other hand, the innerText takes the CSS style into account and returns only human-readable text. For example:
console.log(note.innerText)
// As you can see, the hidden text and comments are not returned.
// Since the innerText property uses the up-to-date CSS to compute the text, accessing it will trigger a reflow, which is computationally expensive.
// A reflow occurs when a web browser needs to process and draw parts or all of a webpage again.

// 3) Setting textContent for a node
// Besides reading textContent, you can also use the textContent property to set the text for a node:
let result = document.getElementById('result')
result.textContent = 'This is a note'
// When you set textContent on a node, all the node’s children will be removed and replaced by a single text node with the newText value. For example:
