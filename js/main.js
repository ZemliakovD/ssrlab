$(function(){
    $('.projects-slider').slick({
      prevArrow: '<button type="button" class="projects-prev"><img src="img/icon/left.svg" alt="Стрэка"></button>',
      nextArrow: '<button type="button" class="projects-next"><img src="img/icon/right.svg" alt="Стрэлка"></button>'
    });

    $('.team-slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
        prevArrow: '<button type="button" class="projects-prev"><img src="img/icon/left.svg" alt="Стрэка"></button>',
        nextArrow: '<button type="button" class="projects-next"><img src="img/icon/right.svg" alt="Стрэлка"></button>',
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              centerMode: true,
              centerPadding: '20px',
              slidesToShow: 2,
            }
          },
          {
            breakpoint: 600,
            settings: {
              centerMode: true,
              centerPadding: '5px',
              slidesToShow: 1,
            }
          },
          {
            breakpoint: 480,
            settings: {
              centerMode: true,
              centerPadding: '8px',
              slidesToShow: 1,
            }
          }
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
        ]
      });

      $('.services-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: false,
        prevArrow: '<button type="button" class="services-prev"></button>',
        nextArrow: '<button type="button" class="services-next"></button>',
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              centerMode: true,
              centerPadding: '20px',
            }
          },
          {
            breakpoint: 320,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }

          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
        ]
      });


      $("#expert").click(function() { // ID откуда кливаем
        $('html, body').animate({
        scrollTop: $(".why").offset().top // класс объекта к которому приезжаем
        }, 1500); // Скорость прокрутки
       });

       $("#uslugi").click(function() { // ID откуда кливаем
        $('html, body').animate({
        scrollTop: $(".services").offset().top // класс объекта к которому приезжаем
        }, 1500); // Скорость прокрутки
       });

       $("#proecti").click(function() { // ID откуда кливаем
        $('html, body').animate({
        scrollTop: $(".projects").offset().top // класс объекта к которому приезжаем
        }, 1500); // Скорость прокрутки
       });

       $("#proect").click(function() { // ID откуда кливаем
        $('html, body').animate({
        scrollTop: $(".projects").offset().top // класс объекта к которому приезжаем
        }, 1500); // Скорость прокрутки
       });

       $("#about").click(function() { // ID откуда кливаем
        $('html, body').animate({
        scrollTop: $(".team").offset().top // класс объекта к которому приезжаем
        }, 1500); // Скорость прокрутки
       });
});