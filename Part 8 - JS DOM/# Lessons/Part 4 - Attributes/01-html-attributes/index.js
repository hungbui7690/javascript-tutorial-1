/*
  Understanding Relationships Between HTML Attributes & DOM Object’s Properties
  - When the web browser loads an HTML page, it generates the corresponding DOM objects based on the DOM nodes of the document.

  - For example, if a page contains the following input element:

      <input type="text" id="username">

  - The web browser will generate an HTMLInputElement object.
  - The input element has two attributes:

      The type attribute with the value text.
      The id attribute with the value username.

  - The generated HTMLInputElement object will have the corresponding properties:

      The input.type with the value text.
      The input.id with the value username.

  - In other words, the web browser will automatically convert attributes of HTML elements to properties of DOM objects.

  - However, the web browser only converts the standard attributes to the DOM object’s properties. The standard attributes of an element are listed on the element’s specification.

  - Attribute-property mapping is not always one-to-one. For example:

      <input type="text" id="username" secured="true">

  - In this example, the secured is a non-standard attribute:

      let input = document.querySelector('#username');
      console.log(input.secured); // undefined

  - To access both standard and non-standard attributes, you use the following methods:

      element.getAttribute(name) – get the attribute value
      element.setAttribute(name, value) – set the value for the attribute
      element.hasAttribute(name) – check for the existence of an attribute
      element.removeAttribute(name) – remove the attribute


*/

// In this example, the secured is a non-standard attribute:
let input = document.querySelector('#username')
console.log(input.secured) // undefined

// The element.attributes property provides a live collection of attributes available on a specific element. For example:
for (let attr of input.attributes) {
  console.log(`${attr.name} = ${attr.value}`)
}
// Note that element.attributes is a NamedNodeMap, not an Array, therefore, it has no Array’s methods.
