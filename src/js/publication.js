jQuery(document).ready(function(){

  "use strict";
  var mixer = mixItUp('.paper-container', {
    animation: {
      effects: 'fade translateX(100%)',
      reverseOut: true,
      nudge: false // Disable nudging to create a carousel-like effect
    },
    callbacks: {
      onMixStart: function(state, futureState) {
           $('#paper-conference-header').addClass('hide');
      },
      onMixEnd: function(state) {
           $('#paper-conference-header').removeClass('hide');
      }
    },
    load: {
      filter: 'all'
    }
  });
});
