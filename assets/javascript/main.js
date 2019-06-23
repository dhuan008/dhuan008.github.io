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
        // Check and scale button in or out
        var scrollTrigger = 100, // px
            backToTop = function () {
                var scrollTop = $(window).scrollTop();
                if (scrollTop > scrollTrigger) {
                    $('#back-to-top').removeClass('scale-out');
                }
                else {
                    $('#back-to-top').addClass('scale-out');
                }
            };
        // Call on start to hide button
        backToTop();

        // Call backtotop when window scrolled
        $(window).on('scroll', function () {
            backToTop();
        });

        // When button clicked move to top in 500ms
        $('#back-to-top').on('click', function (e) {
            e.preventDefault();
            $('html,body').animate({
                scrollTop: 0
            }, 500);
        });
    }

});