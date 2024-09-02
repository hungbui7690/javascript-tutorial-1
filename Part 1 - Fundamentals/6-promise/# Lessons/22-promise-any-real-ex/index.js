/*
  Promise.any
  - take a list of promises 
  - return a promise that is fulfilled first.

  - In practice, you use the Promise.any() to return the first fulfilled promise. Once a promise is fulfilled, the Promise.any() method does not wait for other promises to be complete. In other words, the Promise.any() short circuits after a promise is fulfilled.

  - For example, you have a resource served by two or more content delivery networks (CDN). To dynamically load the first available resource, you can use the Promise.any() method.

  - The following example uses the Promise.any() method to fetch two images and display the first available image.

*/

function getImageBlob(url) {
  return fetch(url).then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP status: ${response.status}`)
    }
    return response.blob()
  })
}

let cat = getImageBlob(
  'https://upload.wikimedia.org/wikipedia/commons/4/43/Siberian_black_tabby_blotched_cat_03.jpg'
)
let dog = getImageBlob(
  'https://upload.wikimedia.org/wikipedia/commons/a/af/Golden_retriever_eating_pigs_foot.jpg'
)

Promise.any([cat, dog])
  .then((data) => {
    let objectURL = URL.createObjectURL(data)
    let image = document.createElement('img')
    image.src = objectURL
    document.body.appendChild(image)
  })
  .catch((e) => {
    console.log(e.message)
  })

/*
  How it works.

    First, define the getImageBlob() function that uses the fetch API to get the image’s blob from a URL. The getImageBlob() returns a Promise object that resolves to the image blob.
    Second, define two promises that load the images.
    Third, show the first available image by using the Promise.any() method.

  Summary

      Use the JavaScript Promise.any() method to take a list of promises and return a promise that is fulfilled first.
  */
