$(document).ready(function (){

///////////////////////////
$(".about").click(function (){
   $('html, body').animate({
     scrollTop: $('#about').offset().top
}, 500, 'linear');
});
///////////////////////////
$(".work").click(function (){
   $('html, body').animate({
     scrollTop: $('#work').offset().top
}, 500, 'linear');
});
//////////////////////////
$(".contact").click(function (){
   $('html, body').animate({
     scrollTop: $('#contact').offset().top
}, 500, 'linear');
});
///////////////////////////
$(".galery").click(function (){
   $('html, body').animate({
     scrollTop: $('#foto-section').offset().top
}, 500, 'linear');
});



});
