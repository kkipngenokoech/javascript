const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));
async function fetchPosts() {
  const apiUrl = 'https://jsonplaceholder.typicode.com/posts';

  try {
    const response = await fetch(apiUrl);

    // Check if the response status is OK (status code 200)
    if (!response.ok) {
      throw new Error(`Error: ${response.status} - ${response.statusText}`);
    }

    // Parse the response JSON data
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching posts:', error.message);
    throw error; // You can handle the error as needed in your application
  }
}

// Example usage:
fetchPosts()
  .then(posts => {
    console.log('Fetched posts:', posts);
    // Handle the posts data as needed in your application
  })
  .catch(error => {
    // Handle errors here
    console.error('Error in fetch:', error);
  });
