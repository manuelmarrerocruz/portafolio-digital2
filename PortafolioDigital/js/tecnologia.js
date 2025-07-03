document.addEventListener("DOMContentLoaded", () => {
    const imageContainer = document.querySelector(".image-container");

    function shuffleImages() {
        const images = Array.from(imageContainer.children);
        // Mezcla las imágenes usando el algoritmo de Fisher-Yates
        for (let i = images.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [images[i], images[j]] = [images[j], images[i]];
        }
        // Vacía el contenedor y vuelve a agregar las imágenes en el nuevo orden
        imageContainer.innerHTML = "";
        images.forEach(img => imageContainer.appendChild(img));
    }

    // Llama a la función para reorganizar al cargar la página
    shuffleImages();

    // Reorganiza las imágenes cada 10 segundos
    setInterval(shuffleImages, 10000);
});
