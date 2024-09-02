/*
  Getting the Width and Height of an Element
  - pic

    > offsetWidth = width + padding + border
    > offsetHeight = height + padding + border

*/

let box = document.querySelector('.box')

// 1) To get the element’s width and height that include the padding and border, you use the offsetWidth and offsetHeight properties of the element:
let width = box.offsetWidth
let height = box.offsetHeight
console.log({ width, height }) // {width: 122, height: 172}
/*
  The width is 100px
  The border is 1px on each side, so 2px for both
  The padding 10px on each side, so 20px for both
  
  > Therefore, the total width 12px. Similarly, the height is 172px.
*/

// 2) To get the width & height of an element as floating-point after CSS transformation, you use the getBoundingClientRect() method of the DOM element. For example:
const domRect = box.getBoundingClientRect()
console.log(domRect)
/*
  DOMRect {x: 7.997685432434082, y: 7.997685432434082, width: 121.95602416992188, height: 171.95602416992188, top: 7.997685432434082}
*/

// 3) To get the element’s width and height that include padding but without the border, you use the clientWidth and clientHeight properties:
width = box.clientWidth
height = box.clientHeight
console.log({ width, height }) // {width: 120, height: 170}

// 4) To get the margin of an element, you use the getComputedStyle() method:
let style = getComputedStyle(box)
let marginLeft = parseInt(style.marginLeft)
let marginRight = parseInt(style.marginRight)
let marginTop = parseInt(style.marginTop)
let marginBottom = parseInt(style.marginBottom)
console.log({ marginLeft, marginTop, marginRight, marginBottom })

let borderTopWidth = parseInt(style.borderTopWidth) || 0
let borderLeftWidth = parseInt(style.borderLeftWidth) || 0
let borderBottomWidth = parseInt(style.borderBottomWidth) || 0
let borderRightWidth = parseInt(style.borderRightWidth) || 0
console.log({
  borderLeftWidth,
  borderTopWidth,
  borderRightWidth,
  borderBottomWidth,
})

// 5) To get the height and width of the window, you use the following code:
width =
  window.innerWidth ||
  document.documentElement.clientWidth ||
  document.body.clientWidth
height =
  window.innerHeight ||
  document.documentElement.clientHeight ||
  document.body.clientHeight
console.log({ width, height }) // {width: 651, height: 696}
