var svg;

var textInit = function(dataset, w, h, heightScale, fontFamily, fontSize, fontColor, duration) {

    svg.selectAll("text")
        .data(dataset)
        .enter()
        .append("text")
        .text(function(d) {
            return d + "%";
        })
        .attr("x", function(d, i) {
            return i * (w / dataset.length) + (w / dataset.length - barPadding) / 2;
        })
        .attr("y", function(d) {
            return h - (d * heightScale) + 20;
        })
        .attr("font-family", "helvetica")
        .attr("font-size", "11px")
        .attr("fill", "white")
        .attr("text-anchor", "middle")
        .attr("opacity", 0)
        .transition()
            .attr("opacity", 1)
            .delay(function(d, i) { return i * 300; })
            .duration(duration)
}

function Graph(selector, w, h) {
    this.selector = selector;
    this.w = w;
    this.h = h;
}

Graph.prototype.init = function(w, h, heightScale, shape, dataset, barPadding, duration, color, fontFamily, fontSize, fontColor) {

    svg.selectAll(shape)
        .data(dataset)
        .enter()
        .append(shape)
        .attr("x", function(d,i) {
            return i * (w / dataset.length);
        })
        .attr("y", h)
        .attr("width", w / dataset.length - barPadding)
        .style("fill", color)
        .attr("height", 0)
        .transition()
            .delay(function(d, i){return i * 300})
            .attr("height", function(d){
                return d * heightScale;
            })
            .attr("y", function(d){
                return h - d * heightScale;
            })
            .duration(duration);

    textInit(dataset, w, h, heightScale, fontFamily, fontSize, fontColor);
}

function barGraph (selector, w, h) {
    Graph.call(this, selector, w, h);

    svg = d3.select(this.selector)
                    .append("svg")
                    .attr("width", this.w)
                    .attr("height", this.h)
                    .attr("id", "chart");
}

barGraph.prototype = Object.create(Graph.prototype);
barGraph.prototype.constructor = barGraph;
