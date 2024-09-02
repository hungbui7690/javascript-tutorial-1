/*
  Indexed DB
  - Read data from the object store by an index

*/

;(function () {
  if (!window.indexedDB) {
    console.log(`Your browser doesn't support IndexedDB`)
    return
  }

  const request = indexedDB.open('CRM', 1)

  request.onupgradeneeded = (event) => {
    let db = event.target.result
    let store = db.createObjectStore('Contacts', {
      autoIncrement: true,
    })
    let index = store.createIndex('email', 'email', {
      unique: true,
    })
  }

  function insertContact(db, contact) {
    const txn = db.transaction('Contacts', 'readwrite')
    const store = txn.objectStore('Contacts')
    let query = store.put(contact)

    query.onsuccess = function (event) {
      console.log(event)
    }
    query.onerror = function (event) {
      console.log(event.target.errorCode)
    }
    txn.oncomplete = function () {
      db.close()
    }
  }

  function getContactById(db, id) {
    const txn = db.transaction('Contacts', 'readonly')
    const store = txn.objectStore('Contacts')
    let query = store.get(id)

    query.onsuccess = (event) => {
      if (!event.target.result) {
        console.log(`The contact with ${id} not found`)
      } else {
        console.table(event.target.result)
      }
    }
    query.onerror = (event) => {
      console.log(event.target.errorCode)
    }
    txn.oncomplete = function () {
      db.close()
    }
  }

  // (1) The following defines a new function called getContactByEmail() that uses the email index to query data:
  function getContactByEmail(db, email) {
    const txn = db.transaction('Contacts', 'readonly')
    const store = txn.objectStore('Contacts')

    // First, get the email index object from the Contacts object store.
    const index = store.index('email')

    // Second, use the index to read the data by calling the get() method.
    let query = index.get(email)

    // Third, show the result in the onsuccess event handler of the query.
    query.onsuccess = (event) => {
      console.log(query.result)
    }
    query.onerror = (event) => {
      console.log(event.target.errorCode)
    }
    txn.oncomplete = function () {
      db.close()
    }
  }

  request.onsuccess = (event) => {
    const db = event.target.result

    insertContact(db, {
      email: 'john.doe@outlook.com',
      firstName: 'John',
      lastName: 'Doe',
    })

    insertContact(db, {
      email: 'jane.doe@gmail.com',
      firstName: 'Jane',
      lastName: 'Doe',
    })
    getContactById(db, 1)

    // (2) The following illustrates how to use the getContactByEmail() function in the onsuccess event handler:
    getContactByEmail(db, 'jane.doe@gmail.com')
  }

  request.onerror = (event) => {
    console.error(`Database error: ${event.target.errorCode}`)
  }
})()
