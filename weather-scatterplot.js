console.log(data)
const content = d3.select("#content")

const dataSubset = data.slice(0, 100)

const parseDate = d3.timeParse("%Y-%m-%d")
const parsedData = dataSubset.map(d => Object.assign({}, d, {
    date: parseDate(d.DATE),
    // month: Number(d3.timeFormat("%m")(parseDate(d.DATE))),
}))

const margin = {top: 30, right: 10, bottom: 45, left: 45}
const smallerDimension = Math.min(window.innerWidth, window.innerHeight) - 120
const outerWidth = smallerDimension
const outerHeight = smallerDimension
const width = outerWidth - margin.left - margin.right
const height = outerHeight - margin.top - margin.bottom

// draw container
const svg = content.append("svg")
    .attr("width", outerWidth)
    .attr("height", outerHeight)

const wrapper = svg.append("g")
    .attr("class", "wrapper")
    // .style("outline", "1px solid green")
    .attr("transform", `translate(${margin.left}, ${margin.top})`)


// make scales
const xScale = d3.scaleLinear()
    .range([0, width])
    .domain(d3.extent(parsedData, d => d.TMAX))
const yScale = d3.scaleLinear()
    .range([height, 0])
    .domain(d3.extent(parsedData, d => d.TMIN))


// draw circles
let circle = wrapper.selectAll(".circle")
    .data(parsedData)

circle.enter().append("circle")
    .attr("cx", d => xScale(d.TMAX))
    .attr("cy", d => yScale(d.TMIN))
    .attr("r", 3)
    .attr("class", "circle")
    .style("fill", "#45aeb1")
    // .style("opacity", "0.1")

circle.exit()
    .remove()


// draw axes, with labels!
const xAxis = d3.axisBottom(xScale)
wrapper.append("g")
    .attr("transform", `translate(0, ${height})`)
    .call(xAxis)

wrapper.append("text")
    .attr("y", height + 25)
    .attr("x", width / 2)
    .attr("dy", "1em")
    .style("text-anchor", "middle")
    .style("font-size", "10px")
    .style("font-weight", "700")
    .text("TMIN");

const yAxis = d3.axisLeft(yScale)
wrapper.append("g")
    .call(yAxis)

wrapper.append("text")
  .attr("transform", "rotate(-90)")
  .attr("y", -40)
    .attr("x", -height / 2)
  .attr("dy", "1em")
  .style("text-anchor", "middle")
  .style("font-size", "10px")
  .style("font-weight", "700")
  .text("TMAX");




// ☐ change to PRCP vs SNOW
// ☐ month of year vs snowfall
    // month = Number(d3.timeFormat("%m"))
// ☐ add a color scale for time
// ☐ add density contours?!


// const contours = d3.contourDensity()
//     .x(d => xScale(d.TMAX))
//     .y(d => yScale(d.TMIN))
//     .size([width, height])
//     // .bandwidth(12)
//     (parsedData)

// const colorScale = d3.scaleSequential(d3.interpolateWarm)
//     .domain(d3.extent(contours, d => d.value))

// wrapper.insert("g")
//     .attr("stroke", "#000")
//     .attr("stroke-width", 0.5)
//   .selectAll("path")
//   .data(contours)
//   .enter().append("path")
//     .attr("fill", d => colorScale(d.value))
//     .attr("d", d3.geoPath());
