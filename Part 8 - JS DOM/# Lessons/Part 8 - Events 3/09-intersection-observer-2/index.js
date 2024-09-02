/*
  Intersection Observer


*/

const cards = document.querySelectorAll('.card')

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry.target)
    entry.target.classList.toggle('show', entry.isIntersecting)
  })
})

cards.forEach((card) => {
  observer.observe(card)
})
