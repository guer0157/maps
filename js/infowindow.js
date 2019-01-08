var map;

function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    zoom: 11,
    center: {
      lat: -34.800426,
      lng: 143.038494
    }
  });
  setMarkers(map);
}

var markers = [];

// Data for the markers consisting of a name, a LatLng and a zIndex for the
// order in which these markers should display on top of each other.
var stores = [
  ['A', -34.771624, 142.888128, 1],
  ['B', -34.843956, 142.994875, 2],
  ['C', -34.818086, 142.995699, 3],
  ['D', -34.812697, 143.229200, 4],
];

function setMarkers(map) {
  // Adds markers to the map.
  for (var i = 0; i < stores.length; ++i) {
    var store = stores[i];
    var marker = new google.maps.Marker({
      position: {
        lat: store[1],
        lng: store[2]
      },
      map: map,
      animation: google.maps.Animation.DROP,
      title: store[0],
      zIndex: store[3]
    });
    
    var infowindow = new google.maps.InfoWindow({
      content: store[0]
    });
    
    marker.infobox = infowindow;
    
    markers.push(marker);
    
    google.maps.event.addListener(marker, 'click', (function(marker, i) {
      return function() {

        // Close all other infoboxes
        for (var j = 0; j < markers.length; j++) {
          markers[j].infobox.close(map);
        }

        // Open correct info box
        markers[i].infobox.open(map, markers[i]);
      }
    })(marker, i))
  }
}

function openMarker(event) {

  var targetElement = event.currentTarget;
  
  var id = targetElement.getAttribute("data-markerindex");
  
  // Close all other infoboxes
  for (var j = 0; j < markers.length; j++) {
    markers[j].infobox.close(map, markers[j]);
  }

  // Open correct info box
  markers[id].infobox.open(map, markers[id]);
}
    
var clickhandles = document.getElementsByClassName("js-click-store");

for (var i = 0; i < clickhandles.length; i++) {
  clickhandles[i].addEventListener('click', openMarker, false);
}

initMap();