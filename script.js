// Selección de elementos
const menuToggle = document.getElementById('menu-toggle');
const menuDropdown = document.getElementById('menu-dropdown');
const closeMenuButton = document.getElementById('close-menu');
const menuLinks = menuDropdown.querySelectorAll('a');

// Función para abrir el menú
menuToggle.addEventListener('click', () => {
  menuDropdown.classList.add('show');
});

// Función para cerrar el menú
closeMenuButton.addEventListener('click', () => {
  menuDropdown.classList.remove('show');
});

// Cerrar menú al hacer clic en cualquier enlace
menuLinks.forEach(link => {
  link.addEventListener('click', () => {
    menuDropdown.classList.remove('show');
  });
});