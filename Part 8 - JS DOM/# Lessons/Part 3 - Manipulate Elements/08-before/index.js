/*
  before
  - allows you to insert one or more nodes before the element
  - For example, suppose you have a <p> element and you want to insert a <h1> element before it, you can use the before() method like this:

        p.before(h1)

        Element.before(node1, node2, ... nodeN)

  *** The before() method returns undefined. If a node cannot be inserted, the before() method throws a HierarchyRequestError exception.

*/

// 1) insert a node before an element
const p = document.querySelector('p')
const h1 = document.createElement('h1')
h1.innerText = 'JavaScript DOM - before()'
p.before(h1) // inserts h1 before p

// 2) insert multiple nodes before an element
const list = document.querySelector('ul')
const libs = ['React', 'Meteor', 'Polymer']
const items = libs.map((lib) => {
  const item = document.createElement('li')
  item.innerText = lib
  return item
})
list.firstChild.before(...items)

// 3) insert strings
const button = document.querySelector('button')
button.firstChild.before('🧡 ')
