/**
 * 组合继承（最常用）
 */
function SuperClass(name){
	this.name = name;
	this.colors = ["gray", "white", "red", "blue"];
}

SuperClass.prototype.getName = function(){
	return this.name;
}

SuperClass.prototype.getColors = function(){
	return this.colors;
}

SuperClass.prototype.addColor = function(color){
	return this.colors.push(color);
}

function SubClass(name, age){
	SuperClass.call(this, name); // 调用父类构造函数，实际将属性写入子类实例中。位置很重要。
	this.age = age;
}

SubClass.prototype = new SuperClass(); // 子类原型为父类实例，所以各子类间共享一个父类对象。

SubClass.prototype.getAge = function(){ // 将方法写入作为原型的父类实例中，所以顺序很重要。
	return this.age;
}

var s1 = new SubClass("youjiang wang", 25);
var s2 = new SubClass("niu", 23);

console.log( s1.getName() ); // youjiang wang
console.log( s2.getName() ); // niu

s1.addColor("green");
console.log( s1.getColors() ); // ["gray", "white", "red", "blue", "green"]
console.log( s2.getColors() ); // ["gray", "white", "red", "blue"]
console.log( s1 instanceof SubClass ); // true
console.log( s1 instanceof SuperClass ); // true


/**
 * 纯原型继承
 */
 
 