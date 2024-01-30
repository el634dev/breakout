// eslint-disable-next-line import/extensions
import Sprite from './Sprite.js';

class Lives extends Sprite {
  constructor(x, y, color) {
    super(x, y, color);
    this.lives = 4;
    this.font = '16.9 Arial';
  }

  loseLife() {
    this.lives -= 1;
  }

  // eslint-disable-next-line
  reset() {
    // eslint-disable-next-line no-alert
    alert('Game Over');
    document.location.reload();
  }

  render(ctx) {
    ctx.fillStyle = '#000000';
    ctx.fillText(`Lives: ${this.lives}`, 240 - 65, 20);
  }
}

export default Lives;
