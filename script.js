$(document).ready(function() {

    $("#navToggle a").click(function(e){
        e.preventDefault();
        var hidden = $("header > nav").is(":visible")
        $("header > nav").slideToggle();
      // if menu is open, set header height to 100%
      if (hidden) {
        $("header").css("height", "auto");
      }
      else {
          $("header").css("height", "100%"); 
      }

    });
    // this only runs when the menu is open and the nav is visible
    $("header > nav").click(function() {
      if ($(document).width() < 700) {
          $("header > nav").slideToggle();
          $("header").css("height", "auto");
      }
    });
    
   $(window).resize(function() {
    
     if ($(document).width() >= 700) {
       // make the menu visible
       $('header > nav').css('display', 'block');
     }
     else if ($(document).width() < 700) {
       // hide the menu by default when it changes to mobile view
       $('header > nav').css('display', 'none');
     }
   });
  
  
  });