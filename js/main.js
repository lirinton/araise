function main() {
  (function () {
    'use strict';

    // Smooth scrolling for page links
    $('a.page-scroll').click(function () {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top - 40
        }, 900);
        return false;
      }
    });

    // Navbar affix
    $(function () {
      var header = $('header');
      var navbar = $('#nav');

      navbar.affix({
        offset: {
          top: header.height()
        }
      });

      navbar.on('affixed.bs.affix', function () {
        $('body').addClass('affix-body');
      });

      navbar.on('affixed-top.bs.affix', function () {
        $('body').removeClass('affix-body');
      });
    });

    // Portfolio isotope filter
    var $container = $('.portfolio-items');
    $container.isotope({
      filter: '*',
      animationOptions: {
        duration: 750,
        easing: 'linear',
        queue: false
      }
    });

    $('.cat a').click(function () {
      $('.cat .active').removeClass('active');
      $(this).addClass('active');
      var selector = $(this).attr('data-filter');
      $container.isotope({
        filter: selector,
        animationOptions: {
          duration: 750,
          easing: 'linear',
          queue: false
        }
      });
      return false;
    });

    // Nivo Lightbox
    $('.portfolio-item a').nivoLightbox({
      effect: 'slideDown',
      keyboardNav: true
    });
  })();
}

