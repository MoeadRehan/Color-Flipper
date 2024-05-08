//const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
/*const colors = [
    "red", "blue", "green", "yellow", "orange", "purple",
    "cyan", "magenta", "brown", "pink", "teal", "maroon",
    "navy", "olive", "lime", "indigo", "turquoise", "violet",
    "salmon", "skyblue", "lavender", "gold", "silver", "bronze",
    "crimson", "chartreuse", "coral", "fuchsia", "khaki", "plum",
    "azure", "beige", "bisque", "cadetblue", "chocolate", "cornflowerblue",
    "darkcyan", "darkgoldenrod", "darkgreen", "darkmagenta", "darkolivegreen",
    "darkorange", "darkorchid", "darksalmon", "darkseagreen", "darkslateblue",
    "darkslategray", "darkturquoise", "darkviolet", "deeppink", "deepskyblue",
    "dodgerblue", "firebrick", "forestgreen", "gainsboro", "ghostwhite",
    "goldenrod", "greenyellow", "hotpink", "indianred", "khaki", "lightblue",
    "lightcoral", "lightcyan", "lightgoldenrodyellow", "lightgray", "lightgreen",
    "lightpink", "lightsalmon", "lightseagreen", "lightskyblue", "lightslategray",
    "lightsteelblue", "lightyellow", "limegreen", "magenta", "mediumaquamarine",
    "mediumblue", "mediumorchid", "mediumpurple", "mediumseagreen", "mediumslateblue",
    "mediumspringgreen", "mediumturquoise", "mediumvioletred", "midnightblue",
    "mintcream", "mistyrose", "moccasin", "navajowhite", "oldlace", "orangered",
    "orchid", "palegoldenrod", "palegreen", "paleturquoise", "palevioletred",
    "papayawhip", "peachpuff", "peru", "powderblue", "rosybrown", "royalblue",
    "saddlebrown", "sandybrown", "seagreen", "seashell", "sienna", "slateblue",
    "slategray", "snow", "springgreen", "steelblue", "tan", "thistle", "tomato",
    "turquoise", "wheat", "white", "whitesmoke", "yellowgreen",
    "rgba(255, 0, 0, 0.5)", // Semi-transparent red
    "rgba(0, 0, 255, 0.5)", // Semi-transparent blue
    "rgba(0, 255, 0, 0.5)", // Semi-transparent green
    "rgba(255, 255, 0, 0.5)", // Semi-transparent yellow
    "rgba(255, 165, 0, 0.5)", // Semi-transparent orange
    "rgba(128, 0, 128, 0.5)", // Semi-transparent purple
    "rgba(0, 255, 255, 0.5)", // Semi-transparent cyan
    "rgba(255, 0, 255, 0.5)", // Semi-transparent magenta
    "rgba(165, 42, 42, 0.5)", // Semi-transparent brown
    "rgba(255, 192, 203, 0.5)", // Semi-transparent pink
    "rgba(0, 128, 128, 0.5)", // Semi-transparent teal
    "rgba(128, 0, 0, 0.5)", // Semi-transparent maroon
    "rgba(0, 0, 128, 0.5)", // Semi-transparent navy
    "rgba(128, 128, 0, 0.5)", // Semi-transparent olive
    "rgba(0, 255, 0, 0.5)", // Semi-transparent lime
    "rgba(75, 0, 130, 0.5)", // Semi-transparent indigo
    "rgba(64, 224, 208, 0.5)", // Semi-transparent turquoise
    "rgba(238, 130, 238, 0.5)", // Semi-transparent violet
    // Add more colors as needed...
];*/
const colors = [
    "red", "blue", "green", "yellow", "orange", "purple",
    "cyan", "magenta", "brown", "pink", "teal", "maroon",
    "navy", "olive", "lime", "indigo", "turquoise", "violet",
    "salmon", "skyblue", "lavender", "gold", "silver", "bronze",
    "crimson", "chartreuse", "coral", "fuchsia", "khaki", "plum",
    "azure", "beige", "bisque", "cadetblue", "chocolate", "cornflowerblue",
    "darkcyan", "darkgoldenrod", "darkgreen", "darkmagenta", "darkolivegreen",
    "darkorange", "darkorchid", "darksalmon", "darkseagreen", "darkslateblue",
    "darkslategray", "darkturquoise", "darkviolet", "deeppink", "deepskyblue",
    "dodgerblue", "firebrick", "forestgreen", "gainsboro", "ghostwhite",
    "goldenrod", "greenyellow", "hotpink", "indianred", "khaki", "lightblue",
    "lightcoral", "lightcyan", "lightgoldenrodyellow", "lightgray", "lightgreen",
    "lightpink", "lightsalmon", "lightseagreen", "lightskyblue", "lightslategray",
    "lightsteelblue", "lightyellow", "limegreen", "magenta", "mediumaquamarine",
    "mediumblue", "mediumorchid", "mediumpurple", "mediumseagreen", "mediumslateblue",
    "mediumspringgreen", "mediumturquoise", "mediumvioletred", "midnightblue",
    "mintcream", "mistyrose", "moccasin", "navajowhite", "oldlace", "orangered",
    "orchid", "palegoldenrod", "palegreen", "paleturquoise", "palevioletred",
    "papayawhip", "peachpuff", "peru", "powderblue", "rosybrown", "royalblue",
    "saddlebrown", "sandybrown", "seagreen", "seashell", "sienna", "slateblue",
    "slategray", "snow", "springgreen", "steelblue", "tan", "thistle", "tomato",
    "turquoise", "wheat", "white", "whitesmoke", "yellowgreen",
    "rgba(255, 0, 0, 0.5)", // Semi-transparent red
    "rgba(0, 0, 255, 0.5)", // Semi-transparent blue
    "rgba(0, 255, 0, 0.5)", // Semi-transparent green
    "rgba(255, 255, 0, 0.5)", // Semi-transparent yellow
    "rgba(255, 165, 0, 0.5)", // Semi-transparent orange
    "rgba(128, 0, 128, 0.5)", // Semi-transparent purple
    "rgba(0, 255, 255, 0.5)", // Semi-transparent cyan
    "rgba(255, 0, 255, 0.5)", // Semi-transparent magenta
    "rgba(165, 42, 42, 0.5)", // Semi-transparent brown
    "rgba(255, 192, 203, 0.5)", // Semi-transparent pink
    "rgba(0, 128, 128, 0.5)", // Semi-transparent teal
    "rgba(128, 0, 0, 0.5)", // Semi-transparent maroon
    "rgba(0, 0, 128, 0.5)", // Semi-transparent navy
    "rgba(128, 128, 0, 0.5)", // Semi-transparent olive
    "rgba(0, 255, 0, 0.5)", // Semi-transparent lime
    "rgba(75, 0, 130, 0.5)", // Semi-transparent indigo
    "rgba(64, 224, 208, 0.5)", // Semi-transparent turquoise
    "rgba(238, 130, 238, 0.5)", // Semi-transparent violet
    "hsl(0, 100%, 50%)", // Red
    "hsl(240, 100%, 50%)", // Blue
    "hsl(120, 100%, 50%)", // Green
    "hsl(60, 100%, 50%)", // Yellow
    "hsl(30, 100%, 50%)", // Orange
    "hsl(270, 100%, 50%)", // Purple
    "hsl(180, 100%, 50%)", // Cyan
    "hsl(300, 100%, 50%)", // Magenta
    "hsl(0, 100%, 25%)", // Dark Red
    "hsl(240, 100%, 25%)", // Dark Blue
    "hsl(120, 100%, 25%)", // Dark Green
    "hsl(60, 100%, 25%)", // Dark Yellow
    "hsl(30, 100%, 25%)", // Dark Orange
    "hsl(270, 100%, 25%)", // Dark Purple
    "hsl(180, 100%, 25%)", // Dark Cyan
    "hsl(300, 100%, 25%)", // Dark Magenta
    "hsl(45, 100%, 50%)", // Amber
    "hsl(90, 100%, 50%)", // Chartreuse
    "hsl(135, 100%, 50%)", // Spring Green
    "hsl(210, 100%, 50%)", // Azure
    "hsl(255, 100%, 50%)", // Rose
    "hsl(315, 100%, 50%)", // Orchid
    // Add more colors as needed...
];

const btn = document.getElementById('btn');
const color = document.querySelector('.color')

btn.addEventListener('click', function(){
    let randomNo = getRandomNo();
    document.body.style.backgroundColor = colors[randomNo];
    color.textContent = colors[randomNo];
});
function getRandomNo(){
    return Math.floor(Math.random()*colors.length);
}