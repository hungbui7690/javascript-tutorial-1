/*
  alert
  - The browser can invoke a system dialog to display information to the user.
  - The system dialog is not related to the webpage being shown in the browser. It also does not contain any HTML. Its appearance depends solely on the current operating system and browser, rather than CSS.
  - To invoke an alert system dialog, you invoke the alert() method of the window object.
      window.alert(message);

      Or

      alert(message);

  - When the alert() method is invoked, a system dialog shows the specified message to the user followed by a single OK button.

  - You use the alert dialog to inform users something that they have no control over e.g., an error. The only choice that users can make is to dismiss the dialog after reading the message.

*/

// Note that the alert dialog is synchronous and modal. It means that the code execution stops when a dialog is displayed and resumes after it has been dismissed. For example, the following code display an alert dialog after three seconds:
setTimeout(() => {
  alert('3 seconds has been passed!')
}, 3000)
