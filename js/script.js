document.addEventListener('DOMContentLoaded', () => {
  fetch('data/products.json')
    .then(response => response.json())
    .then(data => {
      displayProducts('coffee', data);
    })
    .catch(error => console.error('Error fetching product data:', error));

  document.querySelectorAll('.dropdown-item').forEach(item => {
    item.addEventListener('click', event => {
      const category = event.target.getAttribute('onclick').split("'")[1];
      fetch('data/products.json')
        .then(response => response.json())
        .then(data => {
          displayProducts(category, data);
        })
        .catch(error => console.error('Error fetching product data:', error));
    });
  });
});

function displayProducts(category, data) {
  const productContainer = document.getElementById('product-container');
  productContainer.innerHTML = '';
  
  // Iterate over the subcategories
  for (let subcategory in data[category]) {
    data[category][subcategory].forEach(product => {
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
  }
}

function filterProducts(category) {
  const products = document.querySelectorAll('.product');
  products.forEach(product => {
    product.style.display = product.getAttribute('data-category') === category ? 'block' : 'none';
  });
}

document.addEventListener('DOMContentLoaded', () => {
  filterProducts('coffee');
});
