/*
  Drag & Drop API
  - To solve this issue, you need to add handle the drop event.
      + First, get the id of the draggable element using the getData() method of the dataTransfer object.
      + Second, append the draggable element as a child element of the drop target element.
      + Third, remove the hide class from the draggable element.

  - Summary

      Add the draggable property with the value of true to an element to make it draggable.
      The dragstart, drag, and dragend events fire on the draggable element.
      The dragenter, dragover, dragleave or drop events fire on the drop target.
      Call the event.preventDefault() on the dragenter and dragover event handlers to make an element a valid drop target.
      Use the event.dataTransfer object with the setData() and getData() methods to transfer data in the drag-and-drop operation.

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

function drop(e) {
  e.target.classList.remove('drag-over')

  // get the draggable element
  const id = e.dataTransfer.getData('text/plain')
  const draggable = document.getElementById(id)

  // add it to the drop target
  e.target.appendChild(draggable)

  // display the draggable element
  draggable.classList.remove('hide')
}
