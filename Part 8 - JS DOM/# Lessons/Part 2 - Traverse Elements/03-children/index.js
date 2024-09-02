/*
  Getting Child Elements of a Node
    let firstChild = content.firstChild.nodeName
    > return #text > whitespaces

    let firstElementChild = content.firstElementChild
    > return the real element

*/

let content = document.getElementById('menu') // <ul>

// 1) To get the first child element of a specified element, you use the firstChild property of the element:
// The firstChild property returns a child node which can be any node type such as an element node, a text node, or a comment node.
let firstChild = content.firstChild
console.log(firstChild) // #text
/*
  The Console window show #text because a text node is inserted to maintain the whitespace between the openning <ul> and <li> tags. This whitespace creates a #text node.

  Note that any whitespace such as a single space, multiple spaces, returns, and tabs will create a #text node. To remove the #text node, you can remove the whitespaces as follows:

      <article id="content"><h2>Heading</h2><p>First paragraph</p></article>
*/

// #Or to get the first child with the Element node only, you can use the firstElementChild property:
let firstElementChild = content.firstElementChild
console.log(firstElementChild) // <li class="first">Home</li>

// 2) The following code returns the list item which is the last child element of the menu:
let menu = document.getElementById('menu')
console.log(menu.lastElementChild) // <li class="last">About Us</li>

// 3) Get all child elements
// To get a live NodeList of child elements of a specified element, you use the childNodes property:
// The childNodes property returns all child elements with any node type. To get the child element with only the element node type, you use the children property:
let childNodes = menu.childNodes
let children = menu.children
console.log(childNodes)
console.log(children)
