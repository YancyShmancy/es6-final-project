//var charts = require('chart.js');

var dataset = [ 40, 26, 9, 5, 3, 2 ];

var myChart = document.getElementById("#myChart");

var w = $('#myChart').width();
var h = $('#myChart').height();
var barPadding = 10;

var newChart = new BarGraph(myChart, w, h).setup("rect", dataset, barPadding, 2000);

var svg = d3.select("#myChart")
            .append("svg")
            .attr("width", w)
            .attr("height", h)
            .attr("id", "chart")

svg.selectAll("rect")
    .data(dataset)
    .enter()
    .append("rect")
    .attr("x", function(d, i) {
        return i * (w / dataset.length);
    })
    .attr("y", h)
    .attr("width", w/dataset.length - barPadding)
    .style("fill", function(d) {
        return "rgb(0, 0, " + (d * 10) + ")";
    })
    .attr("height", 0 )
    .transition()
        .attr("height",  function(d){
            return d * 10;
        })
        .attr("y", function(d) {
            return h - d * 10; // height minus data value
        })
        .duration(2000)


svg.selectAll("text")
    .data(dataset)
    .enter()
    .append("text")
    .text(function(d) {
        return d;
    })
    .attr("x", function(d, i) {
        return i * (w / dataset.length) + (w / dataset.length - barPadding) / 2;
    })
    .attr("y", function(d) {
        return h - (d * 10) + 20;
    })
    .attr("font-family", "helvetica")
    .attr("font-size", "11px")
    .attr("fill", "white")
    .attr("text-anchor", "middle")
    .attr("opacity", 0)
    .transition()
        .attr("opacity", 1)
        .duration(2000)







