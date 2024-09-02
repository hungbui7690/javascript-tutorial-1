/*
  insertAdjacentHTML
  - parses a piece of HTML text and inserts the resulting nodes into the DOM tree at a specified position

        element.insertAdjacentHTML(positionName, text);

  - The positionName accepts one of the following four values: pic

      'beforebegin': before the element
      'afterbegin': before its first child of the element.
      'beforeend': after the last child of the element
      'afterend': after the element

  - Security consideration
    > Like the innerHTML, if you use the user input to pass into the insertAdjacentHTML() method, you should always escape it to avoid security risk.

*/

let list = document.querySelector('#list')
list.insertAdjacentHTML('beforebegin', '<h2>Before Begin</h2>')
list.insertAdjacentHTML('afterbegin', '<li>HTML</li>')
list.insertAdjacentHTML('beforeend', '<li>JavaScript</li>')
list.insertAdjacentHTML('afterend', '<p>After Begin</p>')
