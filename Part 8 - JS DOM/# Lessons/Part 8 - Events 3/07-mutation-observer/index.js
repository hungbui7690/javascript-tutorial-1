/*
  Mutation Observer
  - "contenteditable" global attribute: we can click on the box to edit the text

  - mutationObserver.observe(parent, { childList: true })
    > observer the parent
    > now, if there's anything changing > we will know what's going on

  - mutationObserver.observe(parent, { attributes: true })
    > if there's anything changing to the attribute (add new class...) > we will know

*/

const parent = document.querySelector('.parent')

//////////////////////////////
// To observe the parent div, we need to do these
const mutationObserver = new MutationObserver((entries) => {
  console.log(entries)
})

// OPTION 1
// mutationObserver.observe(parent, { childList: true })

// OPTION 2
// mutationObserver.observe(parent, {
//   attributes: true,
//   attributeOldValue: true,
//   attributeFilter: ['title', 'id'],
// })

// OPTION 3
// mutationObserver.observe(parent.children[1].childNodes[0], {
//   characterData: true,
//   characterDataOldValue: true,
// })

// OPTION 4
mutationObserver.observe(parent, {
  subtree: true, // now, observe the parent and the do the same for the children
  characterData: true,
  characterDataOldValue: true,
})

// mutationObserver.disconnect() // ends the observation

//////////////////////////////
// Do something to parent div to test the observation
parent.children[0].remove()
setTimeout(() => {
  parent.appendChild(document.createElement('div'))
}, 1000)
parent.classList.add('test')
parent.id = 'PARENT'
