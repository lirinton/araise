
function main() {

(function () {
   'use strict';
   
  	$('a.page-scroll').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html,body').animate({
              scrollTop: target.offset().top - 40
            }, 900);
            return false;
          }
        }
      });

      $(document).ready(function() {
        // Get the header and navbar elements
        var header = $('header');
        var navbar = $('#nav');
    
        // Calculate the initial offset for the content below the navbar
        var initialOffset = header.height() + navbar.height();
    
        // Set the initial padding for the body
        $('body').css('padding-top', initialOffset);
    
        // Affix the navbar after scroll below the header
        navbar.affix({
            offset: {
                top: header.height()
            }
        });
    
        // Adjust the body padding when the navbar becomes affixed
        navbar.on('affixed.bs.affix', function() {
            $('body').css('padding-top', navbar.height());
        });
    
        // Adjust the body padding when the navbar becomes unaffixed
        navbar.on('affixed-top.bs.affix', function() {
            $('body').css('padding-top', initialOffset);
        });
    });
    

	
  	// Portfolio isotope filter
    $(window).load(function() {
        var $container = $('.portfolio-items');
        $container.isotope({
            filter: '*',
            animationOptions: {
                duration: 750,
                easing: 'linear',
                queue: false
            }
        });
        $('.cat a').click(function() {
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

    });
	

    // Nivo Lightbox 
    $('.portfolio-item a').nivoLightbox({
            effect: 'slideDown',  
            keyboardNav: true,                            
        });
 

}());


}
main();