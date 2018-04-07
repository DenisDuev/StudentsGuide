function myMap() {
    var mapProp= {
        center:new google.maps.LatLng(42.674208, 23.330210),
        zoom:15,
    };
    var map=new google.maps.Map(document.getElementById("googleMap"),mapProp);
}