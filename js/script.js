$(document).ready(function() {
    $('.design__slider').slick({
        dots: false,
        slidesToShow: 4,
        variableWidth: true,
        prevArrow: '<img src="/img/slider/02.png" alt="arrow" class="arrow arrow__left">',
        nextArrow: '<img src="/img/slider/01.png" alt="arrow" class="arrow arrow__right">',
        responsive: [
            {
                breakpoint: 361,
                settings: {
                    variableWhidth: false,
                    slidesToShow: 1,
                    
                }
            }
        ]
    });
});