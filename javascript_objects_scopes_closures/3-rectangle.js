#!/usr/bin/node
class Rectangle
{
    constructor (w, h)
    {
        if (w && h > 0)
        {
            this.width = w
            this.height = h   
            return this.width, this.width
        }
    }
    print()
        {
            for (let i=0; i<this.height; i++)
            {
                console.log('X'.repeat(this.width))
            }
        }

};

module.exports = Rectangle;