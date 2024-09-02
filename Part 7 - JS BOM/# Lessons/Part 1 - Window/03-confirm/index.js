/*
  confirm
  - To invoke a dialog with a question and two buttons OK and Cancel, you use the confirm() method of the window object:

      let result = window.confirm(question);

  - In this syntax:

      The question is an optional string to display in the dialog.
      The result is a Boolean value indicating whether the OK or Cancel button was clicked. If the OK button is clicked, the result is true; otherwise, the result is false.

  *** Note that if a browser ignores in-page dialogs, then the result is always false.

  - The confirmation dialog is modal and synchronous. It means that the code execution stops when a dialog is displayed and resumes after it has been dismissed.

*/

// The following example uses the confirm() method to invoke a confirmation dialog. Based on the user’s selection, it displays the corresponding message based using the alert() method:
let result = confirm('Are you sure you want to delete?')
console.log(result)
