// TODO: Create a variable that selects the form element
const form = document.querySelector('#blogForm');

// TODO: Create a function that handles the form submission. Grab the form data and store it in local storage, then redirect to the blog page using the `redirectPage` function. If the form is submitted with missing data, display an error message to the user.
function handleFormSubmission(e) {
    e.preventDefault();

// TODO: Add an event listener to the form on submit. Call the function to handle the form submission.
  // Grab form data
  const username = document.querySelector('#username').value.trim();
  const title = document.querySelector('#title').value.trim();
  const content = document.querySelector('#content').value.trim();

  // Check if fields are empty
  if (!username || !title || !content) {
    document.querySelector('#error').textContent = "Please complete the form.";
    return;
  }

  // Create a post object
  const newPost = { username, title, content, date: new Date().toLocaleString() };

  // Store data in local storage
  storeLocalStorage(newPost);

  // Redirect to blog page
  redirectPage('blog.html');
}

// Add submit event listener to form
form.addEventListener('submit', handleFormSubmission);
