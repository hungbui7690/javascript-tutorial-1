/*
  Introduction to ES6 modules
  - In the early days, JavaScript initially served small scripting tasks that provided interactivity to web pages. Nowadays, JavaScript has evolved to power complete applications in browsers and servers (Node.js).
  - To handle this growth, it is necessary to modularize JavaScript code into modules and make them reusable across applications.

  - ES6 introduced the concept of modules. A module is a JavaScript file that executes in strict mode. It means that any variables or functions declared in the module won’t be added automatically to the global scope.
  - The good news is that modern web browsers and Node.js support native ES6 modules. This native support streamlines module loading and optimizes performance.

  *** ES6 modules are supported in Node. js versions 13 and above.

  ~~ Add the type="module" to the script tag in the index.html to instruct the web browser to load the index.js file as a module:

    1. create lib.js + export
    2. index.js + import 

  @@ when import, needs to have extension of .js


*/

import { display } from './lib.js'

display('Hi')

/*
  Summary
  - ES6 modules allow you to organize JavaScript files into modules.
  - ES modules are JavaScript files that execute in strict mode.
  - Use the export statement to export variables, functions, and classes.
  - Use the import statement to import variables, functions, and classes from other modules.
  - Use type="module" in the script tag to instruct the web browser to load a JavaScript file as a module.
*/
