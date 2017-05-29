// JavaScript Document

var map;
    var brooklyn = new google.maps.LatLng(31.716684,131.064653);
    var MY_MAPTYPE_ID = 'Pandy_style';
 
function initialize() {
   
  var featureOpts = [
	{
		"stylers": [
			{ "visibility": "simplified" },
			{ "invert_lightness": true },
			{ "hue": "#00e5ff" }
		]
		},{
		"featureType": "water",
		"stylers": [
			{ "color": "#003d4d" }
		]
	}
];
   
  var mapOptions = {
	scrollwheel: false,
    zoom: 17,
    center: brooklyn,
    mapTypeControlOptions: {
      mapTypeIds: [google.maps.MapTypeId.ROADMAP, MY_MAPTYPE_ID]
    },
    mapTypeId: MY_MAPTYPE_ID
  };
 
   map = new google.maps.Map(document.getElementById('access'),
      mapOptions);
 
 
 
  var image = {
    url : 'http://mono-96.jp/ishida/mono96/images/map.png',
    scaledSize : new google.maps.Size(35, 42)
  } 
	
 
  var marker = new google.maps.Marker({
      position: brooklyn,
      map: map,
      icon:image, 
      title: 'MONO96map'
  });
 
   
  var styledMapOptions = {
   name: 'Pandy Map'
  };
 
var customMapType = new google.maps.StyledMapType(featureOpts, styledMapOptions);
 
  map.mapTypes.set(MY_MAPTYPE_ID, customMapType);
 
}
 
google.maps.event.addDomListener(window, 'load', initialize);
 