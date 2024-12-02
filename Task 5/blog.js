const blogList = document.getElementById('blog-list');

// Sample Blog Data
const blogs = [
    {
        id: 1,
        title: 'How to Learn JavaScript',
        content: 'JavaScript is a versatile programming language...',
        category: 'Programming',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQ4qe-TiNdb7kONl0a1C3a1R3H9TPWKSJeGg&s',
    },
    {
        id: 2,
        title: 'CSS Grid vs Flexbox',
        content: 'When building responsive layouts, CSS Grid and Flexbox...',
        category: 'Design',
        image: 'https://i.ytimg.com/vi/DXxt4oIAI4Y/hqdefault.jpg',
    },
    {
        id: 3,
        title: 'Tips for Writing Clean Code',
        content: 'Writing clean code is essential for maintainability...',
        category: 'Development',
        image: 'https://t3.ftcdn.net/jpg/01/21/16/42/360_F_121164243_YwTDb5JLRTXBdXGkJ4bLZEJmLB1hwp6K.jpg',
    },
];

// Render Blogs
function renderBlogs() {
    blogList.innerHTML = '';
    blogs.forEach(blog => {
        const blogCard = document.createElement('div');
        blogCard.className = 'blog-card';
        blogCard.innerHTML = `
            <img src="${blog.image}" alt="${blog.title}">
            <div class="content">
                <h3>${blog.title}</h3>
                <p>${blog.content.substring(0, 100)}...</p>
                <p><strong>Category:</strong> ${blog.category}</p>
            </div>
        `;
        blogList.appendChild(blogCard);
    });
}

// Initialize
renderBlogs();
