/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

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


/***/ }),
/* 1 */
/***/ (function(module, exports) {

window.ParallaxBG = (function() {
	var images;

	function init() {
		images = [].slice.call(document.querySelectorAll('.parallax_section'));
		if(!images.length) { return }

		Gator(window).on('scroll', doParallax);
		Gator(window).on('resize', doParallax);
		doParallax();
	}

	function getViewportHeight() {
		var a = document.documentElement.clientHeight, b = window.innerHeight;
		return a < b ? b : a;
	}

	function getViewportScroll() {
		if(typeof window.scrollY != 'undefined') {
			return window.scrollY;
		}
		if(typeof pageYOffset != 'undefined') {
			return pageYOffset;
		}
		var doc = document.documentElement;
		doc = doc.clientHeight ? doc : document.body;
		return doc.scrollTop;
	}

	function doParallax() {
		var el, elOffset, elHeight,
			offset = getViewportScroll(),
			vHeight = getViewportHeight();

		for(var i in images) {
			el = images[i];
			elOffset = el.offsetTop;
			elHeight = el.offsetHeight;

			if((elOffset > offset + vHeight) || (elOffset + elHeight < offset)) { continue; }

			el.style.backgroundPosition = '50% '+Math.round((elOffset - offset)*3/8)+'px';
		}
	}

	return {
		init: init
	}
})();


/***/ }),
/* 2 */
/***/ (function(module, exports) {

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


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(1);
__webpack_require__(0);
module.exports = __webpack_require__(2);


/***/ })
/******/ ]);