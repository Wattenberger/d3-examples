// Examples
// circle packing: http://mbostock.github.io/d3/talk/20111116/#10
// transitions: http://mbostock.github.io/d3/talk/20111116/#11
// scatterplot matrix: http://mbostock.github.io/d3/talk/20111116/#12
// maps/voronoi: http://mbostock.github.io/d3/talk/20111116/#14
// calendar/color scales: http://mbostock.github.io/d3/talk/20111116/#16
// circle bundles: http://mbostock.github.io/d3/talk/20111116/#17
// map: https://bl.ocks.org/mbostock/4060606
// force-directed graph: http://mbostock.github.io/d3/talk/20111116/#18

// scatterplot with transitions: https://archive.nytimes.com/www.nytimes.com/interactive/2012/05/17/business/dealbook/how-the-facebook-offering-compares.html
// Mike Bostock's blocks: https://bl.ocks.org/mbostock

const svg = d3.select("#svg")
svg.remove()

const content = d3.select("#content")
content.append("h1").text("Hi!")
content.append("p").text("I'm Amelia Wattenberger")
content.append("p").text("Clone this repo at github/Wattenberger/d3-examples")

