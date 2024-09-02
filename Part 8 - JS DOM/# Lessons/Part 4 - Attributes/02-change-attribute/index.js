/*
  Understanding Relationships Between HTML Attributes & DOM Object’s Properties

*/

let input = document.querySelector('#username')
let checkbox = document.querySelector('#chkAccept')
let password = document.querySelector('#password')

// 1) The following example illustrates the change of the tabindex attribute is propagated to the tabIndex property and vice versa:
// attribute -> property
input.setAttribute('tabindex', 2)
console.log(input.tabIndex) // 2

// property -> attribute
input.tabIndex = 3
console.log(input.getAttribute('tabIndex')) // 3

// 2) The following example shows when the value attribute changes, it reflects in the value property, but not the other way around:
// attribute -> property: OK
input.setAttribute('value', 'guest')
console.log(input.value) // guest

// property -> attribute: DOESN'T CHANGE
input.value = 'admin'
console.log(input.getAttribute('value')) // guest

// 3) The following checkbox element has the checked attribute. When the checked attribute is converted to the property, it is a boolean value:
console.log(checkbox.checked) // true

// The style attribute is a string while the style property is an object:
let styleAttr = password.getAttribute('style')
console.log(styleAttr)
console.dir(password.style)
