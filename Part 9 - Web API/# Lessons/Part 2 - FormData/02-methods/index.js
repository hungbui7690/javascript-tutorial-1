/*
  FormData API

*/

const btn = document.querySelector('#submit')
const form = document.querySelector('#subscription')
const myFileInput = document.querySelector('#file')

btn.addEventListener('click', (e) => {
  e.preventDefault()

  const formData = new FormData(form)

  // 1. Append: append new value to existing keys or create new keys if not exist
  formData.append('user', 'Alex')
  formData.append('name', 'curry')
  formData.append('userPic', myFileInput.files[0], 'chris.jpg')

  // 2. Set
  formData.set('job', 'Dev')
  formData.set('attachment', myFileInput.files[0], 'attachment.rar')

  // 3. Delete
  formData.delete('user')

  // 4. Get
  console.log(formData.get('email'))

  // 5. Get All: we can create multiple same keys
  // The getAll() method returns an array of all the values by a key name.
  console.log(formData.getAll('name'))

  // 6. Has
  console.log(formData.has('name'))

  // 7. Keys
  console.log(formData.keys())

  // 8. Values
  console.log(formData.values())

  // 9. Entries
  console.log(formData.entries())

  const values = [...formData.entries()]
  console.log(values)
})
