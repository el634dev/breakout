// ---------------------
// Score Class
// Inherits from Sprite Class
import Sprite from './Sprite';

class Score extends Sprite {
  // Properties
  x: number
  y: number
  font: string
  color: any
  document: any
  score: number

  constructor(x: number, y: number, color: any) {
    super(x, y, color);
    this.score = 0;
    this.font = '16.5px Arial';
  }

  update(): void {
    this.score += 1;
  }

  reset(): void {
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

  render(ctx: any): undefined {
    ctx.fillStyle = '#000000';
    ctx.fillText(`Score: ${this.score}`, 8, 20);
  }
}

export default Score;
