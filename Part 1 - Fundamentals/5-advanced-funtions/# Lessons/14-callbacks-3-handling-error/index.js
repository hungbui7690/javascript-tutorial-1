/*
  Callbacks

*/

// Handling errors
// The download() function assumes that everything works fine and does not consider any exceptions. The following code introduces two callbacks: success and failure to handle the success and failure cases respectively:
function download(url, success, failure) {
  setTimeout(() => {
    console.log(`Downloading the picture from ${url} ...`)
    url ? success(url) : failure(url)
  }, 1000)
}

download(
  '',
  (url) => console.log(`Processing the picture ${url}`),
  (url) => console.log(`The '${url}' is not valid`)
)
