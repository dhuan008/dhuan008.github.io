$(document).ready(function () {

    $('.sidenav').sidenav();
    $('.materialboxed').materialbox();
    $('.parallax').parallax();
    $('.tabs').tabs();
    $('.datepicker').datepicker({
        //disableWeekends: true,
        yearRange: 1
    });
    $('.tooltipped').tooltip();
    $('.scrollspy').scrollSpy();

    // Scroll back to top
    if ($('#back-to-top').length) {
        var scrollTrigger = 100, // px
            backToTop = function () {
                var scrollTop = $(window).scrollTop();
                console.log(scrollTop);
                if (scrollTop > scrollTrigger) {
                    $('#back-to-top').removeClass('scale-out');
                }
                else {
                    $('#back-to-top').addClass('scale-out');
                }
            };
        backToTop();
        $(window).on('scroll', function () {
            backToTop();
        });

        $('#back-to-top').on('click', function (e) {
            e.preventDefault();
            $('html,body').animate({
                scrollTop: 0
            }, 500);
        });
    }

});