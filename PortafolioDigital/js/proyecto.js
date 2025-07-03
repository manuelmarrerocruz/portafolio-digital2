// Cambiar color de fondo suavemente cada 10 segundos
const colors = ["#f4f4f4", "#d1e8e2", "#ffcccb", "#fef4c5", "#d3d3f3"];
let colorIndex = 0;

function changeBackgroundColor() {
    document.body.style.backgroundColor = colors[colorIndex];
    colorIndex = (colorIndex + 1) % colors.length;
}

setInterval(changeBackgroundColor, 10000);

// Interactividad de las imágenes (rotación ya está manejada con CSS al hover)
document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', () => {
        card.classList.toggle('flipped');
    });
});
