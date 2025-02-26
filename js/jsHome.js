jQuery(document).ready(function($) {
    var sliderOwl = $('#slider');
    sliderOwl.owlCarousel({
        rtl: false,
        loop: false,
        margin: 0,
        animateOut: 'fadeOut',
        nav: false,
        dots: false,
        rewind: true,
        lazyLoad: true,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        items: 1
    });
    var newsOwl = $('#newsOwl');
    newsOwl.owlCarousel({
        rtl: false,
        loop: false,
        margin: 30,
        nav: true,
        navText: ['<i class="fas fa-arrow-left"></i>', '<i class="fas fa-arrow-right"></i>'],
        rewind: true,
        dots: false,
        lazyLoad: true,
        autoplay: false,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2,
                margin: 10
            },
            1000: {
                items: 2
            }
        }
    });

    var partnerOwl = $('#partnerOwl');
    partnerOwl.owlCarousel({
        rtl: false,
        loop: false,
        margin: 5,
        nav: true,
        navText: ['<img src="images/p-partner.png" alt="Previous" />', '<img src="images/n-partner.png" alt="Next" />'],
        dots: false,
        rewind: true,
        lazyLoad: true,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 2
            },
            414: {
                items: 3
            },
            640: {
                items: 4
            },
            736: {
                items: 5
            },
            1025: {
                items: 7
            }
        }
    });
});
