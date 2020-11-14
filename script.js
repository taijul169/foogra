$(document).ready(function () {
    // popular-restaurant-slider start
    $('.sileactive').owlCarousel({
        loop: true,
        margin: 5,
        autoPlay:true,
        responsiveClass: true,
        animateOut: 'fadeOut',
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            500: {
                items: 2,
                nav:true
            },
            600: {
                items: 3,
                nav: false
            },
            1000: {
                items: 4,
                nav: true,
                loop: false
               
            }
        }
    });
    // popular-cat-icon-box-slider start
    $('.catActive').owlCarousel({
        loop: true,
        margin: 5,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            500: {
                items: 2,
                nav:true
            },
            600: {
                items: 3,
                nav: false
            },
            1000: {
                items: 4,
                nav: true,
                loop: false
            },
           
        }
    });
    
    // Hero-image-slider-area start----
    var heroSlider = $('.heroSlide');
    
    heroSlider.owlCarousel({
        items: 1,
        loop: true,
        autoplay: false,
        dots:true
    });
    // owl-carousel-caption-animation
    heroSlider.on('changed.owl.carousel', function (event) {
        var item = event.item.index - 2;
        $('.slider-inner-content h2,p').removeClass('animate__animated animate__fadeInDown');
        $('.owl-item').not('.cloned').eq(item).find('.slider-inner-content h2,p').addClass('animate__animated animate__fadeInDown');
         $('.content-cta').removeClass('animate__animated animate__fadeInDown');
        $('.owl-item').not('.cloned').eq(item).find('.content-cta').addClass('animate__animated animate__fadeInDown');
    });
    // Hero-image-slider-area end----
    // sticky nav-area-start
    $(window).scroll(function () {
        var topPosition = $(document).scrollTop();
        if (topPosition > 50) {
            $('.header-all').addClass("fixedNav");
            $('.logo-area h4').css("color", "#000");
            $('.menu-icon i').css("color", "#000");
        }
        else {
            $('.header-all').removeClass("fixedNav");
            // $('.logo-area h4').css("color", "#FFF");
            //  $('.menu-icon i').css("color", "#FFF");
        }
    });
    // sticky-date-picker
    $(".reserve-area").sticky({
        topSpacing: 0,
        bottomSpacing:400
    });
     if ($(window).height() < 575) {
        $(".reserve-area").unstick()
    }
    // order-summury-box
    $("#orderSummury").sticky({
        topSpacing: 0,
        bottomSpacing:400
    });
     if ($(window).height() < 575) {
        $("#orderSummury").unstick()
    }
    // filter-searching-box
      $("#filter-werapper").sticky({
        topSpacing: 0,
        bottomSpacing:400
      });
    if ($(window).height() < 575) {
        $("#filter-werapper").unstick()
    }
    // magnefic popup
    $('.gallerys').magnificPopup({
        type: 'image',
        delegate: 'a',
        gallery: {
      enabled: true
    }
    });
    
    

    // top-scroll-button-active
    $(window).scroll(function () {
        if ($(window).scrollTop() > 200) {
            $(".scroll-top-indicator").fadeIn();
            
        }
        else {
            $(".scroll-top-indicator").fadeOut();
        }
    });
    $(".scroll-top-indicator").click(function () {
        $("html").animate({ scrollTop: 0 },2000);
    });

    // apply-button-scroll
    $('.aplybtn').click(function () {  
        $("html").animate({
            scrollTop: 1400}, 1000);
    });

    // select2-active
     $('.city_rider').select2();
    
    
});

