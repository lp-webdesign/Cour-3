// https://www.pinterest.fr/pin/824932856718798859/
// pseudo git/projet

import "../assets/styles/main.scss";
import $ from "jquery";
import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/regular';
import '@fortawesome/fontawesome-free/js/brands';
import jQueryBridget from "jquery-bridget";
import Flickity from "flickity";

console.log($('body'));

Flickity.setJQuery($);
jQueryBridget('flickity', Flickity, $);

// $('.carousel').flickity({
//     // options
//     groupCells: true
// });