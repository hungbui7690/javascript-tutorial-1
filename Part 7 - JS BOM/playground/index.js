/*
  History
  - When you launch the web browser and open a new webpage, the web browser creates a new entry in its history stack.

  - If you navigate to another webpage, the web browser also creates a new entry in the history stack.

  - The history stack stores the current page and previous pages that you visited.

  - To manipulate the history stack, you use the history object which is a property of the window object:

        window.history

  - For the security reason, it’s not possible to query the pages that a user have visited. However, you can use the history object to navigate back and forth without knowing the exact URL.

  - The history object provides three methods for navigating between pages in the history stack:

        back()
        forward()
        go()
*/

// 1) Move backward
// To move backward through history, you use the back() method:
window.history.back()

// 2) Move forward
// Similarly, you can move forward by using the forward() method:
history.forward()

// 3) Move to a specific URL in the history
// To move to a specific URL in the history stack, you use the go() method. The go() method accepts an integer that is the relative position to the current page. The current page’s position is 0.
// For example, to move backward you use:
history.go(-1)

// To move forward a page, you just call:
history.go(1)

// To refresh the current page, you either pass 0 or no argument to the go() method:
history.go(0)
history.go()

// To determine the number of URLs in the history stack, you use the length property:
console.log(history.length)
