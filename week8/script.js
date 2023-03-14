/* Students: Please use this week's project for Week 8: Assignment 8: Class Map. 
     You will need to replace the contents of this JavaScript file with your own work, 
     and create any other files, if any, required for the assignment.
     When you are done, be certain to submit the assignment in both Repl.it and Canvas to be graded. */

"use strict";

// check to see if browser supports geolocation functionality
if (navigator.geolocation) {
  // call browser's method that asks OS for device geocoords
  navigator.geolocation.getCurrentPosition(
    // since the process of getting the geocoords takes some time
    // getCurrentPosition() is given a block of code when geocoords available 
    function(position) {
      // browser gives object value as parameter to our anonymous function
      var pos = {
        lat: position.coords.latitude, // use dot notation to get latitude 
        lng: position.coords.longitude // use dot notation to get longitude 
      };
     let browsergeo = [pos.lat, pos.lng ];
      let mymarker3 = L.marker(browsergeo);
      mymarker3.addTo(mymap);
      mymarker3.bindPopup('<strong>You are here</strong>').openPopup();
      mymarker3.on('click', onMapClick);
    
    }
  );
}

//coordinates
let mycord = [38.43722, -122.721663];
let mycord2 = [38.457375, -122.72932];

//zoom level
let myzoom = 12;

//create map 
let mymap = L.map('map').setView(mycord, myzoom);


//open street map - tile image service
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(mymap);

let mymarker = L.marker(mycord);
let mymarker2 = L.marker(mycord2);


mymarker.addTo(mymap);
mymarker2.addTo(mymap);

mymarker.bindPopup('<strong>Downtown Santa Rosa</strong>').openPopup();


let mycircle = L.circle(
  mycord,
  {
  color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 500
  }
);

mycircle.addTo(mymap);

mycircle.bindPopup('circle popup');

let myshape = L.polygon(
  [
   [38.446195, -122.722263],
[38.436111, -122.731361],
[38.427908, -122.720718]
  ]
);

myshape.addTo(mymap);

let mypopup = L.popup();

function onMapClick(myevent){
  mypopup.setLatLng(myevent.latlng);
  mypopup.setContent(myevent.latlng.toString());
  mypopup.openOn(mymap);
}

function onMarkerClick(){
mymarker.bindPopup('<strong>Downtown Santa Rosa</strong>');
}

//mymap.on('click', onMapClick);
mymarker.on('click', onMarkerClick);
mymarker2.on('click', onMapClick);
