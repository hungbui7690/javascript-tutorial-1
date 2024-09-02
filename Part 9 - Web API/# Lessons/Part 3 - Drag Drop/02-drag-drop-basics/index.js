/*
  Drag & Drop API

*/

const item = document.querySelector('.item')

item.addEventListener('dragstart', dragStart)

// In the dragStart event handler, you need to store the id of the draggable element. And you need to hide it:
function dragStart(e) {
  e.dataTransfer.setData('text/plain', e.target.id)

  // (1) If you drag the element, you’ll see that it disappears once you start dragging.
  // e.target.classList.add('hide')

  // (2) To solve this, you use the setTimeout() function:
  setTimeout(() => {
    e.target.classList.add('hide')
  }, 0)
}
