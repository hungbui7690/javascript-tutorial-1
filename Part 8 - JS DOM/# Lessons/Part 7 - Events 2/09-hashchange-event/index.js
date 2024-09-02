/*
  hashchange Event
  - The URL hash is everything that follows the pound sign (#) in the URL. For example, suppose that you have the following URL:

      http://127.0.0.1:5500/playground/index.html?user=john#header

  - The URL hash is header. If the URL hash changes to footer, like this:

      http://127.0.0.1:5500/playground/index.html?user=john#footer

  - The hashchange event fires when the URL hash changes from one to another. In this example, it changes from #header to #footer.

*/

// To get the current URL hash, you access the hash property of the location object:
window.addEventListener('hashchange', () => {
  console.log(`The current URL hash is ${location.hash}`)
})

// Additionally, you can handle the hashchange event by assigning an event listener to the onhashchange property of the window object:
window.onhashchange = () => {
  console.log(`${location.hash}`)
}
