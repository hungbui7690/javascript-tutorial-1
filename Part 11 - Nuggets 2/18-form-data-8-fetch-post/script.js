/*
  Form Data API
  - we can send data with Form Data API

*/

const send = document.querySelector('.btn')

send.addEventListener('click', async () => {
  const formData = new FormData()
  formData.append('title', 'Groucho')
  formData.append('body', 'Hi There!')

  const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: formData,
  })
  console.log(await response.json())
})
