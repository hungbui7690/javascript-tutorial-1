/*
  Event object

  - The following table shows the most commonly-used properties and methods of the event object:

        Property / Method     Description
        bubbles	              true if the event bubbles
        cancelable	          true if the default behavior of the event can be canceled
        currentTarget	        the current element on which the event is firing
        defaultPrevented	    return true if the preventDefault() has been called.
        detail	more          information about the event
        eventPhase	          1 for capturing phase, 2 for target, 3 for bubbling
        preventDefault()      cancel the default behavior for the event. This method is only effective if the cancelable            property is true
        stopPropagation()	    cancel any further event capturing or bubbling. This method only can be used if the bubbles           property is true.
        target	              the target element of the event
        type	                the type of event that was fired

  - Note that the event object is only accessible inside the event handler. Once all the event handlers have been executed, the event object is automatically destroyed.

  preventDefault()
  - To prevent the default behavior of an event, you use the preventDefault() method.

*/

// When the event occurs, the web browser passed an Event object to the event handler:
let btn = document.querySelector('#btn')

btn.addEventListener('click', function (event) {
  console.log(event.type) // 'click'
})

// preventDefault
// For example, when you click a link, the browser navigates you to the URL specified in the href attribute:
let link = document.querySelector('a')

// However, you can prevent this behavior by using the preventDefault() method of the event object:
link.addEventListener('click', function (event) {
  event.preventDefault()
  console.log('clicked')
})
// Note that the preventDefault() method does not stop the event from bubbling up the DOM. And an event can be canceled when its cancelable property is true.
