// console.log('Hello World');
import "./styles/master.scss";
import $ from "jquery";
import '@fortawesome/fontawesome-free/js/fontawesome'
import '@fortawesome/fontawesome-free/js/solid'
import '@fortawesome/fontawesome-free/js/regular'
import '@fortawesome/fontawesome-free/js/brands'

$(document).ready(function() {
    
    $(window).scroll( function(){

        $('.hidden').each( function(){
            
            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            if( bottom_of_window > bottom_of_object ){
                
                $(this).animate({'opacity':'1'},500);
                $(this).css({"animation":"hidden 2s ease"});
                
                    
            }
            
        }); 
    
    });
    
});

$(document).ready(function() {
    $('.hidden_document_ready').animate({'opacity':'1'},500);
    $('.hidden_document_ready').css({"animation":"hidden 2s ease"});
});
