/*
  Scroll Events
  - cont.

\\\\\\\\\\\\\\\\\\\\
  The better ways to handle the scroll events
  - Many scroll events fire while you are scrolling a page or an element. If you attach an event listener to the scroll event, the code in the event handler needs time to execute.
  - This will cause an issue which is known as the scroll jank. The scroll jank effect causes a delay so that the page doesn’t feel anchored to your finger.

\\\\\\\\\\\\\\\\\\\\
  Event throttling
  - It is much better to keep the scroll event handler lightweight and execute it every N milliseconds by using a timer. So instead of using the following code (and you should never use it):

      window.scroll = () => {
          // place the scroll handling logic here
      };

*/

// You should use the following code:
let scrolling = false

window.scroll = () => {
  scrolling = true
}

setInterval(() => {
  if (scrolling) {
    scrolling = false
    // place the scroll handling logic here
  }
}, 300)

/*
  How it works:

    First, set the scrolling flag to false. If the scroll event fires set the scrolling flag to true inside the scroll event handler.
    Then, execute the scroll event handler using the setInterval() every 300 milliseconds if the scroll events have been fired.

  This way of handling the scroll event is called the event throttling that throttles an onscroll‘s underlying operation every 300 milliseconds. The throttling slows down the rate of execution of the scroll event handler.
*/

/*
  Passive events
  - Recently, modern web browsers support passive events for the input events like scroll, touchstart, wheel, etc. It allows the UI thread to handle the event immediately before passing over control to your custom event handler.

  - In the web browsers which support the passive events, you need to add the passive flag to any event listener that does not call preventDefault(), like this:
*/
document.addEventListener(
  'scroll',
  (event) => {
    // handle scroll event
  },
  { passive: true }
)
// Without the passive option, the code in the event handler will always be invoked before the UI thread carries out the scrolling.
// Check out which browsers are supporting passive events here. [https://caniuse.com/#feat=passive-event-listener]

/*
  Summary

    The scroll event fires when you scroll a webpage or an element.
    For a page, the scrollX and scrollY properties return the number of pixels that the document is currently scrolled horizontally and vertically.
    For an element, the scrollTop and scrollLeft properties set or get the number of pixels that the element’s content is vertically scrolled and scrolled from its left edge.
    Use the event throttling technique to better handle the scroll events. In modern web browsers, you can use passive event listeners.
*/
