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