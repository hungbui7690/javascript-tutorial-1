/*
  Post Method

*/

// Add optional object
fetch('https://jsonplaceholder.typicode.com/users', {
  method: 'POST', // Set method here
})
  .then((response) => response.json())
  .then((data) => console.log(data))

// When you send a POST method, you need to set the request header and body properties to ensure a smooth process.
// For the header, you need to add the Content-Type property and set it to application/json.
// The data you want to send should be put inside the body property in a JSON format. See the example below:
fetch('https://jsonplaceholder.typicode.com/users', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    name: 'Nathan',
    email: 'ns@mail.com',
  }),
})
  .then((response) => response.json())
  .then((data) => console.log(data))
