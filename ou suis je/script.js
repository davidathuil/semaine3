

function Ousuis(){
  navigator.geolocation.getCurrentPosition(function (position) {
    let lat=position.coords.latitude;
    let long=position.coords.longitude;
    let accuracy=position.coords.accuracy;
    console.log(accuracy);
    let Coord = document.getElementById("Coordonee");   
    let plat = document.createElement("p");         
    plat.innerText = "ma latitude " + lat;
    Coord.appendChild(plat);
    let plong = document.createElement("p");   
    plong.innerText = "ma long "+long;
    Coord.appendChild(plong); 
  
  

map.flyTo([lat, long], 15);
L.circle([lat, long], accuracy).addTo(map);
alert("tu es à "+(map.distance([lat, long], [latl,lngl]))+"km");
// map.flyTo([latl,lngl], 15);
});

};



function Sauv(){
  alert('2')
  navigator.geolocation.getCurrentPosition(function (position) {
    let lat=position.coords.latitude;
    let long=position.coords.longitude;
  
  localStorage.setItem("lat",lat);
  localStorage.setItem("long",long);
  console.log(localStorage);

  
});

};



function AffichLocal(){

  let localStorageNamelat = localStorage.getItem("lat");
  let localStorageNamelong = localStorage.getItem("long");
  
  alert(localStorageNamelat);
  alert(localStorageNamelong);
  let site="https://www.openstreetmap.org/#map=15/"+localStorageNamelat+"/"+localStorageNamelong;
  
  console.log(site);
  
window.open(site, '_blank');
};

function ClearL(){
  alert('4')
  localStorage.clear();
;
};

console.log(localStorage);

var map = L.map('map').setView([48.8537, 2.3466], 16);




  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    attribution:
      '&copy; <a href="https://openstreetmap.org/copyright">OpenStreetMap contributors</a>',
  }).addTo(map);
 L.marker([localStorage.getItem("lat"),localStorage.getItem("long")]).addTo(map);

  

 var littleton = L.marker([48.61, 2.02]).bindPopup('This is Littleton, CO.');
      denver    = L.marker([48.74, 2.99]).bindPopup('This is Denver, CO.'),
      aurora    = L.marker([48.73, 2.8]).bindPopup('This is Aurora, CO.'),
      golden    = L.marker([48.77, 2.23]).bindPopup('This is Golden, CO.');
 
      var latl = littleton.getLatLng().lat; 
    var lngl = littleton.getLatLng().lng;

    var cities = L.layerGroup([littleton, denver, aurora, golden]);