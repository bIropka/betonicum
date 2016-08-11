$(document).ready(function () {

    /****************
     ***** init *****
     ****************/

    var myBurger = $('.burger');
    var menuItem = $('nav>ul>li');

    if ($(window).width() > '1180'){
        $('nav>ul').css('display', 'block');
        myBurger.removeClass('active');
    } else {
        $('nav>ul').css('display', 'none');
    }

    $(window).resize(function(){
        if ($(window).width() > '1180'){
            $('nav>ul').css('display', 'block');
            myBurger.removeClass('active');
        } else {
            $('nav>ul').css('display', 'none');
        }
    });

    $(document).click(function() {

        $target = $(event.target);

        if (!$target.closest(menuItem).length){
            $('nav>ul>li>a').removeClass('active');
            $('nav>ul>li>ul').fadeOut();
        }

    });

    /****************
     **** others *****
     ****************/

    myBurger.click(function() {

        $(this).toggleClass('active');
        $('nav>ul').slideToggle();

    });

    menuItem.click(function() {

        alert('hi');

        if($(window).width() < 1181) {

            if($(this).children('a').hasClass('active')) {
                $('nav>ul>li>a').removeClass('active');
                $('nav>ul>li>ul').fadeOut(200);
            } else {
                $('nav>ul>li>a').removeClass('active');
                $('nav>ul>li>ul').fadeOut();
                $(this).children('a').addClass('active');
                $(this).children('ul').stop().fadeIn(200);
            }

        }

    });

    menuItem.hover(function() {

        if($(window).width() > 1180) {
            $(this).children('a').toggleClass('active');
            $(this).children('ul').stop().fadeToggle(200);
        }

    });



    $('.to-first-step').click(function() {
        $(this).parents('.coating-chooser').removeClass('second-step');
        $(this).parents('.coating-chooser').addClass('first-step');
    });
    $('.to-second-step').click(function() {
        $(this).parents('.coating-chooser').removeClass('first-step third-step');
        $(this).parents('.coating-chooser').addClass('second-step');
    });
    $('.to-third-step').click(function() {
        $(this).parents('.coating-chooser').removeClass('second-step');
        $(this).parents('.coating-chooser').addClass('third-step');
    });

    $('.show-coating-chooser').click(function() {
        $('.coating-chooser').addClass('active');
    });
    $('.coating-chooser .close-marker').click(function() {
        $('.coating-chooser').removeClass('active');
    });

    $('.show-map').click(function() {
        $('.on-map').addClass('active');
    });
    $('.to-hide-map').click(function() {
        $('.on-map').removeClass('active');
    });

    $('.years li span').click(function() {
        var currentIndex = $(this).parent('li').index();
        $('.years li').removeClass('active');
        $(this).parent('li').addClass('active');
        $('.year-info li').removeClass('active');
        $('.year-info li').eq(currentIndex).addClass('active');
    });

    $('.tabs-control li').click(function() {
        var currentIndex = $(this).index();
        $('.tabs-control li.active').removeClass('active');
        $(this).addClass('active');
        $('.tabs li.active').removeClass('active');
        $('.tabs li').eq(currentIndex).addClass('active');
    });

    /****************
     **** sliders ***
     ****************/

    $('.slider-header').slick({
        arrows: false,
        dots: true
    });

    $('.slider-news').slick({
        prevArrow: '.slider-control-left-news',
        nextArrow: '.slider-control-right-news',
        slidesToShow: 3,
        slidesToScroll: 1
    });

    $('.slider-products').slick({
        prevArrow: '.slider-control-left-products',
        nextArrow: '.slider-control-right-products',
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1181,
                settings: {
                    slidesToShow: 3
                }
            }
        ]
    });

});