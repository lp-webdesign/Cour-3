

$(document).ready(function(){
	$('.product-image').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.product-media-nav'
    });

    $('.product-media-nav').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '.product-image',
        focusOnSelect: true,
        infinite: false
    });

    $('.dealsDay_countdown_item').after('<hr class="dealsDay_countdown_item_hr" />');

    $(function () {
        $("#rateYo, #rateYo2, #rateYo3, #rateYo4").rateYo({
            normalFill: '#f5f5f5',
            rating: 2,
            ratedFill: '#a4cf41',
            fullStar: true
        });

    });
});
