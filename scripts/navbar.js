document.addEventListener('DOMContentLoaded', function() {
    // Toggle mobile menu
    const navbarToggle = document.getElementById('navbar-toggle');
    const navbarMenu = document.getElementById('navbar-menu');
    
    if (navbarToggle && navbarMenu) {
        navbarToggle.addEventListener('click', function() {
            navbarMenu.classList.toggle('active');
        });
    }
    
    // Dropdown functionality for mobile
    const productosDropdown = document.getElementById('productos-dropdown');
    const dropdownMenu = document.getElementById('dropdown-menu');
    
    if (productosDropdown && dropdownMenu) {
        productosDropdown.addEventListener('click', function(e) {
            e.preventDefault();
            if (window.innerWidth <= 768) {
                dropdownMenu.classList.toggle('show');
            }
        });
    }
    
    // Search functionality
    const searchButton = document.getElementById('search-button');
    const searchInput = document.getElementById('search-input');
    
    if (searchButton && searchInput) {
        searchButton.addEventListener('click', function() {
            const searchTerm = searchInput.value.trim();
            if (searchTerm) {
                // Aquí puedes implementar la lógica de búsqueda
                console.log('Buscando:', searchTerm);
                // Por ejemplo, redirigir a una página de resultados
                // window.location.href = `/search?q=${encodeURIComponent(searchTerm)}`;
            }
        });
        
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                searchButton.click();
            }
        });
    }
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.navbar') && navbarMenu) {
            navbarMenu.classList.remove('active');
        }
    });
    
    // Close dropdown when clicking outside (mobile)
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.dropdown') && dropdownMenu) {
            dropdownMenu.classList.remove('show');
        }
    });
});
