/*
  Dynamic Object Keys

*/

//////////////////////////////
// dot notation
//////////////////////////////
const person = {
  name: 'joe',
}
console.log(person.name) // joe

person.age = 25
console.log(person) // {name: 'joe', age: 25}

//////////////////////////////
// square bracket notation
//////////////////////////////
const items = {
  'featured-items': ['item1', 'item2'],
}
console.log(items['featured-items']) // ['item1', 'item2']
console.log(person['name']) // joe

//////////////////////////////
// key name
//////////////////////////////
let appState = 'loading'
appState = 'error'

const app = {
  [appState]: true,
}

const keyName = 'computer'
app[keyName] = 'apple'
console.log(app) // {error: true, computer: apple}

//////////////////////////////
// application
//////////////////////////////
const state = {
  loading: true,
  name: '',
  job: '',
}

function updateState(key, value) {
  state[key] = value
}

updateState('name', 'dan')
updateState('loading', 'false') // update property
updateState('products', []) // create new key/value pair
console.log(state) // {loading: false, name: 'dan', job: '', products : []} >> we dynamically update the object
