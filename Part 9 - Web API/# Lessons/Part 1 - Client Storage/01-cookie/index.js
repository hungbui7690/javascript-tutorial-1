/*
  What is a cookie
  - An HTTP cookie is a piece of data that a server sends to a web browser. Then, the web browser stores the HTTP cookie on the user’s computer and sends it back to the same server in the later requests.

  - An HTTP cookie is also known as a web cookie or browser cookie. And it is commonly called a cookie.

  - For example, the header of an HTTP response may look like this:

        HTTP/1.1 200 OK
        Content-type: text/html
        Set-Cookie:username=admin
        ...

  - The HTTP response sets a cookie with the name of "username" and value of "admin". The server encodes both name and value when sending the cookie to the web browser.

  - The web browser stores this information and sends it back to the server via the Cookie HTTP header for the next request as follows:

        GET /index.html HTTP/1.1
        Cookie: username=admin
        ...


  Why cookies
  - It’s important to understand that HTTP is stateless. When you send two subsequent HTTP requests to the server, there is no link between them. In other words, the server cannot know if the two requests are from the same web browser.

  - Therefore, a cookie is used to tell if the two requests came from the same web browser.

  - In practice, cookies serve the following purposes:

        Session management – cookies allow you to manage any information that the server should remember. For example, logins, shopping carts, etc.
        Personalization – cookies allow you to store user preferences, themes, and setting specific to a user.
        Tracking – cookies help record and analyze user behaviors in advertising.


  Cookie details
  - A cookie consists of the following information stored by the web browser:

        Name – a unique name that identifies the cookie. The cookie names are case-insensitive. It means that Username and username are the same cookies.
        Value – string value of the cookie. It must be URL-encoded.
        Domain – a domain for which the cookie is valid.
        Path – path without the domain for which the cookie should be sent to the server. For example, you can specify that the cookie is accessible only from the https://www.javascripttutorial.net/dom/ so pages at https://www.javascripttutoiral.net/ won’t send the cookie information.
        Expiration – timestamp that indicates when the web browser should delete the cookie (or when the browser should stop sending the cookie to the server). The expiration date is set as a date in GMT format: Wdy, DD-Mon-YYYY HH:MM:SS GMT. The expiration date allows the cookies to be stored in the user’s web browsers even after users close the web browsers.
        Secure flag – if specified, the web browser only sends the cookie to the server only via an SSL connection (https, not http)

  - The name, value, domain, path, expiration, and secure flag are separated by a semicolon and space. For example:

        HTTP/1.1 200 OK
        Content-type: text/html
        Set-Cookie:user=john
        ; expire=Tue, 12-December-2030 12:10:00 GMT; domain=javascripttutorial.net; path=/dom; secure
        ...
    > Note that the secure flag is the only part that is not a name-value pair.

  - Cookies in JavaScript
    + To manage cookies in JavaScript, you use the document.cookie property.

*/

////////////////////////////
// I. Set a cookie
// To set a value for a cookie, you compose the cookie text in the following format:
// name=value; expires=expirationTime; path=domainPath; domain=domainName; secure
let cookieText = 'domain=localhost:5500'

// …and append it to the cookie:
document.cookie = cookieText

// A cookie requires only name and value. For example:
// document.cookie = 'username=John Doe; '
// document.cookie = 'age=18;'
document.cookie = 'username=joe;expires=Sat, 10 Aug 2024 03:32:22 GMT;path=/'
/*
  - This example creates a cookie called username that has a value of admin. The web browser will send this cookie every time it makes a request to the server.
  - Since the cookie doesn’t specify the expired time, it will be deleted when the web browser is closed.
  - The cookie text "username=admin" doesn’t have any character that needs to be encoded.
*/
// However, it’s a good practice to always use the encodeURIComponent() function when setting a cookie like this:
document.cookie = `${encodeURIComponent('role')}=${encodeURIComponent('admin')}`

////////////////////////////
// II. The following example returns a string of all cookies available to the page:
const str = document.cookie
console.log(str)
/*
  The document.cookie returns a series of name-value pairs separated by semicolons like this:
    name1=value1;name2=value2;...

  The following example shows the cookies of a webpage:
    _ga=GA1.2.336374160.1600215156; dwf_sg_task_completion=False; _gid=GA1.2.33408724.1600901684

  Since all the names and values are URL-encoded, you need to use the decodeURIComponent() to decode them.
*/

////////////////////////////
// III. Remove a cookie
// To remove a cookie, you need to set the cookie again with the same name, path, domain, and secure option. And you need to set the expiration date to some time in the past.
// METHOD 1
document.cookie = 'username='
document.cookie = 'role='
document.cookie = 'domain='
document.cookie = 'path='
document.cookie = 'age='
document.cookie = 'expires=Thu, 01 Jan 1970 00:00:00 UTC;'

// METHOD 2: NOT WORK
// document.cookie =
//   'username=;role=;domain=;path=;expires=Thu, 01 Jan 1970 00:00:00 UTC;'
console.log(document.cookie)
// You should define the cookie path to ensure that you delete the right cookie.
// Some browsers will not let you delete a cookie if you don't specify the path.
