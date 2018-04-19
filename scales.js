const content = d3.select("#content")

const scaleTypes = [
    'position', 'size', 'brightness', 'color intensity', 'hue', 'angle', 'shape'
]
const scales = [{
    name: "nominal",
    methods: [],
    description: "no order",
    example: "yes/no",
},{
    name: "ordinal",
    methods: ["ordinal"],
    description: "categories with an order",
    example: "grades (A,B,C,D,F), Small, Medium, Large",
},{
    name: "discrete",
    methods: ["sequential", "quantize", "quantile", "threshold", "band", "point"],
    description: "counts",
    example: "number of kids (1,2,3)",
},{
    name: "continuous",
    methods: ["linear", "pow", "log", "identity", "time"],
    description: "measurements",
    example: "height, time",
}]

content.append("h2").text("Scale types")
scales.forEach(scale => {
    content.append("b").text(scale.name)
    content.append("div").text(scale.description)
    scale.methods.map(method => {
        content.append("a").text(method).attr("href", `https://github.com/d3/d3-scale#${method}-scales`)
        content.append("span").text(", ")
    })
    content.append("br")
    content.append("i").text(scale.example).style("opacity", "0.5")
    content.append("br")
    content.append("br")
})

// // Linear scale
// content.append("h2").text("Linear Scale")
// const svg = content.append("svg")
//     .attr("width", 600)
//     .attr("height", 40)

// const linearScale = d3.scaleLinear()
//     .range([0, 500])
//     .domain([0, 10])

// const ticks = linearScale.ticks()

// ticks.forEach(tick => {
//     content.append("div")
//         .text(`${tick} ↔ ${linearScale(tick)}`)

//     svg.append("circle")
//         .attr("cx", linearScale(tick))
//         .attr("cy", 20)
//         .attr("r", 5)
// })
// // ☐ turn into a 3-part scale


// // Color scale

// content.append("h2").text("Color Scale")

// const colorScale = d3.scaleLinear()
//     .range(["red", "teal"])
//     .domain([0, 10])

// colorScale.ticks().forEach(tick => {
//     content.append("div")
//         .text(`${tick} ↔ ${colorScale(tick)}`)
//         .style("color", colorScale(tick))
// })

// // built-in color scales https://github.com/d3/d3-scale-chromatic/blob/master/README.md#interpolateRainbow
// // eg: d3.scaleSequential(d3.interpolateYlGnBu)


// // Time scale

// content.append("h2").text("Time Scale")

// const now = new Date()
// const yesterday = d3.timeDay.offset(now, -1)

// const timeScale = d3.scaleTime()
//     .range([now, yesterday])
//     .domain([0, 10])

// timeScale.ticks().forEach((tick, i) => {
//     let timeString = timeScale(i)
//     // let timeString = d3.timeFormat("%-m/%d/%Y %I:%M %-p")(timeScale(i))
//     content.append("div")
//         .text(`${i} ↔ ${timeString}`)
// })

// ☐ change the number of ticks
// ☐ parse datetimes: https://github.com/d3/d3-time-format

