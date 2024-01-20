#!/usr/bin/node
const Rectangle = require('./4-rectangle');
class Square extends Rectangle {
    constructor(side) {
        super(side, side);
    }
}
module.exports = Square;