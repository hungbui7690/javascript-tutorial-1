/*
  Siblings
  - let nextSibling = currentNode.nextElementSibling;
  - let prevSibling = currentNode.previousElementSibling;

*/

// 1)
let current = document.querySelector('.current')
let nextSibling = current.nextElementSibling
let prevSibling = current.previousElementSibling

console.log(current.textContent)
console.log('nextSibling:', nextSibling.textContent)
console.log('prevSibling:', prevSibling.textContent)

console.log('#while loop: ')
while (nextSibling) {
  console.log('- ', nextSibling.textContent)
  nextSibling = nextSibling.nextElementSibling
}

/* 2) Get all siblings of an element

  To get all siblings of an element, we’ll use the logic:

      First, select the parent of the element whose siblings that you want to find.
      Second, select the first child element of that parent element.
      Third, add the first element to an array of siblings.
      Fourth, select the next sibling of the first element.
      Finally, repeat the 3rd and 4th steps until there are no siblings left. In case the sibling is the original element, skip the 3rd step.

*/
// The following function illustrates the steps:
let getSiblings = function (e) {
  let siblings = []

  // if no parent, return no sibling
  if (!e.parentNode) {
    return siblings
  }

  let sibling = e.parentNode.firstChild

  while (sibling) {
    if (sibling.nodeType === 1 && sibling !== e) {
      siblings.push(sibling)
    }
    sibling = sibling.nextSibling
  }
  return siblings
}

let siblings = getSiblings(document.querySelector('.current'))
siblingText = siblings.map((e) => e.textContent)
console.log(siblingText)
