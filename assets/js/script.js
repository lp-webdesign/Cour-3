//click on Luxury : show Luxury images
$('.projects__list--luxury').click(function() {
    //remove the current active class on li (color-primary)
    $('.projects__list--active').removeClass('projects__list--active');
    //add the active class on this li (color-primary)
    $(this).addClass('projects__list--active')
    //hide the current active images
    $('.projects__images--active-container').fadeOut().removeClass('projects__images--active-container');
    //show the new images
    $('.projects__images--luxury').addClass('projects__images--active-container').css('display', 'flex').css('justify-content', 'space-between').fadeIn();
    
    console.log('in')
});

//click on Tourism : show Tourism images
$('.projects__list--tourism').click(function() {
    //remove the active class on li (color-primary)
    $('.projects__list--active').removeClass('projects__list--active');
    //add the active class on this li (color-primary)
    $(this).addClass('projects__list--active')
    //hide the current active images
    $('.projects__images--active-container').fadeOut().removeClass('projects__images--active-container');
    //show the new images
    // $('.projects__images--no-active').removeClass('.projects__images--no-active')
    $('.projects__images--tourism').addClass('projects__images--active-container').css('display', 'flex').css('justify-content', 'space-between').fadeIn();
    
    console.log('in')
});

//click on Food : show Food images
$('.projects__list--food').click(function() {
    //remove the active class on li (color-primary)
    $('.projects__list--active').removeClass('projects__list--active');
    //add the active class on this li (color-primary)
    $(this).addClass('projects__list--active')
    //hide the current active images
    $('.projects__images--active-container').fadeOut().removeClass('projects__images--active-container');
    //show the new images
    $('.projects__images--no-active').removeClass('.projects__images--no-active')

    $('.projects__images--food').addClass('projects__images--active-container').css('display', 'flex').css('justify-content', 'space-between').fadeIn();
    console.log('in')
});