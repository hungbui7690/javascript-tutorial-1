/*
  onload
  - If you maintain a legacy system, you may find that the load event handler is registered in of the body element of the HTML document, like this:

      <body onload="console.log('Loaded!')">

  - It’s a good practice to use the addEventListener() method to assign the onload event handler whenever possible.

  - You can assign an onload event handler directly using the onload attribute of the <img> element, like this:

      <img id="logo" src="logo.svg" onload="console.log('Logo loaded!')">


*/

// 1) The window’s load event
// For the window object, the load event is fired when the whole webpage (HTML) has loaded fully, including all dependent resources, including JavaScript files, CSS files, and images.
// To handle the load event, you register an event listener using the addEventListener() method:
window.addEventListener('load', (event) => {
  console.log('The page has fully loaded')
})

// Or use the onload property of the window object:
window.onload = (event) => {
  console.log('The page has fully loaded!!!!')
}

// 2) The image’s load event
// The load event also fires on images. To handle the load event on images, you use the addEventListener() method of the image elements.
// The following example uses the load event handler to determine if an image, which exists in the DOM tree, has been completely loaded:
let logo = document.querySelector('#logo')

logo.addEventListener('load', (event) => {
  console.log('Logo has been loaded!')
})

logo.src = './logo.svg'
