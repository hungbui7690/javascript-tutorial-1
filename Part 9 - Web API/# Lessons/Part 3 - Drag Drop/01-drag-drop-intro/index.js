/*
  Drag & Drop API
  - HTML5 formally introduced the drag-and-drop specification. Most modern web browsers have implemented native drag-and-drop based on the HTML5 spec.

  - By default, only image and text can be draggable. To drag an image, you simply hold the mouse button down and then move it. To drag the text, you need to highlight some text and drag it in the same way as you would drag an image.

  - HTML5 spec specifies that almost all elements can be draggable. To make an element draggable, you add the draggable property with the value of true to its HTML tag. For example:

        <div class="item" draggable="true"></div>

///////////////////////////////
  Events on draggable elements
  - When you drag an element, these events fire in the following sequence:

      dragstart
      drag
      dragend

  - When you hold a mouse button and begin to move the mouse, the dragstart event fires on the draggable element that you’re dragging. The cursor changes to a no-drop symbol (a circle with a line through it) to indicate that you cannot drop the element on itself.

  - After the dragstart event fires, the drag event fires repeatedly as long as you drag the element.
  - And The dragend event fires when you stop dragging the element.
  - The target of all events (e.target) is the element that is being dragged.
  - By default, the browser doesn’t change the appearance of the dragged element. Therefore, you can customize its appearance based on your preferences.

///////////////////////////////
  Events on drop targets
  - When you drag an element over a valid drop target, these events fire in the following sequence:

      dragenter
      dragover
      dragleave or drop

  - The dragenter event fires as soon as you drag the element over a drop target.
  - After the dragenter event fires, the dragover event fires repeatedly as long as you’re dragging the element within the boundary of the drop target.
  - When you drag the element outside of the boundary of the drop target, the dragover event stops firing and the dragleave event fires.
  - In case you drop the element on the target, the drop event fires instead of the dragleave event.
  - The target (e.target) of the dragenter, dragover, dragleave, and drop events are the drop target elements.

///////////////////////////////
  Valid drop target
  - Almost all elements support the drop target events (dragenter, dragover, dragleave, and drop). However, they don’t allow dropping by default.
  - If you drop an element over a drop target that doesn’t allow to drop, the drop event won’t fire.
  - To turn an element into a valid drop target, you can override the default behavior of both dragenter and dragover events by calling the event.preventDefault() method in their corresponding event handlers. (See the example section for more information)

/////////////////////////////// 
  Transfer data using dataTransfer object
  - To transfer data in a drag-and-drop action, you use the dataTransfer object.
  - The dataTransfer object is a property of the event. It allows you to transfer data from the dragged element to the drop target.
  - The dataTransfer object has two methods: setData() and getData().
  - The setData() allows you to set the drag operation’s data to the specified format and data:

        dataTransfer.setData(format, data)

  - The format can be text/plain or text/uri-list. And the data can be a string representing the data to add to the drag object.
  - The getData() method retrieves the drag data stored by the setData() method.
  - The getData() accepts one argument:

        dataTransfer(format)

  - The format can be text/plain or text/uri-list. The getData() returns a string stored by the setData() method or an empty string if the drag operation doesn’t include data.

///////////////////////////////
  Example 
  - Add draggable="true"

        <div class="box">
          <div class="item" id="item" draggable="true"></div>
        </div>

  - item.addEventListener('dragstart', callback)

*/

const item = document.querySelector('.item')

item.addEventListener('dragstart', dragStart)

function dragStart(e) {
  console.log('drag starts...')
}
