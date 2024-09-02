/*
  after

*/

// 1) insert a node after an element
const h1 = document.querySelector('h1')
const p = document.createElement('p')
p.innerText = 'This is JavaScript DOM after() method demo'
h1.after(p) // inserts p after h1

// 2) insert multiple nodes after an element
const list = document.querySelector('ul')
const libs = ['React', 'Meteor', 'Polymer']
const items = libs.map((lib) => {
  const item = document.createElement('li')
  item.innerText = lib
  return item
})
list.lastChild.after(...items)

// 3) insert string
const button = document.querySelector('button')
button.after(' 🥶')
button.firstChild.after(' 🧡')
