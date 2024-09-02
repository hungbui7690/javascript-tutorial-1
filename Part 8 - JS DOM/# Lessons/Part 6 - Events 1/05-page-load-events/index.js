/*
  Page Load Events
  - DOMContentLoaded, load, beforeunload, and unload.

  - When you open a page, the following events occur in sequence:
      
      + DOMContentLoaded – the browser fully loaded HTML and completed building the DOM tree. However, it hasn’t loaded external resources like stylesheets and images. In this event, you can start selecting DOM nodes or initialize the interface.
      + load – the browser fully loaded the HTML and also external resources like images and stylesheets.

  - When you leave the page, the following events fire in sequence:

      + beforeunload – fires before the page and resources are unloaded. You can use this event to show a confirmation dialog to confirm if you really want to leave the page. By doing this, you can prevent data loss in case you are filling out a form and accidentally click a link to navigate to another page.
      + unload – fires when the page has completely unloaded. You can use this event to send the analytic data or to clean up resources.


*/

// To handle the page events, you can call the addEventListener() method on the document object:
document.addEventListener('DOMContentLoaded', (event) => {
  console.log(
    `The DOM is fully loaded. But hasn't loaded external resources (images + styles)`
  )
})

// onload = (event) => {};
// document.addEventListener('load', (event) => {} > NOT WORK
addEventListener('load', (event) => {
  console.log('The page is fully loaded. (loaded everything)')
})

// onbeforeunload = (event) => {};
addEventListener('beforeunload', (event) => {
  const confirm = window.confirm('Do you want to leave the page')
  // show the confirmation dialog
  event.preventDefault()
  // Google Chrome requires returnValue to be set.
  event.returnValue = ''
})

// onunload = (event) => {};
addEventListener('unload', (event) => {
  // send analytic data
})
