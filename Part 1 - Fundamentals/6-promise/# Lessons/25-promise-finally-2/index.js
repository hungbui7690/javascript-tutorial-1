/*
  Promise finally
  - The finally() method schedule a function to execute when the promise is settled, either fulfilled or rejected.
  - It’s good practice to place the code that cleans up the resources in the finally() method once the promise is settled, regardless of its outcome.

  2) Using the Promise finally() method show a loading status
    - The following example shows how to use the finally() method to hide the loading element after calling the public API https://jsonplaceholder.typicode.com/posts.

*/

document.getElementById('fetchButton').addEventListener('click', () => {
  // First, add a click event handler to the button:
  const loadingElement = document.getElementById('loading')
  const contentElement = document.getElementById('content')

  // Second, show the loading element and hide the content element:
  loadingElement.style.display = 'block'
  contentElement.style.display = 'none'

  // Third, call an API using the Fetch API and render the posts:
  fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response) => response.json())
    .then((posts) => {
      // Render the posts
      const renderedPosts = posts
        .map((post) => {
          return `
            <h1>${post.title}</h1>
            <p>${post.body}</p>
            `
        })
        .join('')

      // Show the posts
      contentElement.innerHTML = renderedPosts
    })
    .catch((error) => {
      // Handle any errors
      contentElement.innerHTML = `<p>Failed to load data</p>`
    })
    // In the finally() method, hide the loading element and show the content element.
    .finally(() => {
      // Hide loading and show content
      loadingElement.style.display = 'none'
      contentElement.style.display = 'block'
    })
})
/*
  Summary

    The finally() method schedule a function to execute when the promise is settled, either fulfilled or rejected.
    It’s good practice to place the code that cleans up the resources in the finally() method once the promise is settled, regardless of its outcome.
*/
