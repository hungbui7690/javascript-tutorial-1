/*
  for…in
  - The for...in loop over the enumerable properties that are keyed by strings of an object. Note that a property can be keyed by a string or a symbol.

  - A property is enumerable when its internal enumerable flag is set to true.

  - The enumerable flag defaults to true when a property is created via a simple assignment or via a property initializer:

      object.propertyName = value;

    or

      let obj = {
          propertyName: value,
          ...
      };

*/

// The for...in  allows you to access each property and value of an object without knowing the specific name of the property. For example:
var person = {
  firstName: 'John',
  lastName: 'Doe',
  ssn: '299-24-2351',
}

for (var key in person) {
  console.log(key + ':' + person[key])
}
