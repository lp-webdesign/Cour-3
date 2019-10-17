import $ from "jquery";

export default class Nav {
  constructor() {
    this.name = 'nav';
  }

  init() {
    $(window).bind( "scroll", function() {
        if( $(window).scrollTop() > 0 ) 
            $('header').css('background', '#d33641');
        else
            $('header').css('background', 'transparent');
    });
  }

  btn() {
    $('.hero_btn').bind( "click", function() {
        var articleOffset = $('#articles').offset();
        $('html').animate({scrollTop:articleOffset.top});
    });    
  }
}