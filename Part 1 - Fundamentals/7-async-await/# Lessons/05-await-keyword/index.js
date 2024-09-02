/*
  The await keyword
    > You use the await keyword to wait for a Promise to settle either in a resolved or rejected state. 

  *** Note that if you use the await operator outside of an async function, you will get an error.

*/

async function sayHi() {
  return Promise.resolve('Hi')
}

// You can use the await keyword only inside an async function:
// In this example, the await keyword instructs the JavaScript engine to wait for the sayHi() function to complete before displaying the message.
async function display() {
  let result = await sayHi()
  console.log(result)
}

display()
