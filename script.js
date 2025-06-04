document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('#destaque img');
    let currentImageIndex = 0;

    function showImage(index) {
        images.forEach((img, i) => {
            if (i === index) {
                img.classList.add('active');
            } else {
                img.classList.remove('active');
            }
        });
    }

    function nextImage() {
        currentImageIndex = (currentImageIndex + 1) % images.length;
        showImage(currentImageIndex);
    }

    // Mostra a primeira imagem imediatamente
    showImage(currentImageIndex);

    // Inicia a transição automática a cada 3 segundos (3000 ms)
    setInterval(nextImage, 3000);
});