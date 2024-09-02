/*
  Static Properties

*/

class Item {
  constructor(name, quantity) {
    this.name = name
    this.quantity = quantity
    this.constructor.count++
  }

  static count = 0 // (1) define static property

  static getCount() {
    return Item.count // (2) access static property inside class
  }
}

// This example creates two instances of the Item class, which calls the class constructor. Since the class constructor increases the count property by one each time it’s called, the value of the count is two.
let pen = new Item('Pen', 5)
let notebook = new Item('notebook', 10)

console.log(Item.getCount()) // (3) access static method

/*
  Summary
  - A static property of a class is shared by all instances of that class.
    
  - Use the static keyword to define a static property.
  
  - Use the className.staticPropertyName to access the static property in a static method.
    
  - Use the this.constructor.staticPropertyName or className.staticPropertyName to access the static property in a constructor.
*/
