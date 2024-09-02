/*
  Screen
  - The Screen object provides the attributes of the screen on which the current window is being rendered.

  - To access the Screen object, you use the screen property of the window object:

        window.screen

  - The Screen object is typically used by the web analytic software like Google Analytics to collect information of the client device on which the web browsers are running.

  - The window.screen object provides the following properties:

      Property	        Description
      availTop	        A read-only property that returns the first pixel from the top that is not taken up by system elements.
      availWidth	      A read-only property that returns the pixel width of the screen minus system elements.
      colorDepth	      A read-only property that returns the number of bits used to represent colors.
      height	          Represents the pixel height of the screen.
      left	            Represents the pixel distance of the current screen’s left side.
      pixelDepth	      A read-only property that returns the bit depth of the screen.
      top	              Represents the pixel distance of the current screen’s top.
      width	            Represents the pixel width of the screen.
      orientation	      Returns the screen orientation as specified in the Screen Orientation API
      availTop	        A read-only property that returns the first pixel from the top that is not taken up by system elements.
      availWidth	      A read-only property that returns the pixel width of the screen minus system elements.
      colorDepth	      A read-only property that returns the number of bits used to represent colors.
      height	          Represents the pixel height of the screen.
      left	            Represents the pixel distance of the current screen’s left side.
      pixelDepth	      A read-only that returns the bit depth of the screen.
      top	              Represents the pixel distance of the current screen’s top.
      width	            Represents the pixel width of the screen.
      orientation	      Returns the screen orientation as specified in the Screen Orientation API


*/

// 1) The Navigator object has properties that convey the browser’s information. For example, the userAgent is a property of the window.navigator object. It is a long string that identifies the web browser.
console.log(window.navigator.userAgent)
/*
  Note that the userAgent may be a little bit different, depending on the Google Chrome version.

  The different web browser provides specific capabilities which are not standardized. It’s better not to use the userAgent to identify the web browser because some web browsers allow users to modify the userAgent to pretend they are using a different browser.
*/

// For example, you may use the following code to detect if the current web browser is Internet Explorer:
if (navigator.userAgent.includes('MSIE')) {
  // IE, use specific features of IE
} else {
  // not IE
}

// To use a specific feature of a web browser, you can use the capability detection. For example:
if (typeof window.addEventListener === 'function') {
  // let's use addEventListener
} else {
  // addEventListener is not supported, use another way
}

// Some useful props / methods
console.log(window.navigator.onLine) // true
console.log(navigator.vendor) // Google Inc.
console.log(navigator.geolocation)
