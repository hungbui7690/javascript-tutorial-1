/*
  localStorage
  - The Storage type is designed to store name-value pairs. The Storage type is an Object with the following additional methods:

      setItem(name, value) – set the value for a name
      removeItem(name) – remove the name-value pair identified by name.
      getItem(name) – get the value for a given name.
      key(index) – get the name of the value in the given numeric position.
      clear() – remove all values.

  - To get the number of name-value pairs in a Storage object, you can use the length property.

  - The Storage object can store only strings. It’ll automatically convert non-string data into a string before storing it.

  - When you retrieve data from a Storage object, you’ll always get the string data.

  - HTML5 specification introduces the localStorage as a way to store data with no expiration date in web browsers.

  - In other words, the data stored in the browsers will persist even after you close the browser windows.

  - The data stored in the localStorage is bound to an origin. It means that the localStorage is unique per protocol://host:port.

///////////////////////////
  localStorage vs. cookies
  - First, the data stored in the localStorage isn’t sent to the server in every request like cookies. For this reason, you can store more data in the localStorage.

  - Most modern web browsers allow you to store up to 5MB of data in the localStorage. Note that you can store up to 4KB in cookies.

  - Second, the data stored in the localStorage can be managed by the client, specifically JavaScript in the web browser. It cannot be accessible by the servers.

  - However, cookies can be managed by both JavaScript in web browsers and servers.

*/

// 1) Accessing the localStorage
console.log(window.localStorage)
// Since the localStorage is an instance of the Storage type, you can invoke the methods of the Storage type to manage data.

// 2) The setItem() method
window.localStorage.setItem('theme', 'dark')

// 3) The length property
console.log(window.localStorage.length)

// Since the window object is global, you don’t need to explicitly specify it. For example:
console.log(localStorage.length)

// 3) The getItem() method
const theme = localStorage.getItem('theme') // 'dark'
console.log(theme)

// 4) The removeItem() method
localStorage.removeItem('theme')

// 5) Loop over keys of the localStorage object
localStorage.setItem('theme', 'light')
localStorage.setItem('backgroundColor', 'white')
localStorage.setItem('color', '#111')

// To iterate over name-value pairs stored in the localStorage, you use the Object.keys() method with for...of loop:
for (let key of Object.keys(localStorage)) {
  console.log(`${key}: ${localStorage.getItem(key)}`)
}
