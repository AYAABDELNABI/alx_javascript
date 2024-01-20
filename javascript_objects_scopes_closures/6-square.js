#!/usr/bin/node
const Rectangle = require('./5-square'); // Importing Rectangle, but not using it in the code

class Square extends Rectangle { // Extending Rectangle instead of Square
  constructor(size) { // Using constructor instead of super for initializing properties
    super(size, size); // Calling super() with the appropriate arguments
  }

  charPrint(c) {
    if (c === undefined) {
      c = 'X';
    }
    for (let i = 0; i < this.height; i++) {
      console.log(c.repeat(this.width));
    }
  }
}

module.exports = Square;
