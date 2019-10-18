import $ from "jquery";

export function nav() {
  //header
  $(window).bind( "scroll", function() {
      if( $(window).scrollTop() > 0 ) 
          $('header').css('background', '#d33641');
      else
          $('header').css('background', 'transparent');
  });

  //home-btn
  $('.hero_btn').bind( "click", function() {
    var articleOffset = $('#articles').offset();
    $('html').animate({scrollTop:articleOffset.top}, 0);
  });  
}