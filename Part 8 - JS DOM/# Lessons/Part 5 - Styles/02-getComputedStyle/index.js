/*
  getComputedStyle
  - to get the computed CSS properties of an element.

      let style = window.getComputedStyle(element [,pseudoElement]);

  - element is the element that you want to return the computed styles. If you pass another node type e.g., Text node, the method will throw an error.
  - pseudoElement specifies the pseudo-element to match. It defaults to null.
    + ::firstLetter
    + :hover, :active...: these are pseudo classes, not pseudo element

  - Method 1: 
      let style = getComputedStyle(message)
  - Method 2:
      let style = getComputedStyle(message, null)

*/

let p = document.querySelector('.message')
let style = getComputedStyle(p)
console.log('color:', style.color)
console.log('background color:', style.backgroundColor)

// For example, if you want to get the computed value of all the CSS properties of a link with the hover state, you pass the following arguments to the getComputedStyle() method:
style = getComputedStyle(p, ':after')
console.log('::after', style.color)
console.log('::after', style.content)

style = getComputedStyle(p, '::first-letter') // NOT :firstLetter
console.log('::first-letter', style.fontSize)

// NOT WORK > pseudo class > NOT pseudo element
style = getComputedStyle(p, ':hover')
console.log(style.color)
