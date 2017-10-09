$(document).ready(function(){
    // FORCE START AT TOP
    window.onbeforeunload = function () {
        window.scrollTo(0, 0);
    };

    // OPEN AND CLOSE NAV
    $(".nav-opener").on('click', function(){
        var Nav = $('nav');

        if (Nav.hasClass("menu-Open")) {
            console.log('open');
            Nav.css('left', '-200px');
            Nav.removeClass("menu-Open");
        } else {
            console.log('closed');
            Nav.css('left', '0px');
            Nav.addClass("menu-Open");
        }
    });

    // CLOSE NAV BY CLICKING ON WEBSITE EXEPT FOR NAV
    $("header .content").on('click', function(){
        var Nav = $('nav');

        if (Nav.hasClass("menu-Open")) {
            console.log('open');
            Nav.css('left', '-200px');
            Nav.removeClass("menu-Open");
        }
    });
});