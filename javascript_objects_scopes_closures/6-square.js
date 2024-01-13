#!/usr/bin/node
const Square_Parent = require("./5-square");

class Square extends Square_Parent
{
    constructor(size)
    {
        super(size)
    }
    charPrint(c = 'X')
    {
        this.c = c
        for (let i=0; i<this.height; i++)
        {
            console.log(this.c.repeat(this.width))
        }
    }
}

module.exports = Square;