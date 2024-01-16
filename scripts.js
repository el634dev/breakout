// Grabbing the canvas tag
const canvas = document.getElementById("gameCanvas");
// Stores the rendering context, tool we use to paint
const ctx = canvas.getContext("2d");

// Rectangle Drawing
ctx.beginPath();
// Draw a rectangle/perfect square
ctx.rect(20, 40, 50, 50);
// Store a color
ctx.fillStyle = "#FF0000";
// Uses the above color to paint the sqaure
ctx.fill();
ctx.closePath();

// Green Circle Drawing
ctx.beginPath();
// Draw a rectangle/perfect square
ctx.arc(240, 160, 20, 0, Math.PI * 2, false);
// Store a color
ctx.fillStyle = "green";
// Uses the above color to paint the sqaure
ctx.fill();
ctx.closePath();

// Blue Rectangle
ctx.beginPath();
ctx.rect(160, 10, 100, 40);
ctx.strokeStyle = "rgba(0, 0, 255, 0.5)";
ctx.stroke();
ctx.closePath();