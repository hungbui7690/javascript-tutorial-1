/*
  FileReader API

*/

const imageList = document.querySelector('.image-list')
const fileInput = document.querySelector('.files')
const dropzone = document.querySelector('.dropzone')

// Define a function that adds the active class to or remove it from the dropzone:
// If you call setActive(dropzone), it’ll add the active class to the dropzone. If you call setActive(dropzone, false), it’ll remove the active class from the dropzone.
const setActive = (dropzone, active = true) => {
  const hasActiveClass = dropzone.classList.contains('active')

  if (active && !hasActiveClass) {
    return dropzone.classList.add('active')
  }

  if (!active && hasActiveClass) {
    return dropzone.classList.remove('active')
  }
}

// Third, highlight the dropzone when the dragenter and dragover events occur and remove the highlight when the dragleave and drop events occur:
dropzone.addEventListener('dragenter', (e) => {
  e.preventDefault()
  setActive(dropzone)
})

dropzone.addEventListener('dragover', (e) => {
  e.preventDefault()
  setActive(dropzone)
})

dropzone.addEventListener('dragleave', (e) => {
  e.preventDefault()
  setActive(dropzone, false)
})

dropzone.addEventListener('drop', (e) => {
  e.preventDefault()
  setActive(dropzone, false)
  // ..
})
