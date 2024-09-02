/*
  What is a JavaScript Proxy object
  - A JavaScript Proxy is an object that wraps another object (target) and intercepts the fundamental operations of the target object.

  - The fundamental operations can be the property lookup, assignment, enumeration, function invocations, etc.

  Creating a proxy object
  - To create a new proxy object, you use the following syntax:

        let proxy = new Proxy(target, handler);

  - In this syntax:

        target – is an object to wrap.
        handler – is an object that contains methods to control the behaviors of the target. The methods inside the handler object are called traps.

*/

// First, define an object called user:
const user = {
  firstName: 'John',
  lastName: 'Doe',
  email: 'john.doe@example.com',
}

// Second, define a handler object:
const handler = {
  get(target, property) {
    console.log(`Property ${property} has been read.`)
    return target[property]
  },
}

// Third, create a proxy object:
const proxyUser = new Proxy(user, handler)
// The proxyUser object uses the user object to store data. The proxyUser can access all properties of the user object.

// Fourth, access the firstName and lastName properties of the user object via the proxyUser object:
console.log(proxyUser.firstName)
console.log(proxyUser.lastName)
// When you access a property of the user object via the proxyUser object, the get() method in the handler object is called.

// Fifth, if you modify the original object user, the change is reflected in the proxyUser:
user.firstName = 'Jane'
console.log(proxyUser.firstName)

// Similarly, a change in the proxyUser object will be reflected in the original object (user):
proxyUser.lastName = 'William'
console.log(user.lastName)
