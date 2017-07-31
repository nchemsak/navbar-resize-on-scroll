"use strict";

(function($) {
// jQuery scrolling -  jQuery Easing plugin required
$('a.page-scroll').bind('click', function(event) {
    var $anchor = $(this);
    $('html, body').stop().animate({
        scrollTop: ($($anchor.attr('href')).offset().top - 75)
    }, 1250, 'easeInOutExpo');
    event.preventDefault();
});


// ****************** New scrolling navbar ************************

// fade in .navbar
$(function() {
    $(window).scroll(function() {
        // set scroll distance before fadeIn navbar is added

        if ($(this).scrollTop() > 300) {
            $('#scrollNav').fadeIn(1000);
            $('#firstNav').fadeOut(1000);
        } else {
            $('#scrollNav').fadeOut(1000);
            $('#firstNav').fadeIn(1000);
        }

    });
});

})(jQuery);
