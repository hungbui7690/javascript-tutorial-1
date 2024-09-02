/*
  MutationObserver
  - Notice that we placed all code in an IIFE (Immediately Invoked Function Expression).

*/

;(function () {
  // The following example illustrates how to use the childList property of the mutation options object to monitor for the child node changes.
  // First, select the elements like the list and buttons using the querySelector() method. By default, the Stop Observing button is disabled.
  let list = document.querySelector('#language')
  let btnAdd = document.querySelector('#btnAdd')
  let btnRemove = document.querySelector('#btnRemove')
  let btnStart = document.querySelector('#btnStart')
  let btnStop = document.querySelector('#btnStop')
  btnStop.disabled = true

  // Second, declare a log() function that will be used as a callback for the MutationObserver:
  function log(mutations) {
    for (let mutation of mutations) {
      if (mutation.type === 'childList') {
        console.log(mutation)
      }
    }
  }

  // Third, create a new MutationObserver object:
  let observer = new MutationObserver(log)

  // Fourth, start observing the DOM changes to the child nodes of the list element when the Start Observing button is clicked by calling the observe() method with the childList of the options object is set to true:
  btnStart.addEventListener('click', function () {
    observer.observe(list, {
      childList: true,
    })

    btnStart.disabled = true
    btnStop.disabled = false
  })

  // Fifth, add a new list item when the add button is clicked:
  let counter = 1
  btnAdd.addEventListener('click', function () {
    // create a new item element
    let item = document.createElement('li')
    item.textContent = `Item ${counter++}`

    // append it to the child nodes of list
    list.appendChild(item)
  })

  // Sixth, remove the last child of the list when the Remove button is clicked:
  btnRemove.addEventListener('click', function () {
    list.lastElementChild
      ? list.removeChild(list.lastElementChild)
      : console.log('No more child node to remove')
  })

  // Finally, stop observing DOM changes when the Stop Observing button is clicked by calling the disconnect() method of the MutationObserver object:
  btnStop.addEventListener('click', function () {
    observer.disconnect()
    // set button states
    btnStart.disabled = false
    btnStop.disabled = true
  })
})()

///////////////////////////
// Observing for changes to attributes
// To observe for changes to attributes, you use the following attributes property of the options object:
options = {
  attributes: true,
}

// If you want to observe the changes to one or more specific attributes while ignoring the others, you can use the attributeFilter property:
options = {
  attributes: true,
  attributeFilter: ['class', 'style'],
}
// In this example, the MutationObserver will invoke the callback each time the class or style attribute changes.

////////////////////////////
// Observing for changes to a subtree
// To monitor the target node and its subtree of nodes, you set the subtree property of the options object to true:
options = {
  subtree: true,
}

////////////////////////////
// Observing for changes to character data
// To monitor the node for changes to its textual contents, you set the characterData property of the options object to true:
options = {
  characterData: true,
}

////////////////////////////
// Accessing old values
// To access the old values of attributes, you set the attributeOldValue property of the options object to true:
options = {
  attributes: true,
  attributeOldValue: true,
}

// Similarly, you can access the old value of character data by setting the characterDataOldValue property of the options object to true:
options = {
  characterData: true,
  subtree: true,
  characterDataOldValue: true,
}
