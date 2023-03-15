
function initMap() {
            <!--load external json file-->
            $.getJSON(
                'map.json',
                function(jsonData) {

                    var geocoord = {
                        lat: 38.56,
                        lng: -122.72
                    };

                    var map1 = new google.maps.Map(document.getElementById('mymap'), {
                        center: geocoord,
                        zoom: 2,
                        //map style from snazzymaps
                        styles: [{
                                "featureType": "administrative",
                                "elementType": "labels.text.fill",
                                "stylers": [{
                                    "color": "#444444"
                                }]
                            },
                            {
                                "featureType": "landscape",
                                "elementType": "all",
                                "stylers": [{
                                    "color": "#f2f2f2"
                                }]
                            },
                            {
                                "featureType": "poi",
                                "elementType": "all",
                                "stylers": [{
                                    "visibility": "off"
                                }]
                            },
                            {
                                "featureType": "poi.school",
                                "elementType": "geometry.fill",
                                "stylers": [{
                                        "visibility": "on"
                                    },
                                    {
                                        "hue": "#c200ff"
                                    },
                                    {
                                        "saturation": "6"
                                    },
                                    {
                                        "lightness": "-1"
                                    },
                                    {
                                        "weight": "1.71"
                                    }
                                ]
                            },
                            {
                                "featureType": "poi.school",
                                "elementType": "geometry.stroke",
                                "stylers": [{
                                        "hue": "#d100ff"
                                    },
                                    {
                                        "visibility": "on"
                                    },
                                    {
                                        "lightness": "-13"
                                    },
                                    {
                                        "saturation": "-33"
                                    },
                                    {
                                        "weight": "1.24"
                                    }
                                ]
                            },
                            {
                                "featureType": "poi.school",
                                "elementType": "labels.text.fill",
                                "stylers": [{
                                        "visibility": "simplified"
                                    },
                                    {
                                        "hue": "#b100ff"
                                    },
                                    {
                                        "weight": "1.89"
                                    }
                                ]
                            },
                            {
                                "featureType": "poi.school",
                                "elementType": "labels.text.stroke",
                                "stylers": [{
                                    "saturation": "12"
                                }]
                            },
                            {
                                "featureType": "road",
                                "elementType": "all",
                                "stylers": [{
                                        "saturation": -100
                                    },
                                    {
                                        "lightness": 45
                                    }
                                ]
                            },
                            {
                                "featureType": "road.highway",
                                "elementType": "all",
                                "stylers": [{
                                    "visibility": "simplified"
                                }]
                            },
                            {
                                "featureType": "road.arterial",
                                "elementType": "labels.icon",
                                "stylers": [{
                                    "visibility": "off"
                                }]
                            },
                            {
                                "featureType": "transit",
                                "elementType": "all",
                                "stylers": [{
                                    "visibility": "off"
                                }]
                            },
                            {
                                "featureType": "water",
                                "elementType": "all",
                                "stylers": [{
                                        "color": "#324592"
                                    },
                                    {
                                        "visibility": "on"
                                    }
                                ]
                            },
                            {
                                "featureType": "water",
                                "elementType": "geometry.fill",
                                "stylers": [{
                                        "saturation": "13"
                                    },
                                    {
                                        "visibility": "on"
                                    },
                                    {
                                        "color": "#00afff"
                                    },
                                    {
                                        "lightness": "35"
                                    },
                                    {
                                        "gamma": "1.70"
                                    },
                                    {
                                        "weight": "1.83"
                                    }
                                ]
                            }
                        ]
                    });

                    var markers = [];

                    for (var i = 0; i < jsonData.length; i++) {
                        geocoord = {
                            lat: jsonData[i].lat,
                            lng: jsonData[i].lng
                        };
                        markers[i] = new google.maps.Marker({
                            //set marker position
                            position: geocoord,
                            map: map1,
                            //marker title
                            title: jsonData[i].title,
                            custom_property: jsonData[i].description

                        });
                        markers[i].addListener(
                            'click',
                            function() {
                                var info = new google.maps.InfoWindow({
                                    content: this.custom_property
                                });
                                info.open(map1, this);
                            }
                        );
                    }
                    if (navigator.geolocation) {

                        navigator.geolocation.getCurrentPosition(
                            function(position) {

                                var geocoord2 = {
                                    lat: position.coords.latitude,
                                    lng: position.coords.longitude
                                };


                                var circleMarker = new google.maps.Marker({
                                    position: geocoord2,
                                    icon: {
                                        path: google.maps.SymbolPath.CIRCLE,
                                        scale: 5
                                    },
                                    draggable: false,
                                    map: map1,
                                    title: 'I am here'
                                });

                                circleMarker.addListener(
                                    'click',
                                    function() {
                                        var info = new google.maps.InfoWindow({
                                            content: 'Lat: ' + geocoord2.lat + ' Lng: ' + geocoord2.lng
                                        });
                                        info.open(map1, circleMarker);
                                    }
                                );

                            }
                        );
                    }


                });
        }
