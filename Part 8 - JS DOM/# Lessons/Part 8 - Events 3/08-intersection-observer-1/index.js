/*
  Intersection Observer
  - check css file

  - some properties:
    + intersectionRatio: how many percent the element on the screen
      > 1: means 100%
    + isIntersecting: true/false
    + intersectionRect: amount of space that is visible on the screen

*/

const cards = document.querySelectorAll('.card')

// now page is blank
// before, we have to use setInterval() to constantly check if there's something new on the page > not performant
// now, we use Intersection Observer
const observer = new IntersectionObserver((entries) => {
  console.log(entries)
})

observer.observe(cards[0])
