/*
  querySelector
  - The querySelector() method allows you to select the first element that matches one or more CSS selectors.

        let element = parentNode.querySelector(selector)

  - Besides the querySelector(), you can use the querySelectorAll() method to select all elements that match a CSS selector or a group of CSS selectors:

        let elementList = parentNode.querySelectorAll(selector);

  - The querySelectorAll() method returns a static NodeList of elements that match the CSS selector. If no element matches, it returns an empty NodeList.
    *** Note that the NodeList is an array-like object, not an array object. However, in modern web browsers, you can use the forEach() method or the for...of loop.

  - To convert the NodeList to an array, you use the Array.from() method like this:

        let nodeList = document.querySelectorAll(selector);
        let elements = Array.from(nodeList);

*/

// 1) Universal selector
// The universal selector is denoted by * that matches all elements of any type:
// The following example uses the querySelector() selects the first element in the document:
let element = document.querySelector('*')
console.log(element) // html

// 2) Type selector
// To select elements by node name, you use the type selector e.g., a selects all <a> elements:
// The following example finds the first h1 element in the document:
let firstHeading = document.querySelector('h1')
console.log(firstHeading)

// And the following example finds all h2 elements:
let heading2 = document.querySelectorAll('h2')
console.log('heading2', heading2)

// 3) Class selector
// To find the element with a given CSS class, you use the class selector syntax:
// The following example finds the first element with the menu-item class:
let note = document.querySelector('.menu')
console.log(note)

// And the following example finds all elements with the menu class:
let notes = document.querySelectorAll('.menu-item')
console.log('notes', notes)

// 4) ID Selector
// The following example finds the first element with the id #logo:
let logo = document.querySelector('#logo')
console.log(logo)

/*
  5) Attribute selector

    To select all elements that have a given attribute, you use one of the following attribute selector syntaxes:

    [attribute]
    [attribute=value]
    [attribute~=value]
    [attribute|=value]
    [attribute^=value]
    [attribute$=value]
    [attribute*$*=value]
*/
// The following example finds the first element with the attribute [autoplay] with any value:
let autoplay = document.querySelector('[autoplay]')
console.log(autoplay)

// And the following example finds all elements that have [autoplay] attribute with any value:
let autoplays = document.querySelectorAll('[autoplay]')
console.log(autoplays)

/*
  6) Grouping selectors

  To group multiple selectors, you use the following syntax:

      selector, selector, ...

  The selector list will match any element with one of the selectors in the group.
*/
// The following example finds all <div> and <p> elements:
let elements = document.querySelectorAll('div, p')
console.log(elements)
