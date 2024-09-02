/*
  FileReader API
  - Almost done

*/

const imageList = document.querySelector('.image-list')
const fileInput = document.querySelector('.files')
const dropzone = document.querySelector('.dropzone')

const setActive = (dropzone, active = true) => {
  const hasActiveClass = dropzone.classList.contains('active')

  if (active && !hasActiveClass) {
    return dropzone.classList.add('active')
  }

  if (!active && hasActiveClass) {
    return dropzone.classList.remove('active')
  }
}

dropzone.addEventListener('dragenter', (e) => {
  e.preventDefault()
  setActive(dropzone)
})

dropzone.addEventListener('dragover', (e) => {
  e.preventDefault()
  setActive(dropzone)
})

dropzone.addEventListener('dragleave', (e) => {
  e.preventDefault()
  setActive(dropzone, false)
})

// (1) get the FileList object in the e.target as e.target.files in the drop event handler of dropzone:
dropzone.addEventListener('drop', (e) => {
  e.preventDefault()
  setActive(dropzone, false)

  // In the drop event handler, we use object destructuring to get the FileList object and call the handleImages() function to handle the uploaded images:
  const { files } = e.dataTransfer
  handleImages(files)
})

// (2) define the handleImages() function:
// The handleImages() function gets the valid images, shows each valid image on the page using the showImage() function and uploads all the images to the server using the uploadImages() function.
const handleImages = (files) => {
  // get valid images
  let validImages = [...files].filter((file) =>
    ['image/jpeg', 'image/png'].includes(file.type)
  )
  //  show the image
  validImages.forEach(showImage)

  // upload all images
  uploadImages(validImages)
}

// (3) Sixth, define the showImage() function that shows each image in the validImages array:
const showImage = (image) => {
  // The showImage() uses the FileReader to read the uploaded image as the data URL. Once the FileReader completes reading the file, it’ll create a new div element to hold the image information.
  const reader = new FileReader()
  reader.readAsDataURL(image)

  reader.addEventListener('load', (e) => {
    const div = document.createElement('div')
    div.classList.add('image')
    div.innerHTML = `
          <img src="${e.target.result}" alt="${image.name}">
          <p>${image.name}</p>
          <p>${formatBytes(image.size)}</p>
      `
    imageList.appendChild(div)
  })
}

// Note that the formatBytes() function converts the size in bytes into a human-readable format:
function formatBytes(size, decimals = 2) {
  if (size === 0) return '0 bytes'
  const k = 1024
  const dm = decimals < 0 ? 0 : decimals
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']
  const i = Math.floor(Math.log(size) / Math.log(k))
  return parseFloat((size / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i]
}

const YOUR_CLIENT_API_KEY = '8cfe87af8a60567e14d5c44bb38df3ab'

// (4) define the uploadImages() function that uploads all images to the server:
const uploadImages = async (images) => {
  console.log(images)

  const formData = new FormData()
  ;[...images].forEach((image) => formData.append('image', image, image.name))

  const response = await fetch(
    `https://api.imgbb.com/1/upload?expiration=600&key=${YOUR_CLIENT_API_KEY}`,
    {
      method: 'POST',
      body: formData,
    }
  )
  return await response.json()
}

// (5)
fileInput.addEventListener('change', (e) => {
  const { files } = e.target
  handleImages(files)
})

// (6) prevent the drag & drop on the page
document.addEventListener('dragover', (e) => e.preventDefault())
document.addEventListener('drop', (e) => e.preventDefault())
