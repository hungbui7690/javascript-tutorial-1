/*
  scrollIntoView
  - Suppose you have a list of elements and you want a specific element to be highlighted and scrolled into view.
  - To achieve this, you can use the element.scrollIntoView() method. The element.scrollIntoView() accepts a boolean value or an object:

        element.scrollIntoView(alignToTop);
    or
        element.scrollIntoView(options);

  - alignToTop
    + The alignToTop is a boolean value.
      > If it is set to true, the method will align the top of the element to the top of the viewport or the top of the visible area of the scrollable ancestor.
      > If the alignToTop is set to false, the method will align the bottom of the element to the bottom of the viewport or the bottom of the visible area of the scrollable ancestor.
      > By default, the alignToTop is true.

  - options
    + The options argument is an object that gives more control over of alignment of the element in the view. However, the web browser support may be slightly different.
      > The options object has the following properties:

          + behavior property defines the transition animation. The behavior property accepts two values: auto or smooth. It defaults to auto.
          + block property defines the vertical alignment. It accepts one of four values: start, center, end or nearest. By default, it is start.
          + inline property defines horizontal alignment. It also accepts one of four values: start, center, end or nearest. It defaults to nearest.

*/

// Without scrolling, the JavaScript list item, which has a class called special, is not in the viewport. When the button "Scroll Into View" is clicked, the JavaScript list item is scrolled into the view:
let btn = document.querySelector('.btn')
let el = document.querySelector('.special') // <li class="special">JavaScript</li>

btn.addEventListener('click', function () {
  el.scrollIntoView(true)
})
