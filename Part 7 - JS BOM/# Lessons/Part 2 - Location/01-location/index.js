/*
  Location
  - The Location object represents the current location (URL) of a document. You can access the Location object by referencing the location property of the window or document object.

  - Both "window.location" and "document.location" link to the same Location object.

  - URL: http://example.org:8080/foo/bar?q=baz#bang
    > Location.href: The location.href is a string that contains the entire URL.
    > Location.protocol: The location.protocol represents the protocol scheme of the URL including the final colon (:)
          http:
    > Location.host: The location.host represents the hostname: 
          example.org
    > Location.port: The location.port represents the port number of the URL. 
          8080
    > Location.pathname: The location.pathname contains an initial '/' followed by the path of the URL. 
          /foo/bar
    > Location.search: The location.search is a string that represents the query string of the URL:
          ?q=baz
    > Location.hash: The location.hash returns a string that contains a ‘#’ followed by the fragment identifier of the URL.
          #bang
    > Location.origin: The location.origin is a string that contains the canonical form of the origin of the specific location.
          http://example.org:8080
    > Location.username: The location.username is a string that contains the username before the domain name.
    > Location.password: THe location.password is a string that represents the password specified before the domain name.


  - Manipulating the location
    > The Location object has a number of useful methods: assign(), reload(), and replace().

*/
const btn = document.querySelector('button')
btn.addEventListener('click', function () {
  location.assign('http://127.0.0.1:5500/playground/index.html')
})

// 1) The assign() method accepts an URL, navigate to the URL immediately, and make an entry in the browser’s history stack.
// location.assign('https://www.google.com')
// location.assign('#specifications') // Then navigate to its Specifications section

// 2) When the window.location or location.href is set to a URL, the assign() method is called implicitly:
// window.location = 'https://www.google.com'
// location.href = 'https://www.google.com'
/*
  If you change hostname, pathname, or port property, the page reloads with the new value. Note that changing hash property doesn’t reload the page but does record a new entry in the browser’s history stack.

  When a new entry is created in the browser’s history stack, you can click the back button of the browser to navigate to the previous page.
*/

// 2) replace()
// The replace() method is similar to the assign() method except it doesn’t create a new entry in the browser’s history stack. Therefore, you cannot click the back button to go to the previous page.
// The following code uses the replace() method to navigate to the URL https://www.google.com after 3 seconds:
// setTimeout(() => {
//   location.replace('https://www.google.com')
// }, 3000)

// 3) reload()
// The reload() method reloads the currently displayed page. When you call the reload() method with no argument, the browser will reload the page in the most efficient way e.g., it loads the page resources from the browser’s cache if they haven’t changed since the last request.
// reload every 5s
setTimeout(() => {
  location.reload()
}, 5000)

// To force a reload from the server, you pass true to the reload() method:
// location.reload(true)
// Note that the code after the reload() may or may not execute, depending on many factors like network latency and system resources. Therefore, it is a good practice to place the reload()  as the last line in the code.

// 4)
console.log(location.protocol)
console.log(location.host)
console.log(location.pathname)
console.log(location.search)
