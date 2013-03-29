/**
 * 设计模式之composite模式（组合模式）。
 * 
 * 假设有一个图形类Shape，其中定义一个draw方法完成画图。从图形类派生的子类有Circle、Square、Line、Point等。
 * 假设有一个新需要Circle、Square、Line、Point组合即可完成，那么可以定义Shape的一个组合子类，该类中持有需要的各子类实例，该类的draw方法实现为一次调用所持有子类的draw方法。
 * 伪代码如下
 */

function Shape(){
    // props
}
Shape.prototype.draw = function(){
    throw new Error("");
}

// 圆
function Circle(){
    Shape.call(this);
    // props
}
Circle.prototype = new Shape();
Circle.prototype.draw = function(){
    // draw Circle
}

// 矩形
function Square(){
    Shape.call(this);
    // props
}
Square.prototype = new Shape();
Square.prototype.draw = function(){
    // draw Square
}

// 线
function Line(){
    Shape.call(this);
    // props
}
Line.prototype = new Shape();
Line.prototype.draw = function(){
    // draw Line
}

// 点
function Point(){
    Shape.call(this);
    // props
}
Point.prototype = new Shape();
Point.prototype.draw = function(){
    // draw Point
}

// 组合图形
function CompositeShape(){
    // Shape.call(this);
    // props

    this.shapes = [];

}
CompositeShape.prototype = new Shape();
CompositeShape.prototype.draw = function(){
    for(var i = 0, ii < this.shapes.length; i ++){
        this.shapes[i].draw();
    }
}

CompositeShape.prototype.addShape = function(shape){
    this.shapes.push(shape);
}