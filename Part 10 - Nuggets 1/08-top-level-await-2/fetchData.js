const url = 'https://course-api.com/react-tabs-project'

// (1) function that return promise
const fetchTabs = () => {
  return fetch(url).then((resp) => resp.json())
}

export default fetchTabs
