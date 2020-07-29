function initMap() {
    var mapProp = {
        center: new google.maps.LatLng(52.923938, -1.2873423),
        zoom: 11,
    };
    var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
    
    // create markers array
    var markers = [];
    
    // push marker(s) to arr
    markers.push(
        new google.maps.Marker({
            position: { lat: 52.929899, lng: -1.28904 },
            map: map,
            title: '3rd Sandiacre',
        }));
    
    markers.push(
        new google.maps.Marker({
            position: { lat: 52.8836833, lng: -1.3025793 },
            map: map,
            title: '1st Sawley'
        }));
    
    
    showAllMarkers(map);
}

function showAllMarkers(map){
    // set the map on all markers in array
    markers.forEach.setMap(map);
}

function hideAllMarkers(){
    showAllMarkers(null);
}

function showMarker(id){

}