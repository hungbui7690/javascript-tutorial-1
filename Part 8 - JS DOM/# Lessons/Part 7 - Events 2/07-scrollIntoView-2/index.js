/*
  scrollIntoView
  
*/

let btn = document.querySelector('.btn')
let el = document.querySelector('.special') // <li class="special">JavaScript</li>

btn.addEventListener('click', function () {
  // To align the JavaScript list item to the bottom of the view, you pass false value to the scrollIntoView() method:
  el.scrollIntoView(false) // ***
})
