document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('search-input');
    const searchBtn = document.getElementById('search-btn');
    const productsList = document.getElementById('products-list');
    const modal = document.getElementById('productModal');
    const modalProductName = document.getElementById('modalProductName');
    const modalProductDetails = document.getElementById('modalProductDetails');
    const closeModalBtn = document.querySelector('.close-btn');
    productDetails = window.productDetails;

    function displayProductDetails(product) {
        modalProductName.textContent = product;
        modalProductDetails.innerHTML = '';

        if (productDetails[product]) {
            productDetails[product].forEach(detail => {
                const li = document.createElement('li');
                li.textContent = `${detail.brand} - ${detail.price} no ${detail.market}`;
                modalProductDetails.appendChild(li);
            });
        }

        modal.style.display = "block";
    }

    closeModalBtn.addEventListener('click', function() {
        modal.style.display = "none";
    });

    productsList.addEventListener('click', function(e) {
        if (e.target.tagName === 'LI') {
            displayProductDetails(e.target.textContent);
        }
    });

    function displayProducts(filter = '') {
        productsList.innerHTML = '';
        for (let product in productDetails) {
            if(product.toLowerCase().includes(filter.toLowerCase())) {
                const li = document.createElement('li');
                li.textContent = product;
                productsList.appendChild(li);
            }
        }
    }

    searchBtn.addEventListener('click', function() {
        displayProducts(searchInput.value);
    });

    displayProducts();
});
