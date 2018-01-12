// after complete page load
$(window).load(function() {
  // hide preloader after complete page load
  $('.preloader').animate(
    {
      opacity: 0
    },
    1000,
    function() {
      $(this).addClass('hide');
    }
  );

  // wow.js initialization after complete page load
  new WOW().init();
});


// DOM ready
$(function() {
  // stellar.js - parallax for background images - disabled for mobile and tablet
  if(! /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
   $.stellar({
     verticalOffset: 0,
     horizontalScrolling: false
   });
  }

  // scroll trigger
  var cardNumber = $('.card-number');
  var trigger = new ScrollTrigger(
    {
      toggle: {
  	    visible: '',
  	    hidden: ''
  	   }
    },
    document.body, window
  );

  var scope = {};
  trigger.callScope = scope;
  // animate number counter when scroll triggered
  scope.startCounting = function() { animateNumber() };
  // initial swiper function when scroll triggeres
  scope.initSwiper = function() { initSwiper() };

  // animate number counter function
  function animateNumber() {
    cardNumber.animateNumber(
    {
      number: 92
    },
      5000
    );
  }

  var triggered = true;
  // initialize swiper
  function initSwiper() {
    if (triggered) {
      var mySwiper = new Swiper('.swiper-container', {
        speed: 800,
        initialSlide: 1,
        autoplay: {
          delay: 6000
        }
      });
    triggered = false;
    }

    mySwiper.on('slideChange', function () {
      var activeIndex = this.activeIndex;
      $('.storie-avatar').each(function(index){
        if ($(this).data('active-index') == activeIndex) {
          $(this).removeClass('inactive-avatar');
        } else { $(this).addClass('inactive-avatar'); }
      });
    });
  }



  // mobile navigation
  $('button.hamburger').click(function(e) {
    e.preventDefault();
    if (!$(this).hasClass('is-active')) {
      $(this).addClass('is-active');
      $('.navigation').addClass('slideInRight').removeClass('slideOutRight');
    } else {
      $(this).removeClass('is-active');
      $('.navigation').addClass('slideOutRight').removeClass('slideInRight');
    }
  });

  // prevent default behaviour of links
  $('a[href$="#"]').click(function(e) {
    e.preventDefault();
  });

});
