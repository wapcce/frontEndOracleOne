//arquivo public/js/slider.js
console.log("slider");
$(function(){
    $(".slider").slick( {
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true
    });
});
