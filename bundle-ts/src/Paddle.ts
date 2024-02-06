// ---------------------
// Paddle Class
// Inherits from Sprite Class

import Sprite from './Sprite';

class Paddle extends Sprite {
  x: number
  y: number
  width: number
  height: number
  color: string

  constructor(x: number, y: number, width: number, height: number, color = '#ff8c00') {
    super(x, y, width, height, color);
  }

  // draw paddle to screen
  render(ctx: any): undefined {
    ctx.beginPath();
    ctx.rect(this.x, 318.8 - this.height, this.width, this.height);
    ctx.fillStyle = this.color;
    ctx.fill();
    // Close drawing
    ctx.closePath();
  }
}

export default Paddle;
