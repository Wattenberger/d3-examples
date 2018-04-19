const content = d3.select("#content")

var data = []

const height = 300
const width = 600

const svg = content.append("svg")
    .attr("height", height)
    .attr("width", width)

const renderCircles = () => {
    let circle = svg.selectAll("circle")
        .data(data)

    circle.enter().append("circle")
        // // default states
        // .attr("r", 0)
        // .attr("cx", d => d.x)
        // .attr("cy", d => d.y)
    .merge(circle)
    // .transition().duration(300)
        .attr("cx", d => d.x)
        .attr("cy", d => d.y)
        .attr("r", 5)

    // circle.exit()
    //     .remove()
}

// ☐ fix removing circles
// ☐ transition circles in
// ☐ transition circles out



// utils
const addCircles = () => {
    for (let i = 0; i < 5; i++) {
        data.push({
            x: Math.random() * width,
            y: Math.random() * height,
        })
    }
    console.table(data)
}
const removeCircles = () => {
    data = data.slice(0, -2)
    console.table(data)
}
const moveCircles = () => {
    data = data.map(d => ({
        x: Math.random() * width,
        y: Math.random() * height,
    }))
    console.table(data)
}


content.append("br")
content.append("button")
    .attr("onclick", "addCircles()")
    .text("Add 5 circles")
content.append("button")
    .attr("onclick", "removeCircles()")
    .text("Remove 2 circles")
content.append("button")
    .attr("onclick", "moveCircles()")
    .text("Move circles")
content.append("br")
content.append("br")
content.append("button")
    .attr("onclick", "renderCircles()")
    .text("Update circles")