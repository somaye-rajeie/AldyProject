const swiper = new Swiper('.mySwiper', {
    slidesPerView: 1,
    spaceBetween: 20,
    freeMode: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints:{
        576:{
            slidesPerView:2
        },
        768:{
            slidesPerView:4
        },
        992:{
            slidesPerView:5
        },
        1200:{
            slidesPerView:6
        }
    }
});