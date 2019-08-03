window.addEventListener('DOMContentLoaded', (event) => {

    //Scroll Down and Up
    let landingPage = document.querySelector('.landing');
    let scrollDown = document.querySelector('.scroll');
    let duoo = document.querySelector('.dos');
    let goTop = document.querySelector('#top');

    scrollDown.addEventListener('click', () => {
        landingPage.classList.add("hide");
        duoo.classList.remove("hide");
    });

    goTop.addEventListener('click', () => {
        duoo.classList.add('hide');
        landingPage.classList.remove("hide");
    })

    //Owl Carousel
    $(".owl-carousel").owlCarousel({
        loop:true,
        margin:10,
        autoplay:true,
        autoplayTimeout:4000,
        autoplayHoverPause:true,
        items:1
    });
    $('.play').on('click',function(){
        owl.trigger('play.owl.autoplay',[1000])
    })
    $('.stop').on('click',function(){
        owl.trigger('stop.owl.autoplay')
    })
});


