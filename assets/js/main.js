// Menu
jQuery('.mean-menu').meanmenu({
    meanScreenWidth: "1199"
});

// flage
$(document).ready(function() {
    $('#countrySelect').change(function() {
        var selectedFlag = $('option:selected', this).data('flag');
        $('#selected-flag').attr('src', selectedFlag); // Change the flag image
    });
});

// video 
$(document).ready(function () {
    $('.video-play-button').magnificPopup({
        disableOn: 100,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false
    });
});

    // Hero  Slider
    $('.banner-slider-inner').owlCarousel({
        animateOut: "fadeOut",
        animateIn: "fadeIn",
        loop: true,
        dots: true,
        margin: 10,
        nav: false,
        responsive: {
            0: {
                items: 1,
            },
            768: {
                items: 1,
            },
            992: {
                items: 1,
            },
            1200: {
                items:1
            }
        }
    });

    // Testimonial  Slider
    $('.testimonial-slider').owlCarousel({
        loop: true,
        dots: false,
        margin: 10,
        nav: true,
        navText: [
            "<i class='fas fa-arrow-left'></i>",
            "<i class='fas fa-arrow-right'></i>"
        ],
        responsive: {
            0: {
                items: 1,
            },
            768: {
                items: 1,
            },
            992: {
                items: 1,
            },
            1200: {
                items:1
            }
        }
    });

    // instructors  Slider
    $('.instructors-slider').owlCarousel({
        loop: true,
        dots: false,
        margin: 10,
        nav: true,
        navText: [
            "<i class='fas fa-arrow-left'></i>",
            "<i class='fas fa-arrow-right'></i>"
        ],
        responsive: {
            0: {
                items: 1,
            },
            768: {
                items: 2,
            },
            992: {
                items: 3,
            },
            1200: {
                items:4
            }
        }
    });

