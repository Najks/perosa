document.addEventListener('DOMContentLoaded', () => {
  const productContainer = document.getElementById('product-container');

  function filterProducts(category) {
    fetch('data/products.json')
      .then(response => response.json())
      .then(data => {
        displayProducts(category, data);
      })
      .catch(error => console.error('Error fetching product data:', error));
  }

  function displayProducts(category, data) {
    productContainer.innerHTML = '';

    let categoryData;
    if (category === 'coffee') {
      categoryData = [].concat(...Object.values(data.coffee));
    } else if (category in data.coffee) {
      categoryData = data.coffee[category];
    } else {
      categoryData = data[category];
    }

    if (categoryData && Array.isArray(categoryData)) {
      categoryData.forEach(product => {
        const productCard = `
          <div class="col-md-4 product" data-category="${category}">
            <div class="card mb-4">
              <img src="${product.image}" class="card-img-top" alt="${product.name}">
              <div class="card-body">
                <h5 class="card-title">${product.name}</h5>
                <p class="card-text">${product.description}</p>
              </div>
            </div>
          </div>
        `;
        productContainer.insertAdjacentHTML('beforeend', productCard);
      });
    } else {
      productContainer.innerHTML = `<p class="text-center">No products available for this category.</p>`;
    }
  }

  // Initially display coffee products
  filterProducts('coffee');

  // Add event listeners to sidebar items
  document.querySelectorAll('.sidebar-item').forEach(item => {
    item.addEventListener('click', event => {
      event.preventDefault();
      const category = event.target.getAttribute('onclick').split("'")[1];
      filterProducts(category);
    });
  });

  // Make the filterProducts function available globally
  window.filterProducts = filterProducts;
});
