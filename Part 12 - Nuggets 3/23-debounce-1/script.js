/*
  Debounce
  - delay logic
  - so it runs 2s after last click
  - setTimeout returns id, which pass into clearTimeout

  >> how to to wait before execute that function again
*/

const btn = document.querySelector('.btn')

const debounce = () => {
  // now, we clicks 7 times, and got 7 logs >> not our goal
  setTimeout(() => {
    console.log('you clicked me')
  }, 2000)
}

btn.addEventListener('click', debounce)
