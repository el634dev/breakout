// Class Brick
// import Brick from './Brick';
// Class Ball
import Ball from './Ball';
// Class Lives
import Lives from './Lives';
// Class Score
import Score from './Score';
// Class Paddle
import Paddle from './Paddle';

// Grabbing the canvas tag
const canvas: any = document.getElementById('gameCanvas');
// Stores the rendering context, tool we use to paint
const ctx: any = canvas.getContext('2d');
// Hold the radius of the drawn circle and used for calculations
const ballRadius: number = 10;

// --------------------------------
// New Instances
// --------------------------------
// Score
const score: Score = new Score();
// User's lives
const lives: Lives = new Lives();
// Ball
const ball: Ball = new Ball(240, 100, ballRadius);

// --------------------------------
// Paddle Information
const paddleHeight: number = 10;
const paddleWidth: number = 80;
// Value to create motion
const paddleX: number = (canvas.width - paddleWidth) / 2;
const paddle: Paddle = new Paddle(paddleX, 200, paddleWidth, paddleHeight, '#ff8c00');

// --------------------------------
// Create new brick
const brickRowCount: number = 3;
const brickColCount: number = 5;
const brickWidth: number = 75;
const brickHeight: number = 20;
const brickPadding: number = 10;
const brickTopOffset: number = 30;
const brickLeftOffset: number = 30;
// Brick Instance
// eslint-disable-next-line max-len
// const newBrick: Brick = new Brick(Brick.x, Brick.y, brickWidth, brickHeight, brickColCount, brickRowCount, Brick.color);

// Create new bricks
const bricks: any[][] = [];
for (let col = 0; col < brickColCount; col += 1) {
  bricks[col] = [];
  for (let row = 0; row < brickRowCount; row += 1) {
    bricks[col][row] = { x: 0, y: 0, status: 1 };
  }
}

// --------------------------------
// Bool to check if the left or right key is pressed
let rightPressed: boolean = false;
let leftPressed: boolean = false;

// --------------------------------
// Draw bricks to canvas
function drawBricks(): undefined {
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
// Collision Detection for bricks
function collisionDetection(): undefined {
  for (let col = 0; col < brickColCount; col += 1) {
    for (let row = 0; row < brickRowCount; row += 1) {
      const brick = bricks[col][row];
      // Calculation
      if (brick.status === 1) {
        if (ball.x > brick.x && ball.x < brick.x + brickWidth && ball.y > brick.y
            && ball.y < brick.y + brickHeight) {
          ball.dy = -ball.dy;
          brick.status = 0;
          score.update();
          if (score.score === brickRowCount * brickColCount) {
            score.render(ctx);
          }
        }
      }
    }
  }
}

// --------------------------------
// Draw to screen
function draw(): any {
  // Clear area before drawing new shape
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  // Create bricks
  drawBricks();
  // newBrick.init();
  // newBrick.render(ctx);
  // Ball
  ball.render(ctx);
  ball.move();
  // Paddle
  paddle.render(ctx);
  // Draw score to screen
  score.render(ctx);
  // Draw lives to screen
  lives.render(ctx);
  // Collision
  collisionDetection();

  // Collision Logic for x
  if (ball.x + ball.dx > canvas.width - ball.radius || ball.x + ball.dx < ball.radius) {
    ball.dx = -ball.dx;
  }

  // --------------------------------
  // Collision Logic for y
  if (ball.y + ball.dy < ball.radius) {
    ball.dy = -ball.dy;
  } else if (ball.y + ball.dy > canvas.height - ball.radius) {
    if (ball.x > paddle.x && ball.x < paddle.x + paddle.width) {
      ball.dy = -ball.dy;
    } else {
      lives.loseLife();
      if (!lives.lives) {
        lives.reset();
      } else {
        ball.x = canvas.width / 2;
        ball.y = canvas.height - 30;
        ball.dx = 3;
        ball.dy = -3;
        paddle.x = (canvas.width - paddle.width) / 2;
      }
    }
  }

  // --------------------------------
  // Check cursor keys
  if (rightPressed) {
    paddle.x = Math.min(paddle.x + 7, canvas.width - paddle.width);
  } else if (leftPressed) {
    paddle.x = Math.max(paddle.x - 7, 0);
  }
  requestAnimationFrame(draw);
}

draw();

// --------------------------------
// Event Handler Functions
function keyDown(e: any): any {
  if (e.key === 'Right' || e.key === 'ArrowRight') {
    rightPressed = true;
  } else if (e.key === 'Left' || e.key === 'ArrowLeft') {
    leftPressed = true;
  }
}

function keyUp(e: any): any {
  if (e.key === 'Right' || e.key === 'ArrowRight') {
    rightPressed = true;
  } else if (e.key === 'Left' || e.key === 'ArrowLeft') {
    leftPressed = true;
  }
}

function mouseMove(e: any): any {
  const relativeX = e.clientX - canvas.offsetLeft;
  if (relativeX > 0 && relativeX < canvas.width) {
    paddle.x = relativeX - paddle.width / 2;
  }
}

// --------------------------------
// Event handlers
document.addEventListener('keydown', keyDown, false);
// Left and right 2nd event listener
document.addEventListener('keyup', keyUp, false);
// Mouse event listener
document.addEventListener('mousemove', mouseMove, false);
