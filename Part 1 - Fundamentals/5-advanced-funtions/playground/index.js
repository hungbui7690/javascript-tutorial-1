/*
  Callbacks

*/

// Nesting callbacks and the Pyramid of Doom (Callback Hell)
// How do you download three pictures and process them sequentially? A typical approach is to call the download() function inside the callback function, like this:
function download(url, callback) {
  setTimeout(() => {
    console.log(`Downloading ${url} ...`)
    callback(url)
  }, 1000)
}

const url1 = 'https://www.xyz/pic1.jpg'
const url2 = 'https://www.xyz/pic2.jpg'
const url3 = 'https://www.xyz/pic3.jpg'

download(url1, function (url) {
  console.log(`Processing ${url}`)
  download(url2, function (url) {
    console.log(`Processing ${url}`)
    download(url3, function (url) {
      console.log(`Processing ${url}`)
    })
  })
})
// The script works perfectly fine.
// However, this callback strategy does not scale well when the complexity grows significantly.
// Nesting many asynchronous functions inside callbacks is known as the pyramid of doom or the callback hell
// To avoid the pyramid of doom, you use promises or async/await functions.

/*
  Summary

      A callback is a function passed into another function as an argument to be executed later.
      A high-order function is a function that accepts another function as an argument.
      Callback functions can be synchronous or asynchronous.
*/
