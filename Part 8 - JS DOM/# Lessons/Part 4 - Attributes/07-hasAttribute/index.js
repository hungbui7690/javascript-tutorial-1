/*
  hasAttribute
  - to check if an element has an attribute.

      let result = element.hasAttribute(name);

*/

let btn = document.querySelector('#btnSend')
if (btn) {
  let disabled = btn.hasAttribute('disabled')
  console.log(disabled) // true
}
