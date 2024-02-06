// ---------------------
// Ball Class
// Inherits from Sprite Class
import Sprite from './Sprite';

class Ball extends Sprite {
  // Class properties
  x: number 
  y: number
  radius: number
  dx: number
  dy : number
  color: string

  constructor(x = 0, y = 0, radius = 10, color = '#0000ff') {
    super(x, y, 0, 0, color);
    this.radius = radius;
    this.dx = 2;
    this.dy = -2;
  }

  // Move ball
  move() {
    this.x += this.dx;
    this.y += this.dy;
  }

  // render ball to screen
  // overrides the existing render method to draw a circle
  render(ctx: any) {
    // Can call the render in sprite
    // super.render()
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fillStyle = this.color;
    ctx.fill();
    ctx.closePath();
  }
}

export default Ball;
