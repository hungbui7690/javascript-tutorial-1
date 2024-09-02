/*
  getAttribute
  - get the value of a specified attribute on an element.

      let value = element.getAttribute(name);

*/

let link = document.querySelector('#js')
if (link) {
  let target = link.getAttribute('target')
  console.log(target) // _blank

  let title = link.getAttribute('title')
  console.log(title) // null
}
