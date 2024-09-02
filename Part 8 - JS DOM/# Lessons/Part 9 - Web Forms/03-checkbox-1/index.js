/*
  Checkbox
  - To create a checkbox, you use the <input> element with the type of checkbox as follows:

        <input type="checkbox" id="accept"> Accept 

  - It’s a good practice to always associate a checkbox with a label to improve usability and accessibility. By doing this, clicking the label also checks or unchecks the checkbox.

        <label for="accept">
          <input type="checkbox" id="accept" name="accept" value="yes">  Accept 
        </label>

    Or:

        <input type="checkbox" id="accept" name="accept" value="yes">  
        <label for="accept"> Accept </label>

  - Note that the for attribute’s value of the label must match the id of the checkbox.

  - The following works but is bad practice so you should avoid it:

        <input type="checkbox" id="accept" name="accept" value="yes"> Accept

*/

const checkbox = document.querySelector('#accept')
const btn = document.querySelector('#btn')
btn.onclick = () => {
  // When you get the value attribute of a checkbox, you always get the 'on' string whether the checkbox is checked or not.
  alert(`${checkbox.value} - ${checkbox.checked}`)
}
