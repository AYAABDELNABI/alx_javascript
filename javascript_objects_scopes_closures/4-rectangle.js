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
rotate()
{
const rot_h = this.width
this.width = this.height
this.height = rot_h
}
double()
{
this.height = this.height * 2
this.width = this.width * 2
}
};

module.exports = Rectangle;

