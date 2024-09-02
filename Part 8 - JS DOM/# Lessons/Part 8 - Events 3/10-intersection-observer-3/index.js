/*
  Intersection Observer - Options
  - threshold: how many percent 
    > by default=0 > as soon as a small piece of element appear on the screen, it will be considered as intersecting
    > set to 1: 100% of the element on the screen to be considered as intersecting

  - rootMargin: offset
  - root: by default is the body
*/

const cards = document.querySelectorAll('.card')

// add threshold
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      entry.target.classList.toggle('show', entry.isIntersecting)

      if (entry.isIntersecting) observer.unobserve(entry.target)
    })
  },
  {
    threshold: 1,
    rootMargin: '-100px', // offset
  }
)

cards.forEach((card) => {
  observer.observe(card)
})
