document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll('.hero, .services, .about');
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.5
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    sections.forEach(section => observer.observe(section));

    // === SWIPER CARRUSEL ===
    new Swiper(".swiper-container", {
        slidesPerView: 3,       // cuántas se ven
        spaceBetween: 2,        // muy poquito espacio
        centeredSlides: true,   // siempre centradas
        loop: true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        breakpoints: {
            1024: { slidesPerView: 3, spaceBetween: 2 },
            768:  { slidesPerView: 2, spaceBetween: 2 },
            480:  { slidesPerView: 1, spaceBetween: 2 }
        },
    });
});