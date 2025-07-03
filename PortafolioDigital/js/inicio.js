

// Función para mover letras del menú de navegación
function moverLetrasNav() {
    const navLinks = document.querySelectorAll('.main-nav ul li a');
    setInterval(() => {
        navLinks.forEach(link => {
            const randomX = Math.random() * 20 - 10; // Movimiento aleatorio en X (-10px a 10px)
            const randomY = Math.random() * 20 - 10; // Movimiento aleatorio en Y (-10px a 10px)
            link.style.transform = `translate(${randomX}px, ${randomY}px)`;
        });
    }, 5000);
}

// Ejecutar todas las funciones al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    cambiarColorFondo();
    moverLetrasNav();
});

