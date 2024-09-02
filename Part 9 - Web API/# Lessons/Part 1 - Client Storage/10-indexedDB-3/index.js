/*
  Indexed DB
  - insert data 
  - Application > IndexedDB > CRM > Contacts

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

  // *** When you call the open() method, it can succeed or fail. To handle each case, you can assign the corresponding event handler as follows:
  // After defining the insertContact() function, you can call it in the onsuccess event handler of the request to insert one or more contacts like this:
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
  }
  /*
    Now, if you open the index.html file in the web browser, the code in the app.js will execute to:

        Create the CRM database in the IndexedDB.
        Create the Contacts object store in the CRM database.
        Insert two records into the object store.

    If you open the devtools on the web browser, you’ll see the CRM database with the Contacts object store. And in the Contacts object store, you’ll see the data there as shown in the following picture:
  */

  request.onerror = (event) => {
    console.error(`Database error: ${event.target.errorCode}`)
  }
})()
