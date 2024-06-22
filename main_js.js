
    window.addEventListener('scroll', function() {
        var header = document.querySelector('.header');
        if (window.scrollY > 10) { 
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    document.addEventListener('DOMContentLoaded', function () {
        new Swiper('.swiper', {
            slidesPerView: 'auto', // Adjust based on how many slides you want to show
            spaceBetween: 0.005,
            slidesPerGroup: 5,
            freeMode: true,
            speed: 500,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            loop: true, // Loop through slides
            centeredSlides: false,
        });
    });

    

