/*
  Infinite Scroll

*/

const cardContainer = document.querySelector('.card-container')
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
    // rootMargin: '-100px',
  }
)

////////////////////////
// Start from here
const lastCardObserver = new IntersectionObserver(
  (entries) => {
    // we just want to observe the last card
    const lastCard = entries[0]
    if (!lastCard.isIntersecting) return

    loadNewCards()
    lastCardObserver.unobserve(lastCard.target)
    lastCardObserver.observe(document.querySelector('.card:last-child'))
  },
  {
    rootMargin: '-500px',
  }
)

lastCardObserver.observe(document.querySelector('.card:last-child'))

function loadNewCards() {
  for (let i = 0; i < 10; i++) {
    const card = document.createElement('div')
    card.textContent = 'New Card'
    card.classList.add('card')
    observer.observe(card)
    cardContainer.append(card)
  }
}

cards.forEach((card) => {
  observer.observe(card)
})
