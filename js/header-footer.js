$(document).ready(function() {

  $( "#header" ).load( "header.html", function() {
    $("#bars-icon").on("click", function() {
      $("#mobile-nav").toggleClass("open");
    });
  } );

  $( "#footer" ).load( "footer.html" );

});
