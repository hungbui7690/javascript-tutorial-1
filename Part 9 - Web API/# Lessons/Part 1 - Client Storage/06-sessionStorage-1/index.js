/*
  sessionStorage
  - The sessionStorage object stores data only for a session. It means that the data stored in the sessionStorage will be deleted when the browser is closed.
  - A page session lasts as long as the web browser is open and survives over the page refresh.
  - When you open a page in a new tab or window, the web browser creates a new session.
  - If you open multiple tabs or windows with the same URL, the web browser creates a separate sessionStorage for each tab or window. So data stored in one web browser tab cannot be accessible in another tab.
  - When you close a tab or window, the web browser ends the session and clears data in the sessionStorage.


  - Data stored in the sessionStorage is specific to the protocol of the page. For example, the same site xyz.net has different sessionStorage when accessing with the http and https.
  - Since the sessionStorage data is tied to a server session, it’s only available when a page is requested from a server. The sessionStorage isn’t available when the page runs locally without a server.

  - Because the sessionStorage is an instance of the Storage type, you can manage data using the Storage’s methods:

        setItem(name, value) – set the value for a name
        removeItem(name) – remove the name-value pair identified by name.
        getItem(name) – get the value for a given name.
        key(index) – get the name of the value in the given numeric position.
        clear() – remove all values in the sessionStorage .


*/

// 1) Accessing the sessionStorage
// To access the sessionStorage, you use the sessionStorage property of the window object:
console.log('sessionStorage', window.sessionStorage)

// 2) Storing data in the sessionStorage
sessionStorage.setItem('mode', 'dark')
sessionStorage.setItem('username', 'joe-doe')

// 3) Getting data from the sessionStorage
const mode = sessionStorage.getItem('mode')
console.log(mode) // 'dark'

// 4) Removing an item by a name
sessionStorage.removeItem('mode')

/*
  5) Iterating over all items
      To iterate over all items stored in the sessionStorage, you follow these steps:
      Use Object.keys() to get all keys of the sessionStorage object.
      Use for...of to iterate over the keys and get the items by keys.
*/
for (let key of Object.keys(sessionStorage)) {
  console.log(`${key}: ${sessionStorage.getItem(key)}`)
}

// 6) Deleting all items in the sessionStorage
// The data stored in the sessionStorage are automatically deleted when the web browser tab/window is closed.
// In addition, you can use the clear() method to programmatically delete all data stored in the sessionStorage.
sessionStorage.clear()
