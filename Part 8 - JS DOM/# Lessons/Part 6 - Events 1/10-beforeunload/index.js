/*
  beforeunload Event
  - Before the webpage and its resources are unloaded, the beforeunload event is fired. At this time, the webpage is still visible and you have an opportunity to cancel the event.

  *** The following example attaches an event handler to the beforeunload event. If you click the link to navigate to another page, the browser will show a confirmation dialog.

*/

// To register for the beforeunload event, you use the window.addEventListener() method:
window.addEventListener('beforeunload', (event) => {
  // do something here
})

// Since the window is the global object, you can omit it like this:
addEventListener('beforeunload', (event) => {
  // do something here
})

/*
  If a webpage has a beforeunload event listener and you are about to leave the page, the beforeunload event will trigger a confirmation dialog to confirm if you really want to leave the page.

  If you confirm, the browser navigates you to the new page. Otherwise, it cancels the navigation.

  According to the specification, you need to call the preventDefault() method inside the beforeunload event handler in order to show the confirmation dialog. However, not all browsers implement this:
*/
addEventListener('beforeunload', (event) => {
  event.preventDefault()

  // Google Chrome requires returnValue to be set.
  event.returnValue = ''
})
// Historically, some browsers allow you to display a custom message on the confirmation dialog. This was intended to inform the users that they will lose data if they navigate away. Unfortunately, this feature is often used to scam users. As a result, a custom message is no longer supported.
// Based on the HTML specification, the calls to alert(), confirm(), and prompt() are ignored in the beforeunload event handler.
