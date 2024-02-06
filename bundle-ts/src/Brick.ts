// ---------------------
// Brick Class
// Inherits from Sprite Class
import Sprite from './Sprite';

class Brick extends Sprite {
  // Class properties
  x: number
  y: number
  col: number
  row: number
  status: number
  width: number
  string: string
  bricks: any[][]

  constructor(x: number, y: number, col: number, row: number, width: number, height: number, color = '#0095DD') {
    super(x, y, width, height, color);
    this.status = 1;
    this.col = col;
    this.row = row;
    this.bricks = [];
    this.init();
  }

  init(): undefined {
    for (let col = 0; col < this.col; col += 1) {
      this.bricks = [];
      for (let row = 0; row < this.row; row += 1) {
        const brickX = (col * (this.width + 10)) + 30;
        const brickY = (row * (this.height + 10)) + 30;
        this.bricks[col][row] = new Brick(brickX, brickY, this.width, this.height, this.color);
      }
    }
  }

  render(ctx: any): undefined {
    for (let col = 0; col < this.col; col += 1) {
      for (let row = 0; row < this.row; row += 1) {
        const brick = this.bricks[col][row];
        if (brick.status === 1) {
          brick.render(ctx);
        }
      }
    }
  }
}

export default Brick;
