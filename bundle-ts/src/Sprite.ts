// ---------------------
// Sprite Class

class Sprite {
  // Properties
  x: number
  y: number
  width: number
  height: number
  color: string

  constructor(x = 0, y = 0, width = 100, height = 100, color = 'red') {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.color = color;
  }

  // draw the object
  render(ctx: any): any {
    ctx.beginPath();
    ctx.rect(this.x, this.y, this.width, this.height);
    ctx.fillStyle = this.color;
    ctx.fill();
    ctx.closePath();
  }
}

export default Sprite;
