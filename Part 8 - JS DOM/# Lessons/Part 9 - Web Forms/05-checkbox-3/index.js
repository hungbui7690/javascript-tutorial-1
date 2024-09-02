/*
  Checkbox
  - create checkbox dynamically
  - checkbox should be nested inside of label
  - must have attributes:
    + id
    + name
    + value 
    + checked

*/

const colors = ['Red', 'Green', 'Blue']

// METHOD 1
colors.forEach((color) => {
  //  generate id
  const id = `color-${color}`

  // create a label
  const label = document.createElement('label')
  label.setAttribute('for', id)

  // create a checkbox
  const checkbox = document.createElement('input')
  checkbox.type = 'checkbox'
  checkbox.name = 'color'
  checkbox.value = color
  checkbox.id = id

  // place the checkbox inside a label
  label.appendChild(checkbox)
  // create text node
  label.appendChild(document.createTextNode(color))
  // add the label to the root
  document.querySelector('.container').appendChild(label)
})

// METHOD 2
const html = colors
  .map(
    (color) => `<label for="color-${color}">
        <input type="checkbox" name="color" id="color-${color}" value="${color}"> ${color}
    </label>`
  )
  .join(' ')
document.querySelector('.container').innerHTML = html
