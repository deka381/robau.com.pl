$(document).ready(function (){

let $foto=$(".foto");
let $fotoSlider=$foto.find(".foto-slider");
let $slides=$fotoSlider.find(".slide");

let time = 3000;
let speed = 1500;
let whatMargin = '800px';
let width=-800;
let count=1;
let myInterval;
function startSlide() {
  myInterval=setInterval(function () {
    $fotoSlider.animate({"margin-left":"-="+whatMargin},speed,function() {
      count++;
      if (count === $slides.length) {
        count=1;
        $fotoSlider.css("margin-left",0);
      }
    });
  },time)
}
function stopSlide() {
  clearInterval(myInterval);
}

$fotoSlider.on("mouseleave",startSlide).on("mouseenter",stopSlide);

startSlide();

let miniFotosImg=$(".mini-foto-img");

miniFotosImg.each(function (fotos) {
  $(this).on("click",function (eve) {
    $fotoSlider.css("margin-left",fotos*width+"px");
    console.log(fotos*width+"px");
  })

})










});
