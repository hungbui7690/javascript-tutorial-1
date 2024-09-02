/*
  Scroll Events
  - cont.

\\\\\\\\\\\\\\\\\\\\\\\\\\
  Scroll offsets
  - The window object has two properties related to the scroll events: scrollX and scrollY.

  - The scrollX and scrollY properties return the number of pixels that the document is currently scrolled horizontally and vertically. The scrollX and scrollY are double-precision floating-point values so if you need integer values, you can use the Math.round() to round them off.

  - The scrollX and scrollY are 0 if the document hasn’t been scrolled at all.

  - The pageXOffset and pageYOffset are aliases of the scrollX and scrollY properties.

\\\\\\\\\\\\\\\\\\\\\\\\\\\
  Scrolling an element
  - Like the window object, you can attach a scroll event handler to any HTML element. However, to track the scroll offset, you use the scrollTop and scrollLeft instead of the scrollX and scrollY.

  - The scrollTop property sets or gets the number of pixels that the element’s content is vertically scrolled. The scrollLeft property gets and sets the number of pixels that an element’s content is scrolled from its left edge.

*/

let control = document.querySelector('#control')

control.addEventListener('click', function (e) {
  // get the scrollDemo
  let div = document.getElementById('scrollDemo')
  // get the target
  let target = e.target
  // handle each button's click
  switch (target.id) {
    case 'btnScrollLeft':
      div.scrollLeft += 20
      break

    case 'btnScrollTop':
      div.scrollTop += 20
      break
  }
})

let scrollDemo = document.querySelector('#scrollDemo')
scrollDemo.addEventListener('scroll', (e) => {
  console.log('...')
})
