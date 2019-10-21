/* GESTION DES ACTIVE SUR LE MENU */

var top_presentation = $("#hero").height();
var top_rentals = top_presentation + $("#presentation").height();
var top_sales = top_rentals + $("#rentals").height();
var top_team = top_sales + $("#sales").height()

function toggleMenu(step) {

    $(".active").removeClass("active");

    switch (step) {
        case 0:
            $("li.presentation a").removeClass("active");
            break;
        case 1:
            $("li.presentation a").addClass("active");
            break;

        case 2:
            $("li.rentals a").addClass("active");
            break;

        case 3:
            $("li.sales a").addClass("active");
            break;

        case 4:
            $("li.team a").addClass("active");
            break;
    }

}

$(document).scroll((event) => {
    var sc = $(document).scrollTop();

    if (sc <= top_presentation) {
        toggleMenu(0);

    }

    if (sc >= top_presentation && sc <= top_rentals) {
        toggleMenu(1);
    }

    if (sc >= top_rentals && sc <= top_sales) {
        toggleMenu(2);
    }

    if (sc >= top_sales && sc <= top_team) {
        toggleMenu(3);
    }

    if (sc >= top_team) {
        toggleMenu(4);
    }


})


$("#hamburger").click(function () {
    $('nav ul').slideToggle();
})

/* AJOUT DES VUES */

var deja_vue = 0;
var deja_like = 0;

$("article").on('click', function () {

    if (deja_vue == 0) {
        var element = $(this).attr('id');
        var v1 = $("#" + element + " p.view").text();
        var v2 = Number(v1) + 1;
        $("#" + element + " p.view").text(v2)
        deja_vue++;
    }
})

/* AJOUT DES LIKES*/

$("article .data .like").on('click', function () {

    if (deja_like == 0) {
        var l1 = $(this).text();
        var l2 = Number(l1) + 1;
        $(this).text(l2)
        deja_like++


    }
})
