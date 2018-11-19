//AIzaSyDf8Rb7CQf68vcyOs00I_oQu22gHYRKfMQ
function initMap(){
    //map Options
    var options={
        zoom:8,
        center:{lat:45.4215, lng:-75.6972}
    }
    //New map
    let map = new google.maps.Map(document.getElementById('map'),options);
    // add marker
    var marker= new google.maps.Marker({
        position:{lat:45.4188,lng:-75.6968},
        map:map,
        icon:"../img/linkedin.png"
    })
    let infoWindow =new google.maps.InfoWindow({
        content:"<h1>Tosca</h1>"
    })
    //make event listenrr and pass map and marker
    marker.addListener("click", function(){
        infoWindow.open(map, marker)
    })
}