document.addEventListener('DOMContentLoaded', function () {
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.getElementById('lightbox-image');
    const caption = document.getElementById('caption');
    const closeBtn = document.querySelector('.close');
    const thumbnails = document.querySelectorAll('.thumbnail');

    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', function () {
            lightbox.style.display = 'flex';
            lightboxImage.src = this.src;
            caption.innerHTML = this.alt;
        });
    });

    closeBtn.addEventListener('click', function () {
        lightbox.style.display = 'none';
    });

    lightbox.addEventListener('click', function (event) {
        if (event.target === this) {
            lightbox.style.display = 'none';
        }
    });
});
