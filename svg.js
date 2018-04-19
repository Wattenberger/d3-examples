const svg = d3.select("#svg")
const content = d3.select("#content")

content.append("h2").text("Svg")
content.append("a").text("Attributes").attr("href", "https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute")

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