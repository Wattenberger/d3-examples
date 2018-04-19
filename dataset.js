console.log(data)

const content = d3.select("#content")

const p = content.append("p")
p.append("b").text("Rochester weather data ")
p.append("span").text("downloaded from the Department of Commerce's ")
p.append("a").attr("href","https://www.ncdc.noaa.gov/").text("National Centers for Environmental Information")


const fieldDescriptions = {
    PRCP: "Precipitation",
    SNOW: "Snowfall",
    SNWD: "Snow depth",
    TMAX: "Maximum temperature",
    TMIN: "Minimum temperature",
    WT01: "Fog, ice fog, or freezing fog (may include heavy fog)",
    WT03: "Thunder",
    WT04: "Ice pellets, sleet, snow pellets, or small hail",
    WT05: "Hail (may include small hail)",
    WT06: "Glaze or rime",
    WT08: "Smoke or haze",
    WT09: "Blowing or drifting snow",
    WT11: "High or damaging winds",
    WT14: "Drizzle",
}


const descriptions = content.append("div").attr("class", "data-fields")
Object.keys(fieldDescriptions).forEach(field => {
    const div = descriptions.append("div")
    div.append("b").text(field)
    div.append("span").text(fieldDescriptions[field])
})

content.append("br")
content.append("br")
const table = content.append("table").attr("class", "data-table")
const header = table.append("thead")

Object.keys(data[0]).forEach(key => {
    header.append("th").text(key)
})
data.slice(0, 30).forEach(d => {
    const row = table.append("tr")
    Object.keys(d).forEach(key => {
        row.append("td").text(d[key])
    })
})
table.append("tr").append("td").text("...")
table.append("tr").append("td").text("...")
table.append("tr").append("td").text("...")
data.slice(-30).forEach(d => {
    const row = table.append("tr")
    Object.keys(d).forEach(key => {
        row.append("td").text(d[key])
    })
})

