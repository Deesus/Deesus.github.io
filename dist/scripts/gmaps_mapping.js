'use strict';
window.GMAPS_MAPPING  = (function () {
    /// For official documentation c.f. <http://hpneo.github.io/gmaps/documentation.html>
    /// For examples c.f. official tutorials at <http://hpneo.github.io/gmaps/examples.html>

    /// -----------------------------------------------------
    /// Variables:
    /// -----------------------------------------------------
    
    var LATITUDE,
        LONGITUDE,
        zoomLevel,
        projectName,
        radius,
        map1,
        map2,
        map3,
        map4;

        /// initial coordinate location (Chicago):
        LATITUDE    = 41.89961;
        LONGITUDE   = -87.67243;
        zoomLevel   = 13;
        radius      = 800;

    projectName = 'Manhattan Project';
    /// -----------------------------------------------------
    /// Create a basic map:
    /// -----------------------------------------------------
    map1 = new GMaps({          /// we create a new map object
        div: '#map-basic',      /// ID selector
        lat: LATITUDE,
        lng: LONGITUDE,
        zoom: zoomLevel
    });

    /// -----------------------------------------------------
    /// Create custom pins:
    /// -----------------------------------------------------
    /// let's create a new map again:
    map2 = new GMaps({
        div: '#map-draw',
        lat: LATITUDE,
        lng: LONGITUDE,
        zoom: zoomLevel
    });

    /// define pin and add to map object:
    map2.addMarker({
        lat: LATITUDE,                                      /// N.b. pin doesn't need to be same coordinates as map object
        lng: LONGITUDE,
        title: 'location of project ' + projectName,        /// title displayed on mouseover
        click: function(e) {                                /// optional click event (if pin is clicked)
            alert('you clicked on my pin----you bastard!');
        }
    });

    /// Batch markers:
    /// we could create marker objects:
    var redMarker = {
        lat: LATITUDE + 0.001,
        lng: LONGITUDE + 0.0005 ,
        color: 'red',
        title: 'I am red'
    };

    /// -----------------------------------------------------
    /// Create polygons and circles:
    /// -----------------------------------------------------
    
    map2.drawCircle({
        lat: LATITUDE,          /// define center
        lng: LONGITUDE,         /// define center
        radius: radius,         /// in meters
        fillColor: '#006AFF',   /// color of sector (i.e. entire area)
        fillOpacity: 0.5,       /// range: 0-1
        strokeWeight: 0         /// stroke = outline/perimeter; setting it to 0 disables a perimeter

        /// N.b. we have other options like click events, etc. C.f. official documentation.
    });


    /// -----------------------------------------------------
    /// Custom Markers + batch markers:
    /// -----------------------------------------------------
    /// let's create a new map again:
    map3 = new GMaps({
        div: '#map-custom-icon',
        lat: LATITUDE,
        lng: LONGITUDE,
        zoom: zoomLevel
    });

    /// We can create custom icon marker:
    var customRedIcon = {
        icon: 'http://leafletjs.com/examples/custom-icons/leaf-red.png',        /// source of image
        shadow: 'http://leafletjs.com/examples/custom-icons/leaf-shadow.png',   /// shadow
        lat: LATITUDE - 0.001,
        lng: LONGITUDE - 0.005
    };

    var customGreenIcon = {
        icon: 'http://leafletjs.com/examples/custom-icons/leaf-green.png',        /// source of image
        shadow: 'http://leafletjs.com/examples/custom-icons/leaf-shadow.png',   /// shadow
        lat: LATITUDE + 0.001,
        lng: LONGITUDE + 0.001
    };

    /// 
    map3.addMarkers( [customRedIcon, customGreenIcon] );
})();
