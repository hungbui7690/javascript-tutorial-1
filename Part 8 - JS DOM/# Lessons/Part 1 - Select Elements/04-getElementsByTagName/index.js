/*
  getElementsByTagName
  - returns a live HTMLCollection of elements with the matching tag name in the order which they appear in the document.

  *** Note that the <HTMLCollection> is an array-like object, like arguments object of a function.

*/

let btn = document.getElementById('btnCount')
let headings = document.getElementsByTagName('h2')

btn.addEventListener('click', () => {
  alert(`The number of H2 tags: ${headings.length}`)
})
