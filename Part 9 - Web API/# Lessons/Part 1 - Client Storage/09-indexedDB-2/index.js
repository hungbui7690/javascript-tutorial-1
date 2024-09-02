/*
  Indexed DB
  - create object stores & indexes
  - insert data into object stores

*/

;(function () {
  if (!window.indexedDB) {
    console.log(`Your browser doesn't support IndexedDB`)
    return
  }

  const request = indexedDB.open('CRM', 1) // db-name=CRM, version=1

  /*
    3. Create object stores
    - When you open the database for the first time, the onupgradeneeded event will trigger.
    - If you open the database for the second time with a version higher than the existing version, the onupgradeneeded  event also triggers.
    - For the first time, you can use the onupgradeneeded event handler to initialize the object stores and indexes.
    - For example, the following onupgradeneeded event handler creates the Contacts object store and its index.
  */
  // create the Contacts object store and indexes
  request.onupgradeneeded = (event) => {
    // First, get the IDBDatabase instance from the event.target.result and assign it to the db variable.
    let db = event.target.result

    // Second, call the createObjectStore() method to create the Contacts object store with the auto-increment key. It means that the IndexedDB will generate an auto-increment number starting at one as the key for every new object inserted into the Contacts object store.
    let store = db.createObjectStore('Contacts', {
      autoIncrement: true,
    })

    // Third, call the createIndex() method to create an index on the email property. Since the email is unique, the index should also be unique. To do so, you specify the third argument of the createIndex() method { unique: true }.
    let index = store.createIndex('email', 'email', {
      unique: true,
    })
  }

  /*
    4. Insert data into object stores
    - Once you open a connection to the database successfully, you can manage data in the onsuccess event handler.
    - For example, to add an object to an object store, you follow these steps:
        First, open a new transaction.
        Second, get an object store.
        Third, call the put() method of the object store to insert a new record.
        Finally, close the connection to the database once the transaction completes.
    - The following insertContact() function inserts a new contact into the Contacts object store:
  */
  function insertContact(db, contact) {
    // You can open a transaction in one of two modes: readwrite or readonly. The readwrite mode allows you to read data from and write data to the database while the readonly mode allows you to only read data from the database.
    const txn = db.transaction('Contacts', 'readwrite') // create a new transaction
    const store = txn.objectStore('Contacts') // get the Contacts object store
    let query = store.put(contact)

    // handle success case
    query.onsuccess = function (event) {
      console.log(event)
    }

    // handle the error case
    query.onerror = function (event) {
      console.log(event.target.errorCode)
    }

    // close the database once the transaction completes
    txn.oncomplete = function () {
      db.close()
    }
  }
})()
