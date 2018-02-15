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
/***/ (function(module, exports) {




document.addEventListener('DOMContentLoaded', () => {

});

// mapbox stuff I didn't need...

// L.mapbox.accessToken = 'pk.eyJ1IjoiYWRyaWFuMDgiLCJhIjoiY2pka3U4M2xqMDB5MzM0bXRya3J3ZTR4YiJ9.gqBaJEn_JwtS7LWk8lBwmA';
// var map = L.mapbox.map('map', 'mapbox.comic', {zoomControl: false})
//   .setView([38.0956792, -95.8748384], 5);
//    map.dragging.disable();
//    map.touchZoom.disable();
//    map.doubleClickZoom.disable();
//    map.scrollWheelZoom.disable();
//
// let clevelandMarker = L.marker([41.4993, -81.6944]).addTo(map);
//
// clevelandMarker.on('click', function(e){
//     map.setView(e.latlng, 13);
//     let el = document.getElementById('median-income');
//     // *How to add h1 to a div*
//     // var h1 = document.createElement('H1');
//     // let text = document.createTextNode('Cleveland');
//     // h1.appendChild(text);
//     // el.appendChild(h1);
//     el.classList.remove('hidden')
// });
//
//
//
// let homeButton = L.easyButton('fa-home fa-2x', function(btn, map){
//   map.setView([38.0956792, -95.8748384], 5);
//   document.getElementById('median-income').className = 'hidden'
// }).addTo(map);
//
//
// var clevImage = 'https://media.cntraveler.com/photos/578cf248a3f6784a6a6125e8/master/pass/cleveland-skyline-GettyImages-177524470.jpg',
//     clevImageBounds = [[41.55, -81.814], [41.4490, -81.5756]];
// L.imageOverlay(clevImage, clevImageBounds).addTo(map);
//
// map.on('mousemove', function (e) {
//     document.getElementById('info').innerHTML =
//         // e.point is the x, y coordinates of the mousemove event relative
//         // to the top-left corner of the map
//         JSON.stringify(e.point) + '<br />' +
//         // e.lngLat is the longitude, latitude geographical position of the event
//         JSON.stringify(e.latlng);
// });


/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map