/*
  Promise finally
  - The finally() method schedule a function to execute when the promise is settled, either fulfilled or rejected.
  - It’s good practice to place the code that cleans up the resources in the finally() method once the promise is settled, regardless of its outcome.

  1) Using the finally() method to clean up resources

*/

// The following defines a Connection class:
class Connection {
  execute(query) {
    if (query != 'Insert' && query != 'Update' && query != 'Delete') {
      throw new Error(`The ${query} is not supported`)
    }
    console.log(`Execute the ${query}`)
    return this
  }
  close() {
    console.log('Close the connection')
  }
}
/*
  The Connection class has two methods: execute() and close():

      The execute() method will only execute the insert, update, or delete query. It will issue an error if you pass into another query that is not in the list.
      The close() method closes the connection and cleans up the resource.
*/

// The following connect() function returns a promise that resolves to a new Connection if the success flag is set to true:
const success = true

function connect() {
  return new Promise((resolve, reject) => {
    if (success) resolve(new Connection())
    else reject('Could not open the database connection')
  })
}

// The following example uses the finally() method to close the connection:
let globalConnection

connect()
  .then((connection) => {
    globalConnection = connection
    return globalConnection.execute('Insert')
  })
  .then((connection) => {
    globalConnection = connection
    return connection.execute('Select')
  })
  .catch(console.log)
  .finally(() => {
    if (globalConnection) {
      globalConnection.close()
    }
  })
/*
  In this example:

    The connect() function resolves to a new Connection  object because the success flag is set to true.
    The first then() method executes the Insert query and returns a Connection object. The globalConnection is used to save the connection.
    The second then() method executes the Select query and issues an error. The catch() method shows the error message and the finally() method closes the connection.
*/
