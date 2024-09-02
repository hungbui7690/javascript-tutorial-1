/*
  ES2022
  - script tag in html >> set type='module' 
    >> to mimic server 

*/

const url = 'https://course-api.com/react-tabs-project'

// Before ES 2022, we need to create function to use async/await
const fetchData = async () => {
  const resp = await fetch(url)
  const data = await resp.json()
  console.log(data)
}
fetchData()

//////////////////////////
// ES2022, Top Level Await
//////////////////////////
const resp = await fetch(url)
const data = await resp.json()
console.log(data)
