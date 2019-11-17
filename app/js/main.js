$(document).ready(function(){
    $('.quote-slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        centerPadding: '60px',
    });







    window.onscroll = function showHeader() {
        var header = document.querySelector('.top-nav');
        if(window.pageYOffset > 200){
            header.classList.add('header_fixed');
        } else{
            header.classList.remove('header_fixed');
        }
    }
});