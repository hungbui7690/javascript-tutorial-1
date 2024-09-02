/*
  MutationObserver
  - The MutationObserver API allows you to monitor for changes being made to the DOM tree. When the DOM nodes change, you can invoke a callback function to react to the changes.

*/

// The basic steps for using the MutationObserver API are:
// First, define the callback function that will execute when the DOM changes:
function callback(mutations) {
  //
}

// Second, create a MutationObserver object and pass the callback into the MutationObserver() constructor:
let observer = new MutationObserver(callback)

// Third, call the observe() method to start observing the DOM changes.
observer.observe(targetNode, observerOptions)

/*
  The observe() method has two parameters. The target is the root of the subtree of nodes to monitor for changes. The observerOptions parameter contains properties that specify what DOM changes should be reported to the observer’s callback.
*/

// Finally, stop observing the DOM changes by calling the disconnect() method:
observer.disconnect()

// The MutationObserver options
// The second argument of the observe() method allows you to specify options to describe the MutationObserver:
let options = {
  childList: true,
  attributes: true,
  characterData: false,
  subtree: false,
  attributeFilter: ['attr1', 'attr2'],
  attributeOldValue: false,
  characterDataOldValue: false,
}
// You don’t need to use all the options. However, to make the MutationObserver works, at least one of childList, attributes, or characterData needs to be set to true, otherwise the observer() method will throw an error.
