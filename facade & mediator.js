/**
 * 设计模式之Facade模式。
 * 可能被翻译为门面模式或者外观模式。
 *
 * Facade模式为子系统中的一组接口提供一个一致的高层接口。
 * 这个接口使得这一子系统更加容易使用，同时达到解耦的目的。
 *
 * Facade模式在浏览器兼容方面有较多的应用，如下例中的DOM事件绑定。
 */


var addEvent = function (node, evt, fn) {
    if (node.addEventListener) {
		// chrome firefox and so on
        node.addEventListener(evt, fn, false);
    } else if (node.attachEvent) {
		// hack IE
        node.attachEvent('on' + evt, fn);
    } else {
		// other
        node['on' + evt] = fn;
    }
}; 


/**
 * 设计模式之Mediator模式。
 * 可能被翻译为中介者模式或者调停者模式。
 *
 * 通过提供一个统一的接口让系统的不同部分进行通信，一般，如果系统有许多子模块需要直接沟通，都要创建一个中央控制点让其各自模块通过该中央控制节点进行交互。
 * Mediator模式可以让各子模块不需要直接沟通，进而达到了解耦的目的。
 */