/*
  unload Event
  - Note that you should never use the unload event, it’s only for reference.
  - The unload event fires when a document has completely unloaded. Typically, the unload event fires when you navigate from one page to another.

  - The unload event is fired after:

      beforeunload event
      pagehide event

  - At this moment, the HTML document is in the following state:

      UI is not visible to the users and is not effective.
      All the resources like img, iframe, etc., still exist.
      An error won’t stop the unloading flow.

  - In practice, you should never use the unload event because it is not reliable on mobile devices and causes an issue with bfcache [https://web.dev/bfcache/#never-use-the-unload-event].  

*/

// To handle the unload event, you can use the addEventListener() method:
addEventListener('unload', (event) => {
  console.log('The page is unloaded')
})

// Or assign an event handler to the onunload property of the window object:
window.onunload = (event) => {
  console.log('The page is unloaded')
}

// Or assign an event handler to the onunload attribute of the <body> element:
{
  /* <body onunload="console.log('The page is unloaded')"></body> */
}
// It’s a good practice to use the addEventListener() to register the unload event handler.
