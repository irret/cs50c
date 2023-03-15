        //1. load json
        function loadJSON() {
            //load jquery's getJSON
            $.getJSON("data.json",
                function (dataReturned) {
                    doPie(dataReturned);
                }
            );
        }

        //2. render bar chart
        function doPie(data) {
            var canvas1 = document.getElementById('chart1');
            var context1 = canvas1.getContext('2d');

            // now we can establish some useful values in js vars
            var centerX = canvas1.width / 2;
            var centerY = canvas1.height / 2;
            var radius = Math.min(canvas1.width, canvas1.height) / 2;
            var lastPosition = 0,
                total = 0,
                i, pie, x, y;

            // sum all data values for a grand total, needed to calc % for each slice
            for (i = 0; i < data.length; i++) {
                total += data[i].val;
            }

            // now draw each pie slice as an arc
            for (i = 0; i < data.length; i++) {
                // start drawing a path
                context1.beginPath();
                // move pen to the center of the canvas
                context1.moveTo(centerX, centerY);
                // calculate pie segment as 360 degrees times % of total
                pie = Math.PI * 2 * (data[i].val / total);
                // draw arc for pie segment as % of total
                context1.arc(centerX, centerY, radius, lastPosition, lastPosition + pie, false);
                // draw line back to center
                context1.lineTo(centerX, centerY);
                // set fill color to color value in array in same position as data element
                context1.fillStyle = data[i].color;
                // fill in complete path now drawn
                context1.fill();

                // draw text label for segment at 75% of the circle radius in middle of slice
                x = centerX + (radius * .75) * Math.cos(lastPosition + (pie / 2));
                y = centerY + (radius * .75) * Math.sin(lastPosition + (pie / 2));
                context1.fillStyle = "white";
                context1.font = "bold 19px Arial";
                context1.fillText(data[i].val, x, y);
                context1.fillStyle = "black";
                context1.font = "15px Arial";
                context1.fillText(data[i].text, x - 20, y + 12);

                // increment angle around circle
                lastPosition += pie;
            }

        }
