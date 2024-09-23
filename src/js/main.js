document.addEventListener('DOMContentLoaded', function() {
    $(".toggle-btn").click(function() {
        var answer = $(this).parent().next(".a");
        var questionContainer = $(this).parent().parent(); 

        if (answer.is(":visible")) {
            $(this).text("+");
            questionContainer.css({
                "background-color": "",
                "padding": "" ,
                "border-radius":"",
                "border-bottom":""
                
            });
        } else {
            $(this).text("-");
            questionContainer.css({
                "background-color": "#F8EBE1",
                "border-radius":"10px",
                "border-bottom":"none",
                "padding-bottom":'15px'
            });
        }

        answer.slideToggle(function() {
            if (!answer.is(":visible")) {
                questionContainer.css({
                    "background-color": "",
                    "padding": "" ,
                    "border-radius":"",
                     "border-bottom":""
                });
            }
        });
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const menuIcon = document.querySelector('.menu-icon');
    const header = document.querySelector('header');
     const close = document.querySelector('.menu-icon.close_button');

    menuIcon.addEventListener('click', function() {
        menuIcon.style.display = 'none'
        close.style.display = 'block';
        header.classList.add('menu-open'); // Toggle the "menu-open" class
    });

     close.addEventListener('click', function() {
        menuIcon.style.display = 'block'
        close.style.display = 'none'
        header.classList.remove('menu-open'); // Toggle the "menu-open" class
    });
});



$(document).ready(function(){


      $('.marquee-content,.slider_m,.sec_4_content').slick({
    speed: 8000,
    autoplay: true,
    autoplaySpeed: 0,
    centerMode: false,
    cssEase: 'linear',
    slidesToShow: 1,
    draggable:false,
    focusOnSelect:false,
    pauseOnFocus:false,
    pauseOnHover:false,
    slidesToScroll: 1,
    variableWidth: true,
    infinite: true,
    initialSlide: 1,
    arrows: false,
    buttons: false,
         mobileFirst: true,
    responsive: [
        {
           breakpoint: 1010,
           settings: "unslick"
        }
        ]
  });



$('.owl-carousel').owlCarousel({
    loop:false,
    margin:0,
    nav:true,
    dots:true,
    responsive:{
        0:{
            items:1
        },
        1000:{
            items:1
        }
    },
    navText : [`<img src="images/left.png">`,`<img src="images/right.png">`]
  
  })

});