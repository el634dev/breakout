// Grabbing the canvas tag
const canvas = document.getElementById('gameCanvas');
// Stores the rendering context, tool we use to paint
const ctx = canvas.getContext('2d');
// Hold the radius of the drawn circle and used for calculations
const ballRadius = 10;
// Create a variable to hold the score
let score = 0;
// Create a variable to hold the user's lives
let lives = 3;

// --------------------------------
// Brick Information
const bricks = [];
const brickRowCount = 3;
const brickColCount = 5;
const brickWidth = 75;
const brickHeight = 20;
const brickPadding = 10;
const brickTopOffset = 30;
const brickLeftOffset = 30;

// Create new bricks
for (let col = 0; col < brickColCount; col += 1) {
  bricks[col] = [];
  for (let row = 0; row < brickRowCount; row += 1) {
    bricks[col][row] = { x: 0, y: 0, status: 1 };
  }
}

// --------------------------------
// Set x to the width of the Canvas / 2
let x = canvas.width / 2;
// Set y to the height of the Canvas - 30
let y = canvas.height - 30;

// --------------------------------
// Define paddle width and height
const paddleHeight = 10;
const paddleWidth = 80;
// Value to create motion
let paddleX = (canvas.width - paddleWidth) / 2;

// --------------------------------
// Small values to create motion
let dx = 2;
let dy = -2;

// --------------------------------
// Bool to check if the left or right key is pressed
let rightPressed = false;
let leftPressed = false;

// --------------------------------
// Create shape
function drawBall() {
  // Draw shape and fill
  ctx.beginPath();
  ctx.arc(x, y, ballRadius, 0, Math.PI * 2);
  ctx.fillStyle = '#0000ff';
  ctx.fill();
  // Close drawing
  ctx.closePath();
}

// --------------------------------
// Create paddle for user interactivity
function drawPaddle() {
  // Draw shape and fill
  ctx.beginPath();
  ctx.rect(paddleX, canvas.height - paddleHeight, paddleWidth, paddleHeight);
  ctx.fillStyle = '#ff8c00';
  ctx.fill();
  // Close drawing
  ctx.closePath();
}

// --------------------------------
// Draw bricks to canvas
function drawBricks() {
  for (let col = 0; col < brickColCount; col += 1) {
    for (let row = 0; row < brickRowCount; row += 1) {
      if (bricks[col][row].status === 1) {
        // Set x and y for bricks
        const brickX = col * (brickWidth + brickPadding) + brickLeftOffset;
        const brickY = row * (brickHeight + brickPadding) + brickTopOffset;
        // ------------------------
        bricks[col][row].x = brickX;
        bricks[col][row].y = brickY;

        ctx.beginPath();
        ctx.rect(brickX, brickY, brickWidth, brickHeight);
        ctx.fillStyle = '#32cd32';
        ctx.fill();
        ctx.closePath();
      }
    }
  }
}

// --------------------------------
// Draw score to canvas
function drawScore() {
  ctx.font = '16.5px Arial';
  ctx.fillStyle = '#000000';
  ctx.fillText(`Score: ${score}`, 8, 20);
}

// --------------------------------
// Draw score to canvas
function drawLives() {
  ctx.font = '16.5px Arial';
  ctx.fillStyle = '#000000';
  ctx.fillText(`Lives: ${lives}`, canvas.width - 65, 20);
}

// --------------------------------
// Collision Detection for bricks
function collisionDetection() {
  for (let col = 0; col < brickColCount; col += 1) {
    for (let row = 0; row < brickRowCount; row += 1) {
      const brick = bricks[col][row];
      // Calculation
      if (brick.status === 1) {
        if (x > brick.x && x < brick.x + brickWidth && y > brick.y && y < brick.y + brickHeight) {
          dy = -dy;
          brick.status = 0;
          score += 1;
          if (score === brickRowCount * brickColCount) {
            // eslint-disable-next-line no-alert
            alert('You won, Congratulations!');
            document.location.reload();
          }
        }
      }
    }
  }
}

// --------------------------------
// Draw to screen
function draw() {
  // Clear area before drawing new shape
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  // Create bricks
  drawBricks();
  // Create shape
  drawBall();
  // Create paddle
  drawPaddle();
  // Draw score to screen
  drawScore();
  // Draw lives to screen
  drawLives();
  // Collision
  collisionDetection();

  // Collision Logic for x
  if (x + dx > canvas.width - ballRadius || x + dx < ballRadius) {
    dx = -dx;
  }

  // --------------------------------
  // Collision Logic for y
  if (y + dy < ballRadius) {
    dy = -dy;
  } else if (y + dy > canvas.height - ballRadius) {
    if (x > paddleX && x < paddleX + paddleWidth) {
      dy = -dy;
    } else {
      lives -= 1;
      if (!lives) {
        // eslint-disable-next-line no-alert
        alert('Game Over');
        document.location.reload();
      } else {
        x = canvas.width / 2;
        y = canvas.height - 30;
        dx = 3;
        dy = -3;
        paddleX = (canvas.width - paddleWidth) / 2;
      }
    }
  }

  // --------------------------------
  // Check cursor keys
  if (rightPressed) {
    paddleX = Math.min(paddleX + 7, canvas.width - paddleWidth);
  } else if (leftPressed) {
    paddleX = Math.max(paddleX - 7, 0);
  }

  // --------------------------------
  // Update the x and y
  x += dx;
  y += dy;
  requestAnimationFrame(draw);
}

draw();

// --------------------------------
// Event Handler Functions
function keyDown(e) {
  if (e.key === 'Right' || e.key === 'ArrowRight') {
    rightPressed = true;
  } else if (e.key === 'Left' || e.key === 'ArrowLeft') {
    leftPressed = true;
  }
}

function keyUp(e) {
  if (e.key === 'Right' || e.key === 'ArrowRight') {
    rightPressed = true;
  } else if (e.key === 'Left' || e.key === 'ArrowLeft') {
    leftPressed = true;
  }
}

function mouseMove(e) {
  const relativeX = e.clientX - canvas.offsetLeft;
  if (relativeX > 0 && relativeX < canvas.width) {
    paddleX = relativeX - paddleWidth / 2;
  }
}

// --------------------------------
// Event handlers

document.addEventListener('keydown', keyDown, false);
// Left and right 2nd event listener
document.addEventListener('keyup', keyUp, false);
// Mouse event listener
document.addEventListener('mousemove', mouseMove, false);
