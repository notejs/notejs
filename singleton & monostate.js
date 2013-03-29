/**
 * 单例实现方案一，重写构造函数。
 */
function MyPhone() {

    // 缓存的实例
    var instance = this;

    // 属性和方法
    this.SIM = "13JQQQQKKAA";
	
    this.sendMsg = function(number, msg){
		console.log("将信息从" + this.SIM + "发送到" + number);
	}
	
    // 重写构造函数
    MyPhone = function () {
        return instance;
    };
}

// 测试
var myPhone1 = new MyPhone();
var myPhone2 = new MyPhone();

myPhone1.sendMsg("13614516638", "哈哈"); //将信息从13JQQQQKKAA发送到13614516638 
myPhone2.sendMsg("13895772644", "呵呵"); //将信息从13JQQQQKKAA发送到13895772644 
console.log(myPhone1 === myPhone2); //true



/**
 * Monostate模式。
 * 
 * 该模式实现功能与单例模式类似，但是实现原理却大不相同，该模式一般通过共享相同变量来实现。
 */