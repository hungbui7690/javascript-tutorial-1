/*
  Get Method

*/

// ReadableStream in Response.body
fetch('https://jsonplaceholder.typicode.com/users/1')
  .then((response) => console.log(response))
  .catch((error) => console.log(error))

// Here, you can see that the body property contains a ReadableStream. To use the ReadableStream in our JavaScript application, we need to convert it to call the json() method:
fetch('https://jsonplaceholder.typicode.com/users/1')
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.log(error))

// Now that you have the data object, you can use this value in any way you want. For example, if you want to display the user name and email in HTML, here's how you do it:
fetch('https://jsonplaceholder.typicode.com/users/1')
  .then((response) => response.json())
  .then((data) => {
    document.querySelector('#username').textContent = data.name
    document.querySelector('#email').textContent = data.email
  })
