const btnMobile = document.getElementById("btn-mobile");

// Função que adiciona a classe active ao nav(menu)
function toggleMenu() {
    const nav = document.getElementById("nav");
    nav.classList.toggle('active');
}

btnMobile.addEventListener('click', toggleMenu);