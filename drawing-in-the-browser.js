const height = 300
const width = 600

const content = d3.select("#content")
content.append("h2").text("Drawing with html")
content.append("div").style("width", "400px").style("height", "20px").style("background", "#fff").style("border", "1px solid #ccc")
    .append("div").style("width", "60%").style("height", "100%").style("background", "#45aeb1")
content.append("h2").text("Drawing with canvas")
content.append("a").attr("href", "http://wattenberger.com/sketches?day=5").text("Example")
content.append("h2").text("Drawing with svg")
content.append("a").text("Attributes").attr("href", "https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute")

content.append("br")
content.append("br")
const svg = content.append("svg")
    .attr("height", height)
    .attr("width", width)

// <circle cx="0" cy="0" r="10" />
// <rect x="10" y="10" width="20" height="40" />
// <path d="M 10,10 L 30,10 L 40, 50 Z" />
// <polygon points="10,10 30,20 40,50 20,30" />

/*
    🛈 svg elements are similar to standard dom elements, but not quite:
        ✗ color, background
        ✗ border
        ✗ pseudo elements
 */

/*
    🛈 why svg and less canvas?
        ✓ vector graphics
        ✓ more accessible
        ✓ interactivity!
        ✓ css styles!
        ✗ worse with many elements
 */