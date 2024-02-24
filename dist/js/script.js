$(document).ready(function() {
    $('.list__item').on('click', function(e){   
        e.preventDefault();
        $(this).toggleClass('active');
        $(".list__item").not(this).removeClass("active");
    });
    $('.shrink').on('click', function() {
        $('.header').toggleClass('shrink-menu');
    })
})