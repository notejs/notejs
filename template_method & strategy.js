/**
 * 设计模式之template method模式接strategy模式
 *	
 * template method模式与strategy模式解决的问题类似，经常可互换使用。
 * 
 * 前者使用继承解决问题，后者使用委托解决问题。
 * 两者都可以用来分离高层算法和低层具体实现。
 * 两者都允许高层算法独立于具体实现细节重用。
 * 
 * 后者也允许具体实现细节独立于高层算法重用。
 * 前者依赖于继承，继承是一种很强的关系。
 */

/**
 * template method。实现理念，父类中封装通用逻辑，子类中做适当的方法重写 。 如下伪代码表述此事。
 * 假设convert中包含了复杂的处理逻辑，而该逻辑依赖于一个名为cmp的方法，cmp方法根据类型的不同而不同。
 * 固将通用逻辑封装在父类中，各子类实现各自的cmp方法。
 */
//父类
function Super{}

Super.prototype.convert = function(){
	//do something
	if( this.cmp(a, b) > 0 ){
		// do something
	}
	// do something
};

Super.prototype.cmp = function(x, y){
	if(x != y){
		return x > y ? 1 : -1;
	}
	return 0;
};

// 转换对象型数据的子类
function ObjSub(){
	Super.call(this);
}

ObjSub.prototype = new Super();

ObjSub.prototype.cmp = function(x, y){
	if(x.new != y.new){
		return x.new > y.new ? 1 : -1;
	}
	return 0;
}

// 转换字符型数据的子类
function StrSub(){
	Super.call(this);
}

StrSub.prototype = new Super();

StrSub.prototype.cmp = function(x, y){
	if(x != y){
		return +x > +y ? 1 : -1;
	}
	return 0;
}




/**
 * strategy的实现理念是封装通用逻辑在功能类中来实现复用，以组合的方式避免继承这种强关系。
 */
// 功能类
function ConvertUtil(){}

ConvertUtil.prototype.init = function(){
	// do something
}

ConvertUtil.prototype.isDone = function(){
	// do something
}

ConvertUtil.prototype.convert = function(){
	// do something
}

ConvertUtil.prototype.clean = function(){
	// do something
}

// 执行类
function ConvertRunner(){}

ConvertRunner.prototype.ConvertUtil = new ConvertUtil();

ConvertRunner.prototype.run = function(){
	this.ConvertUtil.init();
	while( !this.ConvertUtil.isDone() ){
		this.ConvertUtil.convert();
	}
	this.ConvertUtil.clean();
}

// 使用方法
var runner = new ConvertRunner();
runner.run();