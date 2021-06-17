$(function () {
    $('.main-slider').slick({
        arrows: false,
        vertical: true,
        dots: true,
        dotsClass: 'main-dots',
        autoplay: 2000,
    });
    $('.rewiews-slider').slick({
        arrows: false,
        dots: true,
        autoplay: 2000,
        slidesToShow: 4,
        slidesToScroll: 4,
        dotsClass: 'rewiews-dots',
        cssEase: 'ease-out',
        speed: 700,
        responsive: [
            {
                breakpoint: 1250,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    dots: true
                }
            },
            {
                breakpoint: 950,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 675,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });
});