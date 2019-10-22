//click on Luxury : show Luxury images
$('.projects__list--luxury').click(function() {
    //remove the current active class on li (color-primary)
    $('.projects__list--active').removeClass('projects__list--active');
    //add the active class on this li (color-primary)
    $(this).addClass('projects__list--active')
    //hide the current active images
    $('.projects__images--active-container').fadeOut().removeClass('projects__images--active-container');
    //show the new images
    $('.projects__images--luxury').fadeIn().addClass('projects__images--active-container').css('display', 'flex').css('justify-content', 'space-between');
    
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
    $('.projects__images--tourism').fadeIn().addClass('projects__images--active-container').css('display', 'flex').css('justify-content', 'space-between');
    
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

    $('.projects__images--food').fadeIn().addClass('projects__images--active-container').css('display', 'flex').css('justify-content', 'space-between');
    console.log('in')
});



// function projects(y){
//         var y = this.getElementsByClassName;
//         console.log(y)
//         //remove the active class on li (color-primary)
//         $('.projects__list--active').removeClass('projects__list--active');
//         //add the active class on this li (color-primary)
//         $(this).addClass('projects__list--active')
//         //hide the current active images
//         $('.projects__images--active-container').fadeOut().removeClass('projects__images--active-container');
//         //show the new images
//         $('.projects__images--no-active').removeClass('.projects__images--no-active')
    
//         y.fadeIn().addClass('projects__images--active-container').css('display', 'flex').css('justify-content', 'space-between');
//         console.log('in')
   
// }

// $('.projects__list--tourism').click(projects(this))
