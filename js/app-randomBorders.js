console.log("app connected");

// Initialize

var border_styles = ["dotted", "dashed", "solid", "double", "groove", "ridge", "inset", "outset"]
var x_lines = document.querySelectorAll(`[type= "x_line"]`);
var x_line_angle

// Creates X from divs
function createX() {
    x_line_angle = Math.atan(window.innerHeight/window.innerWidth)
    document.getElementById("x_line_left").style.transform = "rotate(" + String(x_line_angle)+"rad)"
    document.getElementById("x_line_right").style.transform = "rotate(-" + String(x_line_angle)+"rad)"   
}
createX ()

// Updates X

window.onresize = createX


// Get random color

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Randmoizes line

function randomLine(item) {
    var line_width = String(Math.floor(Math.random() * 100)) + "px "
    var line_style = String(border_styles[border_styles.length * Math.random() | 0]) + " "
    var line_color = getRandomColor()
    item.style.borderBottom = line_width + line_style + line_color
}

// Button set-up

document.getElementById("button_randomize").addEventListener('click', function () {
    x_lines.forEach(item => randomLine(item))
})

document.getElementById("button_randomize_auto").addEventListener('click', function () {
    const interval = setInterval(function () {
        x_lines.forEach(item => randomLine(item))
    }, 200)
})

// Keydown set-up

window.addEventListener('keydown', function () {
    x_lines.forEach(item => randomLine(item))
})
