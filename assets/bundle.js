// console.log('Hello World');
// https://www.pinterest.fr/pin/824932856718798859/
// pseudo git/projet
//https://stevenwestmoreland.com/2018/01/how-to-include-bootstrap-in-your-project-with-webpack.html

import "../assets/styles/main.scss";
import $ from "jquery";
import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/regular';
import '@fortawesome/fontawesome-free/js/brands';
import Flickity from "flickity";
// import '../assets/styles/variables.scss';

console.log($('body'));

$('.main-carousel').flickity({
    // options
    cellAlign: 'left',
    contain: true,
    groupCells: true
});