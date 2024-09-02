/*
  ES2022
  - script tag in html >> set type='module' 
    >> to mimic server 

*/

import fetchTabs from './fetchData.js' // (2)

// top level await
const tabs = await fetchTabs()
console.log(tabs)
