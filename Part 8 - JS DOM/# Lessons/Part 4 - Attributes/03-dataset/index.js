/*
  The data-* attributes
  - If you want to add a custom attribute to an element, you should prefix it with the data- e.g., data-secured because all attributes start with data- are reserved for the developer’s uses.
  - To access data-* attributes, you can use the dataset property. For example, we have the following div element with custom attributes:

      <div id="main" data-progress="pending" data-value="10%"></div>

  - Summary

    + Attributes are specified in HTML elements.
    + Properties are specified DOM objects.
    + Attributes are converted to properties respectively.
    + Use the element.attributes property to access standard and custom attributes of an element.
    + Use the element.dataset property to access the data-* attributes.

*/

// The following shows how to access the data-* attributes via the dataset property:
let bar = document.querySelector('#main')
console.log(bar.dataset) // {progress: 'pending', value: '10%'}
