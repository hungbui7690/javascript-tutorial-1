/*
  Reduce - Object

*/

const url = 'https://api.github.com/users/john-smilga/repos?per_page=100'

const getData = async () => {
  const response = await fetch(url)
  const data = await response.json()

  const newData = data.reduce((acc, cur) => {
    const { language } = cur

    // Method 1 if "language" exists >> then increase >> otherwise, create new property and set = 1
    // if (acc[language]) acc[language] += 1
    // else acc[language] = 1

    // Method 2
    if (language) acc[language] = acc[language] + 1 || 1

    return acc
  }, {})
  console.log(newData)
}

getData()
