/*
  Callbacks
  - Asynchronous callbacks
    > An asynchronous callback is executed after the execution of the high-order function that uses the callback.

    > Asynchronicity means that if JavaScript has to wait for an operation to complete, it will execute the rest of the code while waiting.

    > Note that JavaScript is a single-threaded programming language. It carries asynchronous operations via the callback queue and event loop.

    
*/

// Suppose that you need to develop a script that downloads a picture from a remote server and processes it after the download completes:
// However, downloading a picture from a remote server takes time depending on the network speed and the size of the picture.
// The following download() function uses the setTimeout() function to simulate the network request:
function download(url) {
  setTimeout(() => {
    // script to download the picture here
    console.log(`Downloading ${url} ...`)
  }, 1000)
}

// And this code emulates the process() function:
function process(picture) {
  console.log(`Processing ${picture}`)
}

let url = 'https://www.xxxx/pic.jpg'
download(url)
process(url)
/*
  This is not what you expected because the process() function executes before the download() function. The correct sequence should be:
  - Download the picture and wait for the download complete.
  - Process the picture.
*/

//////////////////////////////////
// To resolve this issue, you can pass the process() function to the download() function and execute the process() function inside the download() function once the download completes, like this:
function downloadX(url, callback) {
  setTimeout(() => {
    // script to download the picture here
    console.log(`DownloadingX ${url} ...`)

    // process the picture once it is completed
    callback(url)
  }, 1000)
}

downloadX(url, process)
// In this example, the process() is a callback passed into an asynchronous function.
// When you use a callback to continue code execution after an asynchronous operation, the callback is called an asynchronous callback.

///////////////////////////////////
// To make the code more concise, you can define the process() function as an anonymous function:
function downloadY(url, callback) {
  setTimeout(() => {
    // script to download the picture here
    console.log(`DownloadingY ${url} ...`)
    // process the picture once it is completed
    callback(url)
  }, 1000)
}

downloadY(url, function (picture) {
  console.log(`ProcessingY ${picture}`)
})
