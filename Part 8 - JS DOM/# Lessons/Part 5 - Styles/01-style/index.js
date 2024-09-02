/*
  Style
  - use the style property to manipulate the inline style of the HTML elements.
  - To set the inline style of an element, you use the style property of that element:

        element.style

  - The style property returns the read-only CSSStyleDeclaration object that contains a list of CSS properties. For example, to set the color of an element to red, you use the following code:

        element.style.color = 'red'

  - If the CSS property contains hyphens (-) for example -webkit-text-stroke you can use the array-like notation ([]) to access the property:

        element.style.['-webkit-text-stock'] = 'unset'

  - The following table shows the common CSS properties:
        CSS	                      JavaScript
        background	              background
        background-attachment	    backgroundAttachment
        background-position	      backgroundPosition
        background-repeat	        backgroundRepeat
        ...
        border-left-color	        borderLeftColor
        border-left-style	        borderLeftStyle
        border-left-width	        borderLeftWidth
        ...
        font-family	              fontFamily
        font-size	                fontSize
        font-variant	            fontVariant
        ...
        z-index	                  zIndex

  - To completely override the existing inline style, you set the cssText property of the style object. For example:

      element.style.cssText = 'color:red;background-color:yellow';

  - Or you can use the setAttribute() method:

      element.setAttribute('style','color:red;background-color:yellow');

  - Once setting the inline style, you can modify one or more CSS properties:

      element.style.color = 'blue';

  - If you do not want to completely overwrite the existing CSS properties, you can concatenate the new CSS property to the cssText as follows:
    > In this case, the += operator appends the new style string to the existing one.

      element.style.cssText += 'color:red;background-color:yellow';

*/

// The following css() helper function is used to set multiple styles for an element from an object of key-value pairs:
function css(e, styles) {
  for (const property in styles) e.style[property] = styles[property]
}

// You can use this css() function to set multiple styles for an element with the id #content as follows:
let p = document.querySelector('#content')
css(p, { background: 'crimson', border: 'solid 1px red', color: 'white' })

// Typical Way
p.style.fontWeight = 'bold'
