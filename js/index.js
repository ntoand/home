jQuery('#section-skills').one('inview', function (event, visible) {
  console.log(event);
  console.log('Here');
  if (visible == true) {
    console.log("inview");

  }
});

jQuery(document).ready(function(){
  "use strict";

  // particles
  particlesJS.load('particles-js', 'js/particles.json', function() {
    console.log('callback - particles.js config loaded');
  });

  // skillbar
  /*
  jQuery('.skillbar').each(function(){
    jQuery(this).find('.skillbar-bar').animate({
      width:jQuery(this).attr('data-percent')
    },5000);
  });
  */

  $(window).scroll( function(){

    /* Check the location of each desired element */
    jQuery('.skillbar').each( function(i){

      var bottom_of_object = $(this).offset().top + $(this).outerHeight();
      var bottom_of_window = $(window).scrollTop() + $(window).height();

      /* If the object is completely visible in the window, fade it in */
      if( bottom_of_window > bottom_of_object ){

        jQuery(this).find('.skillbar-bar').animate({
          width:jQuery(this).attr('data-percent')
        },2000);

      }

    });

  });


});
