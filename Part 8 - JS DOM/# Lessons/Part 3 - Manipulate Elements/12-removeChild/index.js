/*
  removeChild
  - The childNode is the child node of the parentNode that you want to remove. If the childNode is not the child node of the parentNode, the method throws an exception.
  - The removeChild() returns the removed child node from the DOM tree but keeps it in the memory, which can be used later.

      let childNode = parentNode.removeChild(childNode);

*/

// 1) The following example uses the removeChild() to remove the last list item:
let menu = document.getElementById('menu')
menu.removeChild(menu.lastElementChild)

// 2) The following code shows how to remove all list items of the menu element:
// while (menu.firstChild) {
//   menu.removeChild(menu.firstChild)
// }
