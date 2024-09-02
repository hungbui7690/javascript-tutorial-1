/*
  prompt
  - The prompt() method instructs the web browser to display a dialog with a text, text input field, and two buttons OK and Cancel.

  - The dialog prompts the user to enter some text and wait until the user either submits or cancels it. The following illustrates the syntax of the prompt() method:

      let result = window.prompt(message, default)

  - In this syntax:

      The message is a string to display. If you omit it, nothing will display on the dialog.
      The default is a string containing the default value of the text input field.

  - The result is a string that contains the text entered by the user or null.

  - Like alert() and confirm(), the prompt() is modal and synchronous. In other words, the code execution stops when the dialog is displayed and resumes after the dialog has been dismissed.

*/

// 1) Display a prompt dialog
// The following example uses the prompt() to display a dialog that prompts users for their favorite programming languages:
let lang = prompt('What is your favorite programming language?')
console.log(lang)

// 2) Convert a user input to a number
// The result of the prompt() is a string. If you want to get the answer as a number, you should always cast the string into a number.
// The following example uses prompt() to display a dialog that asks users for their ages. If users are 16 years old or above, they are eligible to join. Otherwise, they will not be.
let ageStr = prompt('How old are you?')
console.log(+ageStr)
