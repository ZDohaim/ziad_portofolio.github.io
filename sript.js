const blogPosts = [
  {
    title: 'Blog Post 1',
    Author: 'Ziad AlDohaim:',
    content: 'This will be used for future reference'
  },
  {
    title: 'Blog Post 2',
    Author: 'Ziad AlDohaim',
    content: 'This will be used for future referce'
  }
];

const blogPostsContainer = document.getElementById('blog-posts');

// Function to display blog posts
function displayBlogPosts() {
  blogPostsContainer.innerHTML = ''; // Clear existing content

  for (const post of blogPosts) {
    const postDiv = document.createElement('div');
    postDiv.classList.add('blog-post');

    const title = document.createElement('h3');
    title.textContent = post.title;
    const author = document.createElement('h3');
    title.textContent = post.Author;

    const content = document.createElement('p');
    content.textContent = post.content;

    postDiv.appendChild(title);
    postDiv.appendChild(author);
    postDiv.appendChild(content);

    blogPostsContainer.appendChild(postDiv);
  }
}

// Call the function to display blog posts
displayBlogPosts();