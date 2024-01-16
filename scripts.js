// Grabbing the canvas tag
const canvas = document.getElementById("gameCanvas");
// Stores the rendering context, tool we use to paint
const ctx = canvas.getContext("2d");

// Set x to the width of the Canvas / 2
let x = canvas.width / 2;
// Set y to the height of the Canvas - 30
let y = canvas.height - 30;

// Small values to create motion
let dx = 2;
let dy = -2;

// Create shape 
function drawBall() {
    // Draw shape and fill
    ctx.beginPath();
    ctx.arc(x, y, 10, 0, Math.PI * 2);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    // Close drawing
    ctx.closePath();
}

function draw() {
    // Clear area before drawing new shape
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    // Create shape
    drawBall();

    // Update the x and y
    x += dx;
    y += dy;
}

// Executed within setInterval every 10 milliseconds
setInterval(draw, 10);