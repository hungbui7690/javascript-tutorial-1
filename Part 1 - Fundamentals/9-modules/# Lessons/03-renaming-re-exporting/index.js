/*
  Renaming + Re-exporting Named Exports

*/

// Renaming a value when exporting helps avoid naming conflict. Note that the modules that import the class may also rename it when importing:
import { Counter as MyCounter } from 'lib.js'

// METHOD 1: A module can import values from another module and export them immediately as follows:
export { MyCounter }

// METHOD 2: JavaScript allows you to shorten this using the export from syntax:
export { Counter } from 'module.js'
