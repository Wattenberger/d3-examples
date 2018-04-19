const content = d3.select("#content")

const resources = [{
    name: "Docs",
    url: "https://github.com/d3/d3/blob/master/API.md#d3-api-reference",
},{
    name: "Mike Bostock's examples",
    url: "https://bl.ocks.org/mbostock"
},{
    name: "Lots o tutorials",
    url: "https://github.com/d3/d3/wiki/Tutorials",
},{
    name: "How Selections Work - a little outdated, but mostly still relevant",
    url: "https://bost.ocks.org/mike/selection/",
},{
    name: "",
    url: "",
},{
    name: "",
    url: "",
},{
    name: "",
    url: "",
}]

const resourcesDiv = content.append("div").attr("class", "section resources")
resourcesDiv.append("h2").text("Resources")

let resourcesUl = resourcesDiv.append("ul")
resources.forEach(resource => {
    resourcesUl.append("li").append("a")
        .text(resource.name)
        .attr("href", resource.url)
        .attr("target", "_blank")
        .attr("rel", "noopener noreferrer")
})
