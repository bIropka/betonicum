$(document).ready(function () {

    $('.burger').click(function() {
        $(this).toggleClass('active');
        $('nav ul').slideToggle();
    });

    /****************
     **** sliders ***
     ****************/

    $('.slider-header').slick({
        arrows: false,
        dots: true
    });
});