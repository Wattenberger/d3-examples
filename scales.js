const content = d3.select("#content")
const svg = d3.select("#svg")


// Linear scale

const scale = d3.scaleLinear()
    .range([0, 500])
    .domain([0, 10])

const ticks = scale.ticks()

svg.attr("width", 600)
    .attr("height", 100)

ticks.forEach(tick => {
    console.log(tick, "↔", scale(tick))
    svg.append("circle")
        .attr("cx", scale(tick))
        .attr("cy", 20)
        .attr("r", 5)
})
// ☐ turn into a 3-part scale


// Color scale

content.append("h2").text("Color Scale")

const colorScale = d3.scaleLinear()
    .range(["red", "teal"])
    .domain([0, 10])

colorScale.ticks().forEach(tick => {
    console.log(tick, "↔", colorScale(tick))
    content.append("div")
        .text(colorScale(tick))
        .style("color", colorScale(tick))
})

// built-in color scales https://github.com/d3/d3-scale-chromatic/blob/master/README.md#interpolateRainbow
// eg: d3.scaleSequential(d3.interpolateYlGnBu)


// Time scale

content.append("h2").text("Time Scale")

const now = new Date()
const yesterday = d3.timeDay.offset(now, -1)

const timeScale = d3.scaleTime()
    .range([now, yesterday])
    .domain([0, 10])

timeScale.ticks().forEach((tick, i) => {
    let timeString = timeScale(i)
    // let timeString = d3.timeFormat("%d/%m/%Y %I:%M %-p")(timeScale(i))
    console.log(i, "↔", timeString)
    content.append("div")
        .text(timeString)
})

// ☐ change the number of ticks
