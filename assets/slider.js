import $ from "jquery";

export function slider() {
  var dots = $('.slider_dot'); 
  var urls = ['url("https://images.pexels.com/photos/2098143/pexels-photo-2098143.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")', 
  'url("https://images.pexels.com/photos/983299/pexels-photo-983299.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260")', 
  'url("https://images.pexels.com/photos/2098085/pexels-photo-2098085.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260")'];

  //Dots----------------------------------------------
  dots.each(function(index) {
    $(this).bind( "click", function() {
      dots.css('opacity', '0.5');
      $(this).css('opacity', '1');
      switch(index) {
        case 0:
          $('.hero').css('background-image', urls[index]);
          break;
        case 1:
          $('.hero').css('background-image', urls[index]);
          break;
        case 2:
          $('.hero').css('background-image', urls[index]);
          break;
      }
    });
  });

  //Interval----------------------------------------------
  setInterval(function() {
    dots.css('opacity', '0.5');
    for(var i = 0; i < dots.length; i++) {
      if($('.hero').css('background-image') ==  urls[i]){
        $('.hero').css('background-image', urls[i+1]);
        $(dots[i+1]).css('opacity', '1');
        if(i == 2) {
          $('.hero').css('background-image', urls[0]);
          $(dots[0]).css('opacity', '1');
        };
      };
    };
  }, 3000);
}
