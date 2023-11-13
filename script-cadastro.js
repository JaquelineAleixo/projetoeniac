document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('login-form');
    const productCadastroSection = document.getElementById('product-cadastro-section');
    const productSelect = document.getElementById('product-select');
    const usernameInput = document.getElementById('market-username');
    const passwordInput = document.getElementById('market-password');

    // Usuário e senha fictícios para autenticação
    const AUTH_USERNAME = "mercado";
    const AUTH_PASSWORD = "1";

    // Preencher select de produtos com base na variável productDetails
    for (let product in window.productDetails) {
        const option = document.createElement('option');
        option.value = product;
        option.textContent = product;
        productSelect.appendChild(option);
    }
  
loginForm.addEventListener('submit', function(e) {
    e.preventDefault();
    console.log(`Usuário inserido: ${usernameInput.value}, Senha inserida: ${passwordInput.value}`); // Para depuração
    if (usernameInput.value === AUTH_USERNAME && passwordInput.value === AUTH_PASSWORD) {
        productCadastroSection.style.display = 'block';
        loginForm.style.display = 'none';  // Esconde o formulário de login
    } else {
        alert('Usuário ou senha incorretos!');
    }
});

});
