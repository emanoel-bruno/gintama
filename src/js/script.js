$(document).ready(function () {
  $('.tooltip').tooltipster();
  $('.tooltip').tooltipster({
    theme: 'tooltipster-light',
    delay: 100,
  });
  var waypoint = new Waypoint({
    element: document.getElementsByClassName('js--section-story'),
    handler: function (direction) {
      if (direction == 'down') {
        if ($('nav').hasClass('new-sticky')) {
          $('.new-sticky').removeClass('new-white');
          $('.new-sticky').removeClass('new-sticky');
        }
        $('nav').addClass('sticky clearfix');
        $('.logo').hide();
      } else {
        if ($('nav').hasClass('new-sticky') == false) {
          $('nav').removeClass('sticky clearfix');
        } else {
          $('.new-sticky').addClass('new-white');
        }
        $('.logo').show();
      }
    },
    offset: '8%',
  });

  /* Hand made Scroll */
  $('.js--scroll-to-plans').click(() => {
    $('html, body').animate(
      { scrollTop: $('.js--section-server').offset().top },
      1000
    );
  });

  $('.js--scroll-to-start').click(() => {
    $('html, body').animate(
      { scrollTop: $('.js--section-story').offset().top },
      1000
    );
  });

  /* Smooth scroll Jquery */

  $('.js--go-to-story').click((e) => {
    if ($('nav').hasClass('new-sticky')) {
      atualizarSticky(e);
    }
    $.smoothScroll({
      offset: -40,
      scrollElement: null,
      scrollTarget: '.js--section-story',
    });
    return false;
  });

  $('.js--go-to-steps').click((e) => {
    if ($('nav').hasClass('new-sticky')) {
      atualizarSticky(e);
    }
    $.smoothScroll({
      offset: -40,
      scrollElement: null,
      scrollTarget: '.js--section-steps',
    });
    return false;
  });

  $('.js--go-to-testimonials').click((e) => {
    if ($('nav').hasClass('new-sticky')) {
      atualizarSticky(e);
    }
    $.smoothScroll({
      offset: -40,
      scrollElement: null,
      scrollTarget: '.js--fans-sections',
    });
    return false;
  });

  $('.js--go-to-plans').click((e) => {
    if ($('nav').hasClass('new-sticky')) {
      atualizarSticky(e);
    }
    $.smoothScroll({
      offset: -40,
      scrollElement: null,
      scrollTarget: '.js--section-server',
    });
    return false;
  });

  $('.change-mode').click((e) => {
    atualizarSticky(e);
  });

  /* Animate on Scrool */

  $('.js--wp-features').waypoint({
    handler: function (direction) {
      if (direction == 'down') {
        $('.js--wp-features').addClass('animated fadeIn');
      }
    },
    offset: '60%',
  });

  $('.js--wp-app').waypoint({
    handler: function (direction) {
      if (direction == 'down') {
        $('.js--wp-app').addClass('animated fadeInUp');
      }
    },
    offset: '120%',
  });

  $('.js--wp-cities').waypoint({
    handler: function (direction) {
      if (direction == 'down') {
        $('.js--wp-cities').addClass('animated fadeIn');
      }
    },
    offset: '40%',
  });

  $('.js--wp-saiko').waypoint({
    handler: function (direction) {
      if (direction == 'down') {
        $('.js--wp-saiko').addClass('animated pulse');
      }
    },
    offset: '20%',
  });

  $('.mobile-nav-icon i').click(() => {
    $('nav').addClass('new-sticky clearfix');
    $('nav').removeClass('sticky');
    if ($('.logo').is(':visible')) {
      $('.new-sticky').addClass('new-white');
    }
  });

  atualizarSticky = (e) => {
    $('nav').removeClass('new-sticky');
    if (!$('.logo').is(':visible')) {
      $('nav').addClass('sticky');
    }
  };
});
