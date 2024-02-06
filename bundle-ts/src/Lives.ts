import Sprite from './Sprite';

class Lives extends Sprite {
  x: number
  y: number
  lives: number
  font: string
  color: any

  constructor(x: number, y: number, color: any) {
    super(x, y, color);
    this.lives = 4;
    this.font = '16.9 Arial';
  }

  loseLife(): void {
    this.lives -= 1;
  }

  reset(): void {
    // eslint-disable-next-line no-alert
    alert('Game Over');
    document.location.reload();
  }

  render(ctx: any): undefined {
    ctx.fillStyle = '#000000';
    ctx.fillText(`Lives: ${this.lives}`, 240 - 65, 20);
  }
}

export default Lives;
