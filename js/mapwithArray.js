function initMap(){
    //map Options
    var options={
        zoom:12,
        center:{lat:45.4215, lng:-75.6972}
    }

    //New map
    let map = new google.maps.Map(document.getElementById('map'),options);
        /////////////////////////////////////////////////////
    //          Add event listener to map
    ////////////////////////////////////////////////////
    
    google.maps.event.addListener(map, 'click', function(event){
        addMarker({props:event.latLng});
    })
    
    //create array of markers
    var markers=[
        {   id:0,
            props:{lat:45.3931,lng:-75.6831},
            img:{
                url:"../img/phone.png",
                scaledSize: new google.maps.Size(60, 60)
            },
            content:"<h1>Tosca</h1>"
        },
        {   id:1,
            props:{lat:45.4060,lng:-75.6968},
            img:{
                url:"../img/phone.png",
                scaledSize: new google.maps.Size(60, 60)
            },
            content:"<h1>Stella Luna</h1>"
        },
        {   id:2,
            props:{lat:45.4200,lng:-75.6968},
            content:"<h1>Ottawa</h1>"
        }]
    //Add Marker function
    markers.forEach(marker=>{
        console.log(marker.img)
     addMarker(marker)
//        console.log(loop)
    })
    function addMarker(coords){
        let marker= new google.maps.Marker({
        position:coords.props,
        map:map,
        myId:coords.id
//     this works but it's better to handle
//      undefined values before seeting the icon
//      icon:coords.img
    });
    //This will handle any undefined img values.
        //Check for custom icon
        if(coords.img){
            marker.setIcon(coords.img);
        }else{
            console.log('custom marker')
            marker.setIcon("../custom.png")
        }
       //This will handle any undefined content values.
        //Check for content   
    if(coords.content){
        let infoWindow = new google.maps.InfoWindow({
        content:coords.content
    })
    //make event listener and pass map and marker
    marker.addListener("click", function(){
        console.log(marker)
        infoWindow.open(map, marker)
    })
        
    let div=document.querySelectorAll("#card")
    console.log(div)
    div.forEach(markerTarget=>{
    markerTarget.addEventListener("click", function(ev){
        div.forEach(markerOpen=>{
            infoWindow.close(map, marker)
        })
        let dataId=ev.currentTarget.getAttribute("data-id")
        if(dataId==marker.myId){
        infoWindow.open(map, marker)
        }
    })   
    }) 
        
    }
    
    }
}