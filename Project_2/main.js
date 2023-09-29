function Rectangle(width, height){
    this.width = width;
    this.height = height;
}

Rectangle.prototype.area = function(){
    return this.width * this.height;
}

var r = new Rectangle(5,6);


console.log(r.area())
console.log(r)