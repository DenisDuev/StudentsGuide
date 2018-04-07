function myMap() {
    var uluru = {lat: 42.674208, lng: 23.330210};
    var mapProp= {
        center:uluru,
        zoom:15
    };
    var map=new google.maps.Map(document.getElementById("googleMap"),mapProp);
    var marker = new google.maps.Marker({
        position: uluru,
        map: map
    });
}