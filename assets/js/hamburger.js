$('.burger-btn').on('click', function () {
    $('.burger-btn').toggleClass('close');
    $('.nav-wrapper').toggleClass('fade');
    $('body').toggleClass('noscroll');
});