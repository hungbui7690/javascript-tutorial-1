/*
  innerHTML
  - allows you to get or set the HTML markup contained within the element:

*/

// 1) The following example uses the innerHTML property to get the content of the <ul> element:
let menu = document.getElementById('menu')
console.log(menu.innerHTML)

// The innerHTML property returns the current HTML source of the document, including all changes that have been made since the page was loaded.
let li = document.createElement('li')
li.textContent = 'About Us'
menu.appendChild(li)
console.log(menu.innerHTML)

// 2) Setting the innerHTML property of an element
// The setting will replace the existing content of an element with the new content.
// For example, you can remove the entire contents of the document by clearing the contents of the document.body element:
document.body.innerHTML = ''

// 3) HTML5 specifies that a <script> tag inserted with innerHTML should not execute.
// In this example, the alert() inside the <script> tag will not execute.
const main = document.createElement('div')
main.id = 'main'
document.body.appendChild(main)

const scriptHTML = `<script>alert("Alert from innerHTML");</script>`
main.innerHTML = scriptHTML

// 4) However, if you change the source code of the app.js to the following:
const externalHTML = `<img src='1' onerror='alert("Error loading image")'>`
// main.innerHTML = externalHTML

/*
  In this example, the image with the src 1 will not be loaded successfully. Therefore, the on error will execute that runs the alert().

  Instead of having a simple alert(), hackers may include malicious code, the users who open the webpage will be vulnerable.

  Therefore, you should not set the contents that you have no control to the innerHTML or you will face a potential security risk.

  If you want to insert plain text into the document, you can use the textContent property instead of the innerHTML. The textContent will not be parsed as the HTML but as the raw text.
*/
