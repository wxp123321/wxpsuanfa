function baseConverter(decNumber, base) {
	var remStack = new Stack(),
	    rem,
	    baseString = '',
	    digits = '0123456789ABCDEF';
	while(decNumber > 0) {
		rem = Math.floor(decNumber % base);
		remStack.push(rem);
		decNumber = Math.floor(decNumber / base);
	}
	while(!remStack.isEmpty()){
		baseString += digits[remStack.pop()];
	}
	return baseString;	
}

function Stack(){
	var items = [];
	//向栈中添加元素
	this.push = function(element){
		items.push(element);
	}
	//移除栈顶元素 同时返回被移除的元素
	this.pop = function(element) {
		return items.pop(element);
	}
	//返回栈顶元素
	this.peek = function(){
		return items[items.length-1];
	}
	//判断数组是否为空
	this.isEmpty = function(){
		return items.length == 0;
	}
	this.size = function(){
		return items.length;
	}
	//清除栈中的所有元素
	function clear(){
		items = [];
	}
	//输出栈中所有内容
	this.print = function(){
		console.log(items.toString());
	}
}

console.log(baseConverter(109,8));
console.log(baseConverter(109,16));
