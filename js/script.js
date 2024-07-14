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

const backgrounds = [
  {
    image: 'images/hero.jpg',
    title: 'Kavna Storitev Gostinske Storitve in Dobava Kave',
    subtitle: 'Najboljša kavna storitev v mestu. Ponujamo gostinske storitve in dobavo kave.'
  },
  {
    image: 'images/hero2.jpg',
    title: 'Najbolj Kvalitetna Kava',
    subtitle: 'Izberite med široko paleto kavnih zrn najvišje kvalitete.'
  },
  {
    image: '/perosa/images/skupaj-produkti/IMG_0137.jpg',
    title: 'Sveža in Okusna Kava',
    subtitle: 'Okusite svežino in aromo vsake skodelice kave, ki jo pripravimo za vas.'
  }
];

let currentBackgroundIndex = 0;

function switchBackground() {
  const heroSection = document.getElementById('hero');
  const heroTitle = document.getElementById('hero-title');
  const heroSubtitle = document.getElementById('hero-subtitle');
  heroSection.classList.add('fade-out');
  heroTitle.classList.add('fade-out');
  heroSubtitle.classList.add('fade-out');

  setTimeout(() => {
    currentBackgroundIndex = (currentBackgroundIndex + 1) % backgrounds.length;
    const background = backgrounds[currentBackgroundIndex];
    heroSection.style.backgroundImage = `url('${background.image}')`;
    heroTitle.textContent = background.title;
    heroSubtitle.textContent = background.subtitle;

    heroSection.classList.remove('fade-out');
    heroTitle.classList.remove('fade-out');
    heroSubtitle.classList.remove('fade-out');
  }, 500);
}

setInterval(switchBackground, 5000);