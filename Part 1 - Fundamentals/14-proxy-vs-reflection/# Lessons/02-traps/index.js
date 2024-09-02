/*
  Proxy Traps
  - The get() trap
    + The get() trap is fired when a property of the target object is accessed via the proxy object.

    + In the previous example, a message is printed out when a property of the user object is accessed by the proxyUser object.

    + Generally, you can develop a custom logic in the get() trap when a property is accessed.

*/

// 1) For example, you can use the get() trap to define computed properties for the target object. The computed properties are properties whose values are calculated based on values of existing properties.
// The user object does not have a property fullName, you can use the get() trap to create the fullName property based on the firstName and lastName properties:
const user = {
  firstName: 'John',
  lastName: 'Doe',
}

const handler = {
  get(target, property) {
    return property === 'fullName'
      ? `${target.firstName} ${target.lastName}`
      : target[property]
  },
}

const proxyUser = new Proxy(user, handler)

console.log(proxyUser.fullName) // John Doe

// 2) The set() trap
// The set() trap controls behavior when a property of the target object is set.
// Suppose that the age of the user must be greater than 18. To enforce this constraint, you develop a set() trap as follows:
const userX = {
  firstName: 'Nicky',
  lastName: 'Doe',
  age: 20,
}

const handlerX = {
  set(target, property, value) {
    if (property === 'age') {
      if (typeof value !== 'number') {
        throw new Error('Age must be a number.')
      }
      if (value < 18) {
        throw new Error('The user must be 18 or older.')
      }
    }
    target[property] = value
  },
}

const proxyUserX = new Proxy(userX, handlerX)

// First, set the age of user to a string:
// proxyUserX.age = 'foo'

// Second, set the age of the user to 16:
// proxyUserX.age = 16

// Third, set the age of the user to 21:
proxyUserX.age = 21

// 3) The apply() trap
// The handler.apply() method is a trap for a function call. Here is the syntax:
const getFullName = function (user) {
  return `${user.firstName} ${user.lastName}`
}

const getFullNameProxy = new Proxy(getFullName, {
  apply(target, thisArg, args) {
    return target(...args).toUpperCase()
  },
})

console.log(getFullNameProxy(user)) // JOHN DOE

/*
  More traps

  - The following are more traps:

      construct – traps usage of the new operator
      getPrototypeOf – traps an internal call to [[GetPrototypeOf]]
      setPrototypeOf – traps a call to Object.setPrototypeOf
      isExtensible – traps a call to Object.isExtensible
      preventExtensions – traps a call to Object.preventExtensions
      getOwnPropertyDescriptor – traps a call to Object.getOwnPropertyDescriptor

*/
