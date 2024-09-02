/*
  parentNode
  - Get the Parent Element 

  - The parentNode is read-only.

  - The Document and DocumentFragment nodes do not have a parent. Therefore, the parentNode will always be null.

  - If you create a new node but haven’t attached it to the DOM tree, the parentNode of that node will also be null.

*/

let note = document.querySelector('.note')
console.log(note)
console.log(note.parentNode)
