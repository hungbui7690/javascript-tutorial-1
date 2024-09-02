/*
  setAttribute
  - set a value for an attribute on a specified element.
  - To set a value of an attribute on a specified element, you use the setAttribute() method:

        element.setAttribute(name, value)

  - The name specifies the attribute name whose value is set. It’s automatically converted to lowercase if you call the setAttribute() on an HTML element.
  - The value specifies the value to assign to the attribute. It’s automatically converted to a string if you pass a non-string value to the method.


*/

let btnSend = document.querySelector('#btnSend')
if (btnSend) {
  btnSend.setAttribute('name', 'send')
  btnSend.setAttribute('disabled', '')
}

/*
  Note that the disabled attribute is special because it is a Boolean attribute. If a Boolean attribute is present, whatever value it has, the value is considered to be true. To set the value of a Boolean attribute to false, you need to remove the entire attribute using the removeAttribute() method.

  
  Summary

    Use the setAttribute() to set the value of an attribute on a specified element.
    Setting the value of a Boolean attribute to whatever value, that value will be considered to be true.

*/
