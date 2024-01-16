// Grabbing the canvas tag
const canvas = document.getElementById("gameCanvas");
// Stores the rendering context, tool we use to paint
const ctx = canvas.getContext("2d");
// Hold the radius of the drawn circle and used for calculations
const ballRadius = 10;

// Set x to the width of the Canvas / 2
let x = canvas.width / 2;
// Set y to the height of the Canvas - 30
let y = canvas.height - 30;

// Define paddle width and height
const paddleHeight = 10;
const paddleWidth = 75;
// Value to create motion
let paddleX = (canvas.width - paddleWidth) / 2;

// Small values to create motion
let dx = 2;
let dy = -2;

// Bool to check if the left or right key is pressed
let rightPressed = false;
let leftPressed = false;

// Create shape 
function drawBall() {
    // Draw shape and fill
    ctx.beginPath();
    ctx.arc(x, y, ballRadius, 0, Math.PI * 2);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    // Close drawing
    ctx.closePath();
}

// Create paddle for user interactivity
function drawPaddle() {
    // Draw shape and fill
    ctx.beginPath();
    ctx.rect(paddleX, canvas.height - paddleHeight, paddleWidth, paddleHeight);
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
    // Create paddle
    drawPaddle();

    // Update the x and y
    x += dx;
    y += dy;

    // Collision Logic
    // Top and bottom edge for y
    if (y + dy > canvas.height - ballRadius || y + dy < ballRadius) {
        dy = -dy;
    }

     // Left and right for x
    if (x + dx > canvas.width - ballRadius || x + dx < ballRadius) {
        dx = -dx;
    }

    // Check cursor keys
    if (rightPressed) {
        paddleX = Math.min(paddleX + 7, canvas.width - paddleWidth);
    } else if (leftPressed) {
        paddleX = Math.max(paddleX - 7, 0);
    }
}

// Event handlers
document.addEventListener("keydown", function(e) {
    if (e.key === "Right" || e.key === "ArrowRight") {
        rightPressed = true;
      } else if (e.key === "Left" || e.key === "ArrowLeft") {
        leftPressed = true;
      }
}, false);

document.addEventListener("keyup", function(e) {
    if (e.key === "Right" || e.key === "ArrowRight") {
        rightPressed = false;
      } else if (e.key === "Left" || e.key === "ArrowLeft") {
        leftPressed = false;
      }
}, false);
  
// Executed within setInterval every 10 milliseconds
setInterval(draw, 10);