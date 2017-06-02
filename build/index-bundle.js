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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/* no static exports found */
/* all exports used */
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nfunction navbarAnimation() {\n\tif ($(document).scrollTop() < 50) {\n\t\t$('nav').addClass('navPadding');\n\t\t$('nav').removeClass('scrollFunc');\n\t} else {\n\t\t$('nav').removeClass('navPadding');\n\t\t$('nav').addClass('scrollFunc');\n\t}\n}\n\n// content section subtitle animation on scroll\nfunction contentSubtitleAnimation() {\n\n\tvar position = $(document).scrollTop();\n\tvar nav_height = $('nav').outerHeight();\n\n\t$('section').each(function (index, value) {\n\t\tvar top = $(this).offset().top - nav_height - 50;\n\t\tvar bottom = top + $(this).outerHeight();\n\n\t\tif (position >= top && position <= bottom) {\n\t\t\tvar that = $(this);\n\t\t\tthat.children('.title').slideUp(800);\n\t\t\tthat.children('a').fadeIn(100);\n\t\t} else {\n\t\t\tvar _that = $(this);\n\t\t\t_that.children('a').fadeOut('fast', function () {\n\t\t\t\t_that.children('.title').slideDown(400);\n\t\t\t});\n\t\t}\n\t});\n}\n\n$(document).ready(function () {\n\tnavbarAnimation();\n\tcontentSubtitleAnimation();\n\n\t// smooth scrolling\n\t$('a').click(function () {\n\t\tvar $href = $(this).attr('href');\n\t\t$('body').stop().animate({\n\t\t\tscrollTop: $($href).offset().top - 100\n\t\t}, 1000);\n\t\treturn false;\n\t});\n\n\t// navbar animation on scroll\n\t$(window).scroll(function () {\n\t\tnavbarAnimation();\n\t\tcontentSubtitleAnimation();\n\t});\n\n\t// detect scroll position\n\t/*\t\r\n $(window).scroll((event) => {\r\n \t\tvar scroll = $(window).scrollTop();\r\n \t\tconsole.log(scroll);\r\n });\r\n */\n});//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvaW5kZXguanM/MWZkZiJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCdcclxuXHJcbmZ1bmN0aW9uIG5hdmJhckFuaW1hdGlvbigpIHtcclxuXHRpZiAoJChkb2N1bWVudCkuc2Nyb2xsVG9wKCkgPCA1MCkge1xyXG5cdFx0JCgnbmF2JykuYWRkQ2xhc3MoJ25hdlBhZGRpbmcnKTtcclxuXHRcdCQoJ25hdicpLnJlbW92ZUNsYXNzKCdzY3JvbGxGdW5jJyk7XHJcblx0fSBlbHNlIHtcclxuXHRcdCQoJ25hdicpLnJlbW92ZUNsYXNzKCduYXZQYWRkaW5nJyk7XHJcblx0XHQkKCduYXYnKS5hZGRDbGFzcygnc2Nyb2xsRnVuYycpO1xyXG5cdH1cclxufVxyXG5cclxuLy8gY29udGVudCBzZWN0aW9uIHN1YnRpdGxlIGFuaW1hdGlvbiBvbiBzY3JvbGxcclxuZnVuY3Rpb24gY29udGVudFN1YnRpdGxlQW5pbWF0aW9uKCkge1xyXG5cdFxyXG5cdGxldCBwb3NpdGlvbiA9ICQoZG9jdW1lbnQpLnNjcm9sbFRvcCgpO1xyXG5cdGxldCBuYXZfaGVpZ2h0ID0gJCgnbmF2Jykub3V0ZXJIZWlnaHQoKTtcclxuXHJcblx0JCgnc2VjdGlvbicpLmVhY2goZnVuY3Rpb24oaW5kZXgsIHZhbHVlKSB7XHJcblx0XHRsZXQgdG9wID0gJCh0aGlzKS5vZmZzZXQoKS50b3AgLSBuYXZfaGVpZ2h0IC0gNTA7XHJcblx0XHRsZXQgYm90dG9tID0gdG9wICsgJCh0aGlzKS5vdXRlckhlaWdodCgpO1xyXG5cclxuXHRcdGlmIChwb3NpdGlvbiA+PSB0b3AgJiYgcG9zaXRpb24gPD0gYm90dG9tKSB7XHJcblx0XHRcdGxldCB0aGF0ID0gJCh0aGlzKTtcclxuXHRcdFx0dGhhdC5jaGlsZHJlbignLnRpdGxlJykuc2xpZGVVcCg4MDApOyBcclxuXHRcdFx0dGhhdC5jaGlsZHJlbignYScpLmZhZGVJbigxMDApO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0bGV0IHRoYXQgPSAkKHRoaXMpO1xyXG5cdFx0XHR0aGF0LmNoaWxkcmVuKCdhJykuZmFkZU91dCgnZmFzdCcsIGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdHRoYXQuY2hpbGRyZW4oJy50aXRsZScpLnNsaWRlRG93big0MDApO1xyXG5cdFx0XHR9KTsgXHJcblx0XHR9XHJcblx0fSk7XHJcbn1cclxuXHJcblxyXG4kKGRvY3VtZW50KS5yZWFkeSgoKSA9PiB7XHJcblx0bmF2YmFyQW5pbWF0aW9uKCk7XHJcblx0Y29udGVudFN1YnRpdGxlQW5pbWF0aW9uKCk7XHJcblxyXG5cdC8vIHNtb290aCBzY3JvbGxpbmdcclxuXHQkKCdhJykuY2xpY2soZnVuY3Rpb24gKCkge1xyXG5cdFx0dmFyICRocmVmID0gJCh0aGlzKS5hdHRyKCdocmVmJyk7XHJcblx0XHQkKCdib2R5Jykuc3RvcCgpLmFuaW1hdGUoe1xyXG5cdFx0XHRzY3JvbGxUb3A6ICQoJGhyZWYpLm9mZnNldCgpLnRvcCAtIDEwMFxyXG5cdFx0fSwgMTAwMCk7XHJcblx0XHRyZXR1cm4gZmFsc2U7XHJcblx0fSk7XHJcblxyXG5cclxuXHQvLyBuYXZiYXIgYW5pbWF0aW9uIG9uIHNjcm9sbFxyXG5cdCQod2luZG93KS5zY3JvbGwoKCkgPT4ge1xyXG5cdFx0bmF2YmFyQW5pbWF0aW9uKCk7XHJcblx0XHRjb250ZW50U3VidGl0bGVBbmltYXRpb24oKTtcclxuXHR9KTtcclxuXHJcblx0Ly8gZGV0ZWN0IHNjcm9sbCBwb3NpdGlvblxyXG5cdC8qXHRcclxuXHQkKHdpbmRvdykuc2Nyb2xsKChldmVudCkgPT4ge1xyXG5cdFx0XHR2YXIgc2Nyb2xsID0gJCh3aW5kb3cpLnNjcm9sbFRvcCgpO1xyXG5cdFx0XHRjb25zb2xlLmxvZyhzY3JvbGwpO1xyXG5cdH0pO1xyXG5cdCovXHJcbn0pO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2luZGV4LmpzIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUFNQSIsInNvdXJjZVJvb3QiOiIifQ==");

/***/ })
/******/ ]);