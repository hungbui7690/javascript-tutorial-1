/*
  Drag & Drop API
  - To make the drop target valid, you need to call event.preventDefault() in the dragenter and dragover event handlers
  - If you don’t do this, the drop event will never fire because the div element is not a valid drop target by default.

  *** Now, if you drop the item element, you’ll see that it disappears immediately.
*/

const item = document.querySelector('.item')
const boxes = document.querySelectorAll('.box')

item.addEventListener('dragstart', dragStart)

boxes.forEach((box) => {
  box.addEventListener('dragenter', dragEnter)
  box.addEventListener('dragover', dragOver)
  box.addEventListener('dragleave', dragLeave)
  box.addEventListener('drop', drop)
})

function dragEnter(e) {
  e.preventDefault()
  e.target.classList.add('drag-over')
}

function dragOver(e) {
  e.preventDefault()
  e.target.classList.add('drag-over')
}

function dragLeave(e) {
  e.target.classList.remove('drag-over')
}

function drop(e) {
  e.target.classList.remove('drag-over')
}

function dragStart(e) {
  e.dataTransfer.setData('text/plain', e.target.id)
  setTimeout(() => {
    e.target.classList.add('hide')
  }, 0)
}
