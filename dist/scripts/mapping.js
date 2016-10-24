'use strict';
window.MAPPING  = (function () {
    /// -----------------------------------------------------
    /// Variables:
    /// -----------------------------------------------------

    var hereMap,
        googleMap,
        X_COORD,
        Y_COORD,
        zoomLevel,
        circleStyle;

    /// Initial coordinate location (Chicago):
    X_COORD     = 41.89961;
    Y_COORD     = -87.67243;
    zoomLevel   = 13;

    /// If we want the same circle size/styles, we can just define them upfront:
    /// N.b. we could also have created a circle object (c.f. Google Maps example below)
    circleStyle = {
        stroke:     false,      /// disables perimeter
        fillColor:  '#006AFF',  /// color of sector (i.e. entire area)
        fillOpacity: 0.3,
        radius:      800        /// N.b. if we use `.circle()` method, this is in meters, if we use `.circleMaker()` method, this is is pixels.
                                /// The difference is, when the radius is set by meters, the circle 'shrinks' if we zoom out and grows when we zoom in.
                                /// When the radius is in pixels, zooming doesn't affect the circle size on the map.
    };

    /// -----------------------------------------------------
    /// Initialize map
    /// -----------------------------------------------------

    /// Initialize map and set coordinates + zoom level:
    hereMap = L.map('here-map') /// Set id selector of map
               .setView([X_COORD, Y_COORD], zoomLevel);

    /// Set Leaflet URL template for HERE Maps c.f. <https://developer.here.com/news/201602172>
    L.tileLayer(
        'http://{s}.{base}.maps.cit.api.here.com/maptile/2.1/{type}/{mapID}/{scheme}/{z}/{x}/{y}/{size}/{format}?app_id={app_id}&app_code={app_code}&lg={language}',
        {
            attribution:'all hail Dee | <a href="http://developer.here.com">HERE</a>',     /// N.b. we can turn off Leaflet attributions <http://leafletjs.com/reference.html#control-attribution>
            subdomains: '1234',
            base:       'base',
            type:       'maptile',
            scheme:     'pedestrian.day',
            app_id:     'LYBuzdgM3acdB6lQ3di3',       /// add your app id here (do we want to expose app_id to client?)
            app_code:   '6KqoxqRAamfrWU2GrlK4DQ',     /// add your app code here (do we want to expose app_code to client?)
            mapID:      'newest',
            maxZoom:    20,
            language:   'eng',
            format:     'png8',
            size:       '256'
        }
    ).addTo(hereMap);                                 /// add map object to HTML

    /// -----------------------------------------------------
    /// Draw on map:
    /// -----------------------------------------------------

    /// Create a new pin (Leaflet refers to pins as "marker") (in this case, at the same location as map initialization coordinates):
    L.marker([X_COORD, Y_COORD], zoomLevel
    ).addTo(hereMap);
    
    /// Create a Circle (once again, on the same coordinates as before):
    /// N.b. Alternatively, we could have used `.circleMaker()` <http://leafletjs.com/reference.html#circlemarker>
    L.circle(
        [X_COORD, Y_COORD],     /// set center
        circleStyle             /// we passed our pre-defined circle styles
    ).addTo(hereMap);


    /// -----------------------------------------------------
    /// Now for Google Maps:
    /// -----------------------------------------------------
    /// api key = AIzaSyA40OTss26xMH1RD5iXxFFCK5aHEGEhwUY
  
    /// Initialize map:
    googleMap = L.map('google-map')
                 .setView([X_COORD, Y_COORD], zoomLevel);

    /// Notice I'm using a Leaflet plugin: Google Mutant <https://gitlab.com/IvanSanchez/Leaflet.GridLayer.GoogleMutant>
    L.gridLayer.googleMutant({
        type:         'roadmap',        /// valid values are 'roadmap', 'satellite', 'terrain' and 'hybrid'
        attribution:  false
    }).addTo(googleMap);

    /// Create pin (notice the API is same as for HERE):
    L.marker([X_COORD, Y_COORD], zoomLevel
    ).addTo(googleMap);

    L.circle(
      [X_COORD, Y_COORD],     /// set center
      circleStyle             /// we passed our pre-defined circle styles
    ).addTo(googleMap);
})();

