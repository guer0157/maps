function initMap(){
    //map Options
    var options={
        zoom:8,
        center:{lat:45.4215, lng:-75.6972}
    }
    //New map
    let map = new google.maps.Map(document.getElementById('map'),options);
    
    //with Image
    addMarker({props:{lat:45.3939,lng:-75.6831},
               img:"../img/linkedin.png",
              content:"<h1>Tosca</h1>"})
    //with image
    addMarker({props:{lat:45.4196,lng:-75.6968}
              ,img:"../img/phone.png",
              content:"<h1>Stella Luna</h1>"})
    //without image
    addMarker({props:{lat:45.4188,lng:-75.6968},
              content:"<h1>Ottawa</h1>"})
    
    //Add Marker function
    function addMarker(coords){
        let marker= new google.maps.Marker({
        position:coords.props,
        map:map,
//     this works but it's better to handle
//undefined values before seeting the icon
//        icon:coords.img
    });
    //This will handle any undefined img values.
        //Check for custom icon
        if(coords.img){
            marker.setIcon(coords.img);
        }
       //This will handle any undefined content values.
        //Check for content   
    if(coords.content){
                let infoWindow =new google.maps.InfoWindow({
        content:coords.content
    })
    //make event listenrr and pass map and marker
    marker.addListener("click", function(){
        infoWindow.open(map, marker)
    })        
    }
    }
}