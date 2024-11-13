// TODO: Create logic to toggle the light/dark mode styles for the page and circle. The mode should be saved to local storage.
const toggle = document.querySelector('#toggle');
const container = document.querySelector('.container');
const body = document.body;

// Set default mode to dark if no preference is set in localStorage
let mode = localStorage.getItem('theme') || 'dark'; // Defaults to dark if not in localStorage

// Apply the saved theme on page load
if (mode === 'light') {
  body.classList.add('light');
  body.classList.remove('dark');
  toggle.textContent = '🌙';  // Change button text to dark mode icon
} else {
  body.classList.add('dark');
  body.classList.remove('light');
  toggle.textContent = '☀️';  // Change button text to light mode icon
}

// Listen for a click event on the toggle switch
toggle.addEventListener('click', function () {
  // Toggle mode
  if (mode === 'dark') {
    mode = 'light';
    body.classList.add('light');
    body.classList.remove('dark');
    toggle.textContent = '🌙';  // Change button text to dark mode icon
  } else {
    mode = 'dark';
    body.classList.add('dark');
    body.classList.remove('light');
    toggle.textContent = '☀️';  // Change button text to light mode icon
  }

  // Save mode to localStorage
  localStorage.setItem('theme', mode);
});

// TODO: Create a function called `readLocalStorage` that reads from local storage and returns the data. If no data exists, return an empty array.
function readLocalStorage() {
  const posts = localStorage.getItem('posts');
  return posts ? JSON.parse(posts) : []; // Return an empty array if no posts are found
}

// TODO: Create a function called `storeLocalStorage` that takes a given object and saves the new data to the existing blog data in local storage.
function storeLocalStorage(post) {
  const posts = readLocalStorage();
  posts.push(post);
  localStorage.setItem('posts', JSON.stringify(posts)); // Save updated posts array back to localStorage
}

// Handle form submission
const blogForm = document.querySelector('#blogForm');
blogForm.addEventListener('submit', function (e) {
  e.preventDefault();

  const username = document.querySelector('#username').value;
  const title = document.querySelector('#title').value;
  const content = document.querySelector('#content').value;

  // Validation
  if (!username || !title || !content) {
    document.querySelector('#error').textContent = '"Please complete the form."';
    return;
  }

  // Store the new blog post to localStorage
  const newPost = { username, title, content, date: new Date().toLocaleString() };
  storeLocalStorage(newPost);

  // Optionally clear the form after submission
  blogForm.reset();

  // Optionally, you could redirect or update the UI to show the new post
  // redirectPage('some-page.html');
  console.log('New post added:', newPost);
});

// Example function to redirect to another page 
let redirectURL = 'blog.html';
const redirectPage = function (url) {
  redirectURL = url;
  location.assign(url);
};
