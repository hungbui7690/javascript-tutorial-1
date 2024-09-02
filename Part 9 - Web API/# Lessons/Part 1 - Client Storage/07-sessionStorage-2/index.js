/*
  Why JavaScript sessionStorage

    The sessionStorage has many practical applications. And the following are the notable ones:

        The sessionStorage can be used to store the state of the user interface of the web application. Later, when the user comes back to the page, you can restore the user interface stored in the sessionStorage.
        The sessionStorage can also be used to pass data between pages instead of using the hidden input fields or URL parameters.

    JavaScript sessionStorage application

      You’ll build a simple web application that allows users to select the mode, either dark or light mode. By default, it has a light mode. And you’ll use the sessionStorage to remember the mode when the page refreshes.

      If you refresh the page, the mode that you selected will restore since it’s stored in the sessionStorage.

      However, if you close the tab or window, the page will reset to the dark mode, which is the default mode.
*/

const MOON = '🌙'
const SUN = '☀️'
const DARK_MODE = 'dark'
const LIGHT_MODE = 'light'
const DEFAULT_MODE = DARK_MODE

const btn = document.querySelector('#theme-switcher')

init()

function init() {
  let storedMode = sessionStorage.getItem('mode')
  if (!storedMode) {
    storedMode = DEFAULT_MODE
    sessionStorage.setItem('mode', DEFAULT_MODE)
  }
  setMode(storedMode)
}

function setMode(mode = DEFAULT_MODE) {
  if (mode === DARK_MODE) {
    btn.textContent = SUN
    document.body.classList.add(DARK_MODE)
  } else if (mode === LIGHT_MODE) {
    btn.textContent = MOON
    document.body.classList.remove(DARK_MODE)
  }
}

btn.addEventListener('click', function () {
  let mode = sessionStorage.getItem('mode')
  if (mode) {
    let newMode = mode == DARK_MODE ? LIGHT_MODE : DARK_MODE
    setMode(newMode)
    sessionStorage.setItem('mode', newMode)
  }
})
