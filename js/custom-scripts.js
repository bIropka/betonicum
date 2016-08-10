$(document).ready(function () {

    /****************
     ***** init *****
     ****************/

    if ($(window).width() > '1180'){
        $('nav>ul').css('display', 'block');
        $('.burger').removeClass('active');
    } else {
        $('nav>ul').css('display', 'none');
    }

    $(window).resize(function(){
        if ($(window).width() > '1180'){
            $('nav>ul').css('display', 'block');
            $('.burger').removeClass('active');
        } else {
            $('nav>ul').css('display', 'none');
        }
    });

    $(document).click(function() {

        $target = $(event.target);

        if (!$target.closest($('nav>ul>li')).length){
            $('nav>ul>li>a').removeClass('active');
            $('nav>ul>li>ul').fadeOut();
        }

    });

    /****************
     **** others *****
     ****************/

    $('.burger').click(function() {

        $(this).toggleClass('active');
        $('nav>ul').slideToggle();

    });

    $('nav>ul>li').hover(function() {

        if($(window).width() > 1180) {
            $(this).children('a').toggleClass('active');
            $(this).children('ul').stop().fadeToggle(200);
        }

    });
    $('nav>ul>li').click(function() {

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

    /****************
     **** sliders ***
     ****************/

    $('.slider-header').slick({
        arrows: false,
        dots: true
    });
});