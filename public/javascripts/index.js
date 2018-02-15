


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
