 var margin = {
         top: 20,
         right: 20,
         bottom: 70,
         left: 40
     },
     width = 500 - margin.left - margin.right,
     height = 300 - margin.top - margin.bottom;
 var x = d3.scale.ordinal().rangeRoundBands([0, width], .05);

 var y = d3.scale.linear().range([height, 0]);

 var xAxis = d3.svg.axis()
     .scale(x)
     .orient("bottom")


 var yAxis = d3.svg.axis()
     .scale(y)
     .orient("left")
     .ticks(10);


 var svg = d3.select("#container").append("svg")
     .attr("width", width + margin.left + margin.right)
     .attr("height", height + margin.top + margin.bottom)
     .append("g")
     .attr("transform",
         "translate(" + margin.left + "," + margin.top + ")");

 d3.json("data.json", function (error, data) {

     data.forEach(function (d) {
         d.label = d.label;
         d.val = +d.val;
     });

     x.domain(data.map(function (d) {
         return d.label;
     }));
     y.domain([0, d3.max(data, function (d) {
         return d.val;
     })]);

     svg.append("g")
         .attr("class", "x axis")
         .attr("transform", "translate(0," + height + ")")
         .call(xAxis)
         .selectAll("text")
         .style("text-anchor", "end")
         .attr("dx", "-.8em")
         .attr("dy", "-.55em")
         .attr("transform", "rotate(-90)");

     svg.append("g")
         .attr("class", "y axis")
         .call(yAxis)
         .append("text")
         .attr("transform", "rotate(-90)")
         .attr("y", 5)
         .attr("dy", ".71em")
         .style("text-anchor", "end");


     svg.selectAll("bar")
         .data(data)
         .enter().append("rect")
         .attr("class", "bar")
         .attr("x", function (d) {
             return x(d.label);
         })
         .attr("width", x.rangeBand())
         .attr("y", function (d) {
             return y(d.val);
         })
         .attr("height", function (d) {
             return height - y(d.val);
         });

 });
