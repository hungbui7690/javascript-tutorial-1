/*
  Export
  - ES6 modules allow you to structure JavaScript code in a modular fashion. Modules provide a standardized way for defining and importing/exporting reusable pieces of code within a JavaScript application.

  - By default, ES6 modules encapsulate their code. This means that values (variables, functions, classes, etc.) defined in a module are not accessible from outside of the module by default. This prevents naming conflicts and promotes better code structure.

  - Modules can export values (variables, functions, classes, etc.,) using the export keyword.

  - The export keyword exports values from a module so that you can use them in other modules. There are two types of exports:

      Named exports
      Default exports

  - A module can have multiple named exports but only one default export.

    (1) lib.js

  - Named exports
    > A module can have multiple named exports. In practice, you use named exports when you need to export multiple values from a module.
    > In this lesson, we 

*/

import { count, flag, increase, Counter, Animal } from './lib.js'

console.log(count, flag)
increase()

const counter = new Counter()
console.log(counter.current)
