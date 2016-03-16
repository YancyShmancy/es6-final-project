'use strict';

module.exports = function() {
    class Graph {

        constructor(selector, w, h) {
            this.selector = selector;
            this.w = w;
            this.h = h;

            return d3.select(this.selector)
                        .append("svg")
                        .attr("width", this.w)
                        .attr("height", this.h)
                        .attr("id", "chart");
        };
    };

    class BarGraph extends Graph {

        constructor(selector, w, h) {

            return super(selector, w, h);

            // if this.w and this.h below do not work, move setup into this constructor.
        }

        setup(shape, dataset, barPadding, duration) {

            this.shape = shape;
            this.dataset = dataset;
            this.barPadding = barPadding;
            this.duration = duration;

            return svg.SelectAll(this.shape)
                        .data(this.dataset)
                        .enter()
                        .append(this.shape)
                        .attr("x", function(d,i) {
                            return i * (this.w / this.dataset.length);
                        })
                        .attr("y", this.h)
                        .attr("width", this.w / dataset.length - this.barPadding)
                        .style("fill", function(d) {
                            return "rgb(0, 0, " + (d * 10) + ")";
                        })
                        .attr("height", 0)
                        .transition()
                            .delay(function(d, i){return i * 300})
                            .attr("height", function(d){
                                return d * 10;
                            })
                            .attr("y", function(d){
                                return this.h - d * 10;
                            })
                            .duration(this.duration)
        }
    }

    class GraphText extends BarGraph {

        graphText(fontFamily, fontSize, fontColor) {

            this.fontFamily = fontFamily;
            this.fontSize = fontSize;
            this.fontColor = fontColor;

            return svg.selectAll("text")
                        .data(BarGraph.dataset)
                        .enter()
                        .append("text")
                        .text(function(d){
                            return d;
                        })
                        .attr("x", function(d, i){
                            return i * (Graph.w / BarGraph.dataset.length) + (Graph.w / BarGraph.dataset.length - barPadding) / 2;
                        })
                        .attr("y", function(d) {
                            return Graph.h - (d * 10) + 20;
                        })
                        .attr("font-family", this.fontFamily)
                        .attr("font-size", this.fontSize)
                        .attr("fill", this.fontColor)
                        .attr("text-anchor", "middle")
                        .attr("opacity", 0)
                        .transition()
                            .delay(function(d,i){return i * 300;})
                            .attr("opacity", 1)
                            .duration(BarGraph.duration)
        }
    }

    return {
        Graph,
        BarGraph,
        GraphText
    }
}();
