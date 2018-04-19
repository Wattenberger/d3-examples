console.log(data)
const content = d3.select("#content")


const margin = {top: 30, right: 10, bottom: 30, left: 50}
const outerWidth = window.innerWidth - 120
const outerHeight = 300
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


// parse the dates in the dataset
console.log('data[0]', data[0])
const parseDate = d3.timeParse("%Y-%m-%d")
const parsedData = data.map(d => Object.assign({}, d, {
    date: parseDate(d.DATE),
})).slice(-100)
console.log('parsedData[0]', parsedData[0])


// make scales
const xMin = d3.min(parsedData, d => d.date)
const xMax = d3.max(parsedData, d => d.date)
const xExtent = d3.extent(parsedData, d => d.date)
const xScale = d3.scaleTime()
                    .domain(xExtent)
                    .range([0, width])
console.log('xExtent', xExtent)

const yExtent = d3.extent(parsedData, d => d.TMAX)
const yScale = d3.scaleLinear()
                    .domain([0, yExtent[1]])
                    .range([height, 0])
console.log('yExtent', yExtent)


// draw!
// docs: https://github.com/d3/d3-shape#_line
const line = d3.area()
    .x(d => xScale(d.date))
    .y(d => yScale(d.TMAX))

wrapper.append("path")
    .datum(parsedData)
    .attr("d", line)
    .attr("class", "line")
    .style("stroke", "#45aeb1")


// draw axes
// const xAxis = d3.axisBottom(xScale)
// // .tickFormat(d3.timeFormat("%b %-d %Y"))
// wrapper.append("g")
//     .attr("transform", `translate(0, ${height})`)
//     .call(xAxis)

// const yAxis = d3.axisLeft(yScale)
//   // .ticks(3)
// wrapper.append("g")
//     .call(yAxis)

  // ☐ make y-scale sane
  // ☐ change number of ticks
  // ☐ change tick format
  // ☐ render an area
  // ☐ add a line for TMIN
  // ☐ change interpolation https://bl.ocks.org/d3noob/ced1b9b18bd8192d2c898884033b5529
    // .curve(d3.curveBasis)