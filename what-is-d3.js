const content = d3.select("#content")

let section = content.append("div").attr("class", "section")
section.append("h2").text("What is D3.js?")
let list = section.append("ul")
list.append("li").text("a library for graphing data")
list.append("li").text("data ↦ DOM")
list.append("li").text("a collection of modules")
list.append("li").text("not just for line/bar graphs")
list.append("li").text("useful for simple things like color scales")
list.append("li").text("useful for making complex, multi-part graphs")
list.append("br")
list.append("li").append("i").text("18 February 2011")
list.append("li").text("Jeff Heer, Mike Bostock, and Vadim Ogievetsky of Stanford University's Stanford Visualization Group")
list.append("li").text("v5 supports modern browsers (✗ IE)")

const examples = [{
    name: "line chart",
    url: "https://bl.ocks.org/mbostock/3883245"
}, {
    name: "bar chart",
    url: "https://bl.ocks.org/mbostock/3885304"
}, {
    name: "calendar with colors",
    url: "https://bl.ocks.org/mbostock/4063318"
}, {
    name: "circle packing",
    url: "http://mbostock.github.io/d3/talk/20111116/#10"
}, {
    name: "You Draw It",
    url: "https://www.nytimes.com/interactive/2015/05/28/upshot/you-draw-it-how-family-income-affects-childrens-college-chances.html"
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

const examplesDiv = content.append("div").attr("class", "section examples")
examplesDiv.append("h2").text("D3.js Examples")

let examplesUl = examplesDiv.append("ul")
examples.forEach(example => {
    examplesUl.append("li").append("a")
        .text(example.name)
        .attr("href", example.url)
        .attr("target", "_blank")
        .attr("rel", "noopener noreferrer")
})


const coveredModules = [
    "Selections",
    "Scales",
    "Shapes",
    "Axes",
    "Transitions",
]
const modules = [
    "Arrays",
    "Brushes",
    "Chords",
    "Collections",
    "Colors",
    "Color Schemes",
    "Contours",
    "Dispatches",
    "Dragging",
    "Delimiter-Separated Values",
    "Easings",
    "Fetches",
    "Forces",
    "Number Formats",
    "Geographies",
    "Hierarchies",
    "Interpolators",
    "Paths",
    "Polygons",
    "Quadtrees",
    "Random Numbers",
    "Time Formats",
    "Time Intervals",
    "Timers",
    "Voronoi Diagrams",
    "Zooming",
]
const modulesDiv = content.append("div")
modulesDiv.append("h2").text("D3.js Modules")
modulesDiv.append("a").attr("href", "https://github.com/d3/d3/blob/master/API.md#d3-api-reference").text("Reference")
modulesDiv.append("br")
let ul = modulesDiv.append("ul")
coveredModules.map(module => {
    ul.append("li").append("b").text(module)
})
ul.append("br")
modules.map(module => {
    ul.append("li").text(module).style("font-size", "0.8em")
})

