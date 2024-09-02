/*
  Debounce
  - delay logic
  - so it runs 2s after last click
  - setTimeout returns id, which pass into clearTimeout

  >> how to to wait before execute that function again
*/

const btn = document.querySelector('.btn')

// now, we clear the timeout right away, so it does not show the log in setTimeout() >> but still get 'hello' + id
const debounce = () => {
  // (1) with setTimeout, we can return id
  const id = setTimeout(() => {
    console.log('you clicked me')
  }, 2000)

  clearTimeout(id) // (2) clear

  console.log(id)
  console.log('hello')
}

btn.addEventListener('click', debounce)
