/*
  appendChild
  - Moving a node within the document example
  - pic

*/

// The following example uses the appendChild() to move the first child element from the first list to the second list:
const firstList = document.querySelector('#first-list')
const secondList = document.querySelector('#second-list')

const everest = firstList.firstElementChild
secondList.appendChild(everest)
