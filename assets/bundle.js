import "./styles/main.scss";
import Slider from "./slider.js" ;
import $ from "jquery";

$(window).bind( "scroll", function() {
    if( $(window).scrollTop() > 0 ) 
        $('header').css('background', '#d33641');
    else
        $('header').css('background', 'transparent');
});

var slider = new Slider();
slider.init();
