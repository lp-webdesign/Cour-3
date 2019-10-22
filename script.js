$(function(){
  let main = $('#main')
  let width = main.width()
  let height = main.height()

  let rectangle = $('.rectangle')

  rectangle.mouvement = function(){
    rectangle.offset({
      top: Math.floor(Math.random() * (height - rectangle.height() ) ),
      left: Math.floor(Math.random() * (width - rectangle.width() ) )
    })
  }

  setInterval(function(){
    rectangle.mouvement()
  }, 1000)

let curseur = $('.curseur')

  main.mousemove(function(event){
    console.log(event);
    curseur.offset({
      top : event.pageY - curseur.height()/2,
      left : event.pageX - curseur.width()*.5
    })
  })

  rectangle.mouseenter(function(e){

    rectangle.addClass('anime')
  }).mouseleave(function(){
    rectangle.removeClass('anime')
  })
})
