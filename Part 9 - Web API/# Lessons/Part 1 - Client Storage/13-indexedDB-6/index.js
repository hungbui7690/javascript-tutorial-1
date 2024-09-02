/*
  Indexed DB
  - Read all data from an object store

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

  function getContactByEmail(db, email) {
    const txn = db.transaction('Contacts', 'readonly')
    const store = txn.objectStore('Contacts')
    const index = store.index('email')
    let query = index.get(email)

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

  // (1) The following shows how to use a cursor to read all the objects from the Contacts object store:
  function getAllContacts(db) {
    const txn = db.transaction('Contacts', 'readonly')
    const objectStore = txn.objectStore('Contacts')

    // The objectStore.openCursor() returns a cursor used to iterate over an object store.
    // To iterate over the objects in an object store using the cursor, you need to assign an onsuccess handler:
    objectStore.openCursor().onsuccess = (event) => {
      let cursor = event.target.result // The event.target.result returns the cursor.
      if (cursor) {
        let contact = cursor.value // To get the data, you use the cursor.value property.
        console.log(contact)

        cursor.continue() // The cursor.continue() method advances the cursor to the position of the next record in the object store.
      }
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
    getContactByEmail(db, 'jane.doe@gmail.com')

    // (2) The following calls the getAllContacts() in the onsuccess event handler to show all data from the Contacts object store:
    getAllContacts(db)
  }

  request.onerror = (event) => {
    console.error(`Database error: ${event.target.errorCode}`)
  }
})()
