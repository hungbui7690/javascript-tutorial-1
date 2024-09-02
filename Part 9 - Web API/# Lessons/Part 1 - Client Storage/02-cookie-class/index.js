/*
  Cookie Class

*/

class Cookie {
  static get(name) {
    const cookieName = `${encodeURIComponent(name)}=`

    // First, find the occurrence of the cookie name by an equal sign in the document.cookie property.
    const cookie = document.cookie
    let value = null

    // Second, if the cookie is available, it uses the indexOf() to find the end of the cookie, which is specified by the next semicolon (;) after that location. If the semicolon isn’t available, this means that the cookie is the last one in the string.
    const startIndex = cookie.indexOf(cookieName)
    if (startIndex > -1) {
      let endIndex = cookie.indexOf(';', startIndex)
      if (endIndex == -1) {
        endIndex = cookie.length
      }
      value = decodeURIComponent(
        cookie.substring(startIndex + name.length, endIndex)
      )
    }

    // Third, decode the value of the cookie using the decodeURIComponent() function and return the decoded value.
    return value
  }

  // The set() method requires the first two arguments: name and value. The other arguments aren’t mandatory.
  static set(name, value, expires, path, domain, secure) {
    let cookieText = `${encodeURIComponent(name)}=${encodeURIComponent(value)}`
    if (expires instanceof Date) {
      cookieText += `; expires=${expires.toGMTString()}`
    }

    if (path) cookieText += `; path=${path}`
    if (domain) cookieText += `; domain=${domain}`
    if (secure) cookieText += `; secure`

    document.cookie = cookieText
  }

  // To remove a cookie, the remove() method sets the cookie again with the expiration date set to January 1, 1970. Note that the new Date(0) returns a date object whose date is January 1, 1970.
  static remove(name, path, domain, secure) {
    Cookie.set(name, '', new Date(0), path, domain, secure)
  }
}

// set a cookie
Cookie.set('username', 'admin')

// get a cookie
console.log(Cookie.get('username')) // admin

// remove a cookie by a name
Cookie.remove('username')
