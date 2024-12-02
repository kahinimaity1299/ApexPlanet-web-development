// Sample Product Data
const products = [
    { id: 1, name: 'Smartphone', category: 'electronics', price: 699, rating: 4.5, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSyLC3s5XchlI4LqKUgbrVyouuuRNIUNTUhg&s' },
    { id: 2, name: 'Laptop', category: 'electronics', price: 999, rating: 4.8, image: 'https://cdn.thewirecutter.com/wp-content/media/2024/07/laptopsunder500-2048px-5452.jpg' },
    { id: 3, name: 'T-Shirt', category: 'fashion', price: 25, rating: 4.1, image: 'https://files.cdn.printful.com/o/upload/bfl-image/f5/10333_l_collage%20vintage%20design%20.jpg' },
    { id: 4, name: 'Sneakers', category: 'fashion', price: 60, rating: 4.6, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWX9ykwt-kmuCmdLRRDR83Gtv1Xo0QjOJc-w&s' },
    { id: 5, name: 'Novel', category: 'books', price: 15, rating: 4.9, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlIVRa6P0P0SCimAIwenpxBIEXaflVkldMPQ&s' },
    { id: 6, name: 'Headphones', category: 'electronics', price: 120, rating: 4.3, image: 'https://hammeronline.in/cdn/shop/files/Bash_2.0_Bluetooth_Headphones.webp?v=1726899059' }
];

const productList = document.getElementById('product-list');
const categoryFilter = document.getElementById('category-filter');
const sortOptions = document.getElementById('sort-options');

// Render products
function renderProducts(filteredProducts) {
    productList.innerHTML = '';
    filteredProducts.forEach(product => {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}" class="product-image">
            <h3 class="product-title">${product.name}</h3>
            <p class="product-price">$${product.price}</p>
            <p class="product-rating">⭐ ${product.rating}</p>
        `;
        productList.appendChild(productCard);
    });
}

// Apply filters and sorting
function filterAndSortProducts() {
    let filteredProducts = products;

    // Filter by category
    const selectedCategory = categoryFilter.value;
    if (selectedCategory !== 'all') {
        filteredProducts = filteredProducts.filter(product => product.category === selectedCategory);
    }

    // Sort products
    const sortBy = sortOptions.value;
    if (sortBy === 'price-asc') {
        filteredProducts.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-desc') {
        filteredProducts.sort((a, b) => b.price - a.price);
    } else if (sortBy === 'rating-desc') {
        filteredProducts.sort((a, b) => b.rating - a.rating);
    }

    renderProducts(filteredProducts);
}

// Initialize the product listing
categoryFilter.addEventListener('change', filterAndSortProducts);
sortOptions.addEventListener('change', filterAndSortProducts);
renderProducts(products);
