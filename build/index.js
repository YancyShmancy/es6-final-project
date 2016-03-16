var dataset1 = [ 40, 26, 9, 5, 3, 2 ];
var dataset2 = [ 80, 28, 7, 16, 100, 90, 140];
var dataset3 = [ 70, 16, 20, 90, 54];
var dataLabels = [ "Marvel Comics", "DC Entertainment", "Image Comics", "IDW Publishing", "Dark Horse Comics", "Boom! Studios"];

var firstW = $('#myChart').width();
console.log(firstW);
var firstH = $('#myChart').height();
var barPadding = 10;
barColor = function(d) {
    return "rgb(0, 0, " + (d * 10) + ")";
}

var newGraph = new barGraph('#myChart', firstW, firstH);
newGraph.init(firstW, firstH, 10, "rect", dataset1, barPadding, 2000, barColor, "helvetica", "11px", "white");

var newGraph2 = new barGraph('#myChart2', 800, 800);
newGraph2.init(800, 800, 4, "rect", dataset2, barPadding, 1000, "red", "helvetica", "9px", "white");

var newGraph2 = new barGraph('#myChart3', 800, 800);
newGraph2.init(800, 800, 4, "rect", dataset3, barPadding, 3000, "green", "helvetica", "9px", "white");

//******************HOW TO USE**********************
//
// Create New Bargraph with
// var Example = new barGraph(
//                      parent selector,
//                      parent width,
//                      parent height
//                  );
// Example.init(
//      parent width,
//      parent height,
//      height scale(loops through data array and multiplies by i value to get height),
//      shape (string),
//      dataset(array),
//      padding between bars (int),
//      duration of transition (int),
//      color of bars (string),
//      font family for labels (string),
//      font size for labels (string),
//      font color for labels (string)
// );
//
// **************************************************
