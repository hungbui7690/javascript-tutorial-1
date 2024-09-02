/*
  appendChild
  - add a node to the end of the list of child nodes of a specified parent node.

      parentNode.appendChild(childNode);

*/

const menu = document.querySelector('#menu')

// The following example uses the appendChild() method to add three list items to the <ul> element:
function createMenuItem(text) {
  let li = document.createElement('li')
  li.textContent = text
  return li
}

// add menu item
menu.appendChild(createMenuItem('Home'))
menu.appendChild(createMenuItem('Services'))
menu.appendChild(createMenuItem('About Us'))
