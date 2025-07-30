const navLinks = document.querySelectorAll(".nav-menu .nav-link");
const menuOpenButton = document.getElementById("menu-open-button");
const menuCloseButton = document.getElementById("menu-close-button");

menuOpenButton.addEventListener('click' ,function(){
    document.body.classList.toggle("show-mobile-menu");
});

menuCloseButton.addEventListener('click' ,function(){
    menuOpenButton.click()
});

//menu closed when the nav link is clicked
navLinks.forEach(link => {
    link.addEventListener('click', function(){
        menuOpenButton.click()
    })
});

const swiper = new Swiper('.slider-wrapper', {
    loop: true,
    spaceBetween: 25,
    grabCursor: true,

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },

    // Responsive
    breakpoints: {
        0: {
            slidesPerView: 1
        },
        768: {
            slidesPerView: 2
        },
        1024: {
            slidesPerView: 3
        }
    }
});