$( document ).ready(function() {
    console.log( "ready!" );
// //click on Luxury : show Luxury images
// $('.projects__list--luxury').click(function() {
//     //remove the current active class on li (color-primary)
//     $('.projects__list--active').removeClass('projects__list--active');
//     //add the active class on this li (color-primary)
//     $(this).addClass('projects__list--active')
//     //hide the current active images
//     $('.projects__images--active-container').fadeOut().removeClass('projects__images--active-container');
//     //show the new images
//     $('.projects__images--luxury').fadeIn().addClass('projects__images--active-container').css('display', 'flex').css('justify-content', 'space-between');
// });

            // WORK BUT REPEATS CODE 
            // SOLUTION 1 => TRYING TO CONVERT AS A FUNCTION

    function projects(projectList, projectImg ){
        //remove the active class on li (color-primary)
        $('.projects__list--active').removeClass('projects__list--active');
        //add the active class on this li (color-primary)
        projectList.addClass('projects__list--active')
        //hide the current active images
        $('.projects__images--active-container').fadeOut().removeClass('projects__images--active-container');
        $('.projects__images--no-active').removeClass('.projects__images--no-active')

        //show the new images
        projectImg.fadeIn().addClass('projects__images--active-container').css('display', 'flex').css('justify-content', 'space-between');   
}


            //TRYING TO RUN FUNCTION

  $(".projects__list--luxury").click(function() {
    projects(luxury_list, luxury_img)
  });

  $(".projects__list--tourism").click(function() {
    projects(tourism_list, tourism_img)
  });

  $(".projects__list--food").click(function() {
    projects(food_list, food_img)
  });




            // VAR DECLARATION

//luxury li
var luxury_list =  $(".projects__list--luxury")
//luxury imgs wrapper
var luxury_img = $('.projects__images--luxury')

//tourism li
var tourism_list =  $(".projects__list--tourism")
//tourism imgs wrapper
var tourism_img = $('.projects__images--tourism')

//food li
var food_list =  $(".projects__list--food")
//food imgs wrapper
var food_img = $('.projects__images--food')

 

        //SOLUTION 2 => TRYING TO USE CLASS 
        //PB: LIST  AND IMG UNDEFINED IN METHOD

// class Projet {
//     constructor (list, img) {
//         this.list = list;
//         this.img = img;

//     }


//      showList () {
//         //click on list (li) : run function
//         $(this.list).click(function() {

//             console.log(this.list)//undefined ??
//             console.log(this.img) //undefined ??
//             //remove the active class on li (color-primary)
//             $('.projects__list--active').removeClass('projects__list--active');
//             //add the active class on this li (color-primary)
//             $(this).addClass('projects__list--active')
//             //hide the current active images
//             $('.projects__images--active-container').fadeOut().removeClass('projects__images--active-container');
//             $('.projects__images--no-active').removeClass('.projects__images--no-active')
            
//             //show the new images
//             $(this).fadeIn().addClass('projects__images--active-container').css('display', 'flex').css('justify-content', 'space-between');
//             console.log('in')
//         });
//     }
 

// }


// const luxury = new Projet(luxury_list, luxury_img)
// const tourism = new Projet(tourism_list, tourism_img)
// const food = new Projet(food_list, food_img)

//     //Doing tests
// console.log(luxury.img) // OK
// console.log(food.img) //OK
// console.log(luxury.list) //OK

//     //Running class methods
// luxury.showList ()
// tourism.showList ()
// food.showList ()

});
