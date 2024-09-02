/*
  What is Geolocation API
  - The Geolocation API allows the web application to access your location if you agree to share it.
Why Geolocation API
  - The Geolocation API is useful for web applications that need to work based on the user’s locations such as Search Engines, eCommerce websites, maps, and weather apps.

  - For example, an eCommerce website can request you to share your location. Once having the information, it can show you the product availability as well as prices and discounts based on your location.
  - Similarly, the search engine like Google.com can return local search results based on your search term and location.

  - For example, if you’re in San Francisco and search for Pizza, Google will show you a list of Pizza restaurants that are near to your current location.


  The geolocation object
  - The Geolocation API is available through the "navigator.geolocation" object.

*/

const btn = document.querySelector('button')
const message = document.querySelector('.message')

// (3)
btn.addEventListener('click', function (e) {
  if (isSupport) navigator.geolocation.getCurrentPosition(onSuccess, onError)
})

// (1) Check if the Geolocation API is supported
const isSupport = () => {
  // check if the Geolocation API is supported
  if (!navigator.geolocation) {
    message.textContent = `Your browser doesn't support Geolocation`
    message.classList.add('error')
    return false
  }
  return true
}

/*
  (2) Get the current position
  - To get the user’s current location, you call the getCurrentPosition() method of the navigator.geolocation object.
  - The getCurrentPosition() method sends an asynchronous request to detect the user’s location and queries the positioning hardware (like GPS) to get the up-to-date data.
  - The getCurrentPosition() can succeed or fail. It accepts two optional callbacks that will execute in each case respectively.
  - If the getCurrentPosition() succeeds, you’ll get the user’s position as an GeolocationCoordinates object.
  - The GeolocationCoordinates object has the latitude and longitude properties that represent a location.
*/
function onSuccess(position) {
  const { latitude, longitude } = position.coords
  message.classList.add('success')
  message.textContent = `Your location: (${latitude},${longitude})`
}
function onError() {
  message.classList.add('error')
  message.textContent = `Failed to get your location!`
}
