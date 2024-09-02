/*
  Form Data API
  - inputs MUST have NAME ATTRIBUTE to use this

*/

const form = document.querySelector('.form')
const btn = document.querySelector('.btn')

// Method 1:
// const formData = new FormData(form)

form.addEventListener('submit', function (e) {
  e.preventDefault()

  /////////////////////////
  // Method 2:
  const formDataX = new FormData(e.currentTarget)
  // console.log(formDataX) // *** contains a lot of methods that we will use

  /////////////////////////
  // Method 3:
  // const formDataZ = new FormData(form, btn) // (1)

  /////////////////////////
  // 1. spread - entries()
  const entries = [...formDataX.entries()] // MUST use SPREAD OPERATOR
  console.log('> entries: ', entries)

  /////////////////////////
  // 2. spread - keys()
  const keys = [...formDataX.keys()]
  console.log('+ keys: ', keys)

  // /////////////////////////
  // 3. spread - values()
  const values = [...formDataX.values()]
  console.log('* values: ', values)

  ////////////////////////////
  // Iterate over using "for-of"
  ////////////////////////////
  for (let [key, value] of formDataX) {
    console.log(`${key} = ${value}`)
  }
})
