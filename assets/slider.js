import $ from "jquery";
import { ENETUNREACH } from "constants";

export default class Slider {
  constructor() {
    this.name = 'slider';
    this.dots = $('.slider_dot'); 
  }

  init() {
    this.dots.each(function(index) {
      $(this).bind( "click", function() {
        switch(index) {
          case 0:
            $('.hero').css('background-image', 'url("https://images.pexels.com/photos/2098143/pexels-photo-2098143.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")');
            $('.slider_dot').css('opacity', '0.5');
            $(this).css('opacity', '1');
            break;
          case 1:
            $('.hero').css('background-image', 'url("https://images.pexels.com/photos/983299/pexels-photo-983299.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260")');
            $('.slider_dot').css('opacity', '0.5');
            $(this).css('opacity', '1');
            break;
          case 2:
            $('.hero').css('background-image', 'url("https://images.pexels.com/photos/2098085/pexels-photo-2098085.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260")');
            $('.slider_dot').css('opacity', '0.5');
            $(this).css('opacity', '1');
            break;
        }
      });
    });
  }
}