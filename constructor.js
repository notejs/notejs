/**
 * 设计模式之构造函数模式
 */
function Phone(model/*型号*/, code/*电话号*/) {
	// 强制使用构造函数，否则会污染window作用域，且易引发不确定问题
    if (!(this instanceof Phone)) {
        return new Phone(model, code);
    }
    this.model = model;
    this.code = code;
}
//方法写在原型上，避免每次创建Phone对象时都创建一个函数对象。
Phone.prototype.callOut = function(number) {
    console.log("正在呼叫" + number, "本机号码" + this.code, "本机型号" + this.model);
}

// 测试，使用new和不使用new
var phone1 = new Phone("MEI ZU M9", "18644562536");
var phone2 = Phone("NOKIA 5230", "18625697852");

console.log(typeof phone1); //object
console.log(typeof phone2); //object

console.log(phone1 instanceof Phone); //true
console.log(phone2 instanceof Phone); //true

phone1.callOut("13JQQQQKKAA"); //正在呼叫13JQQQQKKAA 本机号码18644562536 本机型号MEI ZU M9
phone2.callOut("13JQQQQKKAA"); //正在呼叫13JQQQQKKAA 本机号码18625697852 本机型号NOKIA 5230
