const content = d3.select("#content")

content.append("h1").text("Hi!")
content.append("p").text("I'm ")
       .append("a").text("Amelia Wattenberger").attr("href", "http://wattenberger.com/")
content.append("p").text("Follow along and get your hands dirty! Clone this repo at")
content.append("a").text("https://github.com/Wattenberger/d3-examples").attr("href", "https://github.com/Wattenberger/d3-examples")

const examples = [{
    name: "circle packing",
    url: "http://mbostock.github.io/d3/talk/20111116/#10"
}, {
    name: "transitions",
    url: "http://mbostock.github.io/d3/talk/20111116/#11"
}, {
    name: "scatterplot matrix",
    url: "http://mbostock.github.io/d3/talk/20111116/#12"
}, {
    name: "maps/voronoi",
    url: "http://mbostock.github.io/d3/talk/20111116/#14"
}, {
    name: "calendar/color scales",
    url: "http://mbostock.github.io/d3/talk/20111116/#16"
}, {
    name: "circle bundles",
    url: "http://mbostock.github.io/d3/talk/20111116/#17"
}, {
    name: "map",
    url: "https://bl.ocks.org/mbostock/4060606"
}, {
    name: "force-directed graph",
    url: "http://mbostock.github.io/d3/talk/20111116/#18"
}, {

    name: "scatterplot with transitions",
    url: "https://archive.nytimes.com/www.nytimes.com/interactive/2012/05/17/business/dealbook/how-the-facebook-offering-compares.html"
}, {
    name: "Mike Bostock's blocks",
    url: "https://bl.ocks.org/mbostock"
}]


const examplesDiv = content.append("div")
    .attr("class", "examples")
    .text("D3.js Examples")
examples.forEach(example => {
    const div = examplesDiv.append("div")
    div.append("a")
        .text(example.name)
        .attr("href", example.url)
        .attr("target", "_blank")
        .attr("rel", "noopener noreferrer")
})
