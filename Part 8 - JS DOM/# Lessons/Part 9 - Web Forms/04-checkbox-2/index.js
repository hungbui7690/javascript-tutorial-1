/*
  Checkbox

    <input type="checkbox" name="color" value="red" id="c1">
    <input type="checkbox" name="color" value="green" id="c2">
    <input type="checkbox" name="color" value="blue" id="c3">

*/

const checkboxes = document.querySelectorAll('input[type="checkbox"]')
const c1 = document.querySelector('#c1')
const c2 = document.querySelector('#c2')
const c3 = document.querySelector('#c3')
const btn = document.querySelector('#btn')
const btnCheckAll = document.querySelector('#btn-check-all')
const btnUncheck = document.querySelector('#btn-uncheck')

btn.addEventListener('click', function () {
  console.log(`${c1.value} - ${c1.checked}`)
  console.log(`${c2.value} - ${c2.checked}`)
  console.log(`${c3.value} - ${c3.checked}`)
})

btnCheckAll.addEventListener('click', () => {
  checkboxes.forEach((c) => (c.checked = true))
})

btnUncheck.addEventListener('click', () => {
  checkboxes.forEach((c) => (c.checked = false))
})
