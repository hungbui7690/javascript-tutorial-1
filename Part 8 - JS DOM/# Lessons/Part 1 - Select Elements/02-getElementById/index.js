/*
  getElementById
  - returns an Element object that represents an HTML element with an id that matches a specified string.
  
  - Unlike the querySelector() method, the getElementById() is only available on the document object, not other elements.

  - The following shows the syntax of the getElementById() method:

        const element = document.getElementById(id);
  
  *** The document.getElementById() returns a DOM element specified by an id or null if no matching element found.
      
  *** If multiple elements have the same id, even though it is invalid, the getElementById() returns the first element it encounters.

*/

// The document contains a <p> element that has the id attribute with the value message:
const p = document.getElementById('message')
console.log(p)
// After selecting an element, you can add styles to the element, manipulate its attributes, and traverse to parent and child elements.
