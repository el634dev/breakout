// eslint-disable-next-line import/extensions
import Sprite from './Sprite.js';

class Paddle extends Sprite {
  constructor(x, y, width, height, color = '#ff8c00') {
    super(x, y, width, height, color);
  }

  // draw paddle to screen
  render(ctx) {
    ctx.beginPath();
    ctx.rect(this.x, 318.8 - this.height, this.width, this.height);
    ctx.fillStyle = this.color;
    ctx.fill();
    // Close drawing
    ctx.closePath();
  }
}

export default Paddle;
