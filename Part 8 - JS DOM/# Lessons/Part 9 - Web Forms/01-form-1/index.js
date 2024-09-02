/*
  Form
  - The <form> element has two important attributes: action and method.

        The action attribute specifies a URL that will process the form submission. In this example, the action is the /signup URL.
        The method attribute specifies the HTTP method to submit the form with. Usually, the method is either post or get.

  - Generally, you use the get method when you want to retrieve data from the server and the post method when you want to change data on the server.

  - JavaScript uses the HTMLFormElement object to represent a form. The HTMLFormElement has the following properties that correspond to the HTML attributes:

        action – is the URL that processes the form data. It is equivalent to the action attribute of the <form> element.
        method – is the HTTP method which is equivalent to the method attribute of the <form> element.

  - The HTMLFormElement element also provides the following useful methods:

        submit() – submit the form.
        reset() – reset the form.

\\\\\\\\\\\\\\\\\\\\

  Referencing forms
  - To reference the <form> element, you can use DOM selecting methods such as getElementById():

        const form = document.getElementById('subscribe');

  - An HTML document can have multiple forms. The document.forms property returns a collection of forms (HTMLFormControlsCollection) on the document:

        document.forms

  - To reference a form, you use an index. For example, the following statement returns the first form of the HTML document:

        document.forms[0]

*/

const form = document.getElementById('signup')

// with "submit" event, we can press Enter to submit form
form.addEventListener('submit', (event) => {
  // To stop the form from refresh everytime we submit
  // stop form submission
  event.preventDefault()
})

// To access the elements of the form, you get the form element first.
// And use index, id, or name to access the element. The following accesses the first form element:
const name = form.elements['name'] // by name
form.elements[0] // by index
form.elements['name'] // by id (name & id are the same in this case)

// The following accesses the second input element:
const email = form.elements['email'] //  by name
form.elements[1] // by index
form.elements['email'] // by id

// After accessing a form field, you can use the value property to access its value, for example:
// getting the element's value
let fullName = name.value
let emailAddress = email.value
