/*
  localStorage
  - JSON.stringify()
  - JSON.parse()

  The storage event

  - When you make a change to the Storage object, the storage event is fired on the document.

  - The storage event occurs in the following scenarios:

        Store a name-value pair by calling the setItem() method.
        Remove a name-value pair by calling the removeItem() method.
        And remove all values by calling the clear() method.

  - The storage event has the following properties:

        domain – the domain which the storage changes for.
        key – the key that was set or removed.
        newValue – the value that the key was set to or null if the key was removed.
        oldValue – the value before the key was set or removed.

  - Method 1: 
      window.addEventListener('storage', function (e) {})

  - Method 2:
      window.onstorage = () => {}


  *** The storage event of the Window interface fires when a storage area (localStorage or sessionStorage) has been modified [in the context of another document].
      > it will only call it when the storage is changed by a different window/tab
      
*/

const btn = document.querySelector('button')

// 1) The Storage type stores only string data. To store objects, you need to convert them into strings using the JSON.stringify() method. For example:
const settings = {
  backgroundColor: '#fff',
  color: '#111',
  theme: 'light',
}
localStorage.setItem('settings', JSON.stringify(settings)) // now, key "settings" contains an object
console.log(localStorage.getItem('settings')) // '{"backgroundColor":"#fff","color":"#111","theme":"light"}'

// The following retrieves the value from the localStorage and converts it back to the object using the JSON.parse() method.
let storedSettings = JSON.parse(localStorage.getItem('settings'))
console.log(storedSettings)

// 2) To listen for the storage event, you use the addEventListener() method of the window object like this:
// *** To trigger this, need to open 2 windows
window.addEventListener('storage', function (e) {
  console.log(e.url)
  console.log(`The value of the ${e.key} changed for the ${e.domain}.`)
})

btn.addEventListener('click', () => {
  localStorage.setItem('username', 'alex pandrea')
})

// 3) Clear all data
localStorage.clear()
