/*
  Optional Chaining Operator
  - The optional chaining operator (?.) is like a shortcut for accessing nested properties in a series of objects. Instead of having to check if each step in the chain is empty (null or undefined), you can use the operator ?. to directly access the desired property.

  - If any part of the chain is empty, the optional chaining operator (?.) will stop right there and give you undefined as a result. It saves you from writing extra checks for each step in the chain.

*/

function getUser(id) {
  if (id <= 0) {
    return null
  }

  // get the user from database
  // and return null if id does not exist
  // ...

  // if user was found, return the user
  return {
    id: id,
    username: 'admin',
    profile: {
      avatar: '/avatar.png',
      language: 'English',
    },
  }
}

// The following uses the getUser() function to access the user profile:
let user1 = getUser(1)
let profile1 = user1.profile

// 1) However, if you pass the id that is less than or equal to zero or the id doesn’t exist in the database, the getUser() function will return null.
// Therefore, before accessing the avatar property, you need to check if the user is not null using the logical operator AND:
let user2 = getUser(2)
let profile2 = user2 && user2.profile
// In this example, we confirm that the user is not null or undefined before accessing the value of user.profile property. It prevents the error that would occur if you simply access the user.profile directly without checking the user first.

// 2) ES2020 introduced the optional chaining operator denoted by the question mark followed by a dot:
// The optional chaining operator implicitly checks if the user is not null or undefined before attempting to access the user.profile:
let user3 = getUser(2)
let profile3 = user3?.profile

// In this example, if the user is null or undefined, the optional chaining operator (?.) immediately returns undefined.
// Technically, it is equivalent to the following:
let user4 = getUser(2)
let profile4 =
  user4 !== null || user4 !== undefined ? user4.profile4 : undefined

// 3) Stacking the optional chaining operator
// In case the user object returned by the getUser() does not have the profile property. Trying to access the avatar without checking the user.profile first will result in an error.
// To avoid the error, you can use the optional chaining operator multiple times like this:
let user5 = getUser(-1)
let avatar = user5?.profile?.avatar

// 4) Combining with the nullish coalescing operator
// If you want to assign a default profile to the user, you can combine the optional chaining operator (?.) with the nullish coalescing operator (??) as follows:

let defaultProfile = { default: '/default.png', language: 'English' }
let user6 = getUser(2)
let profile6 = user6?.profile6 ?? defaultProfile
// In this example, if the user.profile is null or undefined, the profile will take the defaultProfile due to the nullish coalescing operator

// 5) Using optional chaining operator with function calls
// Suppose that you have a file API as follows:
let file = {
  read() {
    return 'file content'
  },
  write(content) {
    console.log(`Writing ${content} to file...`)
    return true
  },
}

let data = file.read()
console.log(data) // error

// However, if you use the optional chaining operator with the method call, the expression will return undefined instead of throwing an error:
let compressedData = file.compress?.()
// The compressedData is now undefined.
// This is useful when you use an API in which a method might be not available for some reason e.g., a specific browser or device.

// 6) The optional chaining operator (?.) is also helpful if you have a function with an optional callback:
function getUser(id, callback) {
  // get user
  // ...

  let user = {
    id: id,
    username: 'admin',
  }

  // METHOD 1: test if the callback exists
  if (callback) {
    callback(user)
  }

  // METHOD 2: optional chaining
  callback?.(user)

  return user
}
