
$(document).ready(function() {

  $('.arrow_up').click(function(){
    $('h1').html('Amplify your <br/> blockchain team');
    $('.header_img').prop('src', 'assets/images/header.png')
    });

  $('.arrow_down').click(function(){
    $('h1').html('Virtual reality <br/> for your project');
    $('.header_img').prop('src', 'assets/images/header2.png')
    });

    $(function(){
  	$('.menuToggle').on('click', function(){
  		$('.menu').slideToggle(300, function(){
  			if($(this).css('display') === 'none'){
  				$(this).removeAttr('style');
  			}
  		});
  	});
  });
});
