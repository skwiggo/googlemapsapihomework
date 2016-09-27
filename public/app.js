var initialize = function() {
  
  var container = document.getElementById('map');
  var center = {lat: 40.712784 , lng: -74.005941};
  var map = new Map(container, center, 10);
  var init = map.addMarker(center);
  
  map.addClickEvent();
  
  var infoWindowText = "<p>Hello!</p>"
    var infoWindow = map.addInfoWindow(infoWindowText);
    
    map.addListenerForInfoWindow(infoWindow, init)

    var button = createButton();
    
    var clickHandler = function() {
        map.googleMap.setCenter( new google.maps.LatLng(50.377773, -74.246621) );
      }

       button.onclick = clickHandler;
    }

    var createButton = function() {
      var button = document.createElement("button");
      button.classList.add("moveTo");
      button.innerText = "Take me to CHICKEN SANDWICH";
      var chickenSandwich = document.createElement("p");
      chickenSandwich.classList.add("buttonDiv");
      chickenSandwich.appendChild(button);
      var body = document.querySelector("body");
      body.appendChild(chickenSandwich);
      return button;
    }


window.onload = initialize;