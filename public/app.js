var initialize = function() {
  
  var container = document.getElementById('map');
  var center = {lat: 40.712784 , lng: -74.005941};
  var map = new Map(container, center, 10);
  var init = map.addMarker(center);
  
  map.addClickEvent();
  
  var infoWindowText = "<p>Hello!</p>"
    var infoWindow = map.addInfoWindow(infoWindowText);
    map.addListenerForInfoWindow(infoWindow, init)

    var button = createAndAddButton();
      var clickHandler = function() {
        map.googleMap.setCenter( new google.maps.LatLng(20.377773, -4.246621) );
      }
      button.onclick = clickHandler;
    }

    var createAndAddButton = function() {
      var button = document.createElement( "button" );
      button.classList.add( "moveTo" );
      button.innerText = "Take me to CHICKEN SANDWICH";
      var pButton = document.createElement( "p" );
      pButton.classList.add( "buttonDiv" );
      pButton.appendChild( button );
      var body = document.querySelector( "body" );
      body.appendChild( pButton );
      return button;
    }


window.onload = initialize;