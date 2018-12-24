$(document).ready(function () {
    $('#slides').superslides({
        animation: 'fade',
        play: 5000,
        pagination: false,
        nav: '.slides-navigation',
    });

    var typed = new Typed(".typed", {
        strings: ["Front-End Developer.", "Web Design.", "Student."],
        typeSpeed: 70,
        loop: true,
        startDelay: 1000,
        showCursor: false
    });
});
