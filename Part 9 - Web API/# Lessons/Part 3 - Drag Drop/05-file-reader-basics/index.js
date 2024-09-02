/*
  FileReader API
  - When you drag and drop files to the web browser or select files to upload via the file input element, JavaScript represents each file as a File object.
  - The File object allows you to access the selected file in JavaScript. And JavaScript uses the FileList object to hold the File objects.
  - To read the content of a file, you use the FileReader object. Note that the FileReader only can access the files you selected via drag & drop or file input.

*/

const btn = document.querySelector('button')
const fileInput = document.querySelector('#file')

// (1) create a new FileObject:
const reader = new FileReader()

// (2) call one of the read methods to read the content of a file. For example:
fileInput.addEventListener('cancel', () => {
  console.log('Cancelled.')
})
fileInput.addEventListener('change', () => {
  const file = fileInput.files[0]
  const data = reader.readAsDataURL(file)
})

/*
  - The readAsDataURL() method reads the content of the file, which you get from the FileList object.
  - The readAsDataURL() method returns an object with the result property that contains the data as a data: URL. The data:URL represents the file’s data as a base64 encoded string.
  - For example, you can use the readAsDataURL() to read an image and show its base64 encoded string on a webpage.

  - Besides the readAsDataURL() method, the FileReader has other methods for reading file’s data such as readAsText(), readAsBinaryString(), and readAsArrayBuffer().
  - Since all of these methods read the file’s data asynchronously, you cannot just return the result like this:

      const data = reader.readAsDataURL(file);

  - When the readAsDataURL() method completes reading the file successfully, the FileReader fires the load event.
*/

// Third, add an event handler to handle the load event of the FileReader object:
reader.addEventListener('load', (e) => {
  const data = e.target.result
  console.log(data)
})
