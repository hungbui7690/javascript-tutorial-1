/*
  Creating JavaScript custom events
  - To create a custom event, you use the CustomEvent() constructor:

      let event = new CustomEvent(eventType, options);

  - The CustomEvent() has two parameters:

      The eventType is a string that represents the name of the event.
      The options is an object has the detail property that contains any custom information about the event.

  - Dispatching JavaScript custom events
    + After creating a custom event, you need to attach the event to a DOM element and trigger it by using the dispatchEvent() method:

        domElement.dispatchEvent(event);

*/

let note = document.querySelector('.note')

function highlight(elem) {
  const bgColor = 'yellow'
  elem.style.backgroundColor = bgColor

  // create the event called hightlight
  let event = new CustomEvent('highlight', {
    detail: {
      backgroundColor: bgColor,
    },
  })

  // dispatch the event
  elem.dispatchEvent(event)
}

// Add border style
function addBorder(elem) {
  elem.style.border = 'solid 1px red'
}

note.addEventListener('highlight', function (e) {
  addBorder(this)

  // examine the background
  console.log(e.detail)
})

// highlight div element
highlight(note)

/*
  How it works:

      - First, declare the highlight() function that highlights an element and triggers the highlight event.
      - Second, select the <div> element by using the querySelector() method.
      - Third, listen to the highlight event. Inside the event listener, call the addBorder() function and show the detail property in the Console.
      - Finally, call the highlight() function that will trigger the highlight event.

  Why using custom events

    The custom events allow you to decouple the code that you want to execute after another piece of code completes. For example, you can separate the event listeners in a separate script. In addition, you can have multiple event listeners to the same custom event.

*/
