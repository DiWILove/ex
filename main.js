var swiper = new Swiper('.header__swiper-container', {
    direction: 'vertical',
    speed: 1500,
    loop: true,
    pagination: {
        el: '.header__swiper-pagination',
        clickable: true,
    },
    // autoplay: {
    //     delay: 4000,
    //     disableOnInteraction: false,
    // },
});
let next = ('.news__swiper-button-next');
let prev = ('.news__swiper-button-prev')
var swiper = new newsSwiper('.news__swiper-container', {
    speed: 1500,
    slidesPerView: 3,
    loop: true,
    spaceBetween: 30,
    pagination: {
        el: '.news__swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: next,
        prevEl: prev,
    },
    // autoplay: {
    //     delay: 4000,
    //     disableOnInteraction: false,
    // },
});

var map;
function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 42.3317600, lng: -71.1211600 },
        zoom: 8
    });
}


$(document).ready(function () {
    $("#menu").on("click", "a", function (event) {
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({ scrollTop: top }, 1500);
    });
});
