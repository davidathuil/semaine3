// https://leafletjs.com/SlavaUkraini/examples/layers-control/

// var map = L.map('map').setView([43.704, 7.274], 13);
  // var grayscale = L.tileLayer(mapboxUrl, {id: 'MapID', tileSize: 512, zoomOffset: -1, attribution: mapboxAttribution}),
  // streets   = L.tileLayer(mapboxUrl, {id: 'MapID', tileSize: 512, zoomOffset: -1, attribution: mapboxAttribution});



  var map = L.map('map', {
    center: [39.73, -104.99],
    zoom: 10,
    // layers: [grayscale,streets]
});

var layerp=
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    attribution:
      '&copy; <a href="https://openstreetmap.org/copyright">OpenStreetMap contributors</a>',
  }).addTo(map);
 

//  L.marker([48.91,2.5]).addTo(map);

  

 var littleton = L.marker([48.61, 2.02]).bindPopup('This is Littleton, CO.');
      denver    = L.marker([48.74, 2.99]).bindPopup('This is Denver, CO.'),
      aurora    = L.marker([48.73, 2.8]).bindPopup('This is Aurora, CO.'),
      golden    = L.marker([48.77, 2.23]).bindPopup('This is Golden, CO.');
 

    var cities = L.layerGroup([littleton, denver, aurora, golden]);

var overlayMaps = {
  "Cities": cities
};

var layerControl = L.control.layers(overlayMaps).addTo(map);