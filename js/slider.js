$(document).ready(function (){

let $foto=$(".foto");
let $fotoSlider=$foto.find(".foto-slider");
let $slides=$fotoSlider.find(".slide");

let time = 2000;
let speed = 2000;
let whatMargin = '800px';
let width=-800;
let count=1;
let miniFotosImg=$(".mini-foto-img");
let myInterval;
function startSlide() {
  $(miniFotosImg).removeClass("border");
  count=1;
  $slides[count];
  $(miniFotosImg[count-1]).addClass("border");
  myInterval=setInterval(function () {
    $fotoSlider.animate({"margin-left":"-="+whatMargin},speed,function() {
      $(miniFotosImg[count-1]).removeClass("border");
      // miniFotosImg[count].css("border","1px solid black");
      $(miniFotosImg[count]).addClass("border");
      count++;
      if (count === $slides.length) {
        $(miniFotosImg[0]).addClass("border");
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


miniFotosImg.each(function (fotos) {
  $(this).on("click",function (eve) {
    $fotoSlider.css("margin-left",fotos*width+"px");
    stopSlide();
    startSlide();
  })

})










});
