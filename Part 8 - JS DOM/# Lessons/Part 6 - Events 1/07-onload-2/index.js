/*
  onload

*/

// 1) If you create an image element dynamically, you can assign an onload event handler before setting the src property as follows:
window.addEventListener('load', () => {
  let logo = document.createElement('img')

  logo.addEventListener('load', (event) => {
    console.log('The logo has been loaded')
  })
  // add logo to the document
  document.body.appendChild(logo)
  logo.src = 'logo.svg'
})
/*
  How it works:

    First, create an image element after the document has been fully loaded by placing the code inside the event handler of the window’s load event.
    Second, assign the onload event handler to the image.
    Third, add the image to the document.
    Finally, assign an image URL to the src attribute. The image will be downloaded to the element as soon as the src property is set.
*/

/*
  2) The script’s load event

    The <script> element also supports the load event slightly different from the standard ways. The script’s load event allows you to check if a JavaScript file has been completely loaded.

    Unlike images, the web browser starts downloading JavaScript files only after the src property has been assigned and the <script> element has been added to the document.

    The following code loads the app.js file after the page has been completely loaded. It assigns an onload event handler to check if the app.js has been fully loaded.
*/
window.addEventListener('load', checkJSLoaded)

function checkJSLoaded() {
  let script = document.createElement('script') // create the script element

  // assign an onload event handler
  script.addEventListener('load', (event) => {
    console.log('app.js file has been loaded')
  })

  // load the script file
  script.src = 'app.js'
  document.body.appendChild(script)
}
