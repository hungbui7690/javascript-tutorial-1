/*
  Indexed DB
  - Read data from the object store by key

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

  // (1) To read an object by its key, you use the get() method of the object store. The following getContactById() function finds a contact by an id:
  function getContactById(db, id) {
    const txn = db.transaction('Contacts', 'readonly')
    const store = txn.objectStore('Contacts')

    // When you call the get() method of the object store, it returns a query that will execute asynchronously.
    let query = store.get(id)

    // Because the query can succeed or fail, you need to assign the onsuccess and onerror handlers to handle each case.
    // If the query succeeded, you’ll get the result in the event.target.result. Otherwise, you’ll get an error code via event.target.errorCode.
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

    // Actually, the database connection is closed only when all the transactions are completed.
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

    // (2) The following calls the getContactById() in the onsuccess event handler to get the contact with id 1:
    getContactById(db, 1)
  }

  request.onerror = (event) => {
    console.error(`Database error: ${event.target.errorCode}`)
  }
})()
