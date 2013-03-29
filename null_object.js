/**
 * 设计模式之null object模式。
 * 
 * 在C_base的语言中如下判断是常见的
    if( obj != null && obj.ready() ){
        obj.run();
    }
    一般来说obj是通过方法调用获得的，如
    var obj = xxxObj.getxxx();
    如果这个方法总是能返回非null的对象，那么就可以避免obj != null的判断。
    这样就需要在没有获得有用的数据时返回一个方法为空实现的对象。
    如下伪代码简单描述。
 *  
 */
xxxObj.nullObj = {
    ready : function(){
        return false;
    },
    run : function(){}
};

xxxObj.getxxx = function(){
    if(/* get data */){
        // return obj;
    }else{ // 没有获取有效数据
        return this.nullObj;
    }
}
