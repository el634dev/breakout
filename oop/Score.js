// eslint-disable-next-line import/extensions
import Sprite from './Sprite.js';

class Score extends Sprite {
  constructor(x, y, color) {
    super(x, y, color);
    this.score = 0;
    this.font = '16.5px Arial';
  }

  update() {
    this.score += 1;
  }

  reset() {
    if (!this.score) {
      // eslint-disable-next-line no-alert
      alert('Game Over');
      this.document.location.reload();
    } else {
      // eslint-disable-next-line no-alert
      alert('You won, congratulations');
      this.document.location.reload();
    }
  }

  render(ctx) {
    ctx.fillStyle = '#000000';
    ctx.fillText(`Score: ${this.score}`, 8, 20);
  }
}

export default Score;
