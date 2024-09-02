/*
  removeAttribute
  - remove the attribute with the specified name from the element.

      element.removeAttribute(name);

  *** HTML elements have some attributes which are Boolean attributes. To set false to the Boolean attributes, you cannot simply use the setAttribute() method, but you have to remove the attribute entirely using the removeAttribute() method.

  *** All are true
      <button disabled>Save Draft</button>
      <button disabled="">Save</button>
      <button disabled="disabled">Cancel</button>

      <input type="text" readonly>
      <textarea type="text" readonly="">
      <textarea type="text" readonly="readonly">

*/

let link = document.querySelector('#js')
if (link) {
  link.removeAttribute('target')
}
