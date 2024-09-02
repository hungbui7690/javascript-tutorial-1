/*
  Debounce
  - delay logic
  - so it runs 2s after last click
  - setTimeout returns id, which pass into clearTimeout

  >> how to to wait before execute that function again
*/

const btn = document.querySelector('.btn')

// *** now, we click 7 times, and it just shows once after the last click
const debounce = () => {
  let id // (2a)
  return () => {
    clearTimeout(id) // (2b) clear the previous timeout

    // (c)
    id = setTimeout(() => {
      console.log('you clicked me')
    }, 2000)

    console.log(id) // *** id will show everytime we click
  }
}

btn.addEventListener('click', debounce()) // (1) if we do like this >> the debounce() only runs once when the app loads >> to make it work right, we need the debounce() returns a function
