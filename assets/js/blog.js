// TODO: Create a variable that selects the main element, and a variable that selects the back button element
const main = document.querySelector('main');
const backButton = document.querySelector('footer button');

// TODO: Create a function that builds an element and appends it to the DOM
function buildPostElement(post) {
    const postDiv = document.createElement('div');
    postDiv.classList.add('post');

    postDiv.innerHTML = `
    <h2>${post.title}</h2>
    <p><strong>By:</strong> ${post.username}</p>
    <p>${post.content}</p>
    <p><em>Posted on ${post.date}</em></p>
  `;

  return postDiv;
}

// TODO: Create a function that handles the case where there are no blog posts to display
function noPostsMessage() {
    const message = document.createElement('p');
    message.textContent = "No Blog posts yet...";
    main.appendChild(message);
  }
  
// TODO: Create a function called `renderBlogList` that renders the list of blog posts if they exist. If not, call the no posts function.
function renderBlogList() {
    const posts = readLocalStorage();
    
    if (posts.length === 0) {
      noPostsMessage();
    } else {
      posts.forEach(post => {
        const postElement = buildPostElement(post);
        main.appendChild(postElement);
      });
    }
  }

// TODO: Call the `renderBlogList` function
backButton.addEventListener('click', () => redirectPage('index.html'));

// TODO: Redirect to the home page using the `redirectPage` function found in logic.js when the back button is clicked
renderBlogList();
