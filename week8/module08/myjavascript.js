        function initMap() {

            //center geocoords
            var geocoord1 = {
                lat: 38.4551974,
                lng: -122.7223304
            };

            //center geocoords
            var geocoord2 = {
                lat: 38.4521914,
                lng: -122.7205513
            };

            //center geocords
            var geocoord3 = {
                lat: 38.4375817,
                lng: -122.7214462
            };



            // map object
            var map1 = new google.maps.Map(
                document.getElementById('mymap'), {
                    center: geocoord1,
                    geocoord2,
                    geocoord3,
                    zoom: 13,
                    //map style from snazzymaps
                    styles: [{
                            "elementType": "labels",
                            "stylers": [{
                                "visibility": "off"
                            }]
                        },
                        {
                            "featureType": "road",
                            "elementType": "geometry.fill",
                            "stylers": [{
                                "color": "#0F0919"
                            }]
                        },
                        {
                            "featureType": "water",
                            "elementType": "geometry.fill",
                            "stylers": [{
                                "color": "#E4F7F7"
                            }]
                        },
                        {
                            "elementType": "geometry.stroke",
                            "stylers": [{
                                "visibility": "off"
                            }]
                        },
                        {
                            "featureType": "poi.park",
                            "elementType": "geometry.fill",
                            "stylers": [{
                                "color": "#002FA7"
                            }]
                        },
                        {
                            "featureType": "poi.attraction",
                            "elementType": "geometry.fill",
                            "stylers": [{
                                "color": "#E60003"
                            }]
                        },
                        {
                            "featureType": "landscape",
                            "elementType": "geometry.fill",
                            "stylers": [{
                                "color": "#FBFCF4"
                            }]
                        },
                        {
                            "featureType": "poi.business",
                            "elementType": "geometry.fill",
                            "stylers": [{
                                "color": "#FFED00"
                            }]
                        },
                        {
                            "featureType": "poi.government",
                            "elementType": "geometry.fill",
                            "stylers": [{
                                "color": "#D41C1D"
                            }]
                        },
                        {
                            "featureType": "poi.school",
                            "elementType": "geometry.fill",
                            "stylers": [{
                                "color": "#BF0000"
                            }]
                        },
                        {
                            "featureType": "transit.line",
                            "elementType": "geometry.fill",
                            "stylers": [{
                                "saturation": -100
                            }]
                        }
                    ]
                }


            );

            //place marker on map
            var marker1 = new google.maps.Marker({
                //set marker position
                position: geocoord1,
                map: map1,
                //marker title
                title: 'SRJC'

            });

            var marker2 = new google.maps.Marker({
                //set marker position
                position: geocoord2,
                map: map1,
                //marker title
                title: 'Santa Rosa High School'

            });

            var marker3 = new google.maps.Marker({
                //set marker position
                position: geocoord3,
                map: map1,
                //marker title
                title: 'Railroad Square'

            });


            //marker info window
            var info1 = new google.maps.InfoWindow({
                content: '1501 Mendocino Ave, Santa Rosa, CA 95401',
            });
            marker1.addListener(
                'click',
                function () {
                    info1.open(
                        map1,
                        marker1
                    );

                }
            )
            marker2.addListener(
                'click',
                function () {
                    window.alert("hello, you clicked on marker 2");

                }
            )

            marker3.addListener(
                'click',
                function () {
                    document.body.style.backgroundColor = "#0fa0a0";
                }
            )

            //marker info window
            var info1 = new google.maps.InfoWindow({
                content: '1501 Mendocino Ave, Santa Rosa, CA 95401',
            });
            marker1.addListener(
                'click',
                function () {
                    info1.open(
                        map1,
                        marker1
                    );

                }
            )


            marker3.addListener(
                'click',
                function () {
                    document.body.style.backgroundColor = "#0fa0a0";
                }
            )

            // check to see if browser supports geolocation
            if (navigator.geolocation) {

                navigator.geolocation.getCurrentPosition(
                    function (position) {
                        var browserGeocoord = {
                            lat: position.coords.latitude,
                            lng: position.coords.longitude
                        };

                        var map2 = new google.maps.Map(
                            document.getElementById('mymap2'), {
                                center: browserGeocoord,
                                zoom: 13,
                                styles: [{
                                        "elementType": "labels",
                                        "stylers": [{
                                            "visibility": "off"
                                        }]
                                    },
                                    {
                                        "featureType": "road",
                                        "elementType": "geometry.fill",
                                        "stylers": [{
                                            "color": "#0F0919"
                                        }]
                                    },
                                    {
                                        "featureType": "water",
                                        "elementType": "geometry.fill",
                                        "stylers": [{
                                            "color": "#E4F7F7"
                                        }]
                                    },
                                    {
                                        "elementType": "geometry.stroke",
                                        "stylers": [{
                                            "visibility": "off"
                                        }]
                                    },
                                    {
                                        "featureType": "poi.park",
                                        "elementType": "geometry.fill",
                                        "stylers": [{
                                            "color": "#002FA7"
                                        }]
                                    },
                                    {
                                        "featureType": "poi.attraction",
                                        "elementType": "geometry.fill",
                                        "stylers": [{
                                            "color": "#E60003"
                                        }]
                                    },
                                    {
                                        "featureType": "landscape",
                                        "elementType": "geometry.fill",
                                        "stylers": [{
                                            "color": "#FBFCF4"
                                        }]
                                    },
                                    {
                                        "featureType": "poi.business",
                                        "elementType": "geometry.fill",
                                        "stylers": [{
                                            "color": "#FFED00"
                                        }]
                                    },
                                    {
                                        "featureType": "poi.government",
                                        "elementType": "geometry.fill",
                                        "stylers": [{
                                            "color": "#D41C1D"
                                        }]
                                    },
                                    {
                                        "featureType": "poi.school",
                                        "elementType": "geometry.fill",
                                        "stylers": [{
                                            "color": "#BF0000"
                                        }]
                                    },
                                    {
                                        "featureType": "transit.line",
                                        "elementType": "geometry.fill",
                                        "stylers": [{
                                            "saturation": -100
                                        }]
                                    }
                                ]

                            }
                        );


                        var marker4 = new google.maps.Marker({
                            position: browserGeocoord,
                            map: map2,
                            title: 'Browser Geocoords Marker'
                        });
                    }
                );
            }



        };
