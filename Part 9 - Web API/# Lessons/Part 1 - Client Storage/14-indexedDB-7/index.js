/*
  Indexed DB
  - Delete a contact: To delete a record from the object store, you use the delete() method of the object store.

  - Summary

      The IndexedDB is a large-scale object stored in web browsers.
      The IndexedDB stores data as key-value pairs. The values can be any data including simple and complex ones.
      The IndexedDB consists of one or more databases. Each database has one or more object stores. Typically, you create a database in the IndexedDB per web application.
      The IndexedDB is useful for web applications that don’t require a persistent internet connection, especially for applications that work both online and offline.

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

  function getAllContacts(db) {
    const txn = db.transaction('Contacts', 'readonly')
    const objectStore = txn.objectStore('Contacts')

    objectStore.openCursor().onsuccess = (event) => {
      let cursor = event.target.result
      if (cursor) {
        let contact = cursor.value
        console.log(contact)
        cursor.continue()
      }
    }
    txn.oncomplete = function () {
      db.close()
    }
  }

  // (1) The following function deletes a contact by its id from the Contacts object store:
  function deleteContact(db, id) {
    const txn = db.transaction('Contacts', 'readwrite')
    const store = txn.objectStore('Contacts')

    let query = store.delete(id)

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
    getAllContacts(db)

    // (2) And you can call the deleteContact() function in the onsuccess event handler to delete the contact with id 1 as follows:
    deleteContact(db, 1)
  }

  request.onerror = (event) => {
    console.error(`Database error: ${event.target.errorCode}`)
  }
})()
