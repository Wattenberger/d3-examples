console.log(data)
const content = d3.select("#content")
// what is this??
// selections - similar to jQuery
// return self - can be chained


const margin = {top: 30, right: 10, bottom: 30, left: 50}
const outerWidth = window.innerWidth - 120
const outerHeight = 300
const width = outerWidth - margin.left - margin.right
const height = outerHeight - margin.top - margin.bottom


// draw container
const svg = content.append("svg")
    .attr("width", outerWidth)
    .attr("height", outerHeight)
    // what is this??
    // d3 can assign attributes & styles (.style)

const wrapper = svg.append("g")
    .attr("class", "wrapper")
    .attr("transform", `translate(${margin.left}, ${margin.top})`)
    // .append("rect")
    // .attr("width", width)
    // .attr("height", height)


// // parse the dates in the dataset
// console.log('data[0]', data[0])
// const parseDate = d3.timeParse("%m/%d/%Y")
    // what is this??
    // d3-time-format - for parsing & formatting js datetimes https://github.com/d3/d3-time-format

// const parsedData = data.map(d => Object.assign({}, d, {
//     date: parseDate(d.DATE),
// })).slice(-100)
// console.log('parsedData[0]', parsedData[0])


// // make scales
// const xMin = d3.min(parsedData, d => d.date)
// const xMax = d3.max(parsedData, d => d.date)
// const xExtent = d3.extent(parsedData, d => d.date)
// const xScale = d3.scaleTime()
//                     .domain(xExtent)
//                     .range([0, width])
// console.log('xExtent', xExtent)

// const yExtent = d3.extent(parsedData, d => d.TMAX)
// const yScale = d3.scaleLinear()
//                     .domain(yExtent)
//                     .range([height, 0])
// console.log('yExtent', yExtent)


// // draw!
// // docs: https://github.com/d3/d3-shape#_line
// const line = d3.line()
//     .x(d => xScale(d.date))
//     .y(d => yScale(d.TMAX))
    // what is this??
    // d3 attributes can take a constant or a function

// wrapper.append("path")
//     .datum(parsedData)
//     .attr("d", line)
//     .style("fill", "none")
//     .style("stroke", "#45aeb1")


// // draw axes
// const xAxis = d3.axisBottom(xScale)
// wrapper.append("g")
//     .attr("transform", `translate(0, ${height})`)
//     .call(xAxis)

// const yAxis = d3.axisLeft(yScale)
// wrapper.append("g")
//     .call(yAxis)

  // ☐ make y-scale sane
  // ☐ change number of ticks
        // .ticks(3)
  // ☐ change tick format
        // .tickFormat(d3.timeFormat("%b %-d %Y"))
  // ☐ render an area
  // ☐ add a line for TMIN
  // ☐ change interpolation https://bl.ocks.org/d3noob/ced1b9b18bd8192d2c898884033b5529
    // .curve(d3.curveBasis)