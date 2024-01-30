// eslint-disable-next-line import/extensions
import Sprite from './Sprite.js';

// Brick for user to hit
class Brick extends Sprite {
  constructor(x, y, width = 75, height = 20, color = '#0095DD') {
    super(x, y, width, height, color);
    this.status = true;
  }
}

export default Brick;
