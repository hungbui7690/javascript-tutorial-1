/*
  getElementsByName
  - To get all elements with a specified name, you use the getElementsByName() method of the document object:

      let elements = document.getElementsByName(name);

  - The getElementsByName() accepts a name which is the value of the [name attribute] of elements and returns a live NodeList of elements.

  *** The getElementsByName() returns a live NodeList of elements with a specified name.
  *** The NodeList is an array-like object, not an array object.

      <input type="radio" name="rate" value="Good" />

*/

let btn = document.getElementById('btnRate')
let output = document.getElementById('output')

btn.addEventListener('click', () => {
  let rates = document.getElementsByName('rate')
  rates.forEach((rate) => {
    if (rate.checked) {
      output.innerText = `You selected: ${rate.value}`
    }
  })
})
